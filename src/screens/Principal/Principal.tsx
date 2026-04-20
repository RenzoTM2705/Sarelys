import { AuthorCreationsSection } from "./sections/AuthorCreationsSection";
import { BrandStorySection } from "./sections/BrandStorySection";
import { PageLayout } from "../../components/layout";
import { CustomOrderSection } from "./sections/CustomOrderFormSection";
import { HeroFeatureSection } from "./sections/HeroFeatureSection";
import { VisualJourneySection } from "./sections/VisualJourneySection";

export const Principal = () => {
    return (
        <PageLayout activePage="principal">
            <HeroFeatureSection />
            <AuthorCreationsSection />
            <VisualJourneySection />
            <BrandStorySection />
            <CustomOrderSection />
        </PageLayout>
    );
};
