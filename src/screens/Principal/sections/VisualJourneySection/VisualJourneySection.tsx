export const VisualJourneySection = () => {
    return (
        <section className="w-full bg-[#fcf9ef] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-16">
                <div className="flex w-full justify-center">
                    <div className="relative flex items-center justify-center [font-family:'Noto_Serif-DisplayRegular',Helvetica] font-normal text-[#18361c] text-3xl text-center leading-tight sm:text-4xl">
                        El Viaje Visual
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr] xl:items-start 2xl:gap-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-[url(/cake-close-up.png)] bg-cover bg-[50%_50%] min-h-[24rem] lg:min-h-[44rem] xl:min-h-[56rem]" />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6">
                        <div className="relative min-h-80 overflow-hidden rounded-2xl shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] bg-[url(/bakery-details.png)] bg-cover bg-[50%_50%] rotate-[-1.5deg] xl:min-h-[28rem]" />

                        <div className="flex items-start justify-start sm:col-span-2 xl:col-span-1">
                            <div className="flex flex-col gap-[15.5px] rounded-2xl bg-[#18361c] p-8 text-white shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] rotate-[1.5deg]">
                                <div className="shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-2xl" />

                                <div className="flex flex-col self-stretch w-full items-start relative flex-[0_0_auto]">
                                    <p className="[font-family:'Noto_Serif-DisplayRegular',Helvetica] font-normal text-xl leading-8">
                                        &#34;Nuestra filosofía es simple: la perfección en cada bocado.&#34;
                                    </p>
                                </div>

                                <div className="relative flex items-center opacity-70 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
                                    — CHEF DE PÂTISSERIE
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-64 overflow-hidden rounded-2xl shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] bg-[url(/fresh-bread.png)] bg-cover bg-[50%_50%] sm:col-span-2 xl:col-span-1 xl:min-h-[20rem]" />

                        <div className="relative min-h-[24rem] overflow-hidden rounded-2xl border-8 border-white shadow-[0px_25px_50px_-12px_#00000040] bg-[url(/bakery-details.png)] bg-cover bg-[50%_50%] sm:col-span-2 xl:col-span-1 xl:min-h-[28rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
};
