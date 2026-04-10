export const SignaturePastryGallerySection = () => {
    return (
        <div className="flex flex-col max-w-screen-2xl items-start gap-20 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-end pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#c2c8bf4c]">
                <div className="inline-flex flex-col max-w-xl items-start relative flex-[0_0_auto]">
                    <div className="relative flex items-center w-[352.02px] h-10 mt-[-1.00px] [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-4xl tracking-[0] leading-10 whitespace-nowrap">
                        Pastelería de Autor
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 grid-rows-[638.98px] h-fit gap-12">
                <div className="relative row-[1_/_2] col-[9_/_13] w-full h-fit flex flex-col items-start pt-0 pb-[15.32px] px-0">
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden aspect-[0.8]">
                            <div className="relative self-stretch w-full h-[466.66px] bg-[url(/macarons.png)] bg-cover bg-[50%_50%]" />
                        </div>

                        <div className="flex items-start pt-4 pb-0 px-0 self-stretch w-full flex-col relative flex-[0_0_auto]">
                            <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-[#18361c] text-2xl tracking-[0] leading-8">
                                Caja de Macarons
                            </div>
                        </div>

                        <div className="flex flex-col items-start pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-base tracking-[0] leading-6">
                                Variedad de 6 sabores estacionales elaborados
                                <br />
                                con almendra de proximidad.
                            </p>
                        </div>

                        <button className="all-[unset] box-border justify-center pt-0 pb-1 px-0 border-b [border-bottom-style:solid] border-[#18361c] inline-flex items-center relative flex-[0_0_auto]">
                            <div className="justify-center w-[144.61px] h-6 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#18361c] text-base text-center tracking-[0] leading-6 relative flex items-center whitespace-nowrap">
                                Consultar Sabores
                            </div>
                        </button>
                    </div>
                </div>

                <div className="relative row-[1_/_2] col-[1_/_9] w-full h-fit flex flex-col items-start gap-[32.01px]">
                    <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden aspect-[1.78]">
                        <div className="relative self-stretch w-full h-[446.98px] bg-[url(/fruit-tart.png)] bg-cover bg-[50%_50%]" />
                    </div>

                    <div className="grid grid-cols-2 grid-rows-[160px] h-fit gap-8">
                        <div className="relative row-[1_/_2] col-[1_/_2] w-full h-fit flex flex-col items-start gap-4 pt-0 pb-6 px-0">
                            <div className="flex items-start self-stretch w-full flex-col relative flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-[#18361c] text-3xl tracking-[0] leading-9">
                                    Tarta de Frambuesa y<br />
                                    Pistacho
                                </div>
                            </div>

                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-base tracking-[0] leading-6">
                                    Base de sablée crujiente, crema ligera de pistacho
                                    <br />
                                    siciliano y frambuesas frescas seleccionadas.
                                </p>
                            </div>
                        </div>

                        <div className="relative row-[1_/_2] col-[2_/_3] w-full h-fit flex flex-col items-end justify-end pt-[60px] pb-0 px-0">
                            <div className="inline-flex flex-col items-start pt-0 pb-4 px-0 relative flex-[0_0_auto]">
                                <div className="w-[73.09px] h-8 mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-[#18361c] text-2xl tracking-[0] leading-8 relative flex items-center whitespace-nowrap">
                                    €32.00
                                </div>
                            </div>

                            <button className="all-[unset] box-border flex-col justify-center px-8 py-4 bg-[#18361c] rounded-md inline-flex items-center relative flex-[0_0_auto]">
                                <div className="justify-center w-[169.63px] h-5 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[1.40px] leading-5 relative flex items-center whitespace-nowrap">
                                    PEDIR POR WHATSAPP
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
