import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import type { CreatePostData } from '@/types/blog'
import { createSlug, generateUniqueSlug } from '@/lib/slugUtils'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

export async function POST(request: Request) {
  try {
    const body: CreatePostData = await request.json()
    
    // Get existing slugs to check for uniqueness
    const { data: existingPosts, error: fetchError } = await supabase
      .from('posts')
      .select('slug')
    
    if (fetchError) throw fetchError
    
    const existingSlugs = existingPosts?.map(post => post.slug) || []
    
    // Create a clean slug from the title if no slug provided, or format existing slug
    let finalSlug = body.slug || body.title
    finalSlug = createSlug(finalSlug)
    
    // Ensure slug uniqueness
    finalSlug = generateUniqueSlug(finalSlug, existingSlugs)
    
    // Create post with the formatted slug
    const postData = {
      ...body,
      slug: finalSlug
    }
    
    const { data, error } = await supabase
      .from('posts')
      .insert([postData])
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}