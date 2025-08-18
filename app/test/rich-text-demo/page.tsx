'use client'

import { useState } from 'react'
import RichTextEditor from '@/components/RichTextEditor'
import RichTextViewer from '@/components/RichTextViewer'


export default function RichTextDemoPage() {
  const [content, setContent] = useState(`
    <h1>Welcome to Rich Text Editing!</h1>
    <p>This is a <strong>powerful rich text editor</strong> built with <em>TipTap</em> that provides a modern writing experience.</p>
    
    <h2>Features Include:</h2>
    <ul>
      <li><strong>Text formatting</strong> (bold, italic, underline, strikethrough)</li>
      <li><strong>Headings</strong> (H1, H2, H3)</li>
      <li><strong>Lists</strong> (bullet and numbered)</li>
      <li><strong>Text alignment</strong> (left, center, right, justify)</li>
      <li><strong>Links and images</strong></li>
      <li><strong>Code blocks</strong> with syntax highlighting</li>
      <li><strong>Blockquotes</strong> for important content</li>
      <li><strong>Text colors</strong> and highlighting</li>
    </ul>
    
    <h3>Code Example:</h3>
    <pre><code>function helloWorld() {
  console.log("Hello, Rich Text World!");
}</code></pre>
    
    <blockquote>
      <p>This is a beautiful blockquote that stands out from the rest of the content.</p>
    </blockquote>
    
    <p>Try editing the content above to see the rich text editor in action!</p>
  `)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rich Text Editor Demo</h1>
          <p className="text-xl text-gray-600">
            Experience the power of rich text editing with our TipTap-based editor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Editor</h2>
            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Start writing your content..."
            />
          </div>

          {/* Preview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preview</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <RichTextViewer content={content} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            The content above demonstrates various rich text features. Edit in the left panel and see the changes reflected in the right panel.
          </p>
        </div>
      </div>
    </div>
  )
}
