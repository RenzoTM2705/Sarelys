import { Link } from "react-router-dom";
import { WhatsAppButton } from "../../../../components/WhatsAppButton";

export const HeroFeatureSection = () => {
    return (
        <section className="w-full bg-[#fcf9ef] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 xl:px-12 2xl:px-16">
            <div className="mx-auto grid w-full max-w-7xl gap-8 items-center md:grid-cols-2 lg:gap-10">

                {/* TEXTO */}
                <div className="flex flex-col gap-5 xl:max-w-2xl">

                    <div className="inline-flex items-center px-4 py-1 bg-[#fadab8] rounded-full w-fit">
                        <span className="text-xs font-semibold tracking-widest text-[#765e43]">
                            EXCELENCIA ARTESANAL
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif leading-[0.95]">
                        <span className="text-[#18361c]">El Arte de </span><br />
                        <span className="text-[#715a3f] italic">Sarelys</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-[#424841] leading-relaxed">
                        Elaborado artesanalmente con herencia y corazón.
                        Experimente el delicado equilibrio de textura y sabor
                        en cada miga artesanal.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* BOTÓN WHATSAPP */}
                        <WhatsAppButton
                            message="Hola, quiero mas informacion"
                            className="bg-[#18361c] text-white px-6 py-3 rounded-xl text-center"
                        >
                            Contactar por WhatsApp
                        </WhatsAppButton>

                        {/* BOTÓN MENÚ */}
                        <Link
                            to="/menu"
                            className="border-2 border-[#18361c] px-6 py-3 rounded-xl text-[#18361c] text-center"
                        >
                            Nuestro Menú
                        </Link>

                    </div>
                </div>

                {/* IMAGEN */}
                <div className="relative w-full xl:max-w-3xl xl:justify-self-end">
                    <div className="absolute inset-0 bg-[#ebe8de] rounded-3xl rotate-[-2deg]" />

                    <div className="relative w-full h-[360px] md:h-[500px] xl:h-[620px] overflow-hidden rounded-3xl border-[10px] border-white shadow-xl bg-[#f2efe6]">
                        <img
                            src="/torta_cumpleaños.webp"
                            alt="Torta azul de feliz cumpleaños"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md max-w-xs">
                        <p className="text-sm text-[#715a3f] italic font-serif">
                            "Detalles que celebran momentos unicos en cada pedido."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};