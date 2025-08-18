'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Post, CreatePostData } from '@/types/blog'
import RichTextEditor from './RichTextEditor'

export default function BlogAdmin() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [originalSlug, setOriginalSlug] = useState<string>('')
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState<CreatePostData>({
    title: '',
    slug: '',
    content: '',
    excerpt: ''
  })


  const showMessage = useCallback((type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 5000)
  }, [])

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch('/api/posts')
      const result = await response.json()
      if (result.success) {
        setPosts(result.data)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      showMessage('error', 'Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }, [showMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.title.trim() || !formData.slug.trim() || !formData.content.trim()) {
      showMessage('error', 'Please fill in all required fields')
      return
    }
    
    // Clean up the slug to remove extra spaces and ensure it's valid
    const cleanSlug = formData.slug.trim().toLowerCase().replace(/\s+/g, '-')
    
    try {
      if (editingPost) {
        // Update existing post using original slug for API call
        const encodedSlug = encodeURIComponent(originalSlug)
        const response = await fetch(`/api/posts/${encodedSlug}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            ...formData, 
            id: editingPost.id,
            slug: cleanSlug // Use cleaned slug
          })
        })
        const result = await response.json()
        if (result.success) {
          setFormData({ title: '', slug: '', content: '', excerpt: '' })
          setEditingPost(null)
          setOriginalSlug('')
          fetchPosts()
          showMessage('success', 'Post updated successfully!')
        } else {
          console.error('Update failed:', result)
          showMessage('error', result.error || 'Failed to update post')
        }
      } else {
        // Create new post
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            slug: cleanSlug // Use cleaned slug
          })
        })
        const result = await response.json()
        if (result.success) {
          setFormData({ title: '', slug: '', content: '', excerpt: '' })
          fetchPosts()
          showMessage('success', 'Post created successfully!')
        } else {
          console.error('Create failed:', result)
          showMessage('error', result.error || 'Failed to create post')
        }
      }
    } catch (error) {
      console.error('Error saving post:', error)
      showMessage('error', 'An error occurred while saving the post')
    }
  }

  const handleEdit = (post: Post) => {
    // If already editing a post, ask for confirmation
    if (editingPost && editingPost.id !== post.id) {
      if (!confirm('You have unsaved changes. Are you sure you want to edit a different post?')) {
        return
      }
    }
    
    setEditingPost(post)
    setOriginalSlug(post.slug)
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt || ''
    })
  }

  const handleCancelEdit = () => {
    setEditingPost(null)
    setOriginalSlug('')
    setFormData({ title: '', slug: '', content: '', excerpt: '' })
  }

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      try {
        const encodedSlug = encodeURIComponent(slug)
        const response = await fetch(`/api/posts/${encodedSlug}`, {
          method: 'DELETE'
        })
        const result = await response.json()
        if (result.success) {
          fetchPosts()
          showMessage('success', 'Post deleted successfully!')
        } else {
          showMessage('error', result.error || 'Failed to delete post')
        }
      } catch (error) {
        console.error('Error deleting post:', error)
        showMessage('error', 'An error occurred while deleting the post')
      }
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])


  if (loading) return <div>Loading...</div>

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Blog Admin</h1>
      
      {/* Message Display */}
      {message && (
        <div className={`mb-6 p-4 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {message.text}
        </div>
      )}
      
      {/* Create/Edit Post Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          {editingPost ? 'Edit Post' : 'Create New Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 border rounded-md text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                className="w-full p-2 border rounded-md text-gray-900"
                required
              />
              {formData.slug && (
                <p className="text-sm text-gray-600 mt-1">
                  Final slug: {formData.slug.trim().toLowerCase().replace(/\s+/g, '-')}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full p-2 border rounded-md h-20 text-gray-900"
              placeholder="Brief description of your blog post..."
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {editingPost ? 'Update Post' : 'Create Post'}
            </button>
            {editingPost && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Rich Text Editor - Outside the card with more space */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Content</h2>
        <RichTextEditor
          content={formData.content}
          onChange={(content) => setFormData({...formData, content})}
        />
      </div>

      {/* Posts List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">All Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className={`border-b pb-4 ${
              editingPost?.id === post.id ? 'bg-blue-50 border-blue-200 rounded-lg p-4' : ''
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-700">{post.slug}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                  {editingPost?.id === post.id && (
                    <p className="text-sm text-blue-600 font-medium mt-1">
                      Currently editing
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className={`px-3 py-1 rounded text-sm ${
                      editingPost?.id === post.id
                        ? 'bg-gray-500 text-white cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={editingPost?.id === post.id}
                  >
                    {editingPost?.id === post.id ? 'Editing...' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}