import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { WhatsAppButton } from "../WhatsAppButton";

export type NavPage = "principal" | "about" | "contact";

type RouteNavLink = {
    label: string;
    to: "/" | "/about-us" | "/contact";
    key: NavPage;
};

type SiteNavbarProps = {
    activePage?: NavPage;
};

const NAV_LINKS: RouteNavLink[] = [
    { label: "PRODUCTOS", to: "/", key: "principal" },
    { label: "SOBRE NOSOTROS", to: "/about-us", key: "about" },
    { label: "CONTACTO", to: "/contact", key: "contact" },
];

export const SiteNavbar = ({ activePage = "principal" }: SiteNavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const updateIndicator = useCallback(() => {
        const activeIndex = NAV_LINKS.findIndex((link) => link.key === activePage);

        if (activeIndex < 0) {
            return;
        }

        const activeLink = linkRefs.current[activeIndex];
        const navElement = navRef.current;

        if (!activeLink || !navElement) {
            return;
        }

        setIndicatorStyle({
            left: activeLink.offsetLeft,
            width: activeLink.offsetWidth,
        });
    }, [activePage]);

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [updateIndicator]);

    return (
        <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-[#c2c8bf26] bg-[#fcf9efcc] backdrop-blur-md backdrop-brightness-100 [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
            <div className="w-full px-4 py-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="flex items-center justify-between md:hidden">
                    <Link to="/" className="inline-flex items-center gap-2 no-underline">
                        <img
                            src="/sarelys.webp"
                            alt="Logo Sarelys"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="relative flex items-center h-8 font-serif font-bold text-[#18361c] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                            Sarelys
                        </div>
                    </Link>

                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#18361c26]"
                        aria-label="Abrir menú"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">Abrir menú</span>
                        <div className="flex flex-col gap-1.5">
                            <span className="h-[2px] w-5 bg-[#18361c]" />
                            <span className="h-[2px] w-5 bg-[#18361c]" />
                            <span className="h-[2px] w-5 bg-[#18361c]" />
                        </div>
                    </button>
                </div>

                <div className="hidden items-center justify-between gap-8 md:flex">
                    <Link to="/" className="inline-flex items-center gap-2 no-underline">
                        <img
                            src="/sarelys.webp"
                            alt="Logo Sarelys"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="relative flex items-center h-8 font-serif font-bold text-[#18361c] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                            Sarelys
                        </div>
                    </Link>

                    <nav ref={navRef} className="relative flex items-center gap-6 pb-2 lg:gap-12">
                        {NAV_LINKS.map((link) => {
                            const isActive = link.key === activePage;

                            return (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    ref={(element) => {
                                        linkRefs.current[NAV_LINKS.findIndex((item) => item.key === link.key)] = element;
                                    }}
                                    className="inline-flex flex-col items-start no-underline"
                                >
                                    <div
                                        className={`relative flex items-center h-7 font-serif text-base lg:text-lg tracking-[0.45px] leading-7 whitespace-nowrap ${
                                            isActive
                                                ? "font-normal text-[#18361c]"
                                                : "font-normal text-stone-600"
                                        }`}
                                    >
                                        {link.label}
                                    </div>
                                </NavLink>
                            );
                        })}

                        <span
                            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-[#18361c] transition-all duration-300 ease-out"
                            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                        />
                    </nav>

                    <WhatsAppButton
                        message="Hola, quiero hacer un pedido"
                        className="inline-flex flex-col items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 text-sm font-medium text-white no-underline sm:px-6"
                    >
                        Pedir Ahora
                    </WhatsAppButton>
                </div>

                {isMenuOpen && (
                    <div className="mt-3 rounded-xl border border-[#c2c8bf66] bg-[#fcf9ef] p-3 shadow-md md:hidden">
                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((link) => {
                                const isActive = link.key === activePage;

                                return (
                                    <NavLink
                                        key={link.label}
                                        to={link.to}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`w-full rounded-lg px-3 py-2 text-left no-underline font-serif ${
                                            isActive
                                                ? "bg-[#18361c14] font-normal text-[#18361c]"
                                                : "text-stone-700"
                                        }`}
                                    >
                                        {link.label}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        <WhatsAppButton
                            message="Hola, quiero hacer un pedido"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 text-sm font-medium text-white no-underline"
                        >
                            Pedir Ahora
                        </WhatsAppButton>
                    </div>
                )}
            </div>
        </header>
    );
};
