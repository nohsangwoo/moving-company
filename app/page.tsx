import Link from "next/link"
import { ArrowRight, Building2, Calendar, MapPin, MessageSquare, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  안전하고 신뢰할 수 있는 이사 서비스
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  20년 경력의 전문가들이 여러분의 소중한 물건을 안전하게 새 집으로 옮겨드립니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/reservation">
                  <Button size="lg" className="gap-1">
                    지금 예약하기 <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    회사 소개
                  </Button>
                </Link>
              </div>
            </div>
            <img
              alt="이사 서비스 이미지"
              className="mx-auto h-auto w-full overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
              src="/main/banner.webp"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 안내</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                다양한 이사 서비스를 제공해 드립니다
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Building2 className="h-8 w-8" />
                <CardTitle>가정 이사</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  아파트, 주택 등 가정 이사를 위한 맞춤형 서비스를 제공합니다.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/home-moving">
                  <Button variant="ghost" size="sm">
                    자세히 보기
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <TruckIcon className="h-8 w-8" />
                <CardTitle>사무실 이전</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  사무실 및 상업 공간 이전을 위한 전문 서비스를 제공합니다.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/office-moving">
                  <Button variant="ghost" size="sm">
                    자세히 보기
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="h-8 w-8" />
                <CardTitle>장거리 이사</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">타 지역으로의 장거리 이사를 안전하게 도와드립니다.</p>
              </CardContent>
              <CardFooter>
                <Link href="/services/long-distance">
                  <Button variant="ghost" size="sm">
                    자세히 보기
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                왜 저희를 선택해야 할까요?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                고객 만족을 최우선으로 생각합니다
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">간편한 예약</h3>
              <p className="text-sm text-center text-muted-foreground">
                온라인으로 빠르고 쉽게 이사 일정을 예약하세요.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">실시간 알림</h3>
              <p className="text-sm text-center text-muted-foreground">
                카카오톡이나 SMS로 예약 확인 및 이사 관련 정보를 받아보세요.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <TruckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">전문 인력</h3>
              <p className="text-sm text-center text-muted-foreground">
                숙련된 전문가들이 안전하고 신속하게 이사를 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">지금 바로 이사 예약하기</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                간편한 온라인 예약으로 이사 스트레스를 줄이세요
              </p>
            </div>
            <Link href="/reservation">
              <Button size="lg" variant="secondary" className="gap-1">
                예약 페이지로 이동 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

