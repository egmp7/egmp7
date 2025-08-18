import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .limit(5)
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' })
  }
}