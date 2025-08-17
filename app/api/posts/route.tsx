import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'
import type { CreatePostData } from '@/app/types/blog'

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
    
    const { data, error } = await supabase
      .from('posts')
      .insert([body])
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}