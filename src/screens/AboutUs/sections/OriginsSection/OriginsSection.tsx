export const OriginsSection = () => {
    return (
        <section className="w-full bg-[#f7f4e9] px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:py-32">
            <div className="mx-auto grid w-full max-w-screen-xl h-fit gap-16 lg:grid-cols-2 lg:gap-20">
                <div className="relative order-2 flex h-fit w-full flex-col items-start gap-[31px] self-center lg:order-2">
                    <div className="relative flex w-full flex-col items-start self-stretch border-l-4 border-[#18361c] py-0 pl-8 pr-0 [border-left-style:solid]">
                        <div className="relative mt-[-4.00px] flex h-10 w-[221.33px] items-center [font-family:'Noto_Serif-Regular',Helvetica] text-4xl font-normal leading-10 tracking-[0] text-[#18361c] whitespace-nowrap">
                            Los Origenes
                        </div>
                    </div>

                    <div className="relative flex w-full flex-col items-start gap-[23px] self-stretch">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-lg font-normal leading-[29.2px] tracking-[0] text-[#424841]">
                            Lo que comenzo como un pequeno horno familiar en el corazon del
                            campo se ha convertido en un destino para quienes buscan lo
                            extraordinario. Sarelys se fundo con la creencia de que un pastel no
                            es solo comida: es un recuerdo en proceso.
                        </p>

                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] text-lg font-normal leading-[29.2px] tracking-[0] text-[#424841]">
                            Hemos pasado decadas perfeccionando la proporcion de mantequilla y
                            harina, la temperatura exacta de una pera caramelizada y el
                            silencioso zumbido de una cocina al amanecer. Nuestra historia es de
                            paciencia, escrita en las capas de un milhojas.
                        </p>
                    </div>
                </div>

                <div className="relative order-1 flex h-fit w-full flex-col items-start self-center lg:order-1">
                    <div className="relative flex w-full aspect-[0.8] flex-col items-start justify-center self-stretch overflow-hidden rounded-xl bg-[#e5e2d9] shadow-[inset_0px_2px_4px_#0000000d]">
                        <div className="relative h-[630px] w-full self-stretch bg-[url(/ab6axubj6zdmub6rarjsjc-aaqqarxqqsl9t2mnlkut8i5m95zlhp5idqv-MK-0-91xiefcaoq92h5ip2xygxamgx8tdcalnokgbz6-a-rfhr96omijkuitq7x4m5-u7ih-ed7frzekywjpkeg757ap5dhyxrjns4m8ymdwzwzkdftysu9g4a6ol8xyewky05dmlhpd6xfvmzujuder-3i5yfolutdzvhrb1yrh0ge3e-i6pkf3jq1-omz4krlkksmnq5hklw0vouvajsum.png)] bg-cover bg-[50%_50%] opacity-80 mix-blend-luminosity" />
                    </div>

                    <div className="absolute -right-6 -top-6 flex h-36 w-36 rotate-[12deg] flex-col items-center justify-center rounded-full bg-[#18361c] p-8 sm:-right-10 sm:-top-10 sm:h-48 sm:w-48">
                        <div className="relative flex h-5 w-[27.28px] items-center justify-center [font-family:'Noto_Serif-DisplayRegular',Helvetica] text-center text-sm font-normal leading-5 tracking-[0] text-white sm:text-base">
                            Est.
                        </div>

                        <div className="relative flex h-5 w-[116.79px] items-center justify-center [font-family:'Noto_Serif-DisplayRegular',Helvetica] text-center text-sm font-normal leading-5 tracking-[0] text-white sm:text-base">
                            Mil novecientos
                        </div>

                        <div className="relative flex h-5 w-[100.1px] items-center justify-center [font-family:'Noto_Serif-DisplayRegular',Helvetica] text-center text-sm font-normal leading-5 tracking-[0] text-white sm:text-base">
                            Setenta y Dos
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
