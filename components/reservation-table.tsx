"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// 예약 데이터 타입 정의
interface Reservation {
  id: string
  name: string
  phone: string
  movingDate: string
  fromAddress: string
  toAddress: string
  itemType: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
}

// 샘플 데이터
const sampleReservations: Reservation[] = [
  {
    id: "1",
    name: "김철수",
    phone: "01012345678",
    movingDate: "2024-06-15",
    fromAddress: "서울시 강남구",
    toAddress: "서울시 서초구",
    itemType: "apartment",
    status: "confirmed",
    createdAt: "2024-05-10",
  },
  {
    id: "2",
    name: "이영희",
    phone: "01098765432",
    movingDate: "2024-06-20",
    fromAddress: "서울시 마포구",
    toAddress: "경기도 고양시",
    itemType: "studio",
    status: "pending",
    createdAt: "2024-05-12",
  },
  {
    id: "3",
    name: "박지민",
    phone: "01056781234",
    movingDate: "2024-06-25",
    fromAddress: "경기도 성남시",
    toAddress: "서울시 송파구",
    itemType: "office",
    status: "confirmed",
    createdAt: "2024-05-15",
  },
  {
    id: "4",
    name: "최민수",
    phone: "01087654321",
    movingDate: "2024-07-01",
    fromAddress: "서울시 종로구",
    toAddress: "서울시 중구",
    itemType: "commercial",
    status: "pending",
    createdAt: "2024-05-18",
  },
  {
    id: "5",
    name: "정수정",
    phone: "01045678901",
    movingDate: "2024-07-05",
    fromAddress: "경기도 부천시",
    toAddress: "인천시 연수구",
    itemType: "apartment",
    status: "completed",
    createdAt: "2024-05-20",
  },
  {
    id: "6",
    name: "강동원",
    phone: "01023456789",
    movingDate: "2024-07-10",
    fromAddress: "서울시 강서구",
    toAddress: "경기도 용인시",
    itemType: "studio",
    status: "cancelled",
    createdAt: "2024-05-22",
  },
  {
    id: "7",
    name: "한지민",
    phone: "01034567890",
    movingDate: "2024-07-15",
    fromAddress: "인천시 부평구",
    toAddress: "서울시 강동구",
    itemType: "apartment",
    status: "pending",
    createdAt: "2024-05-25",
  },
]

// 상태에 따른 배지 스타일
const getStatusBadge = (status: Reservation["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "confirmed":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "cancelled":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

// 상태 한글 표시
const getStatusText = (status: Reservation["status"]) => {
  switch (status) {
    case "pending":
      return "대기중"
    case "confirmed":
      return "확정됨"
    case "completed":
      return "완료됨"
    case "cancelled":
      return "취소됨"
    default:
      return status
  }
}

// 아이템 타입 한글 표시
const getItemTypeText = (itemType: string) => {
  switch (itemType) {
    case "studio":
      return "원룸"
    case "apartment":
      return "아파트"
    case "office":
      return "사무실"
    case "commercial":
      return "상업 공간"
    case "other":
      return "기타"
    default:
      return itemType
  }
}

interface ReservationTableProps {
  limit?: number
}

export function ReservationTable({ limit }: ReservationTableProps) {
  const [reservations, setReservations] = useState<Reservation[]>(
    limit ? sampleReservations.slice(0, limit) : sampleReservations,
  )
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null)

  const handleDelete = (reservation: Reservation) => {
    setSelectedReservation(reservation)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (selectedReservation) {
      setReservations(reservations.filter((r) => r.id !== selectedReservation.id))
      setDeleteDialogOpen(false)
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>연락처</TableHead>
              <TableHead>이사 날짜</TableHead>
              <TableHead>물품 유형</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  예약 정보가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell className="font-medium">{reservation.name}</TableCell>
                  <TableCell>{reservation.phone}</TableCell>
                  <TableCell>{new Date(reservation.movingDate).toLocaleDateString("ko-KR")}</TableCell>
                  <TableCell>{getItemTypeText(reservation.itemType)}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusBadge(
                        reservation.status,
                      )}`}
                    >
                      {getStatusText(reservation.status)}
                    </span>
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
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(reservation.id)}>
                          예약 ID 복사
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> 수정
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(reservation)}>
                          <Trash className="mr-2 h-4 w-4" /> 삭제
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

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>예약 삭제</DialogTitle>
            <DialogDescription>정말로 이 예약을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</DialogDescription>
          </DialogHeader>
          {selectedReservation && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-2 rounded-lg border p-4">
                <div className="text-sm font-medium">이름:</div>
                <div className="text-sm">{selectedReservation.name}</div>
                <div className="text-sm font-medium">이사 날짜:</div>
                <div className="text-sm">{new Date(selectedReservation.movingDate).toLocaleDateString("ko-KR")}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              취소
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              삭제
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

