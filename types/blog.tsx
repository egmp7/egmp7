export interface Post {
    id: string
    title: string
    slug: string
    content: string
    excerpt?: string
    featured_image?: string
    published_at: string
    created_at: string
    updated_at: string
  }
  
  export interface Category {
    id: string
    name: string
    slug: string
    created_at: string
  }
  
  export interface PostCategory {
    post_id: string
    category_id: string
  }
  
  export interface CreatePostData {
    title: string
    slug: string
    content: string
    excerpt?: string
    featured_image?: string
  }
  
  export interface UpdatePostData extends Partial<CreatePostData> {
    id: string
  }