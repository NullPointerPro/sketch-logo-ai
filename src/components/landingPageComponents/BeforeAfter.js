import MaxWidthWrapper from '../MaxWidthWrapper'
import { Check, Star, X } from 'lucide-react';

function BeforeAfter() {
    return (
        <section className='bg-[#F8F8F8]'>
            <MaxWidthWrapper className='pb-10 pt-20'>
                <div className='max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-5'>
                    <div className="flex items-center justify-center gap-1.5">
                        <X className='w-8 h-8 sm:w-6 sm:h-6 text-red-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center'>
                            Why not use other logo generators?
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                        <Check className='w-8 h-8 sm:w-6 sm:h-6 text-green-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center text-balance'>
                            Why Pixign AI is better
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:max-w-4xl lg:mx-auto items-center justify-center lg:gap-14 my-16">
                    <div className='flex w-full sm:flex-1 flex-col items-center bg-[#3E363F]/5 rounded-2xl shadow-md py-12'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start">
                            <div className="space-y-2 tracking-wide text-xl">
                                <h3 className='font-bold'>Before (Using other tools)</h3>

                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Same-old logo templates everyone uses
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Limited creative control
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Hidden costs and upsells
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Clunky interfaces that waste time
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className='flex w-full sm:flex-1 flex-col items-center bg-gradient-to-br from-[#3E363F] via-[#3E363F]/90 to-[#3E363F]/80 rounded-2xl shadow-md py-12'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start">
                            <div className="space-y-2 tracking-wide text-xl">
                                <h3 className='font-bold text-white'>After (Using Pixign AI)</h3>

                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-4 w-4 shrink-0 text-[#EA526F]" />
                                    Fresh, one-of-a-kind logo designs
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-4 w-4 shrink-0 text-[#EA526F]" />
                                    Easy-to-tweak logos powered by AI
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-4 w-4 shrink-0 text-[#EA526F]" />
                                    Transparent pricing, no surprises
                                </li>
                                <li className="flex gap-1.5 items-center text-left text-white">
                                    <Check className="h-4 w-4 shrink-0 text-[#EA526F]" />
                                    Fast, intuitive interface built for creators
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* user testimonial */}
                <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
                    <div className="mx-auto flex items-center justify-center gap-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <div className='text-center font-semibold text-balance text-gray-800'>
                        "I can't imagine launching my brand without <span className='bg-yellow-200'>Pixign AI</span>. It gave me a unique, professional logo in minutes — and it actually felt like *mine*."
                    </div>

                    <div className='flex mx-auto items-center justify-center gap-4 my-6'>
                        <img src="/users/john.png" alt="user" className="inline-block pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>John D</p>
                            <p className='text-sm'>Startup Founder</p>
                        </div>
                    </div>
                </div>

                {/* Take your business to the next level section */}
                <div className="max-w-4xl mx-auto my-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Take Your Business to the Next Level
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Professional Branding</h3>
                            <p className="text-gray-600">Stand out with a unique, memorable logo that captures your brand's essence and makes a lasting impression.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold mb-2">Instant Recognition</h3>
                            <p className="text-gray-600">Create a visual identity that helps customers instantly recognize and remember your brand across all platforms.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold mb-2">Business Growth</h3>
                            <p className="text-gray-600">Build trust and credibility with a professional logo that helps attract more customers and grow your business.</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default BeforeAfter