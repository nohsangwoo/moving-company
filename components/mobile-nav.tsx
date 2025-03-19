"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-primary" onClick={() => setOpen(false)}>
            홈
          </Link>
          <Link href="/about" className="hover:text-primary" onClick={() => setOpen(false)}>
            회사소개
          </Link>
          <Link href="/services" className="hover:text-primary" onClick={() => setOpen(false)}>
            서비스
          </Link>
          <Link href="/reservation" className="hover:text-primary" onClick={() => setOpen(false)}>
            예약
          </Link>
          <Link href="/contact" className="hover:text-primary" onClick={() => setOpen(false)}>
            문의하기
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

