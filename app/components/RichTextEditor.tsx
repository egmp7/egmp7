'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import {TextStyle} from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { all, createLowlight } from 'lowlight'


import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon, 
  Strikethrough, 
  Code, 
  Quote, 
  List, 
  ListOrdered, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify,
  Link as LinkIcon,
  Image as ImageIcon,
  Palette,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo
} from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

const lowlight = createLowlight(all)

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const setLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const setColor = (color: string) => {
    editor.chain().focus().setColor(color).run()
  }

  const setHighlight = (color: string) => {
    editor.chain().focus().setHighlight({ color }).run()
  }

  return (
    <div className="border-b border-gray-200 p-2 bg-white rounded-t-lg">
      <div className="flex flex-wrap gap-1 items-center">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Bold"
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Underline"
          >
            <UnderlineIcon size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('strike') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Strikethrough"
          >
            <Strikethrough size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('code') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Inline Code"
          >
            <Code size={16} />
          </button>
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Heading 1"
          >
            <Heading1 size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Heading 2"
          >
            <Heading2 size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Heading 3"
          >
            <Heading3 size={16} />
          </button>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Bullet List"
          >
            <List size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Ordered List"
          >
            <ListOrdered size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('blockquote') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Blockquote"
          >
            <Quote size={16} />
          </button>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Align Center"
          >
            <AlignCenter size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Align Right"
          >
            <AlignRight size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            title="Justify"
          >
            <AlignJustify size={16} />
          </button>
        </div>

        {/* Links and Images */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={setLink}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            title="Add Link"
          >
            <LinkIcon size={16} />
          </button>
          <button
            onClick={addImage}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            title="Add Image"
          >
            <ImageIcon size={16} />
          </button>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
          <button
            onClick={() => setColor('#ef4444')}
            className="p-2 rounded hover:bg-gray-100 text-red-500"
            title="Red Text"
          >
            <Palette size={16} />
          </button>
          <button
            onClick={() => setHighlight('#fef3c7')}
            className="p-2 rounded hover:bg-gray-100 text-yellow-500"
            title="Highlight"
          >
            <Highlighter size={16} />
          </button>
        </div>

        {/* History */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            title="Undo"
          >
            <Undo size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            title="Redo"
          >
            <Redo size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
          StarterKit,
          Link.configure({
            openOnClick: false,
            HTMLAttributes: {
              class: 'text-blue-600 underline hover:text-blue-800'
            }
          }),
          Image.configure({
            HTMLAttributes: {
              class: 'max-w-full h-auto rounded-lg'
            }
          }),
          TextAlign.configure({
            types: ['heading', 'paragraph']
          }),
          Underline,
          TextStyle,
          Color,
          Highlight,
          CodeBlockLowlight.configure({
            lowlight: lowlight
          })
        ],
        content,
        onUpdate: ({ editor }) => {
          onChange(editor.getHTML())
        },
        immediatelyRender: false,
            editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none p-4 min-h-[300px]',
        style: 'color: #374151; background-color: #ffffff;'
      }
    }
      })

  return (
    <div className="rich-text-editor-container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      {placeholder && !content && (
        <div className="absolute top-16 left-4 text-gray-400 pointer-events-none">
          {placeholder}
        </div>
      )}
    </div>
  )
}
