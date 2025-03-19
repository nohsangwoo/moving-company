import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Check, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "장거리 이사 서비스 | 이사 서비스",
  description:
    "타 지역으로의 장거리 이사를 안전하게 도와드립니다. 전국 어디든 안전한 운송, 특수 포장 및 보호 서비스를 제공합니다.",
}

export default function LongDistanceMovingPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary">
              서비스
            </Link>
            <span>/</span>
            <span>장거리 이사</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <MapPin className="mr-1 h-4 w-4" /> 장거리 이사 서비스
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">전국 어디든 안전한 장거리 이사 서비스</h1>
              <p className="text-muted-foreground">
                타 지역으로의 장거리 이사를 안전하게 도와드립니다. 특수 포장 및 보호 서비스로 소중한 물건을 안전하게
                운송합니다.
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
                alt="장거리 이사 서비스"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>안전한 운송</CardTitle>
              <CardDescription>전국 어디든 안전한 운송</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>전문 운송 차량</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>숙련된 운전기사</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>안전 운송 시스템</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>실시간 위치 추적</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>특수 포장</CardTitle>
              <CardDescription>장거리 이동에 적합한 특수 포장</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>고급 포장재 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>충격 방지 포장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>습도 조절 포장</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>귀중품 특수 포장</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>보험 서비스</CardTitle>
              <CardDescription>안심할 수 있는 보험 서비스</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>물품 파손 보험</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>분실 보상</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>지연 보상</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>맞춤형 보험 옵션</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border">
          <Tabs defaultValue="standard">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">기본 패키지</TabsTrigger>
              <TabsTrigger value="premium">프리미엄 패키지</TabsTrigger>
              <TabsTrigger value="custom">맞춤형 패키지</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">기본 패키지</h3>
                  <p className="mb-4 text-muted-foreground">기본적인 장거리 이사 서비스를 제공하는 패키지입니다.</p>
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
                      <span>기본 포장 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>안전한 운송</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 보험 적용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 배치 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="premium" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">프리미엄 패키지</h3>
                  <p className="mb-4 text-muted-foreground">
                    더 많은 서비스를 포함한 프리미엄 장거리 이사 패키지입니다.
                  </p>
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
                      <span>특수 포장 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>실시간 위치 추적</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>확장 보험 적용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>가구 분해/조립 서비스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>기본 패키지의 모든 서비스</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">맞춤형 패키지</h3>
                  <p className="mb-4 text-muted-foreground">
                    고객의 특별한 요구사항에 맞춘 맞춤형 장거리 이사 패키지입니다.
                  </p>
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
                      <span>전담 매니저 배정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>맞춤형 포장 및 운송 계획</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>프리미엄 보험 적용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>특수 물품 운송 서비스</span>
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
          <h2 className="text-2xl font-bold">장거리 이사 지역</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">서울 ↔ 부산</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">약 400km, 4-5시간 소요</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">서울 ↔ 대구</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">약 300km, 3-4시간 소요</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">서울 ↔ 광주</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">약 330km, 3-4시간 소요</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">서울 ↔ 제주</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">해상 운송, 1-2일 소요</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            위에 명시되지 않은 지역도 전국 어디든 서비스 가능합니다. 자세한 내용은 문의해주세요.
          </p>
        </div>

        <div className="rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">전국 어디든 안전한 이사를 약속합니다</h2>
            <p className="text-primary-foreground/80">
              장거리 이사의 모든 과정을 전문가들이 안전하게 도와드립니다. 지금 바로 문의하세요.
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

