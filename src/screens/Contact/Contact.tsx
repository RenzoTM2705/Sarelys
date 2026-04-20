import { ContactContentSection } from "./sections/ContactContentSection";
import { PageLayout } from "../../components/layout";
import { HeaderHeroTitleSection } from "./sections/HeaderHeroTitleSection";

export const Contact = () => {
    return (
        <PageLayout activePage="contact">
            <HeaderHeroTitleSection />
            <ContactContentSection />
        </PageLayout>
    );
};
