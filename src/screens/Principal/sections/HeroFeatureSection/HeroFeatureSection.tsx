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
                        <span className="text-[#18361c]">El Arte de la</span><br />
                        <span className="text-[#715a3f]">Alquimia</span><br />
                        <span className="text-[#18361c]">Dulce</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-[#424841] leading-relaxed">
                        Elaborado artesanalmente con herencia y corazón.
                        Experimente el delicado equilibrio de textura y sabor
                        en cada miga artesanal.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* BOTÓN WHATSAPP */}
                        <a
                            href="https://wa.me/519XXXXXXXX"
                            target="_blank"
                            className="bg-[#18361c] text-white px-6 py-3 rounded-xl text-center"
                        >
                            Contactar por WhatsApp
                        </a>

                        {/* BOTÓN MENÚ */}
                        <button className="border-2 border-[#18361c] px-6 py-3 rounded-xl text-[#18361c]">
                            Nuestro Menú
                        </button>

                    </div>
                </div>

                {/* IMAGEN */}
                <div className="relative w-full xl:max-w-3xl xl:justify-self-end">
                    <div className="absolute inset-0 bg-[#ebe8de] rounded-3xl rotate-[-2deg]" />

                    <div className="relative w-full h-[360px] md:h-[500px] xl:h-[620px] bg-gray-300 rounded-3xl border-[10px] border-white shadow-xl" />

                    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md max-w-xs">
                        <p className="text-sm text-[#715a3f] italic">
                            "Un empaque tan exquisito como su contenido."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};