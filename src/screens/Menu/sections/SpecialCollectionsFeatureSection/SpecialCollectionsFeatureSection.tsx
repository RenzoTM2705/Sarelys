import icon3 from "./icon-3.svg";

export const SpecialCollectionsFeatureSection = () => {
    return (
        <div className="flex flex-col items-start px-0 py-24 relative self-stretch w-full flex-[0_0_auto] bg-[#f1eee4]">
            <div className="flex flex-col max-w-screen-2xl items-start gap-16 px-8 py-0 relative w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center self-stretch w-full flex-col relative flex-[0_0_auto]">
                        <div className="justify-center w-[411.92px] h-10 mt-[-1.00px] [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-4xl text-center tracking-[0] leading-10 relative flex items-center whitespace-nowrap">
                            Colecciones Especiales
                        </div>
                    </div>

                    <div className="relative w-16 h-1 bg-[#715a3f]" />
                </div>

                <div className="grid grid-cols-3 grid-rows-[300px_300px] h-fit gap-6 w-full">
                    <div className="row-[1_/_3] col-[1_/_3] bg-white relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute w-full h-full top-0 left-0 bg-[url(/gifting-box.png)] bg-cover bg-[50%_50%]" />

                        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(24,54,28,0.8)_0%,rgba(24,54,28,0.2)_50%,rgba(24,54,28,0)_100%)]" />

                        <div className="inline-flex flex-col items-start gap-2 p-10 absolute left-0 bottom-0">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="w-[119.34px] h-4 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#c7ecc6] text-xs tracking-[1.20px] leading-4 relative flex items-center whitespace-nowrap">
                                    EDICIÓN LIMITADA
                                </div>
                            </div>

                            <div className="flex items-start self-stretch w-full flex-col relative flex-[0_0_auto]">
                                <div className="w-[422.39px] h-10 mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-10 relative flex items-center whitespace-nowrap">
                                    Caja Tesoros de Invierno
                                </div>
                            </div>

                            <div className="flex flex-col max-w-md items-start pt-2 pb-4 px-0 relative w-full flex-[0_0_auto]">
                                <p className="w-[307.63px] h-6 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[0] leading-6 relative flex items-center whitespace-nowrap">
                                    Selección exclusiva diseñada para regalar.
                                </p>
                            </div>

                            <button className="all-[unset] box-border justify-center px-8 py-3 bg-white rounded-full inline-flex items-center relative flex-[0_0_auto] cursor-pointer">
                                <div className="justify-center w-[126.91px] h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#18361c] text-sm text-center tracking-[0.35px] leading-5 relative flex items-center whitespace-nowrap">
                                    RESERVAR AHORA
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="row-[1_/_2] col-[3_/_4] bg-[#e5e2d9] relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute w-full h-full top-0 left-0 opacity-80 bg-[url(/morning-set.png)] bg-cover bg-[50%_50%]" />

                        <div className="flex flex-col w-full h-full items-start justify-end p-8 absolute top-0 left-0">
                            <div className="flex items-start self-stretch w-full flex-col relative flex-[0_0_auto]">
                                <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-xl tracking-[0] leading-7">
                                    Desayuno &#39;Le Matin&#39;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-[2_/_3] col-[3_/_4] bg-[#18361c] relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="flex flex-col w-full h-full items-center justify-center p-8 relative">
                            <div className="inline-flex flex-col items-start pt-0 pb-4 px-0 relative flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-[33px] h-6"
                                        alt="Icon"
                                        src={icon3}
                                    />
                                </div>
                            </div>

                            <div className="inline-flex items-start pt-0 pb-2 px-0 flex-col relative flex-[0_0_auto]">
                                <div className="inline-flex items-center flex-col relative flex-[0_0_auto]">
                                    <div className="justify-center w-[153.69px] h-7 mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 relative flex items-center whitespace-nowrap">
                                        Envíos Gourmet
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                <div className="justify-center w-[145.47px] h-4 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#ffffff99] text-xs text-center tracking-[1.20px] leading-4 relative flex items-center whitespace-nowrap">
                                    A TODA LA PENÍNSULA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
