'use client'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname()
    
    // Don't render navbar on generate page
    if (pathname === '/generate') return null

    return (
        <nav className="bg-[#373F47] fixed w-full z-50">
            <MaxWidthWrapper className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center">
                    <img src="/logos/pixignailogo.png" alt="Pixign AI Logo" className="h-12 w-auto" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/generate" className="text-white hover:text-[#EA526F] transition-colors duration-200">Generate</Link>
                    <Link href="#features" className="text-white hover:text-[#EA526F] transition-colors duration-200">Features</Link>
                    <Link href="#pricing" className="text-white hover:text-[#EA526F] transition-colors duration-200">Pricing</Link>
                    <Link href="#faq" className="text-white hover:text-[#EA526F] transition-colors duration-200">FAQ</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-white hover:text-[#EA526F] transition-colors duration-200">Login</Link>
                    <Link href="/signup" className="bg-[#EA526F] text-white px-4 py-2 rounded-full hover:bg-[#EA526F]/90 transition-colors duration-200">Sign Up</Link>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar