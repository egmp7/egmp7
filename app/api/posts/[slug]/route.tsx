import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import { formatSlug } from '@/lib/slugUtils'
import type { UpdatePostData } from '@/types/blog'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // First decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(params.slug)
    const formattedSlug = formatSlug(decodedSlug)
    
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', formattedSlug)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 })
      }
      throw error
    }
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // First decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(params.slug)
    const formattedSlug = formatSlug(decodedSlug)
    console.log('PUT request - Original slug:', params.slug)
    console.log('PUT request - Decoded slug:', decodedSlug)
    console.log('PUT request - Formatted slug:', formattedSlug)
    
    const body: UpdatePostData = await request.json()
    console.log('PUT request - Body:', body)
    
    // Remove id from body since we're updating by slug
    const { ...updateData } = body
    
    // First check if the post exists
    const { data: existingPost, error: fetchError } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', formattedSlug)
      .single()
    
    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json({ 
          success: false, 
          error: 'Post not found' 
        }, { status: 404 })
      }
      throw fetchError
    }
    
    if (!existingPost) {
      return NextResponse.json({ 
        success: false, 
        error: 'Post not found' 
      }, { status: 404 })
    }
    
    // Only check for slug conflicts if the slug is actually being changed
    if (updateData.slug && updateData.slug !== formattedSlug) {
      console.log('Slug is being changed from', formattedSlug, 'to', updateData.slug)
      const { data: existingPosts, error: conflictError } = await supabase
        .from('posts')
        .select('slug')
        .neq('slug', formattedSlug) // Exclude current post
      
      if (conflictError) throw conflictError
      
      const existingSlugs = existingPosts?.map(post => post.slug) || []
      console.log('Existing slugs:', existingSlugs)
      if (existingSlugs.includes(updateData.slug)) {
        return NextResponse.json({ 
          success: false, 
          error: 'Slug already exists' 
        }, { status: 400 })
      }
    }
    
    const { data, error } = await supabase
      .from('posts')
      .update(updateData)
      .eq('slug', formattedSlug)
      .select()
      .single()
    
    if (error) {
      console.error('Supabase update error:', error)
      throw error
    }
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('PUT error:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // First decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(params.slug)
    const formattedSlug = formatSlug(decodedSlug)
    
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('slug', formattedSlug)
    
    if (error) throw error
    
    return NextResponse.json({ success: true, message: 'Post deleted successfully' })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
