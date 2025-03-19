import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Building2, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "사무실 이전 서비스 | 이사 서비스",
  description:
    "업무 중단을 최소화하는 효율적인 사무실 이전 서비스를 제공합니다. IT 장비, 사무 가구 등 전문적인 이전 서비스를 경험해보세요.",
}

export default function OfficeMovingPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary">
              서비스
            </Link>
            <span>/</span>
            <span>사무실 이전</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Building2 className="mr-1 h-4 w-4" /> 사무실 이전 서비스
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">업무 중단 없는 사무실 이전 서비스</h1>
              <p className="text-muted-foreground">
                업무 중단을 최소화하는 효율적인 사무실 이전 서비스를 제공합니다. 주말이나 업무 시간 외에 이전 작업을
                진행하여 비즈니스 연속성을 보장합니다.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/reservation">
                  <Button size="lg">
                    지금 예약하기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    견적 문의하기
                  </Button>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="사무실 이전 서비스"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>사전 계획</CardTitle>
              <CardDescription>효율적인 이전을 위한 상세 계획</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>현장 방문 및 평가</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>맞춤형 이전 계획 수립</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>업무 중단 최소화 전략</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>리스크 관리 계획</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>IT 장비 이전</CardTitle>
              <CardDescription>컴퓨터, 서버 등 IT 장비 안전 이전</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>데이터 백업 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>전문 포장 및 운반</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>네트워크 장비 설치</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>시스템 테스트</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>사무 가구 이전</CardTitle>
              <CardDescription>책상, 의자 등 사무 가구 이전</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>가구 분해 및 조립</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>사무실 레이아웃에 맞는 배치</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>파티션 설치</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>정리 및 폐기물 처리</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border">
          <Tabs defaultValue="standard">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">기본 패키지</TabsTrigger>
              <TabsTrigger value="business">비즈니스 패키지</TabsTrigger>
              <TabsTrigger value="enterprise">엔터프라이즈 패키지</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">기본 패키지</h3>
                  <p className="mb-4 text-muted-foreground">소규모 사무실을 위한 기본 이전 서비스입니다.</p>
                  <div className="mb-4 text-2xl font-bold">견적 문의</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 이전 계획</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>사무 가구 이전</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 IT 장비 이전</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>포장재 수거</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="business" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">비즈니스 패키지</h3>
                  <p className="mb-4 text-muted-foreground">중견 기업을 위한 종합 이전 서비스입니다.</p>
                  <div className="mb-4 text-2xl font-bold">견적 문의</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>상세 이전 계획 및 일정 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>IT 인프라 이전 및 설치</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>사무 가구 이전 및 재배치</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>주말 및 야간 이전 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 패키지의 모든 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="enterprise" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">엔터프라이즈 패키지</h3>
                  <p className="mb-4 text-muted-foreground">대기업을 위한 프리미엄 이전 서비스입니다.</p>
                  <div className="mb-4 text-2xl font-bold">견적 문의</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>전담 프로젝트 매니저</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>종합 이전 계획 및 리스크 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>서버룸 및 데이터센터 이전</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>사무실 공간 설계 컨설팅</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>비즈니스 패키지의 모든 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">사무실 이전 프로세스</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 font-medium">현장 평가</h3>
              <p className="text-sm text-muted-foreground">현장 방문을 통해 이전 규모와 요구사항을 평가합니다.</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 font-medium">계획 수립</h3>
              <p className="text-sm text-muted-foreground">상세한 이전 계획과 일정을 수립합니다.</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 font-medium">이전 실행</h3>
              <p className="text-sm text-muted-foreground">계획에 따라 체계적으로 이전을 실행합니다.</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                4
              </div>
              <h3 className="mb-2 font-medium">설치 및 테스트</h3>
              <p className="text-sm text-muted-foreground">새 사무실에 설치하고 모든 시스템을 테스트합니다.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">업무 중단 없는 사무실 이전을 경험하세요</h2>
            <p className="text-primary-foreground/80">
              전문가들이 비즈니스 연속성을 보장하며 사무실 이전을 도와드립니다. 지금 바로 문의하세요.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/reservation">
                <Button variant="secondary" size="lg">
                  예약하기
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  견적 문의하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

