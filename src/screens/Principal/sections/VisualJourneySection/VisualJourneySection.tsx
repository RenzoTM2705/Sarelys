export const VisualJourneySection = () => {
    return (
        <section className="w-full bg-[#fcf9ef] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-16">
                <div className="flex w-full justify-center">
                    <div className="relative flex items-center justify-center font-serif text-[#18361c] text-3xl text-center leading-tight sm:text-4xl">
                        El Viaje Visual
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr] xl:items-start 2xl:gap-8">
                    <div className="relative h-[26rem] overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] lg:h-[44rem] xl:h-[56rem]">
                        <img
                            src="/postres_2022.webp"
                            alt="Coleccion 2022 de postres"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6">
                        <div className="relative h-80 overflow-hidden rounded-2xl shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] rotate-[-1.5deg] xl:h-[28rem]">
                            <img
                                src="/tortas_navidad.webp"
                                alt="Coleccion de tortas navidenas"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex items-start justify-start sm:col-span-2 xl:col-span-1">
                            <div className="flex flex-col gap-[15.5px] rounded-2xl bg-[#18361c] p-8 text-white shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] rotate-[1.5deg]">
                                <div className="shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl" />

                                <div className="flex flex-col self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <p className="font-serif font-normal text-xl leading-8">
                                        &#34;Nuestra filosofía es simple: la perfección en cada bocado.&#34;
                                    </p>
                                </div>

                                <div className="relative flex items-center opacity-70 font-serif font-normal text-white text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
                                    — CHEF DE PÂTISSERIE
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 overflow-hidden rounded-2xl shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] sm:col-span-2 xl:col-span-1 xl:h-[20rem]">
                            <img
                                src="/torta_verde_cumpleaños.webp"
                                alt="Torta verde decorada de cumpleanos"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="relative h-[24rem] overflow-hidden rounded-2xl border-8 border-white shadow-[0px_25px_50px_-12px_#00000040] sm:col-span-2 xl:col-span-1 xl:h-[28rem]">
                            <img
                                src="/postre_2022.webp"
                                alt="Postre tematico 2022"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
