import { SiteNavbar } from "../../../../components/layout";
import type { NavPage } from "../../../../components/layout/SiteNavbar";

interface TopNavigationSectionProps {
    activePage?: NavPage;
}

export const TopNavigationSection = ({ activePage = "principal" }: TopNavigationSectionProps) => {
    return <SiteNavbar activePage={activePage} />;
};
