import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        홈
      </Link>
      <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        회사소개
      </Link>
      <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        서비스
      </Link>
      <Link
        href="/reservation"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        예약
      </Link>
      <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        문의하기
      </Link>
    </nav>
  )
}

