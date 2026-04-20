// import icon from "./icon.svg";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "../../../../components/WhatsAppButton";

const creations = [
    {
        id: 1,
        image: "/torta_mascotas.webp",
        title: "Torta Tematica Mascotas",
        description: (
            <>
                &#34;Personalizada para consentir a los amantes de<br />
                cuatro patas en su dia especial.&#34;
            </>
        ),
    },
    {
        id: 2,
        image: "/postres_maracuya.webp",
        title: "Vasitos de Maracuya",
        description: (
            <>
                &#34;Suavidad y frescura tropical en porciones
                <br />
                perfectas para compartir.&#34;
            </>
        ),
    },
    {
        id: 3,
        image: "/tortas_navidad.webp",
        title: "Coleccion Navidena",
        description: (
            <>
                &#34;Disenos festivos para celebrar con color,
                <br />
                detalle y tradicion.&#34;
            </>
        ),
    },
    {
        id: 4,
        image: "/torta_verde_cumpleaños.webp",
        title: "Torta Jardin Encantado",
        description: (
            <>
                &#34;Una propuesta artistica con flores, texturas
                <br />
                y tonos naturales.&#34;
            </>
        ),
    },
    {
        id: 5,
        image: "/postres_2022.webp",
        title: "Mesa Dulce 2022",
        description: (
            <>
                &#34;Una composicion de postres para eventos
                <br />
                con presentacion inolvidable.&#34;
            </>
        ),
    },
    {
        id: 6,
        image: "/torta_cumpleaños.webp",
        title: "Torta Feliz Cumpleanos",
        description: (
            <>
                &#34;Elegante, limpia y personalizada para
                <br />
                homenajear a quien mas quieres.&#34;
            </>
        ),
    },
];

const AuthorCreationsSection = () => {
    return (
        <section className="w-full bg-[#f7f4e9] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center font-serif text-[#18361c] text-3xl leading-tight sm:text-4xl lg:text-5xl">
                            Nuestras Creaciones de Autor
                        </div>

                        <p className="max-w-2xl [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-sm leading-6 sm:text-base">
                            Cada pieza es un testimonio de nuestra dedicación al sabor y la
                            forma, curada para el paladar más exigente.
                        </p>
                    </div>


                    <Link
                        to="/menu"
                        className="all-[unset] box-border inline-flex items-center gap-2 self-start lg:self-auto"
                    >
                        <div className="relative flex items-center justify-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#18361c] text-sm text-center leading-6 sm:text-base whitespace-nowrap hover:cursor-pointer">
                            Ver Todas las Colecciones
                        </div>

                        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                            {/* <img className="relative w-4 h-3" alt="Icon" src={icon} /> */}
                        </div>
                    </Link>
                </div>

                <div className="grid justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-8">
                    {creations.map((creation) => (
                        <div
                            key={creation.id}
                            className="relative flex h-full w-full max-w-[24rem] flex-col items-start gap-2 rounded-xl bg-white px-4 pb-8 pt-4 shadow-sm"
                        >
                            <div className="w-full">
                                <div className="flex aspect-[4/5] w-full flex-col items-start justify-center overflow-hidden rounded-lg">
                                    <div
                                        className="relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]"
                                        style={{ backgroundImage: `url(${creation.image})` }}
                                    />
                                </div>

                                <div className="pt-4 pb-0 px-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative flex items-center self-stretch mt-[-1.00px] font-serif font-normal text-[#18361c] text-2xl tracking-[0] leading-8">
                                        {creation.title}
                                    </div>
                                </div>

                                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#424841] text-sm tracking-[0] leading-5">
                                        {creation.description}
                                    </p>
                                </div>
                            </div>

                            <WhatsAppButton
                                message={`Hola, quiero pedir ${creation.title}`}
                                className="mt-3 inline-flex items-center rounded-md bg-[#18361c] px-5 py-3 [font-family:'Manrope-Bold',Helvetica] text-xs font-bold tracking-[1.20px] text-white hover:bg-[#224928]"
                            >
                                PEDIR POR WHATSAPP
                            </WhatsAppButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuthorCreationsSection;
