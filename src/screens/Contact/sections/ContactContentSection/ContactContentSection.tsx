import { useState } from "react";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.svg";
import icon from "./icon.svg";
import image from "./image.svg";
import vector from "./vector.svg";
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from "../../../../utils/whatsapp";

const scheduleData = [
    {
        day: "Lunes - Viernes",
        hours: "08:00 - 19:00",
        color: "#1c1c16",
        border: true,
    },
    {
        day: "Sabado",
        hours: "09:00 - 18:00",
        color: "#1c1c16",
        border: true,
    },
    {
        day: "Domingo",
        hours: "Cerrado por Horneado",
        color: "#715a3f",
        border: false,
    },
];

const subjectOptions = [
    "Consulta de Pedido Personalizado",
    "Informacion General",
    "Reservaciones",
    "Otro",
];

const CONTACT_WHATSAPP_URL = buildWhatsAppUrl("Hola, deseo mas informacion sobre sus productos");

export const ContactContentSection = () => {
    const [selectedSubject, setSelectedSubject] = useState(subjectOptions[0]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className="w-full px-4 pb-0 pt-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:pt-10">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="relative flex h-fit flex-col items-start gap-5 lg:flex-row lg:items-start lg:gap-7">
                    <div className="relative h-fit min-w-0 w-full rounded-xl border border-solid border-[#d7d9d333] bg-[#f5f5f3] p-6 shadow-[0px_1px_2px_#0000000d] sm:p-8 lg:w-2/3 lg:p-8">
                        <div className="relative flex w-full flex-col items-start gap-5 self-stretch">
                            <div className="grid h-fit w-full gap-5 md:grid-cols-2">
                                <div className="relative h-fit w-full">
                                    <div className="relative flex w-full flex-col items-start gap-2">
                                        <label className="relative flex items-center self-stretch [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[-0.2px] text-[#18361c]">
                                            Tu Nombre
                                        </label>

                                        <div className="relative flex h-[42px] w-full items-center border-b border-[#bfc4bd80] bg-[#ecece9] px-2 [border-bottom-style:solid]">
                                            <div className="relative flex grow flex-col items-start">
                                                <input
                                                    className="relative flex w-full items-center self-stretch border-none bg-transparent p-0 [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#1c1c16] outline-none placeholder:text-[#c2c8bf]"
                                                    placeholder="Julianne Smith"
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative h-fit w-full">
                                    <div className="relative flex w-full flex-col items-start gap-2">
                                        <label className="relative flex items-center self-stretch [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[-0.2px] text-[#18361c]">
                                            Correo Electronico
                                        </label>

                                        <div className="relative flex h-[42px] w-full items-center border-b border-[#bfc4bd80] bg-[#ecece9] px-2 [border-bottom-style:solid]">
                                            <input
                                                className="relative w-full grow self-stretch border-none bg-transparent p-0 [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#1c1c16] outline-none placeholder:text-[#c2c8bf]"
                                                placeholder="hello@sarelys.com"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex w-full flex-col items-start gap-2 self-stretch">
                                <label className="relative flex items-center self-stretch [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[-0.2px] text-[#18361c]">
                                    Asunto
                                </label>

                                <div className="relative h-[42px] w-full border-b border-[#bfc4bd80] bg-[#ecece9] [border-bottom-style:solid]">
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <div className="relative h-4 w-4">
                                            <img
                                                className="h-full w-full"
                                                alt="Vector"
                                                src={vector}
                                            />
                                        </div>
                                    </div>

                                    <select
                                        className="absolute left-0 top-0 flex h-full w-full appearance-none items-center border-none bg-transparent px-2 pr-10 [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#1c1c16] outline-none"
                                        value={selectedSubject}
                                        onChange={(e) => setSelectedSubject(e.target.value)}
                                    >
                                        {subjectOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="relative flex w-full flex-col items-start gap-2 self-stretch">
                                <label className="relative flex items-center self-stretch [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[-0.2px] text-[#18361c]">
                                    Mensaje
                                </label>

                                <div className="relative flex w-full items-start justify-center border-b border-[#bfc4bd80] bg-[#ecece9] px-2 py-3 [border-bottom-style:solid]">
                                    <div className="relative flex w-full grow flex-col items-start">
                                        <textarea
                                            className="relative flex min-h-[108px] w-full items-center self-stretch resize-none border-none bg-transparent p-0 [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#1c1c16] outline-none placeholder:text-[#c2c8bf]"
                                            placeholder="Cuentanos sobre tus antojos dulces..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="all-[unset] box-border relative inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#18361c] px-10 py-3.5 shadow-[0px_4px_8px_-2px_#18361c33]"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#ffffff01]" />

                                <div className="relative flex h-7 items-center justify-center [font-family:'Manrope-Bold',Helvetica] text-center text-lg font-bold leading-7 tracking-[0] text-white whitespace-nowrap">
                                    Enviar Mensaje
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="relative flex h-fit min-w-0 w-full flex-col items-start gap-4 lg:w-1/3 lg:gap-5">
                        <div className="relative flex w-full flex-col items-start gap-5 rounded-xl bg-[#f1eee4] p-5 sm:p-6 lg:p-7">
                            <div className="relative flex w-full flex-col items-start">
                                <div className="relative mt-[-1.00px] flex items-center self-stretch font-serif text-[36px] font-normal leading-10 tracking-[0] text-[#18361c] lg:text-[42px] lg:leading-[46px]">
                                    Boutique y Cocina
                                </div>
                            </div>

                            <div className="relative flex w-full flex-col items-start gap-5">
                                <a
                                    href={CONTACT_WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex w-full items-center gap-4 rounded-xl bg-[#18361c] p-4"
                                >
                                    <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-[#ffffff01] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />

                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#ffffff33]">
                                        <div className="relative inline-flex flex-col items-start">
                                            <img className="relative h-5 w-5" alt="Icon" src={icon} />
                                        </div>
                                    </div>

                                    <div className="relative flex min-w-0 w-full flex-col items-start">
                                        <div className="relative flex w-full flex-col items-start self-stretch opacity-80">
                                            <div className="relative mt-[-1.00px] flex items-center [font-family:'Manrope-SemiBold',Helvetica] text-[10px] font-semibold leading-4 tracking-[1.2px] text-white whitespace-nowrap sm:text-xs">
                                                CHATEA CON NOSOTROS
                                            </div>
                                        </div>

                                        <div className="relative flex w-full flex-col items-start self-stretch">
                                            <div className="relative mt-[-1.00px] flex items-center [font-family:'Manrope-Bold',Helvetica] text-sm font-bold leading-6 tracking-[0] text-white whitespace-nowrap sm:text-lg sm:leading-7">
                                                WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div className="relative flex w-full items-start gap-4 self-stretch">
                                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e2d9]">
                                        <div className="relative inline-flex flex-col items-start">
                                            <img
                                                className="relative h-[13.33px] w-[16.67px]"
                                                alt="Icon"
                                                src={image}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative flex min-w-0 w-full flex-col items-start">
                                        <div className="relative flex w-full flex-col items-start self-stretch">
                                            <div className="relative mt-[-1.00px] flex h-5 items-center [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[0] text-[#715a3f] whitespace-nowrap">
                                                Envianos un correo
                                            </div>
                                        </div>

                                        <div className="relative flex w-full flex-col items-start self-stretch">
                                            <div className="relative mt-[-1.00px] flex items-center [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#1c1c16] whitespace-nowrap">
                                                hello@sarelys-bakery.com
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex w-full items-start gap-4 self-stretch">
                                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e2d9]">
                                        <div className="relative inline-flex flex-col items-start">
                                            <img
                                                className="relative h-[16.67px] w-[13.33px]"
                                                alt="Icon"
                                                src={icon2}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative flex min-w-0 w-full flex-col items-start">
                                        <div className="relative flex w-full flex-col items-start self-stretch">
                                            <div className="relative mt-[-1.00px] flex h-5 items-center [font-family:'Manrope-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[0] text-[#715a3f] whitespace-nowrap">
                                                Visitanos
                                            </div>
                                        </div>

                                        <div className="relative flex w-full flex-col items-start self-stretch">
                                            <p className="relative mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#1c1c16]">
                                                122 Artisan Lane, Confectionery District
                                                <br />
                                                Paris, France 75001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex h-40 w-full flex-col items-start justify-center overflow-hidden rounded-xl bg-[#ffffff01] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] sm:h-44 lg:h-44">
                            <div className="relative h-full w-full grow flex-1 bg-[url(/ab6axudhcf0ab94yblvernaixvozfx76-4qr3fwrd3ypgobrelh-x9rnymawzsxdxdkuj-ckjzdotqfnxrqunfal6vjwnjtoib9v8rwoaqiy4h-wv2mgvurwy4gt3xdx3va-ffbl8h7rkndindqlkltsb7kuujyg6dy-h-mhk7j3k8y90qktqntsvgfcdslnsy9iaqi-xrsspbped-vqgwuyrhhwtzaksqxwdsjytg4vlcaifk55vujlet2lfsegxbqpnyabcfwwnhhjlwev.png)] bg-cover bg-[50%_50%]" />

                            <div className="absolute left-0 top-0 h-full w-full bg-[#18361c1a]" />

                            <div className="absolute bottom-4 left-4 inline-flex items-center gap-[7.99px] rounded-lg border border-solid border-[#c2c8bf4c] bg-[#fcf9efe6] px-4 py-2 backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                                <div className="relative inline-flex flex-col items-start">
                                    <img
                                        className="relative h-[11.67px] w-[11.67px]"
                                        alt="Icon"
                                        src={icon3}
                                    />
                                </div>

                                <div className="relative flex h-5 w-[98.48px] items-center [font-family:'Manrope-Bold',Helvetica] text-sm font-bold leading-5 tracking-[0] text-[#1c1c16] whitespace-nowrap">
                                    Abrir en Mapas
                                </div>
                            </div>
                        </div>

                        <div className="relative flex w-full flex-col items-start gap-2 px-2 py-0 lg:px-1">
                            <div className="relative flex w-full items-center gap-2 self-stretch">
                                <div className="relative h-2 w-2 rounded-full bg-[#715a3f]" />

                                <div className="relative mt-[-1.00px] flex h-6 items-center [font-family:'Manrope-Bold',Helvetica] text-base font-bold leading-6 tracking-[0] text-[#18361c] whitespace-nowrap">
                                    Horario de Cocina
                                </div>
                            </div>

                            <div className="relative flex w-full flex-col items-start gap-2 self-stretch">
                                {scheduleData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${item.border ? "border-b border-[#c2c8bf33] [border-bottom-style:solid]" : ""} relative flex w-full items-start justify-between self-stretch px-0 pb-1 pt-0`}
                                    >
                                        <div className="relative inline-flex flex-col items-start self-stretch">
                                            <div
                                                className="relative mt-[-1.00px] flex h-5 items-center [font-family:'Manrope-Regular',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#424841] whitespace-nowrap"
                                            >
                                                {item.day}
                                            </div>
                                        </div>

                                        <div className="relative inline-flex flex-col items-start self-stretch">
                                            <div
                                                className="relative mt-[-1.00px] flex h-5 items-center [font-family:'Manrope-Medium',Helvetica] text-sm font-medium leading-5 tracking-[0] whitespace-nowrap"
                                                style={{ color: item.color }}
                                            >
                                                {item.hours}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
