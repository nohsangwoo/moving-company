"use client"

import { useState } from "react"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { updateContent } from "@/lib/actions"

interface ContentEditorProps {
  initialContent: string
  contentId?: string
  isAdmin: boolean
}

export function ContentEditor({ initialContent, contentId = "default", isAdmin }: ContentEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateContent(contentId, content)
      setIsEditing(false)
    } catch (error) {
      console.error("콘텐츠 저장 오류:", error)
    } finally {
      setIsSaving(false)
    }
  }

  if (!isEditing) {
    return (
      <div className="relative">
        <div dangerouslySetInnerHTML={{ __html: content }} className="prose max-w-none" />
        {isAdmin && (
          <Button variant="outline" size="sm" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
            편집
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[300px] font-mono text-sm"
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setIsEditing(false)}>
          취소
        </Button>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            "저장 중..."
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> 저장
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

