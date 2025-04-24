import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='bg-[#373F47] py-20'>
            <MaxWidthWrapper>
                <div className='flex flex-col md:flex-row gap-10 md:gap-24'>
                    <div className='flex flex-col items-center md:items-start px-4'>
                        <img 
                            src="/logos/pixignailogo.png" 
                            alt="Pixign AI Logo" 
                            className="h-16 w-auto mb-4"
                        />
                        <p className='text-gray-200 text-sm max-w-xs text-center md:text-left'>
                            Transform your sketches into professional logos with AI. Create unique, customizable designs in seconds.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-10 md:gap-24 mt-10 md:mt-0'>
                        <div className='flex flex-col items-center md:items-start px-4'>
                            <h3 className='font-semibold text-gray-300 mb-2'>LINKS</h3>
                            <ul className='space-y-2 text-gray-200 text-sm text-center md:text-left'>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <a href='#'>
                                        Support
                                    </a>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <Link href='#faq'>FAQ</Link>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <Link href='#pricing' target="_blank" rel="noopener noreferrer">Pricing</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center md:items-start px-4'>
                            <h3 className='font-semibold text-gray-300 mb-2'>LEGAL</h3>
                            <ul className='space-y-2 text-gray-200 text-sm text-center md:text-left'>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <Link href='/'>Privacy Policy</Link>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <Link href='/'>Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer