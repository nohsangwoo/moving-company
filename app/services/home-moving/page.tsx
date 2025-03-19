import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Check, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "가정 이사 서비스 | 이사 서비스",
  description:
    "아파트, 주택 등 가정 이사를 위한 맞춤형 서비스를 제공합니다. 포장, 운반, 배치까지 모든 과정을 전문가가 도와드립니다.",
}

export default function HomeMovingPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary">
              서비스
            </Link>
            <span>/</span>
            <span>가정 이사</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Home className="mr-1 h-4 w-4" /> 가정 이사 서비스
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">안전하고 편안한 가정 이사 서비스</h1>
              <p className="text-muted-foreground">
                소중한 가정의 물건들을 안전하게 새 집으로 옮겨드립니다. 포장부터 운반, 배치까지 모든 과정을 전문가가
                도와드립니다.
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
                alt="가정 이사 서비스"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>포장 서비스</CardTitle>
              <CardDescription>전문 포장재를 사용한 안전한 포장</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>가구, 가전제품 전문 포장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>깨지기 쉬운 물품 특수 포장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>옷, 침구류 등 생활용품 포장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>고급 포장재 사용</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>운반 서비스</CardTitle>
              <CardDescription>안전하고 신속한 물품 운반</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>전문 운반 장비 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>대형 가구 안전 운반</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>엘리베이터 및 계단 이동 전문</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>청결한 운반 과정</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>배치 서비스</CardTitle>
              <CardDescription>새 집에 맞는 가구 배치</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>고객 요구에 맞는 가구 배치</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>가구 조립 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>포장재 수거 및 정리</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>기본 청소 서비스</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border">
          <Tabs defaultValue="standard">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">스탠다드 패키지</TabsTrigger>
              <TabsTrigger value="premium">프리미엄 패키지</TabsTrigger>
              <TabsTrigger value="vip">VIP 패키지</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">스탠다드 패키지</h3>
                  <p className="mb-4 text-muted-foreground">기본적인 이사 서비스를 제공하는 패키지입니다.</p>
                  <div className="mb-4 text-2xl font-bold">300,000원 ~</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 포장 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>가구 운반</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 가구 배치</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>포장재 수거</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="premium" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">프리미엄 패키지</h3>
                  <p className="mb-4 text-muted-foreground">더 많은 서비스를 포함한 프리미엄 패키지입니다.</p>
                  <div className="mb-4 text-2xl font-bold">500,000원 ~</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>고급 포장재 사용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>가구 분해/조립 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>가전제품 설치 지원</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 청소 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>스탠다드 패키지의 모든 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vip" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">VIP 패키지</h3>
                  <p className="mb-4 text-muted-foreground">최고급 서비스를 제공하는 VIP 패키지입니다.</p>
                  <div className="mb-4 text-2xl font-bold">800,000원 ~</div>
                  <Link href="/contact">
                    <Button>견적 문의하기</Button>
                  </Link>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">포함 서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>전담 매니저 배정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>특수 물품 포장 및 운반</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>전문 청소 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>가구 재배치 서비스 (이사 후 1회)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>프리미엄 패키지의 모든 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">이사 전 준비해야 할 것은 무엇인가요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  중요한 서류, 귀중품, 깨지기 쉬운 소형 물품은 직접 챙기시는 것이 좋습니다. 이사 전 정리정돈을 하시면
                  이사 과정이 더 수월해집니다.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">이사 견적은 어떻게 산정되나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  물품의 양, 이동 거리, 건물 구조(엘리베이터 유무, 층수), 선택한 서비스 패키지 등에 따라 견적이
                  달라집니다. 정확한 견적은 현장 방문 후 산정됩니다.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">이사 당일 집에 있어야 하나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  이사 과정에서 물품 배치 등에 대한 결정이 필요하므로 가능하면 계셔주시는 것이 좋습니다. 불가피한 경우
                  담당자와 사전에 상세히 협의하시면 됩니다.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">가전제품 설치도 해주나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  프리미엄 패키지와 VIP 패키지에는 기본적인 가전제품 설치 서비스가 포함되어 있습니다. 복잡한 설치가
                  필요한 경우 추가 비용이 발생할 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">안전하고 편안한 이사를 경험하세요</h2>
            <p className="text-primary-foreground/80">
              20년 경력의 전문가들이 여러분의 소중한 물건을 안전하게 새 집으로 옮겨드립니다. 지금 바로 예약하세요.
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

