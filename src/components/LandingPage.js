import FaqSection from './landingPageComponents/FaqSection';
import Footer from './landingPageComponents/Footer';
import FinalPush from './landingPageComponents/FinalPush';
import PricingSection from './landingPageComponents/PricingSection';
import DemoSection from './landingPageComponents/DemoSection';
import FeatureDisplay from './landingPageComponents/FeatureDisplay';
import HeroSection from './landingPageComponents/HeroSection';
import BeforeAfter from './landingPageComponents/BeforeAfter';
import Testimonials from './landingPageComponents/Testimonials';
import AsSeenOn from './landingPageComponents/AsSeenOn';

function LandingPage() {
    const showAdditionalSections = false; // Set to true to show AsSeenOn and Testimonials

    return (
        <>
            <HeroSection />
            <BeforeAfter />
            <FeatureDisplay />
            {showAdditionalSections && (
                <>
                    <AsSeenOn />
                    <Testimonials />
                    <DemoSection />
                </>
            )}
            <PricingSection />
            <FaqSection />
            <FinalPush />
            <Footer />
        </>
    )
}

export default LandingPage