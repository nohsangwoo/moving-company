import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "예약 확인 | 이사 서비스",
  description: "이사 서비스 예약이 성공적으로 완료되었습니다. 예약 정보를 확인하세요.",
}

export default function ConfirmationPage() {
  return (
    <div className="container flex items-center justify-center py-20">
      <Card className="mx-auto max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">예약이 완료되었습니다!</CardTitle>
          <CardDescription>
            이사 서비스 예약이 성공적으로 접수되었습니다. 곧 담당자가 연락드릴 예정입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              선택하신 알림 방법(카카오톡 또는 SMS)으로 예약 확인 메시지가 발송되었습니다. 메시지를 확인해주세요.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">다음 단계:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>담당 매니저가 1-2일 내로 연락드릴 예정입니다.</li>
              <li>이사 당일 준비사항에 대한 안내를 받으실 수 있습니다.</li>
              <li>예약 변경이 필요하시면 고객센터로 연락해주세요.</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href="/" className="w-full">
            <Button className="w-full">홈으로 돌아가기</Button>
          </Link>
          <Link href="/contact" className="w-full">
            <Button variant="outline" className="w-full">
              문의하기
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

