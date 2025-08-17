import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', params.slug)
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
