"use client"

import { useState } from "react"
import { Edit, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// 콘텐츠 데이터 타입 정의
interface ContentItem {
  id: string
  title: string
  section: string
  content: string
  lastUpdated: string
}

// 샘플 데이터
const sampleContent: ContentItem[] = [
  {
    id: "1",
    title: "회사 소개",
    section: "about",
    content: `<h2 class="text-2xl font-bold mb-4">이사 서비스 소개</h2>
<p class="mb-4">저희 이사 서비스는 2004년 설립 이후 20년간 고객의 신뢰를 바탕으로 성장해온 이사 전문 기업입니다.</p>
<p class="mb-4">숙련된 전문가들로 구성된 팀이 고객의 소중한 물건을 안전하게 새로운 보금자리로 옮겨드립니다.</p>
<p class="mb-4">가정 이사, 사무실 이전, 장거리 이사 등 다양한 이사 서비스를 제공하며, 고객 만족을 최우선으로 생각합니다.</p>
<h3 class="text-xl font-bold mt-6 mb-3">핵심 가치</h3>
<ul class="list-disc pl-5 mb-4 space-y-2">
  <li>고객 중심: 고객의 요구사항을 최우선으로 생각합니다.</li>
  <li>안전성: 모든 물품을 안전하게 운반하는 것을 최우선으로 합니다.</li>
  <li>전문성: 숙련된 전문가들이 서비스를 제공합니다.</li>
  <li>신뢰성: 약속한 시간과 서비스를 정확히 지킵니다.</li>
</ul>`,
    lastUpdated: "2024-05-01",
  },
  {
    id: "2",
    title: "가정 이사 서비스",
    section: "services",
    content: `<h2 class="text-2xl font-bold mb-4">가정 이사 서비스</h2>
<p class="mb-4">저희 이사 서비스는 고객의 소중한 가정 물품을 안전하게 새 집으로 옮겨드립니다.</p>
<p class="mb-4">숙련된 전문가들이 포장부터 운반, 배치까지 모든 과정을 책임집니다.</p>
<h3 class="text-xl font-bold mt-6 mb-3">서비스 내용</h3>
<ul class="list-disc pl-5 mb-4 space-y-2">
  <li>포장 서비스: 전문 포장재를 사용하여 안전하게 포장합니다.</li>
  <li>운반 서비스: 전문 장비를 사용하여 안전하게 운반합니다.</li>
  <li>배치 서비스: 고객의 요구에 맞게 가구를 배치합니다.</li>
  <li>정리 서비스: 이사 후 정리를 도와드립니다.</li>
</ul>`,
    lastUpdated: "2024-05-05",
  },
  {
    id: "3",
    title: "사무실 이전 서비스",
    section: "services",
    content: `<h2 class="text-2xl font-bold mb-4">사무실 이전 서비스</h2>
<p class="mb-4">업무 중단을 최소화하는 효율적인 사무실 이전 서비스를 제공합니다.</p>
<p class="mb-4">주말이나 업무 시간 외에 이전 작업을 진행하여 비즈니스 연속성을 보장합니다.</p>
<h3 class="text-xl font-bold mt-6 mb-3">서비스 내용</h3>
<ul class="list-disc pl-5 mb-4 space-y-2">
  <li>사전 계획: 효율적인 이전을 위한 상세 계획을 수립합니다.</li>
  <li>IT 장비 이전: 컴퓨터, 서버 등 IT 장비를 안전하게 이전합니다.</li>
  <li>사무 가구 이전: 책상, 의자 등 사무 가구를 이전합니다.</li>
  <li>설치 서비스: 새 사무실에 가구와 장비를 설치합니다.</li>
</ul>`,
    lastUpdated: "2024-05-10",
  },
]

export function ContentManagement() {
  const [activeTab, setActiveTab] = useState("about")
  const [contents, setContents] = useState<ContentItem[]>(sampleContent)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")

  const filteredContents = contents.filter((content) => content.section === activeTab)

  const handleEdit = (content: ContentItem) => {
    setEditingId(content.id)
    setEditContent(content.content)
  }

  const handleSave = (id: string) => {
    const updatedContents = contents.map((content) =>
      content.id === id
        ? {
            ...content,
            content: editContent,
            lastUpdated: new Date().toISOString().split("T")[0],
          }
        : content,
    )
    setContents(updatedContents)
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="about">회사 소개</TabsTrigger>
          <TabsTrigger value="services">서비스</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4 pt-4">
          {filteredContents.map((content) => (
            <Card key={content.id}>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
                <CardDescription>
                  마지막 업데이트: {new Date(content.lastUpdated).toLocaleDateString("ko-KR")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {editingId === content.id ? (
                  <Textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                  />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: content.content }} className="prose max-w-none" />
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {editingId === content.id ? (
                  <>
                    <Button variant="outline" onClick={handleCancel}>
                      취소
                    </Button>
                    <Button onClick={() => handleSave(content.id)}>
                      <Save className="mr-2 h-4 w-4" /> 저장
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => handleEdit(content)}>
                    <Edit className="mr-2 h-4 w-4" /> 편집
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="services" className="space-y-4 pt-4">
          {filteredContents.map((content) => (
            <Card key={content.id}>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
                <CardDescription>
                  마지막 업데이트: {new Date(content.lastUpdated).toLocaleDateString("ko-KR")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {editingId === content.id ? (
                  <Textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                  />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: content.content }} className="prose max-w-none" />
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {editingId === content.id ? (
                  <>
                    <Button variant="outline" onClick={handleCancel}>
                      취소
                    </Button>
                    <Button onClick={() => handleSave(content.id)}>
                      <Save className="mr-2 h-4 w-4" /> 저장
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => handleEdit(content)}>
                    <Edit className="mr-2 h-4 w-4" /> 편집
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

