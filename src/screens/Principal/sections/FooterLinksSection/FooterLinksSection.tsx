const footerLinks = [
    { label: "Política de Privacidad", width: "w-[128.39px]" },
    { label: "Términos de Servicio", width: "w-[125.98px]" },
    { label: "Información de Envío", width: "w-[126.69px]" },
];

// const socialIcons = [
//     {
//         href: "#",
//         label: "Facebook",
//         path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
//     },
//     {
//         href: "#",
//         label: "Instagram",
//         viewBox: "0 0 24 24",
//         paths: ["M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", "M17.5 6.5h.01"],
//         rect: "M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z",
//     },
//     {
//         href: "#",
//         label: "Pinterest",
//         path: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.329-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.386-1.715-4.054-4.163-4.054-2.837 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.312-.244.995-.277 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z",
//     },
//     {
//         href: "#",
//         label: "TikTok",
//         path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z",
//     },
// ];

export const FooterLinksSection = () => {
    return (
        <footer id="contacto" className="w-full border-t border-[#c2c8bf1a] bg-[#f1eee4] px-4 py-10 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="inline-flex flex-col items-start gap-2">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex items-center w-[68.78px] h-7 mt-[-1.00px] font-serif font-normal text-[#18361c] text-xl tracking-[0] leading-7 whitespace-nowrap">
                            Sarelys
                        </div>
                    </div>

                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative flex items-center max-w-xl mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-stone-500 text-sm tracking-[-0.35px] leading-5">
                            © 2024 Sarelys Confección Artesanal. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>

                <nav className="flex flex-wrap items-start justify-start gap-4 sm:gap-8 lg:justify-center">
                    {footerLinks.map((link) => (
                        <div
                            key={link.label}
                            className="inline-flex flex-col items-start self-stretch"
                        >
                            <a
                                href="#"
                                className={`relative flex items-center ${link.width} h-5 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-stone-500 text-sm tracking-[-0.35px] leading-5 whitespace-nowrap no-underline transition-colors hover:text-[#18361c]`}
                            >
                                {link.label}
                            </a>
                        </div>
                    ))}
                </nav>

                <div className="inline-flex items-center gap-4">
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="flex items-center justify-center w-5 h-5 text-stone-500 hover:text-[#18361c] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>

                    <a
                        href="#"
                        aria-label="Instagram"
                        className="flex items-center justify-center w-5 h-5 text-stone-500 hover:text-[#18361c] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>

                    <a
                        href="#"
                        aria-label="Pinterest"
                        className="flex items-center justify-center w-5 h-5 text-stone-500 hover:text-[#18361c] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                        >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.329-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.386-1.715-4.054-4.163-4.054-2.837 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.312-.244.995-.277 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                        </svg>
                    </a>

                    <a
                        href="#"
                        aria-label="TikTok"
                        className="flex items-center justify-center w-5 h-5 text-stone-500 hover:text-[#18361c] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                        >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};
