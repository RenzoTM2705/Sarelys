import { useState } from "react";

// import icon5 from "../../../../assets/icon5.svg";

export const TopNavigationSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { label: "PRODUCTOS", active: true },
        { label: "SOBRE NOSOTROS", active: false },
        { label: "CONTACTO", active: false },
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-[#c2c8bf26] bg-[#fcf9efcc] backdrop-blur-md backdrop-brightness-100 [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
            <div className="w-full px-4 py-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="flex items-center justify-between md:hidden">
                    <div className="inline-flex items-center gap-2">
                        <img
                            src="/sarelys.webp"
                            alt="Logo Sarelys"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="relative flex items-center h-8 [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                            Sarelys
                        </div>
                    </div>

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
                    <div className="inline-flex items-center gap-2">
                        <img
                            src="/sarelys.webp"
                            alt="Logo Sarelys"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="relative flex items-center h-8 [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                            Sarelys
                        </div>
                    </div>

                    <nav className="flex items-center gap-6 lg:gap-12">
                        {navLinks.map((link) =>
                            link.active ? (
                                <div
                                    key={link.label}
                                    className="inline-flex flex-col items-start border-b-2 border-[#18361c] pb-1 pt-0 px-0"
                                >
                                    <div className="relative flex items-center h-7 mt-[-2.00px] [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-base lg:text-lg tracking-[0.45px] leading-7 whitespace-nowrap">
                                        {link.label}
                                    </div>
                                </div>
                            ) : (
                                <div
                                    key={link.label}
                                    className="inline-flex flex-col items-start"
                                >
                                    <div className="relative flex items-center h-7 mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-stone-600 text-base lg:text-lg tracking-[0.45px] leading-7 whitespace-nowrap">
                                        {link.label}
                                    </div>
                                </div>
                            ),
                        )}
                    </nav>

                    <button className="all-[unset] box-border inline-flex flex-col items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 sm:px-6">
                        <div className="relative flex items-center justify-center h-5 mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                            Pedir Ahora
                        </div>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mt-3 rounded-xl border border-[#c2c8bf66] bg-[#fcf9ef] p-3 shadow-md md:hidden">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    type="button"
                                    className={`w-full rounded-lg px-3 py-2 text-left [font-family:'Noto_Serif-Regular',Helvetica] ${
                                        link.active
                                            ? "bg-[#18361c14] font-bold text-[#18361c]"
                                            : "text-stone-700"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <button className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#18361c] px-5 py-2 text-sm font-medium text-white">
                            Pedir Ahora
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};
