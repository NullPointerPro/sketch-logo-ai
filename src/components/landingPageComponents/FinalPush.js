import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import { buttonVariants } from "../ui/button";

function FinalPush() {
    return (
        <section className='pt-40 pb-32 px-5' id='contact'>
            <div className='flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 gap-10 bg-gradient-to-br from-[#3E363F] via-[#3E363F]/90 to-[#3E363F]/80 rounded-3xl'>
                <div className="space-y-6">
                    <h2 className='relative tracking-tight font-bold text-3xl md:text-4xl text-white'>
                        <span className='absolute top-[-20px] right-0'>
                            <IoIosRocket className='h-10 w-10 text-[#EA526F]' />
                        </span>
                        Take your business to the next level
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-200'>
                        Elevate your brand with a professional logo that stands out. Pixign AI helps you create a unique visual identity that builds trust, attracts customers, and drives business growth. Whether you're launching a startup or refreshing your brand, our AI-powered platform makes it easy to create a logo that perfectly represents your vision.
                    </p>

                    <div className="w-full lg:w-1/4">
                        <Link href='/' className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4 bg-[#EA526F] hover:bg-[#EA526F]/90 text-white")}>
                            <span>Start Now</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalPush