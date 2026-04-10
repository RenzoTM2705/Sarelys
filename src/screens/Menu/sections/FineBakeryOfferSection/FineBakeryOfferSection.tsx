const products = [
    {
        id: 1,
        image: "/croissant.png",
        name: "Croissant de Mantequilla",
        price: "€3.50",
        description: (
            <>
                48 horas de fermentación lenta con mantequilla
                <br />
                francesa AOP de alta calidad.
            </>
        ),
    },
    {
        id: 2,
        image: "/pain-au-chocolat.png",
        name: "Pain au Chocolat",
        price: "€4.20",
        description: (
            <>
                Hojaldre delicado relleno con dos barras de
                <br />
                chocolate negro 70% cacao de origen.
            </>
        ),
    },
    {
        id: 3,
        image: "/brioche.png",
        name: "Brioche Trenzada",
        price: "€6.00",
        description: (
            <>
                Masa enriquecida con yemas de huevo orgánico y<br />
                un toque sutil de vainilla de Tahití.
            </>
        ),
    },
];

export const FineBakeryOfferSection = () => {
    return (
        <section className="w-full bg-[#f7f4e9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
                <div className="flex w-full flex-col items-center gap-4 border-b border-[#c2c8bf4c] pb-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
                    <div className="font-serif text-3xl font-normal  leading-tight text-[#18361c] sm:text-4xl lg:text-5xl">
                        Bollería Fina
                    </div>

                    <div className="font-serif text-base leading-6 text-[#715a3f] sm:text-lg">
                        Crujiente &amp; Dorado
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative flex w-full max-w-md flex-col items-start gap-4 justify-self-center"
                        >
                            <div className="flex aspect-[4/5] w-full flex-col items-start justify-center overflow-hidden rounded-lg bg-white">
                                <div
                                    className="relative h-full w-full bg-cover bg-[50%_50%]"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                            </div>

                            <div className="flex w-full flex-col gap-2 pt-2 sm:flex-row sm:items-end sm:justify-between">
                                <div
                                    className="font-serif text-2xl leading-8 text-[#1c1c16]"
                                >
                                    {product.name}
                                </div>

                                <div
                                    className="font-serif text-base leading-6 text-[#18361c] sm:text-right"
                                >
                                    {product.price}
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-start pb-1 pt-0">
                                <p className="font-sans text-base leading-6 text-[#424841]">
                                    {product.description}
                                </p>
                            </div>

                            <button
                                className="all-[unset] box-border inline-flex items-center rounded-md bg-[#18361c] px-6 py-3"
                            >
                                <div className="font-sans text-sm font-normal leading-5 tracking-[1.40px] text-white">
                                    PEDIR POR WHATSAPP
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
