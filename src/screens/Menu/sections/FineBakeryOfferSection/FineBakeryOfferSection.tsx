import { WhatsAppButton } from "../../../../components/WhatsAppButton";

const products = [
    {
        id: 1,
        image: "/postres_maracuya.webp",
        name: "Vasitos de Maracuya",
        price: "Desde €18.00",
        description: (
            <>
                Postre cremoso con cobertura de maracuya
                <br />
                y semillas naturales para eventos.
            </>
        ),
    },
    {
        id: 2,
        image: "/torta_mascotas.webp",
        name: "Torta Tematica Mascotas",
        price: "Desde €45.00",
        description: (
            <>
                Personalizada con figuras en fondant
                <br />
                para celebraciones unicas.
            </>
        ),
    },
    {
        id: 3,
        image: "/torta_verde_cumpleaños.webp",
        name: "Torta Jardin Encantado",
        price: "Desde €55.00",
        description: (
            <>
                Decoracion floral artesanal con acabado
                <br />
                premium para cumpleanos especiales.
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
                        Dulces por Encargo
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

                            <WhatsAppButton
                                message={`Hola, quiero pedir ${product.name}`}
                                className="all-[unset] box-border inline-flex items-center rounded-md bg-[#18361c] px-6 py-3 transition-colors duration-200 hover:cursor-pointer hover:bg-[#224928]"
                            >
                                <div className="font-sans text-sm font-normal leading-5 tracking-[1.40px] text-white">
                                    PEDIR POR WHATSAPP
                                </div>
                            </WhatsAppButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
