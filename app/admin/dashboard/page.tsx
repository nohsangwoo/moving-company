import type { Metadata } from "next"

import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "관리자 대시보드 | 이사 서비스",
  description: "이사 서비스 관리자 대시보드",
}

export default function AdminDashboardPage() {
  return <AdminDashboard />
}

