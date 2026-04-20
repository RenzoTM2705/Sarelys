import { PageLayout } from "../../components/layout";
import { HeroSection } from "./sections/HeroSection";
import { OriginsSection } from "./sections/OriginsSection";
import { PhilosophySection } from "./sections/PhilosophySection";

export const AboutUs = () => {
    return (
        <PageLayout activePage="about">
            <div className="pb-12 lg:pb-16">
                <HeroSection />
                <OriginsSection />
                <PhilosophySection />
            </div>
        </PageLayout>
    );
};
