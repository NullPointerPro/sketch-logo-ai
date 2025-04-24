import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

function DemoSection() {
    return (
        <section className='bg-[#F8F8F8] py-20'>
            <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-600">
                <h1 className='font-bold text-3xl text-center'>Welcome to <span className="text-[#EA526F]">Pixign AI</span> 👋🏼</h1>
                <div className="w-24 h-24 rounded-full my-10 bg-[#3E363F]/10 flex items-center justify-center">
                    <span className="text-4xl">🎨</span>
                </div>
                <p className='max-w-prose w-fit text-center font-semibold leading-relaxed mt-10'>
                    <span className='font-bold text-gray-700'>Creating professional logos has never been easier.</span> Whether you're a startup founder, small business owner, or creative professional, Pixign AI helps you transform your ideas into stunning logos in seconds. No design experience needed — just your vision and our AI.
                </p>

                {/* demo video */}
                <div className='my-20 scroll-mt-28 w-full' id='demo'>
                    <div className='w-full lg:w-4/5 lg:mx-auto h-72 lg:h-96 shadow-md bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden'>
                        <img 
                            src="/demo-preview.png" 
                            alt="Pixign AI demo preview" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className='flex items-center justify-center mb-4'>
                    <ChevronDown className='animate-bounce w-10 h-10 text-gray-600' />
                </div>

                <Link href="/generate" className='font-medium text-center text-2xl text-gray-600 hover:text-[#EA526F] transition-colors'>
                    Try Pixign AI Now
                </Link>
            </div>
        </section>
    )
}

export default DemoSection