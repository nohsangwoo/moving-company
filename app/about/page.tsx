import type { Metadata } from "next"
import { Award, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentEditor } from "@/components/content-editor"

export const metadata: Metadata = {
  title: "회사 소개 | 이사 서비스",
  description: "20년 경력의 이사 서비스 전문 기업입니다. 회사 소개, 연혁, 비전 등을 확인하세요.",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">회사 소개</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            20년 경력의 이사 서비스 전문 기업입니다. 고객의 소중한 물건을 안전하게 새 집으로 옮겨드립니다.
          </p>
        </div>

        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="company">회사 소개</TabsTrigger>
            <TabsTrigger value="history">연혁</TabsTrigger>
            <TabsTrigger value="vision">비전</TabsTrigger>
          </TabsList>
          <TabsContent value="company" className="space-y-6 pt-6">
            <div className=" overflow-hidden rounded-lg">
              <img
                src="/main/intro.webp"
                alt="회사 사무실"
                className="h-full w-full object-cover"
              />
            </div>
            <ContentEditor
              initialContent={`
                <h2 class="text-2xl font-bold mb-4">이사 서비스 소개</h2>
                <p class="mb-4">저희 이사 서비스는 2004년 설립 이후 20년간 고객의 신뢰를 바탕으로 성장해온 이사 전문 기업입니다.</p>
                <p class="mb-4">숙련된 전문가들로 구성된 팀이 고객의 소중한 물건을 안전하게 새로운 보금자리로 옮겨드립니다.</p>
                <p class="mb-4">가정 이사, 사무실 이전, 장거리 이사 등 다양한 이사 서비스를 제공하며, 고객 만족을 최우선으로 생각합니다.</p>
                <h3 class="text-xl font-bold mt-6 mb-3">핵심 가치</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                  <li>고객 중심: 고객의 요구사항을 최우선으로 생각합니다.</li>
                  <li>안전성: 모든 물품을 안전하게 운반하는 것을 최우선으로 합니다.</li>
                  <li>전문성: 숙련된 전문가들이 서비스를 제공합니다.</li>
                  <li>신뢰성: 약속한 시간과 서비스를 정확히 지킵니다.</li>
                </ul>
              `}
              isAdmin={false}
            />
          </TabsContent>
          <TabsContent value="history" className="space-y-6 pt-6">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">2004년</h3>
                  <p className="text-sm text-muted-foreground">회사 설립</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">2010년</h3>
                  <p className="text-sm text-muted-foreground">서울 전 지역 서비스 확장</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">2015년</h3>
                  <p className="text-sm text-muted-foreground">전국 서비스 네트워크 구축</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">2020년</h3>
                  <p className="text-sm text-muted-foreground">온라인 예약 시스템 도입</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">2024년</h3>
                  <p className="text-sm text-muted-foreground">카카오톡/SMS 알림 서비스 도입</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vision" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle>최고의 서비스</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    고객에게 최고의 이사 경험을 제공하기 위해 지속적으로 서비스 품질을 향상시킵니다.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle>인재 육성</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>전문성을 갖춘 인재를 육성하여 고객에게 더 나은 서비스를 제공합니다.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle>혁신</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>새로운 기술과 서비스를 도입하여 이사 산업의 혁신을 주도합니다.</CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-lg bg-muted p-6 text-center">
              <h3 className="mb-4 text-xl font-bold">우리의 미션</h3>
              <p className="text-muted-foreground">
                "고객의 새로운 시작을 위한 안전하고 편안한 이사 서비스를 제공하여 삶의 질을 향상시킨다"
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Button asChild>
            <a href="/contact">문의하기</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

