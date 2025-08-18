import { EditorContent, useEditor } from "@tiptap/react"
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem, TaskList } from "@tiptap/extension-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Selection } from "@tiptap/extensions"
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension"
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"

// Import styles
import "@/components/tiptap-templates/simple/simple-editor.scss"
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
import "@/components/tiptap-node/code-block-node/code-block-node.scss"
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
import "@/components/tiptap-node/list-node/list-node.scss"
import "@/components/tiptap-node/image-node/image-node.scss"
import "@/components/tiptap-node/heading-node/heading-node.scss"
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"

interface RichTextViewerProps {
  content: string
  className?: string
}

export default function RichTextViewer({ content, className = '' }: RichTextViewerProps) {
  const editor = useEditor({
    editable: false,
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-800'
        }
      }),
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: 5 * 1024 * 1024, // 5MB
        limit: 3,
        upload: () => Promise.resolve(''),
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
    content,
  })

  if (!editor) {
    return (
      <div className={`rich-text-viewer-loading ${className}`}>
        <div className="p-4 min-h-[200px] bg-gray-50 flex items-center justify-center text-gray-500">
          Loading content...
        </div>
      </div>
    )
  }

  return (
    <div className={`rich-text-viewer ${className}`}>
      <EditorContent
        editor={editor}
        className="simple-editor-content"
      />
    </div>
  )
}
