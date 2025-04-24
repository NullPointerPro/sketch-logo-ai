import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

function HeroSection() {
    return (
        <section className='bg-[#373F47]'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-[#EA526F] text-5xl md:text-6xl">
                            Transform Your Sketches into Professional Logos with AI
                        </h1>

                        <p className="mt-8 text-balance text-lg max-w-prose text-center font-semibold lg:pr-10 md:text-wrap lg:text-left text-gray-200">
                            Create unique, customizable logos in seconds. No design skills needed. Just upload your sketch or describe your vision, and let our AI do the rest.
                        </p>

                        <ul className="hidden mt-8 text-left font-medium md:flex flex-col items-center sm:items-start">
                            <div className="space-y-2">
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-5 w-5 shrink-0 text-[#EA526F]" />
                                    AI-powered logo generation
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-5 w-5 shrink-0 text-[#EA526F]" />
                                    Upload sketches or describe your vision
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-5 w-5 shrink-0 text-[#EA526F]" />
                                    Fully customizable designs
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-5 w-5 shrink-0 text-[#EA526F]" />
                                    Professional results in seconds
                                </li>
                            </div>
                        </ul>

                        {/* CTA button */}
                        <Link href='/generate' className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center mt-8 group bg-[#2A2F35] text-[#EA526F] hover:bg-[#1F2328]")}>
                            <span>Generate Your Logo</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>

                <div className="col-span-full mt-14 md:mt-0 lg:col-span-1">
                    <div className="w-full h-60 lg:h-full rounded-3xl bg-gray-200/80 flex items-center justify-center overflow-hidden">
                        <img 
                            src="/hero-demo.png" 
                            alt="Pixign AI demo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection