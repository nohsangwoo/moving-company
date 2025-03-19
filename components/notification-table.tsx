"use client"

import { useState } from "react"
import { CheckCircle2, Clock, MoreHorizontal, RefreshCw, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// 알림 데이터 타입 정의
interface Notification {
  id: string
  reservationId: string
  customerName: string
  type: "kakao" | "sms"
  status: "sent" | "failed" | "pending"
  sentAt: string
  message: string
}

// 샘플 데이터
const sampleNotifications: Notification[] = [
  {
    id: "1",
    reservationId: "1",
    customerName: "김철수",
    type: "kakao",
    status: "sent",
    sentAt: "2024-05-10T14:30:00",
    message: "이사 서비스 예약이 확정되었습니다. 예약 날짜: 2024-06-15",
  },
  {
    id: "2",
    reservationId: "2",
    customerName: "이영희",
    type: "sms",
    status: "pending",
    sentAt: "2024-05-12T10:15:00",
    message: "이사 서비스 예약이 접수되었습니다. 예약 날짜: 2024-06-20",
  },
  {
    id: "3",
    reservationId: "3",
    customerName: "박지민",
    type: "kakao",
    status: "sent",
    sentAt: "2024-05-15T16:45:00",
    message: "이사 서비스 예약이 확정되었습니다. 예약 날짜: 2024-06-25",
  },
  {
    id: "4",
    reservationId: "4",
    customerName: "최민수",
    type: "sms",
    status: "failed",
    sentAt: "2024-05-18T09:20:00",
    message: "이사 서비스 예약이 접수되었습니다. 예약 날짜: 2024-07-01",
  },
  {
    id: "5",
    reservationId: "5",
    customerName: "정수정",
    type: "kakao",
    status: "sent",
    sentAt: "2024-05-20T11:10:00",
    message: "이사 서비스가 완료되었습니다. 이용해 주셔서 감사합니다.",
  },
  {
    id: "6",
    reservationId: "6",
    customerName: "강동원",
    type: "sms",
    status: "sent",
    sentAt: "2024-05-22T13:25:00",
    message: "이사 서비스 예약이 취소되었습니다.",
  },
  {
    id: "7",
    reservationId: "7",
    customerName: "한지민",
    type: "kakao",
    status: "pending",
    sentAt: "2024-05-25T15:40:00",
    message: "이사 서비스 예약이 접수되었습니다. 예약 날짜: 2024-07-15",
  },
]

// 상태에 따른 아이콘 및 스타일
const getStatusIcon = (status: Notification["status"]) => {
  switch (status) {
    case "sent":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    case "failed":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

// 상태 한글 표시
const getStatusText = (status: Notification["status"]) => {
  switch (status) {
    case "sent":
      return "발송 완료"
    case "failed":
      return "발송 실패"
    case "pending":
      return "발송 대기"
    default:
      return status
  }
}

// 알림 유형 한글 표시
const getTypeText = (type: Notification["type"]) => {
  switch (type) {
    case "kakao":
      return "카카오톡"
    case "sms":
      return "SMS"
    default:
      return type
  }
}

interface NotificationTableProps {
  limit?: number
}

export function NotificationTable({ limit }: NotificationTableProps) {
  const [notifications, setNotifications] = useState<Notification[]>(
    limit ? sampleNotifications.slice(0, limit) : sampleNotifications,
  )

  const handleResend = (notification: Notification) => {
    // 실제 구현에서는 알림 재발송 API 호출
    const updatedNotifications = notifications.map((n) =>
      n.id === notification.id ? { ...n, status: "sent" as const, sentAt: new Date().toISOString() } : n,
    )
    setNotifications(updatedNotifications)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>고객명</TableHead>
            <TableHead>알림 유형</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>발송 시간</TableHead>
            <TableHead className="text-right">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                알림 정보가 없습니다.
              </TableCell>
            </TableRow>
          ) : (
            notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell className="font-medium">{notification.customerName}</TableCell>
                <TableCell>{getTypeText(notification.type)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(notification.status)}
                    <span>{getStatusText(notification.status)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(notification.sentAt).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">메뉴 열기</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>작업</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(notification.message)}>
                        메시지 복사
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleResend(notification)}>
                        <RefreshCw className="mr-2 h-4 w-4" /> 재발송
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

