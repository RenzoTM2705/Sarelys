export const SignaturePastryGallerySection = () => {
    return (
        <section className="w-full bg-[#f7f4e9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
                <div className="flex w-full flex-col items-center border-b border-[#c2c8bf4c] pb-6 text-center lg:items-start lg:text-left">
                    <div className="font-serif text-3xl font-normal leading-tight text-[#18361c] sm:text-4xl lg:text-5xl">
                        Pastelería de Autor
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="flex w-full flex-col items-start gap-4 lg:col-span-8">
                        <div className="flex aspect-[1.78] w-full flex-col items-start justify-center overflow-hidden rounded-lg">
                            <div className="h-full w-full bg-[url(/fruit-tart.png)] bg-cover bg-[50%_50%]" />
                        </div>

                        <div className="flex w-full flex-col items-start gap-4 pt-2 sm:flex-row sm:items-end sm:justify-between">
                            <div className="flex flex-col items-start gap-2">
                                <div className="font-serif text-2xl leading-8 text-[#18361c] sm:text-3xl sm:leading-9">
                                    Tarta de Frambuesa y
                                    <br />
                                    Pistacho
                                </div>

                                <p className="font-sans text-base leading-6 text-[#424841]">
                                    Base de sablée crujiente, crema ligera de pistacho
                                    <br />
                                    siciliano y frambuesas frescas seleccionadas.
                                </p>
                            </div>

                            <div className="flex flex-col items-start sm:items-end">
                                <div className="font-serif text-2xl leading-8 text-[#18361c]">
                                    €32.00
                                </div>
                            </div>
                        </div>

                        <button className="all-[unset] box-border inline-flex items-center justify-center rounded-md bg-[#18361c] px-8 py-4 self-start sm:self-end">
                            <div className="font-sans text-sm leading-5 tracking-[1.40px] text-white">
                                    PEDIR POR WHATSAPP
                            </div>
                        </button>
                    </div>

                    <div className="flex w-full flex-col gap-6 lg:col-span-4">
                        <div className="flex aspect-[0.8] w-full flex-col items-start justify-end overflow-hidden rounded-lg">
                            <div className="h-full w-full bg-[url(/macarons.png)] bg-cover bg-[50%_50%]" />
                        </div>

                        <div className="flex w-full flex-col items-start gap-4">
                            <div className="font-serif text-2xl leading-8 text-[#18361c] sm:text-3xl">
                                Caja de Macarons
                            </div>

                            <p className="font-sans text-base leading-6 text-[#424841]">
                                Variedad de 6 sabores estacionales elaborados
                                <br />
                                con almendra de proximidad.
                            </p>

                            <button className="all-[unset] box-border inline-flex items-center justify-center border-b border-[#18361c] pb-1 pt-0">
                                <div className="font-sans text-base leading-6 text-[#18361c]">
                                    Consultar Sabores
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
