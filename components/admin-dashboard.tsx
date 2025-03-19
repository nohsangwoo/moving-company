"use client"

import { useState } from "react"
import { Bell, Calendar, FileText, Home, MessageSquare, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReservationTable } from "@/components/reservation-table"
import { NotificationTable } from "@/components/notification-table"
import { ContentManagement } from "@/components/content-management"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              설정
            </Button>
            <Button variant="destructive" size="sm">
              로그아웃
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="hidden border-r bg-muted/40 md:block md:w-[200px] lg:w-[250px]">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Home className="mr-2 h-5 w-5" />
              <span className="font-medium">관리자 대시보드</span>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 py-4 lg:px-4">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="mb-1 justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  개요
                </Button>
                <Button
                  variant={activeTab === "reservations" ? "secondary" : "ghost"}
                  className="mb-1 justify-start"
                  onClick={() => setActiveTab("reservations")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  예약 관리
                </Button>
                <Button
                  variant={activeTab === "notifications" ? "secondary" : "ghost"}
                  className="mb-1 justify-start"
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  알림 관리
                </Button>
                <Button
                  variant={activeTab === "content" ? "secondary" : "ghost"}
                  className="mb-1 justify-start"
                  onClick={() => setActiveTab("content")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  콘텐츠 관리
                </Button>
                <Button
                  variant={activeTab === "analytics" ? "secondary" : "ghost"}
                  className="mb-1 justify-start"
                  onClick={() => setActiveTab("analytics")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  통계
                </Button>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <main className="flex-1 p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full space-y-6">
              <div className="flex items-center md:hidden">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">개요</TabsTrigger>
                  <TabsTrigger value="reservations">예약</TabsTrigger>
                  <TabsTrigger value="notifications">알림</TabsTrigger>
                  <TabsTrigger value="content">콘텐츠</TabsTrigger>
                  <TabsTrigger value="analytics">통계</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="overview" className="h-full flex-col space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">총 예약</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">128</div>
                      <p className="text-xs text-muted-foreground">전월 대비 +14%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">이번 달 예약</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">전월 대비 +8%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">알림 발송</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">120</div>
                      <p className="text-xs text-muted-foreground">성공률 98%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">방문자 수</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,203</div>
                      <p className="text-xs text-muted-foreground">전월 대비 +12%</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>최근 예약</CardTitle>
                      <CardDescription>최근에 접수된 예약 목록입니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ReservationTable limit={5} />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>알림 상태</CardTitle>
                      <CardDescription>최근 발송된 알림의 상태입니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <NotificationTable limit={5} />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reservations" className="h-full flex-col space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>예약 관리</CardTitle>
                    <CardDescription>모든 예약을 관리하고 상태를 업데이트하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ReservationTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="h-full flex-col space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>알림 관리</CardTitle>
                    <CardDescription>발송된 알림을 확인하고 템플릿을 관리하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NotificationTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="content" className="h-full flex-col space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>콘텐츠 관리</CardTitle>
                    <CardDescription>웹사이트 콘텐츠를 관리하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContentManagement />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="h-full flex-col space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>통계</CardTitle>
                    <CardDescription>예약 및 알림 통계를 확인하세요.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnalyticsDashboard />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

