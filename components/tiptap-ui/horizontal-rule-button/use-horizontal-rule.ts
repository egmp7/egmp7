"use client"

import * as React from "react"
import type { Editor } from "@tiptap/react"
import { useHotkeys } from "react-hotkeys-hook"

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"
import { useIsMobile } from "@/hooks/use-mobile"

// --- Icons ---
import { HorizontalRuleIcon } from "@/components/tiptap-icons/horizontal-rule-icon"

// --- UI Utils ---
import { isNodeInSchema } from "@/lib/tiptap-utils"

export const HORIZONTAL_RULE_SHORTCUT_KEY = "mod+shift+-"

/**
 * Configuration for the horizontal rule functionality
 */
export interface UseHorizontalRuleConfig {
  /**
   * The Tiptap editor instance.
   */
  editor?: Editor | null
  /**
   * Whether the button should hide when horizontal rule is not available.
   * @default false
   */
  hideWhenUnavailable?: boolean
  /**
   * Callback function called after a successful insertion.
   */
  onInserted?: () => void
}

/**
 * Checks if horizontal rule can be inserted in the current editor state
 */
export function canInsertHorizontalRule(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false
  if (!isNodeInSchema("horizontalRule", editor)) return false
  return true
}

/**
 * Inserts a horizontal rule at the current cursor position
 */
export function insertHorizontalRule(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false
  if (!canInsertHorizontalRule(editor)) return false

  try {
    editor.chain().focus().setHorizontalRule().run()
    return true
  } catch {
    return false
  }
}

/**
 * Determines if the horizontal rule button should be shown
 */
export function shouldShowButton(props: {
  editor: Editor | null
  hideWhenUnavailable: boolean
}): boolean {
  const { editor, hideWhenUnavailable } = props

  if (!editor || !editor.isEditable) return false
  if (!isNodeInSchema("horizontalRule", editor)) return false

  if (hideWhenUnavailable) {
    return canInsertHorizontalRule(editor)
  }

  return true
}

/**
 * Custom hook that provides horizontal rule functionality for Tiptap editor
 *
 * @example
 * ```tsx
 * // Simple usage - no params needed
 * function MySimpleHorizontalRuleButton() {
 *   const { isVisible, handleInsert, canInsert } = useHorizontalRule()
 *
 *   if (!isVisible) return null
 *
 *   return <button onClick={handleInsert}>Horizontal Rule</button>
 * }
 *
 * // Advanced usage with configuration
 * function MyAdvancedHorizontalRuleButton() {
 *   const { isVisible, handleInsert, label, canInsert } = useHorizontalRule({
 *     editor: myEditor,
 *     hideWhenUnavailable: true,
 *     onInserted: () => console.log('Horizontal rule inserted!')
 *   })
 *
 *   if (!isVisible) return null
 *
 *   return (
 *     <MyButton
 *       onClick={handleInsert}
 *       aria-label={label}
 *       disabled={!canInsert}
 *     >
 *       Insert Horizontal Rule
 *     </MyButton>
 *   )
 * }
 * ```
 */
export function useHorizontalRule(config?: UseHorizontalRuleConfig) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
    onInserted,
  } = config || {}

  const { editor } = useTiptapEditor(providedEditor)
  const isMobile = useIsMobile()
  const [isVisible, setIsVisible] = React.useState<boolean>(true)
  const canInsert = canInsertHorizontalRule(editor)

  React.useEffect(() => {
    if (!editor) return

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor, hideWhenUnavailable }))
    }

    handleSelectionUpdate()

    editor.on("selectionUpdate", handleSelectionUpdate)

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate)
    }
  }, [editor, hideWhenUnavailable])

  const handleInsert = React.useCallback(() => {
    if (!editor) return false

    const success = insertHorizontalRule(editor)
    if (success) {
      onInserted?.()
    }
    return success
  }, [editor, onInserted])

  useHotkeys(
    HORIZONTAL_RULE_SHORTCUT_KEY,
    (event) => {
      event.preventDefault()
      handleInsert()
    },
    {
      enabled: isVisible && canInsert,
      enableOnContentEditable: !isMobile,
      enableOnFormTags: true,
    }
  )

  return {
    isVisible,
    handleInsert,
    canInsert,
    label: "Horizontal Rule",
    shortcutKeys: HORIZONTAL_RULE_SHORTCUT_KEY,
    Icon: HorizontalRuleIcon,
  }
}
