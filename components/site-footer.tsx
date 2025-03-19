import Link from "next/link"
import { TruckIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-start md:gap-12 lg:py-12">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center space-x-2">
            <TruckIcon className="h-6 w-6" />
            <span className="font-bold">이사 서비스</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            안전하고 신뢰할 수 있는 이사 서비스를 제공합니다. 20년 경력의 전문가들이 여러분의 소중한 물건을 안전하게 새
            집으로 옮겨드립니다.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">회사 정보</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:underline">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/about#history" className="hover:underline">
                  연혁
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:underline">
                  팀 소개
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">서비스</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/home-moving" className="hover:underline">
                  가정 이사
                </Link>
              </li>
              <li>
                <Link href="/services/office-moving" className="hover:underline">
                  사무실 이전
                </Link>
              </li>
              <li>
                <Link href="/services/long-distance" className="hover:underline">
                  장거리 이사
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">고객 지원</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:underline">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2024 이사 서비스. All rights reserved.</p>
      </div>
    </footer>
  )
}

