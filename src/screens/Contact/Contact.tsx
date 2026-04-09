import { ContactContentSection } from "./sections/ContactContentSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeaderHeroTitleSection } from "./sections/HeaderHeroTitleSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export const Contact = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <div className="w-full pt-[88px] sm:pt-[96px] lg:pt-[88px]">
                <TopNavigationSection />
                <HeaderHeroTitleSection />
                <ContactContentSection />
                <FooterLinksSection />
            </div>
        </div>
    );
};
