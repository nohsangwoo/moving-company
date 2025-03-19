import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Building2, MapPin, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "서비스 | 이사 서비스",
  description:
    "가정 이사, 사무실 이전, 장거리 이사 등 다양한 이사 서비스를 제공합니다. 전문적이고 안전한 이사 서비스를 경험해보세요.",
}

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">이사 서비스</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            고객의 다양한 요구에 맞춘 전문적인 이사 서비스를 제공합니다. 가정 이사부터 사무실 이전, 장거리 이사까지 모든
            이사를 안전하게 도와드립니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>가정 이사</CardTitle>
              <CardDescription>아파트, 주택 등 가정 이사를 위한 맞춤형 서비스</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>포장 자재 제공 및 전문 포장 서비스</li>
                <li>가구 분해/조립 서비스</li>
                <li>안전한 운반 및 배치</li>
                <li>정리 및 폐기물 처리 지원</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/services/home-moving" className="w-full">
                <Button className="w-full" variant="outline">
                  자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TruckIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>사무실 이전</CardTitle>
              <CardDescription>사무실 및 상업 공간 이전을 위한 전문 서비스</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>업무 중단 최소화 계획</li>
                <li>IT 장비 안전 이전</li>
                <li>사무 가구 이전 및 재배치</li>
                <li>주말 및 야간 이전 서비스</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/services/office-moving" className="w-full">
                <Button className="w-full" variant="outline">
                  자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>장거리 이사</CardTitle>
              <CardDescription>타 지역으로의 장거리 이사를 안전하게 도와드립니다</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>전국 어디든 안전한 운송</li>
                <li>특수 포장 및 보호 서비스</li>
                <li>실시간 위치 추적</li>
                <li>보험 서비스 제공</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/services/long-distance" className="w-full">
                <Button className="w-full" variant="outline">
                  자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="rounded-lg bg-muted p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">이사 서비스 특징</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">전문 인력</h3>
                    <p className="text-sm text-muted-foreground">
                      숙련된 전문가들이 안전하고 신속하게 이사를 도와드립니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">맞춤형 서비스</h3>
                    <p className="text-sm text-muted-foreground">
                      고객의 요구사항에 맞춘 맞춤형 이사 서비스를 제공합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">안전한 운송</h3>
                    <p className="text-sm text-muted-foreground">최신 장비와 차량으로 물품을 안전하게 운송합니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">보험 서비스</h3>
                    <p className="text-sm text-muted-foreground">만일의 사고에 대비한 보험 서비스를 제공합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">가격 안내</h2>
                <p className="text-muted-foreground">
                  이사 유형, 거리, 물품 양에 따라 가격이 달라집니다. 정확한 견적을 원하시면 문의하기를 통해 연락주세요.
                </p>
                <div className="rounded-md bg-background p-4">
                  <div className="mb-2 flex items-center justify-between border-b pb-2">
                    <span className="font-medium">원룸 이사</span>
                    <span>300,000원 ~</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between border-b pb-2">
                    <span className="font-medium">아파트 이사</span>
                    <span>500,000원 ~</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between border-b pb-2">
                    <span className="font-medium">사무실 이전</span>
                    <span>견적 문의</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">장거리 이사</span>
                    <span>견적 문의</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full">견적 문의하기</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">지금 바로 이사 서비스를 예약하세요</h2>
            <p className="text-primary-foreground/80">
              간편한 온라인 예약으로 이사 스트레스를 줄이세요. 전문가들이 안전하고 신속하게 이사를 도와드립니다.
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
                  문의하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

