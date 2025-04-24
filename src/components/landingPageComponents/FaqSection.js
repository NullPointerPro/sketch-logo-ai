'use client'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

function FaqSection() {
    const faqs = [
        {
            question: "How does Pixign AI work?",
            answer: "Pixign AI uses advanced artificial intelligence to transform your sketches or descriptions into professional logos. Simply upload a sketch or describe your vision, and our AI will generate multiple logo options for you to choose from. You can then customize colors, fonts, and other elements to make it perfect for your brand."
        },
        {
            question: "What file formats can I download my logo in?",
            answer: "You can download your logos in both PNG and SVG formats. PNG files are perfect for web use and social media, while SVG files are vector-based and ideal for printing and scaling to any size without losing quality."
        },
        {
            question: "Do I own the rights to the logos I create?",
            answer: "Yes! With both our Pro Monthly and Pro Yearly plans, you receive a commercial license for all logos you create. This means you have full ownership and can use your logos for any business or personal purpose."
        },
        {
            question: "Can I use Pixign AI without any design experience?",
            answer: "Absolutely! Pixign AI is designed to be user-friendly for everyone, regardless of design experience. Our intuitive interface and AI-powered tools make it easy to create professional logos. Plus, we provide tutorials and guides to help you get the best results."
        },
        {
            question: "What's the difference between the Monthly and Yearly plans?",
            answer: "Both plans give you access to all core features, including unlimited logo generations, 15 preset styles, 2D/3D generations, 4300+ fonts, and more. The Yearly plan offers a $50 discount and additional benefits like feature requests and a yearly license."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to all features until the end of your current billing period. You'll also retain the rights to any logos you created during your subscription."
        },
        {
            question: "How many logo variations can I generate?",
            answer: "With our Pro plans, you have unlimited logo generations. You can create as many variations as you need until you find the perfect design for your brand. Each generation gives you multiple options to choose from."
        }
    ];

    return (
        <section className='bg-[#373F47] py-20' id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize text-[#F8F8F8]">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-[#3E363F] p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-[#F8F8F8]'>
                                            <div className='flex items-center'>
                                                <ChevronRight className='h-4 w-4 text-[#F8F8F8] transition-transform duration-200 group-data-[expanded]:rotate-90' />
                                                <div className='ml-2 text-[#F8F8F8] text-xl font-semibold'>
                                                    {faq.question}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className='pl-6 pr-2 leading-relaxed text-[#F8F8F8]'>
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqSection