import { AuthorCreationsSection } from "./sections/AuthorCreationsSection";
import { BrandStorySection } from "./sections/BrandStorySection";
import { CustomOrderSection } from "./sections/CustomOrderFormSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeroFeatureSection } from "./sections/HeroFeatureSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { VisualJourneySection } from "./sections/VisualJourneySection";

export const Principal = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <div className="w-full pt-[88px] sm:pt-[96px] lg:pt-[88px]">
                <TopNavigationSection />
                <HeroFeatureSection />
                <AuthorCreationsSection />
                <VisualJourneySection />
                <BrandStorySection />
                <CustomOrderSection />
                <FooterLinksSection />
            </div>
        </div>
    );
};
