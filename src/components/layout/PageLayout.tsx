import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNavbar } from "./SiteNavbar";
import type { NavPage } from "./SiteNavbar";

type PageLayoutProps = {
    activePage?: NavPage;
    children: ReactNode;
};

export const PageLayout = ({ activePage = "principal", children }: PageLayoutProps) => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fcf9ef]">
            <SiteNavbar activePage={activePage} />
            <main className="w-full pt-[88px] sm:pt-[96px] lg:pt-[88px]">{children}</main>
            <SiteFooter />
        </div>
    );
};
