const products = [
    {
        id: 1,
        image: "/croissant.png",
        name: "Croissant de Mantequilla",
        nameWidth: "w-[285.56px]",
        price: "€3.50",
        priceWidth: "w-[44.98px]",
        description: (
            <>
                48 horas de fermentación lenta con mantequilla
                <br />
                francesa AOP de alta calidad.
            </>
        ),
        imageHeight: "h-[373.33px]",
    },
    {
        id: 2,
        image: "/pain-au-chocolat.png",
        name: "Pain au Chocolat",
        nameWidth: "w-[191.28px]",
        price: "€4.20",
        priceWidth: "w-[44.94px]",
        description: (
            <>
                Hojaldre delicado relleno con dos barras de
                <br />
                chocolate negro 70% cacao de origen.
            </>
        ),
        imageHeight: "h-[373.33px]",
    },
    {
        id: 3,
        image: "/brioche.png",
        name: "Brioche Trenzada",
        nameWidth: "w-[203.02px]",
        price: "€6.00",
        priceWidth: "w-[46.78px]",
        description: (
            <>
                Masa enriquecida con yemas de huevo orgánico y<br />
                un toque sutil de vainilla de Tahití.
            </>
        ),
        imageHeight: "h-[373.34px]",
    },
];

export const FineBakeryOfferSection = () => {
    return (
        <div className="flex flex-col items-start px-0 py-20 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f4e9]">
            <div className="flex flex-col max-w-screen-2xl items-start gap-16 px-8 py-0 relative w-full flex-[0_0_auto]">
                <div className="flex items-baseline justify-between pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#c2c8bf4c]">
                    <div className="relative flex items-center w-[235.34px] h-10 mt-[-1.00px] [font-family:'Noto_Serif-Bold',Helvetica] font-bold text-[#18361c] text-4xl tracking-[0] leading-10 whitespace-nowrap">
                        Bollería Fina
                    </div>

                    <div className="w-[138.84px] h-6 [font-family:'Manrope-Regular',Helvetica] font-normal text-[#715a3f] text-base tracking-[0] leading-6 relative flex items-center whitespace-nowrap">
                        Crujiente &amp; Dorado
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-[561.34px] h-fit gap-12">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative w-full h-fit flex flex-col items-start gap-2"
                        >
                            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg overflow-hidden aspect-[1]">
                                <div
                                    className={`relative self-stretch w-full ${product.imageHeight} bg-cover bg-[50%_50%]`}
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                            </div>

                            <div className="pl-0 pr-[0.01px] pt-4 pb-0 flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                    className={`relative flex items-center ${product.nameWidth} h-8 mt-[-1.00px] [font-family:'Noto_Serif-Regular',Helvetica] font-normal text-[#1c1c16] text-2xl tracking-[0] leading-8 whitespace-nowrap`}
                                >
                                    {product.name}
                                </div>

                                <div
                                    className={`${product.priceWidth} h-6 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#18361c] text-base tracking-[0] leading-6 relative flex items-center whitespace-nowrap`}
                                >
                                    {product.price}
                                </div>
                            </div>

                            <div className="flex flex-col items-start pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
                                <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-base tracking-[0] leading-6">
                                    {product.description}
                                </p>
                            </div>

                            <button
                                className="all-[unset] box-border px-6 py-3 bg-[#18361c] rounded-md inline-flex items-center relative flex-[0_0_auto]"
                            >
                                <div className="justify-center w-[169.63px] h-5 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[1.40px] leading-5 relative flex items-center whitespace-nowrap">
                                    PEDIR POR WHATSAPP
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
