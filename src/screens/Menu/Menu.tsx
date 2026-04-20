import { FineBakeryOfferSection } from "./sections/FineBakeryOfferSection";
import { PageLayout } from "../../components/layout";
import { SignaturePastryGallerySection } from "./sections/SignaturePastryGallerySection";
import { SpecialCollectionsFeatureSection } from "./sections/SpecialCollectionsFeatureSection";

export const Menu = () => {
    return (
        <PageLayout activePage="principal">
            <FineBakeryOfferSection />
            <SignaturePastryGallerySection />
            <SpecialCollectionsFeatureSection />
        </PageLayout>
    );
};
