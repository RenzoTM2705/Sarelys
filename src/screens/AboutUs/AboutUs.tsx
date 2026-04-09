import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeroSection } from "./sections/HeroSection";
import { OriginsSection } from "./sections/OriginsSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export const AboutUs = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <div className="w-full pt-[88px] sm:pt-[96px] lg:pt-[88px]">
                <TopNavigationSection />
                <HeroSection />
                <OriginsSection />
                <PhilosophySection />
                <FooterLinksSection />
            </div>
        </div>
    );
};
