import icon3 from "./icon-3.svg";

export const SpecialCollectionsFeatureSection = () => {
    return (
        <section className="w-full bg-[#f1eee4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
                <div className="flex w-full flex-col items-center gap-4 text-center">
                    <div className="font-serif text-3xl font-normal leading-tight text-[#18361c] sm:text-4xl lg:text-5xl">
                            Colecciones Especiales
                        </div>

                    <div className="relative w-16 h-1 bg-[#715a3f]" />
                </div>

                <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative min-h-[24rem] w-full overflow-hidden rounded-2xl bg-white lg:col-span-2 lg:row-span-2">
                        <div className="absolute w-full h-full top-0 left-0 bg-[url(/torta_cumpleaños.webp)] bg-cover bg-[50%_50%]" />

                        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(24,54,28,0.8)_0%,rgba(24,54,28,0.2)_50%,rgba(24,54,28,0)_100%)]" />

                        <div className="absolute left-0 bottom-0 flex w-full flex-col gap-3 p-6 sm:p-8 lg:p-10">
                            <div className="flex w-full flex-col items-start">
                                <div className="font-serif text-xs leading-4 tracking-[1.20px] text-[#c7ecc6]">
                                    EDICIÓN LIMITADA
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-start">
                                <div className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Torta Feliz Cumpleanos
                                </div>
                            </div>

                            <div className="flex w-full max-w-md flex-col items-start pt-1 pb-3">
                                <p className="font-sans text-base leading-6 text-[#ffffffcc]">
                                    Diseno personalizado para celebrar los momentos mas especiales.
                                </p>
                            </div>

                            <button className="all-[unset] box-border inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3">
                                <div className="font-sans text-sm font-bold leading-5 tracking-[0.35px] text-[#18361c]">
                                    RESERVAR AHORA
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="relative min-h-[14rem] w-full overflow-hidden rounded-2xl bg-[#e5e2d9] lg:col-start-3 lg:row-start-1">
                        <div className="absolute w-full h-full top-0 left-0 opacity-90 bg-[url(/postre_2022.webp)] bg-cover bg-[50%_50%]" />

                        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end p-6 sm:p-8">
                            <div className="flex w-full flex-col items-start">
                                <div className="font-serif text-xl font-normal leading-7 text-[#18361c] sm:text-2xl">
                                    Especial 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[14rem] w-full overflow-hidden rounded-2xl bg-[#18361c] lg:col-start-3 lg:row-start-2">
                        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center sm:p-8">
                            <div className="flex flex-col items-center pb-4">
                                <img
                                    className="relative h-6 w-[33px]"
                                    alt="Icon"
                                    src={icon3}
                                />
                            </div>

                            <div className="flex flex-col items-center pb-2">
                                <div className="font-serif text-xl font-normal leading-7 text-white sm:text-2xl">
                                        Envíos Gourmet
                                    </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="font-sans text-xs leading-4 tracking-[1.20px] text-[#ffffff99]">
                                    A TODA LA PENÍNSULA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
