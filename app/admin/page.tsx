import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { InfoIcon } from "lucide-react"

import { AdminLogin } from "@/components/admin-login"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "관리자 로그인 | 이사 서비스",
  description: "이사 서비스 관리자 페이지 로그인",
}

export default function AdminPage() {
  // 실제 구현에서는 서버 컴포넌트에서 세션 확인 후 로그인 여부 판단
  const isLoggedIn = false

  if (isLoggedIn) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">관리자 로그인</h1>
          <p className="text-muted-foreground">관리자 계정으로 로그인하세요</p>
        </div>

        <Alert className="border-blue-200 bg-blue-50">
          <InfoIcon className="h-4 w-4 text-blue-500" />
          <AlertTitle className="text-blue-700">테스트 계정 안내</AlertTitle>
          <AlertDescription className="text-blue-600">
            아이디: <span className="font-mono font-bold">admin</span> / 비밀번호:{" "}
            <span className="font-mono font-bold">admin</span> 으로 로그인할 수 있습니다.
          </AlertDescription>
        </Alert>

        <AdminLogin />
      </div>
    </div>
  )
}

