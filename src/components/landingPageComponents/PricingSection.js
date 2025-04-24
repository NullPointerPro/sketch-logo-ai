'use client'
import { CircleCheck } from "lucide-react"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"

function PricingSection() {
    return (
        <section className="bg-[#F8F8F8]" id="pricing">
            <MaxWidthWrapper className='py-20'>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-[#3E363F]/10 rounded-full px-4 py-2">
                        <p className='text-[#3E363F] text-xs font-medium tracking-wide'>PRICING</p>
                    </div>

                    <div className="max-w-lg text-center mt-4">
                        <p className="text-[#3E363F]/80 text-lg">
                            Choose the perfect plan for your creative needs
                        </p>
                    </div>
                </div>

                {/* price chart */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-4 md:my-10 text-gray-200 max-w-5xl mx-auto">
                    {/* monthly plan */}
                    <div className="bg-[#373F47] p-8 rounded-xl shadow-sm">
                        <h3 className='text-2xl font-bold mb-4 text-center text-white'>Pro Monthly</h3>

                        <p className='font-bold mb-6 text-center'>
                            <span className='text-6xl text-white'>$19.99</span><span className='text-xs text-gray-400'>/ month</span>
                        </p>

                        <p className="text-center font-bold text-gray-300">
                            Perfect for creators who want flexibility
                        </p>

                        <div className="bg-[#3E363F]/20 w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
                            <p className="text-xs text-gray-300">
                                Full access to all features
                            </p>
                        </div>

                        <div className="px-6">
                            <Link href='/'
                                className='flex items-center justify-center cursor-pointer border-2 border-[#EA526F] px-5 py-[0.45rem] rounded-full hover:bg-[#EA526F] hover:text-white font-medium text-[#EA526F] transition-colors duration-200 ease-out'
                            >
                                Start Monthly Plan
                            </Link>
                        </div>

                        <ul className="text-left text-gray-300 font-medium space-y-3 mt-8">
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Unlimited Usage
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                15 preset styles
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                2D/3D Generations
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                4300+ Fonts
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                PNG/SVG Output
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Tutorials for best results
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                500+ Color options
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                30.000+ Icon options
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Private Generations
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Commercial License
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Monthly License
                            </li>
                        </ul>
                    </div>

                    {/* yearly plan */}
                    <div className="relative bg-[#373F47] p-8 rounded-xl shadow-sm border-2 md:border-4 border-[#EA526F]">
                        <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-[#EA526F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Save $50
                        </div>
                        <h3 className='text-2xl font-bold mb-4 text-center text-white'>Pro Yearly</h3>

                        <div className="flex items-center justify-center gap-2 mb-6">
                            <p className='font-bold text-center'>
                                <span className='text-6xl text-white'>$199.99</span><span className='text-xs text-gray-400'>/ year</span>
                            </p>
                            <p className='text-sm text-gray-400 line-through'>
                                $249.99
                            </p>
                        </div>

                        <p className="text-center font-bold text-[#EA526F]">
                            Best value for serious creators
                        </p>

                        <div className="bg-[#3E363F]/20 w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
                            <p className="text-xs text-gray-300">
                                Full access to all features + exclusive benefits
                            </p>
                        </div>

                        <div className="px-6">
                            <div
                                className='flex items-center justify-center cursor-pointer px-5 py-[0.5rem] rounded-full bg-[#EA526F] hover:bg-[#EA526F]/90 font-medium text-white transition-colors duration-200 ease-out'
                            >
                                Start Yearly Plan
                            </div>
                        </div>

                        <ul className="text-left text-gray-300 font-medium space-y-3 mt-8">
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Unlimited Usage
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                15 preset styles
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                2D/3D Generations
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                4300+ Fonts
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                PNG/SVG Output
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Tutorials for best results
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                500+ Color options
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                30.000+ Icon options
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Private Generations
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Commercial License
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Feature Requests
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-[#EA526F] text-white" />
                                Yearly License
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default PricingSection