export const BrandStorySection = () => {
    return (
        <section className="w-full bg-[#f1eee4] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20 2xl:gap-24">
                <div className="relative order-2 flex w-full flex-col items-start gap-4 lg:order-1">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#715a3f] text-xs tracking-[1.20px] leading-4">
                            INGREDIENTES NATURALES
                        </div>
                    </div>

                    <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
                        <p className="relative self-stretch mt-[-1.00px] font-serif font-normal text-[#18361c] text-3xl leading-tight sm:text-4xl lg:text-5xl lg:leading-[60px]">
                            Creado con Amor,
                            <br />
                            Refinado por la
                            <br />
                            Tradición
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-[23.38px] pt-[15.25px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-base leading-7 lg:text-lg lg:leading-[29.2px]">
                                Sarelys comenzó como empiezan las mejores cosas: en una cocina familiar.
                                Entre ingredientes simples y manos que aprendían juntas, nació una pasión por crear algo más que postres: momentos.
                            </p>
                        </div>

                        <div className="flex flex-col items-start pt-0 pb-[0.62px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-base leading-7 lg:text-lg lg:leading-[29.2px]">
                                Lo que empezó como un gesto de cariño, hoy se transforma en cada creación que hacemos: postres que no solo saben bien, sino que conectan, acompañan y crean momentos.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-start gap-6 pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative flex items-center h-10 mt-[-1.00px] font-serif font-normal text-[#715a3f] text-3xl tracking-[0] leading-10 whitespace-nowrap sm:text-4xl">
                                    100%
                                </div>
                            </div>

                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative flex items-center h-4 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
                                    NATURAL INGREDIENTS
                                </div>
                            </div>
                        </div>

                        <div className="hidden h-12 w-px bg-[#c2c8bf] sm:block" />

                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative flex items-center h-10 mt-[-1.00px] font-serif font-normal text-[#715a3f] text-3xl tracking-[0] leading-10 whitespace-nowrap sm:text-4xl">
                                    48h
                                </div>
                            </div>

                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative flex items-center h-4 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
                                    FERMENTACIÓN
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative order-1 flex w-full flex-col items-start lg:order-2">
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#18361c0d] rounded-full blur-[32px]" />

                    <div className="relative self-stretch w-full min-h-[28rem] rounded-3xl shadow-[0px_25px_50px_-12px_#00000040] bg-[url(/our-story.png)] bg-cover bg-[50%_50%] xl:min-h-[42rem]" />

                    <div className="mt-6 inline-flex max-w-xs flex-col items-start rounded-2xl border border-solid border-[#e5e2d9] bg-white px-6 py-8 shadow-lg lg:absolute lg:-right-8 lg:-bottom-8 lg:mt-0 lg:px-8">
                        <div className="shadow-[0px_25px_50px_-12px_#00000040] absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl" />

                        <p className="relative w-full font-serif font-normal text-[#18361c] text-lg leading-[29.2px]">
                            &#34;Sarelys no es solo una
                            <br />
                            panadería; es un
                            <br />
                            renacimiento del arte lento e<br />
                            intencional en un mundo
                            <br />
                            acelerado.&#34;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
