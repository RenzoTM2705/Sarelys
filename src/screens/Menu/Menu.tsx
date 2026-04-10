import { FineBakeryOfferSection } from "./sections/FineBakeryOfferSection";
import { FooterLinksSection } from "../Principal/sections/FooterLinksSection";
import { SignaturePastryGallerySection } from "./sections/SignaturePastryGallerySection";
import { TopNavigationSection } from "../Principal/sections/TopNavigationSection";
import { SpecialCollectionsFeatureSection } from "./sections/SpecialCollectionsFeatureSection";

export const Menu = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <div className="flex min-h-screen w-full flex-col pt-[88px] sm:pt-[96px] lg:pt-[88px]">
                <TopNavigationSection />
                <FineBakeryOfferSection />
                <SignaturePastryGallerySection />
                <SpecialCollectionsFeatureSection />
                <FooterLinksSection />
            </div>
        </div>
    );
};
