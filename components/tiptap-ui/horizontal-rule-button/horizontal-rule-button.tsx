"use client"

import * as React from "react"

// --- Tiptap UI ---
import type { UseHorizontalRuleConfig } from "@/components/tiptap-ui/horizontal-rule-button"
import {
  HORIZONTAL_RULE_SHORTCUT_KEY,
  useHorizontalRule,
} from "@/components/tiptap-ui/horizontal-rule-button"

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"

// --- Lib ---
import { parseShortcutKeys } from "@/lib/tiptap-utils"

// --- UI Primitives ---
import type { ButtonProps } from "@/components/tiptap-ui-primitive/button"
import { Button } from "@/components/tiptap-ui-primitive/button"
import { Badge } from "@/components/tiptap-ui-primitive/badge"

export interface HorizontalRuleButtonProps
  extends Omit<ButtonProps, "type">,
    UseHorizontalRuleConfig {
  /**
   * Optional text to display alongside the icon.
   */
  text?: string
  /**
   * Optional show shortcut keys in the button.
   * @default false
   */
  showShortcut?: boolean
}

export function HorizontalRuleShortcutBadge({
  shortcutKeys = HORIZONTAL_RULE_SHORTCUT_KEY,
}: {
  shortcutKeys?: string
}) {
  return <Badge>{parseShortcutKeys({ shortcutKeys })}</Badge>
}

/**
 * Button component for inserting horizontal rule in a Tiptap editor.
 *
 * For custom button implementations, use the `useHorizontalRule` hook instead.
 */
export const HorizontalRuleButton = React.forwardRef<
  HTMLButtonElement,
  HorizontalRuleButtonProps
>(
  (
    {
      editor: providedEditor,
      text,
      hideWhenUnavailable = false,
      onInserted,
      showShortcut = false,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor)
    const {
      isVisible,
      canInsert,
      handleInsert,
      label,
      shortcutKeys,
      Icon,
    } = useHorizontalRule({
      editor,
      hideWhenUnavailable,
      onInserted,
    })

    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        handleInsert()
      },
      [handleInsert, onClick]
    )

    if (!isVisible) {
      return null
    }

    return (
      <Button
        type="button"
        data-style="ghost"
        role="button"
        tabIndex={-1}
        disabled={!canInsert}
        data-disabled={!canInsert}
        aria-label={label}
        tooltip="Horizontal Rule"
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children ?? (
          <>
            <Icon className="tiptap-button-icon" />
            {text && <span className="tiptap-button-text">{text}</span>}
            {showShortcut && (
              <HorizontalRuleShortcutBadge shortcutKeys={shortcutKeys} />
            )}
          </>
        )}
      </Button>
    )
  }
)

HorizontalRuleButton.displayName = "HorizontalRuleButton"
