import { useState } from "react";
// import icon2 from "./icon-2.svg";
// import icon3 from "./icon-3.svg";
// import icon4 from "./icon-4.svg";

export const CustomOrderSection = ()=> {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        fecha: "",
        detalles: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const contactInfo = [
        {
            // icon: icon2,
            iconClass: "relative w-4 h-5",
            text: "124 Artisans Lane, Paris, FR 75001",
            textWidth: "w-[273.39px]",
        },
        {
            // icon: icon3,
            iconClass: "relative w-5 h-4",
            text: "hello@sarelys.com",
            textWidth: "w-[156.13px]",
        },
    ];

    return (
        <section className="w-full bg-[#18361c] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 2xl:gap-20">
                {/* Left Column */}
                <div className="relative flex w-full flex-col items-start gap-8">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <h2 className="relative self-stretch mt-[-1.00px] font-serif font-normal text-white text-3xl leading-tight sm:text-4xl lg:text-6xl lg:leading-[60px]">
                            Pida su Dulce
                            <br />
                            Personalizado
                        </h2>
                    </div>

                    <div className="flex flex-col max-w-md items-start relative flex-[0_0_auto]">
                        <p className="relative mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#acd0ab] text-base leading-7 sm:text-lg lg:text-xl">
                            ¿Planea una celebración o un momento de
                            autoindulgencia? Hable directamente con nuestro maestro
                            pastelero para crear una obra maestra a la medida de su paladar.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-6 px-0 py-4 relative self-stretch w-full flex-[0_0_auto]">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                            >
                                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                    {/* <img className={item.iconClass} alt="Icon" src={item.icon} /> */}
                                </div>
                                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                                    <span
                                        className={`relative flex items-center ${item.textWidth} min-h-7 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-base leading-7 sm:text-lg whitespace-normal`}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/message"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25d366] px-6 py-5 no-underline sm:w-auto sm:px-10"
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0px_25px_50px_-12px_#00000040] bg-[#ffffff01]" />
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                            {/* <img className="relative w-5 h-5" alt="Icon" src={icon4} /> */}
                        </div>
                        <span className="relative flex items-center justify-center mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-lg text-center leading-7 whitespace-nowrap sm:text-xl">
                            Mensaje por WhatsApp
                        </span>
                    </a>
                </div>

                {/* Right Column - Form */}
                <div className="relative flex w-full flex-col items-start gap-6 rounded-3xl bg-white px-4 py-8 sm:px-6 lg:px-10 lg:pt-10 lg:pb-14 xl:px-12">
                    <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-3xl shadow-[0px_25px_50px_-12px_#00000040]" />

                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative flex items-center self-stretch mt-[-1.00px] font-serif font-normal text-[#18361c] text-2xl tracking-[0] leading-8">
                            Formulario de Consulta
                        </h3>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                    >
                        <div className="grid h-fit w-full gap-4 md:grid-cols-2">
                            {/* Nombre */}
                            <div className="relative w-full h-fit flex flex-col items-start gap-2">
                                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <label
                                        htmlFor="nombre"
                                        className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-stone-500 text-xs tracking-[0] leading-4"
                                    >
                                        NOMBRE
                                    </label>
                                </div>
                                <div className="px-4 py-[17px] flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#f1eee4] rounded-xl overflow-hidden">
                                    <div className="flex flex-col items-start relative flex-1 grow">
                                        <input
                                            id="nombre"
                                            name="nombre"
                                            type="text"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Su nombre"
                                            className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-[normal] bg-transparent outline-none w-full placeholder-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Correo Electrónico */}
                            <div className="relative w-full h-fit flex flex-col items-start gap-2">
                                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <label
                                        htmlFor="correo"
                                        className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-stone-500 text-xs tracking-[0] leading-4"
                                    >
                                        CORREO ELECTRÓNICO
                                    </label>
                                </div>
                                <div className="px-4 py-[17px] flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#f1eee4] rounded-xl overflow-hidden">
                                    <div className="flex flex-col items-start relative flex-1 grow">
                                        <input
                                            id="correo"
                                            name="correo"
                                            type="email"
                                            value={formData.correo}
                                            onChange={handleChange}
                                            placeholder="Su correo electrónico"
                                            className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-[normal] bg-transparent outline-none w-full placeholder-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fecha del Evento */}
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="fecha"
                                    className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-stone-500 text-xs tracking-[0] leading-4"
                                >
                                    FECHA DEL EVENTO
                                </label>
                            </div>
                            <div className="p-4 flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#f1eee4] rounded-xl overflow-hidden">
                                <div className="flex items-center relative flex-1 grow">
                                    <div className="flex items-start relative flex-1 grow">
                                        <input
                                            id="fecha"
                                            name="fecha"
                                            type="date"
                                            value={formData.fecha}
                                            onChange={handleChange}
                                            className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#1c1c16] text-base tracking-[0] leading-6 bg-transparent outline-none w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detalles */}
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="detalles"
                                    className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-stone-500 text-xs tracking-[0] leading-4"
                                >
                                    DETALLES
                                </label>
                            </div>
                            <div className="flex items-start justify-center pt-4 pb-[88px] px-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f1eee4] rounded-xl overflow-hidden">
                                <div className="flex flex-col items-start relative flex-1 grow">
                                    <textarea
                                        id="detalles"
                                        name="detalles"
                                        value={formData.detalles}
                                        onChange={handleChange}
                                        placeholder="Cuéntenos sobre su pastel ideal..."
                                        className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent outline-none w-full resize-none placeholder-gray-500"
                                        rows={1}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="all-[unset] box-border flex items-center justify-center px-0 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#18361c] rounded-xl cursor-pointer"
                        >
                            <span className="relative flex items-center justify-center mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                                Enviar Solicitud
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
