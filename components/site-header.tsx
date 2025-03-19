import Link from "next/link"
import { TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <TruckIcon className="h-6 w-6" />
          <span className="font-bold">이사 서비스</span>
        </Link>
        <MainNav className="mx-6 hidden md:flex" />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/reservation">
              <Button>예약하기</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline">관리자</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

