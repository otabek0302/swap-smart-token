import Link from "next/link";
import Image from "next/image";

import { logo } from "@/assets";
import { ModeToggle } from "@/components/custom-ui/mode-taoggle";
import { Connection } from "@/components/custom-ui/connection";
import { MobileMenu } from "../custom-ui/mobile-menu";

export function Header() {
  return (
    <header>
        <div className="container px-4 md:px-6 mx-auto">
            <div className="py-4 flex justify-between items-center gap-4 border-b-[0.5px] border-gray-200">
                {/* Logo */}
                <div className="lg:flex-1 flex items-center justify-start gap-4">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={58} height={58} />
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 hidden md:flex items-center justify-start lg:justify-center gap-6">
                    <Link href="/" className="text-base font-medium hover:text-primary">Home</Link>
                    <Link href="/swap" className="text-base font-medium hover:text-primary">Swap</Link>
                    <Link href="/developers" className="text-base font-medium hover:text-primary">Developers</Link>
                    <Link href="/features" className="text-base font-medium hover:text-primary">Features</Link>
                </nav>

                {/* Actions */}
                <div className="flex-1 flex items-center justify-end gap-4">
                    <ModeToggle />
                    <Connection />
                    <MobileMenu />
                </div>

            </div>
        </div>
    </header>
  )
}

