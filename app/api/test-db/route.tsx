import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing'
    }
    
    // Test basic connection
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .limit(5)
    
    if (postsError) {
      console.error('Posts query error:', postsError)
      return NextResponse.json({ 
        success: false, 
        error: 'Database connection failed',
        details: postsError.message,
        envCheck
      })
    }
    
    // Test specific post lookup
    const { error: testError } = await supabase
      .from('posts')
      .select('slug')
      .limit(1)
    
    if (testError) {
      console.error('Test query error:', testError)
    }
    
    return NextResponse.json({ 
      success: true, 
      data: {
        postsCount: posts?.length || 0,
        samplePosts: posts?.slice(0, 3) || [],
        testQuery: testError ? 'Failed' : 'Success',
        connection: 'Active',
        envCheck
      }
    })
  } catch (error) {
    console.error('Test DB error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    })
  }
}