// import icon from "./icon.svg";
import { Link } from "react-router-dom";

const creations = [
    {
        id: 1,
        image: "/the-velvet-macaron.png",
        title: "El Macarrón Terciopelo",
        description: (
            <>
                &#34;Un momento fugaz de dulzura de almendra y<br />
                delicadas infusiones florales.&#34;
            </>
        ),
    },
    {
        id: 2,
        image: "/heritage-tart.png",
        title: "Tarta Herencia",
        description: (
            <>
                &#34;Bayas de temporada maduradas al sol en una cuna de
                <br />
                masa quebrada mantecosa y crujiente.&#34;
            </>
        ),
    },
    {
        id: 3,
        image: "/midnight-croissant.png",
        title: "Croissant de Medianoche",
        description: (
            <>
                &#34;Capas hojaldradas de masa dorada que ocultan un
                <br />
                corazón de cacao oscuro y rico.&#34;
            </>
        ),
    },
    {
        id: 4,
        image: "/the-velvet-macaron.png",
        title: "Macarrón de Vainilla",
        description: (
            <>
                &#34;Una versión suave y luminosa de nuestra firma
                <br />
                más delicada.&#34;
            </>
        ),
    },
    {
        id: 5,
        image: "/heritage-tart.png",
        title: "Tarta de Temporada",
        description: (
            <>
                &#34;Fruta fresca, crema fina y una base crujiente para
                <br />
                acompañar cualquier ocasión.&#34;
            </>
        ),
    },
    {
        id: 6,
        image: "/midnight-croissant.png",
        title: "Croissant de Cacao",
        description: (
            <>
                &#34;Hojaldre dorado con un centro intenso y
                <br />
                profundo.&#34;
            </>
        ),
    },
];

const WHATSAPP_NUMBER = "51977575107";

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

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero pedir ${creation.title}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center rounded-md bg-[#18361c] px-5 py-3 [font-family:'Manrope-Bold',Helvetica] text-xs font-bold tracking-[1.20px] text-white hover:bg-[#224928]"
                            >
                                PEDIR POR WHATSAPP
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuthorCreationsSection;
