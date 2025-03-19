import type { Metadata } from "next"

import { ReservationForm } from "@/components/reservation-form"

export const metadata: Metadata = {
  title: "이사 예약 | 이사 서비스",
  description: "간편하게 이사 서비스를 예약하세요. 원하는 날짜와 시간에 맞춰 전문적인 이사 서비스를 제공해 드립니다.",
}

export default function ReservationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">이사 서비스 예약</h1>
          <p className="text-muted-foreground">
            아래 양식을 작성하여 이사 서비스를 예약하세요. 예약 완료 후 카카오톡 또는 SMS로 확인 메시지를 보내드립니다.
          </p>
        </div>
        <ReservationForm />
      </div>
    </div>
  )
}

