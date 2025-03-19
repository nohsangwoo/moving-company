import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "문의하기 | 이사 서비스",
  description:
    "이사 서비스에 대한 문의사항이 있으시면 연락주세요. 견적 문의, 서비스 안내, 예약 관련 문의 등 친절하게 답변해드립니다.",
}

export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">문의하기</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            이사 서비스에 대한 문의사항이 있으시면 연락주세요. 견적 문의, 서비스 안내, 예약 관련 문의 등 친절하게
            답변해드립니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">연락처 정보</h2>
              <p className="text-muted-foreground">아래 연락처로 직접 문의하시거나 문의 양식을 작성해주세요.</p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">전화</CardTitle>
                    <CardDescription>02-1234-5678</CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">이메일</CardTitle>
                    <CardDescription>info@movingservice.com</CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">주소</CardTitle>
                    <CardDescription>서울특별시 강남구 테헤란로 123, 이사빌딩 5층</CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">영업시간</CardTitle>
                    <CardDescription>
                      평일: 09:00 - 18:00 / 토요일: 09:00 - 13:00 / 일요일, 공휴일: 휴무
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.346195132563!2d127.02881867650125!3d37.49942582778649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2f9719ab%3A0x20210a76b2b256f7!2z7YWM7Iqk7Yq4IO2MjOyKpO2KuA!5e0!3m2!1sko!2skr!4v1710843000000!5m2!1sko!2skr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="회사 위치"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">문의 양식</h2>
              <p className="text-muted-foreground">아래 양식을 작성하시면 빠른 시일 내에 답변 드리겠습니다.</p>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">자주 묻는 질문</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">견적은 어떻게 받을 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  문의 양식을 작성하시거나 전화로 연락주시면 상담 후 견적을 안내해 드립니다. 정확한 견적을 위해 이사
                  규모, 날짜, 출발지/도착지 주소 등의 정보를 알려주세요.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">예약은 얼마나 일찍 해야 하나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  성수기(봄, 가을)에는 최소 2-3주 전, 비수기에는 1-2주 전에 예약하시는 것이 좋습니다. 급하신 경우에도
                  최대한 일정을 조정해 드리니 연락주세요.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">취소 및 변경은 어떻게 하나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  이사 3일 전까지는 무료로 취소 및 변경이 가능합니다. 이후에는 취소 수수료가 발생할 수 있으니 최대한
                  빨리 연락주세요.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">보험 적용 범위는 어떻게 되나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  기본적으로 모든 이사에는 기본 보험이 적용됩니다. 귀중품이나 특수 물품에 대해서는 추가 보험 가입이
                  가능하니 상담 시 문의해주세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

