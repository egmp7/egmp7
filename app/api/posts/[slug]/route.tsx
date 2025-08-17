import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'
import { formatSlug } from '@/app/lib/slugUtils'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // Format the incoming slug to handle URL-encoded characters
    const formattedSlug = formatSlug(params.slug)
    
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
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
