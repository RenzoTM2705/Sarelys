import icon from "./icon.svg";
import image from "./image.svg";

export const PhilosophySection = () => {
    return (
        <section className="w-full px-4 pb-0 pt-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-20">
                <div className="flex w-full max-w-2xl flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-center">
                        <div className="relative mt-[-1.00px] flex h-12 items-center justify-center font-serif text-center text-4xl font-normal leading-[48px] tracking-[0] text-[#18361c] sm:text-5xl">
                            Nuestra Filosofia
                        </div>
                    </div>

                    <div className="flex w-full flex-col items-center">
                        <p className="relative mt-[-1.00px] flex items-center justify-center text-center [font-family:'Manrope-Regular',Helvetica] text-lg font-normal leading-7 tracking-[0] text-[#715a3f] sm:text-xl">
                            "Honestidad en cada ingrediente, belleza en cada miga."
                        </p>
                    </div>
                </div>

                <div className="grid h-fit w-full gap-6 lg:grid-cols-12 lg:grid-rows-[300px_300px_300px]">
                    <div className="relative flex h-full w-full flex-col items-start justify-center rounded-xl bg-[#18361c] p-8 lg:col-[9_/_13] lg:row-[1_/_2]">
                        <div className="relative flex w-full flex-col items-start px-0 pb-4 pt-0">
                            <img className="relative h-[25.54px] w-full self-stretch" alt="Icon" src={icon} />
                        </div>

                        <div className="relative flex w-full flex-col items-start px-0 pb-2 pt-0">
                            <div className="relative mt-[-1.00px] flex items-center self-stretch font-serif text-xl font-normal leading-7 tracking-[0] text-white">
                                Fermentacion Lenta
                            </div>
                        </div>

                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#9abd99]">
                            El tiempo es nuestro ingrediente mas valioso. Nuestras masas
                            reposan hasta 72 horas.
                        </p>
                    </div>

                    <div className="relative flex h-full w-full flex-col items-start justify-center rounded-xl bg-[#ebe8de] p-8 lg:col-[9_/_13] lg:row-[2_/_3]">
                        <div className="relative flex w-full flex-col items-start px-0 pb-4 pt-0">
                            <img className="relative h-[30px] w-full self-stretch" alt="Icon" src={image} />
                        </div>

                        <div className="relative flex w-full flex-col items-start px-0 pb-2 pt-0">
                            <div className="relative mt-[-1.00px] flex items-center self-stretch font-serif text-xl font-normal leading-7 tracking-[0] text-[#18361c]">
                                Poetica Visual
                            </div>
                        </div>

                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#424841]">
                            Creemos que comemos primero con los ojos. Cada pastel es una obra
                            escultorica.
                        </p>
                    </div>

                    <div className="relative flex h-full w-full items-center gap-8 rounded-xl bg-[#f1eee4] p-8 lg:col-[1_/_13] lg:row-[3_/_4] lg:gap-12 lg:p-12">
                        <div className="relative flex w-full flex-col items-start gap-4 lg:max-w-[613.33px]">
                            <div className="relative mt-[-1.00px] flex items-center self-stretch font-serif text-2xl font-normal leading-8 tracking-[0] text-[#18361c]">
                                El Mandato Estacional
                            </div>

                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#424841]">
                                Nuestro menu cambia con la luna y la cosecha. Cuando las fresas
                                alcanzan su punto maximo en junio, son nuestras estrellas. Cuando
                                las manzanas maduran en octubre, suben al escenario. No forzamos a
                                la naturaleza; la seguimos.
                            </p>
                        </div>

                        <div className="relative hidden w-full max-w-[330.66px] lg:block">
                            <div className="relative h-24 w-full rounded-lg bg-[url(/ab6axuaw3-m1hgskpexsc-GV-hss-7iqus1fuas-obybwiaudvul4zxwkbxx1pqsci6iz8qcrlmnjucigpmcn50ukxlaefnjbmqrstczx85r3muqwlg4an2hnorw1cb8wbdnkkwflwov3bikm8nnpyboe0ae8sa1-2reljn6aijqnvrrk4nwqf8qkj0akqfsauoansiit-dqz0waxcr-63gxortpemjsulxwlcewacer-vfndx3slbkd9v7uo96de4dmmgktxf4zlvmiemue.png)] bg-cover bg-[50%_50%]" />
                        </div>
                    </div>

                    <div className="relative flex h-full w-full flex-col items-start justify-end overflow-hidden rounded-xl bg-white p-8 lg:col-[1_/_9] lg:row-[1_/_3] lg:p-12">
                        <div className="absolute left-0 top-0 h-full w-full bg-[url(/ab6axucdju3q5jvyqkrbghfvwc5ulcddpx0e7bgrfpge-cmroy5y3prydztb4njceolve-mg2-q7coinxqtm-sczbiayyjgrxcjp8dvnc-q43guw-66rj5ubpol5zg7qrlamqkhq7oy7byytmdslpkzxjs5cojyyy701ik0n-zw0j7yrnqai26dgaws-y-rxbhyzw2arzvh9ai-rmnmdnws8ylclcxie9mr6vzthlzgxy95u3i84cnp0uw6dnrjxtj0ikpxrnztrgaptrzqa.png)] bg-cover bg-[50%_50%] opacity-10" />

                        <div className="relative flex w-full flex-col items-start gap-4">
                            <div className="relative mt-[-1.00px] flex items-center self-stretch font-serif text-3xl font-normal leading-9 tracking-[0] text-[#18361c]">
                                Procedencia del Producto
                            </div>

                            <p className="max-w-lg [font-family:'Manrope-Regular',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#424841]">
                                Nos asociamos con granjas regenerativas locales para nuestros
                                lacteos y frutas. Al honrar el suelo, honramos el sabor. Cada
                                grano de harina es molido a piedra para preservar su caracter
                                nutricional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
