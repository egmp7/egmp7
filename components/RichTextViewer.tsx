interface RichTextViewerProps {
  content: string
  className?: string
}

export default function RichTextViewer({ content, className = '' }: RichTextViewerProps) {
  return (
    <div 
      className={`rich-text-content ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
