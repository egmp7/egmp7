'use client'

import { useState, useEffect, useCallback, use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Post } from '@/types/blog'
import RichTextViewer from '@/components/RichTextViewer'
import Image from 'next/image'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params)
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchPost = useCallback(async () => {
    try {
      // Fetch by slug using the existing API endpoint
      const response = await fetch(`/api/posts/${resolvedParams.slug}`)
      const result = await response.json()
      if (result.success) {
        setPost(result.data)
      } else {
        notFound()
      }
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }, [resolvedParams.slug])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-slate-400">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Back to Blog Link */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-slate-400">
              <time dateTime={post.created_at}>
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
          
          {post.excerpt && (
            <div className="text-center">
              <p className="text-xl text-gray-600 dark:text-slate-300 italic max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8">
            <Image
              src={post.featured_image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg dark:shadow-slate-900/30"
              width={500}
              height={300}
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md dark:shadow-slate-900/20 border border-gray-200 dark:border-slate-700">
            <RichTextViewer 
              content={post.content}
              className="text-gray-800 dark:text-slate-200 leading-relaxed"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              ← Back to all posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
