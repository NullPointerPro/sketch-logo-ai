import { Sparkle, Upload, Wand2, Zap } from 'lucide-react';

function FeatureDisplay() {
    return (
        <section className="bg-[#373F47] py-24 pb-16">
            <div className='max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4'>
                <h2 className='tracking-tight font-bold text-center md:text-left text-3xl lg:text-5xl lg:leading-[3.5rem] text-[#EA526F]'>
                    Transform Your Ideas into Professional Logos in Three Simple Steps
                </h2>
                <p className='font-semibold my-4 text-center md:text-left text-white'>
                    Pixign AI makes logo creation effortless. Whether you have a sketch or just an idea, our AI-powered platform will help you create a unique, professional logo that perfectly represents your brand.
                </p>

                <div className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 mt-4'>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Upload className={`h-5 w-5 md:h-10 md:w-10 text-white group-hover:text-[#EA526F] transition-colors duration-200`} />
                        <p className={`text-sm font-semibold text-white group-hover:text-[#EA526F] transition-colors duration-200`}>Upload or Describe</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Wand2 className={`h-5 w-5 md:h-10 md:w-10 text-white group-hover:text-[#EA526F] transition-colors duration-200`} />
                        <p className={`text-sm font-semibold text-white group-hover:text-[#EA526F] transition-colors duration-200`}>AI Generation</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10 text-white group-hover:text-[#EA526F] transition-colors duration-200`} />
                        <p className={`text-sm font-semibold text-white group-hover:text-[#EA526F] transition-colors duration-200`}>Customize</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Zap className={`h-5 w-5 md:h-10 md:w-10 text-white group-hover:text-[#EA526F] transition-colors duration-200`} />
                        <p className={`text-sm font-semibold text-white group-hover:text-[#EA526F] transition-colors duration-200`}>Download</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureDisplay