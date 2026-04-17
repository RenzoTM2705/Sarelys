import { FineBakeryOfferSection } from "./sections/FineBakeryOfferSection";
import { SiteFooter, SiteNavbar } from "../../components/layout";
import { SignaturePastryGallerySection } from "./sections/SignaturePastryGallerySection";
import { SpecialCollectionsFeatureSection } from "./sections/SpecialCollectionsFeatureSection";

export const Menu = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <div className="flex min-h-screen w-full flex-col pt-[88px] sm:pt-[96px] lg:pt-[88px]">
                <SiteNavbar activePage="principal" />
                <FineBakeryOfferSection />
                <SignaturePastryGallerySection />
                <SpecialCollectionsFeatureSection />
                <SiteFooter />
            </div>
        </div>
    );
};
