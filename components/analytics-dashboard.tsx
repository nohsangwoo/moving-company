"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 예약 통계 데이터
const reservationData = [
  { name: "1월", 가정이사: 40, 사무실이전: 24, 장거리이사: 10 },
  { name: "2월", 가정이사: 30, 사무실이전: 28, 장거리이사: 15 },
  { name: "3월", 가정이사: 45, 사무실이전: 26, 장거리이사: 12 },
  { name: "4월", 가정이사: 50, 사무실이전: 30, 장거리이사: 18 },
  { name: "5월", 가정이사: 65, 사무실이전: 35, 장거리이사: 20 },
  { name: "6월", 가정이사: 60, 사무실이전: 32, 장거리이사: 22 },
]

// 알림 통계 데이터
const notificationData = [
  { name: "1월", 카카오톡: 60, SMS: 40 },
  { name: "2월", 카카오톡: 70, SMS: 45 },
  { name: "3월", 카카오톡: 65, SMS: 50 },
  { name: "4월", 카카오톡: 80, SMS: 55 },
  { name: "5월", 카카오톡: 90, SMS: 60 },
  { name: "6월", 카카오톡: 95, SMS: 65 },
]

// 알림 상태 데이터
const notificationStatusData = [
  { name: "발송 완료", value: 85 },
  { name: "발송 실패", value: 5 },
  { name: "발송 대기", value: 10 },
]

// 이사 유형 데이터
const movingTypeData = [
  { name: "원룸", value: 35 },
  { name: "아파트", value: 45 },
  { name: "사무실", value: 15 },
  { name: "상업 공간", value: 5 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="reservations">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="reservations">예약 통계</TabsTrigger>
          <TabsTrigger value="notifications">알림 통계</TabsTrigger>
        </TabsList>
        <TabsContent value="reservations" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>월별 예약 현황</CardTitle>
                <CardDescription>최근 6개월간 예약 유형별 통계</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={reservationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="가정이사" fill="#8884d8" />
                      <Bar dataKey="사무실이전" fill="#82ca9d" />
                      <Bar dataKey="장거리이사" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>이사 유형 분포</CardTitle>
                <CardDescription>전체 예약 중 이사 유형별 비율</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={movingTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {movingTypeData.map((entry, index) => (
                          <Sector
                            key={`cell-${index}`}
                            fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042"][index % 4]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>월별 알림 발송 현황</CardTitle>
                <CardDescription>최근 6개월간 알림 유형별 통계</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={notificationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="카카오톡" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="SMS" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>알림 상태 분포</CardTitle>
                <CardDescription>전체 알림 중 상태별 비율</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={notificationStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {notificationStatusData.map((entry, index) => (
                          <Sector key={`cell-${index}`} fill={["#4CAF50", "#F44336", "#FFC107"][index % 3]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

