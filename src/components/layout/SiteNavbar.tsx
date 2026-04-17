import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

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

const ORDER_WHATSAPP_URL = buildWhatsAppUrl("Hola, quiero hacer un pedido");

export const SiteNavbar = ({ activePage = "principal" }: SiteNavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

                    <nav className="flex items-center gap-6 lg:gap-12">
                        {NAV_LINKS.map((link) => {
                            const isActive = link.key === activePage;

                            return (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    className={`inline-flex flex-col items-start no-underline ${
                                        isActive
                                            ? "border-b-2 border-[#18361c] pb-1 pt-0 px-0"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`relative flex items-center h-7 font-serif text-base lg:text-lg tracking-[0.45px] leading-7 whitespace-nowrap ${
                                            isActive
                                                ? "mt-[-2.00px] font-bold text-[#18361c]"
                                                : "mt-[-1.00px] font-normal text-stone-600"
                                        }`}
                                    >
                                        {link.label}
                                    </div>
                                </NavLink>
                            );
                        })}
                    </nav>

                    <a
                        href={ORDER_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 text-sm font-medium text-white no-underline sm:px-6"
                    >
                        Pedir Ahora
                    </a>
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
                                                ? "bg-[#18361c14] font-bold text-[#18361c]"
                                                : "text-stone-700"
                                        }`}
                                    >
                                        {link.label}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        <a
                            href={ORDER_WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 text-sm font-medium text-white no-underline"
                        >
                            Pedir Ahora
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};
