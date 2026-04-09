export const HeroSection = () => {
    return (
        <section className="w-full px-4 py-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 lg:flex-row lg:items-end lg:gap-12">
                <div className="flex w-full max-w-[624px] flex-col items-start gap-6">
                    <p className="relative mt-[-1.00px] flex items-center self-stretch text-sm font-medium leading-5 tracking-[4.20px] text-[#715a3f]">
                        LA CASA DE LA REPOSTERIA
                    </p>

                    <div className="relative self-stretch mt-[-1.00px] font-serif text-5xl font-normal leading-[60px] tracking-[0] text-[#18361c] sm:text-6xl sm:leading-[72px] lg:text-8xl lg:leading-[96px]">
                        El Alma de
                        <br />
                        Sarelys
                    </div>

                    <p className="max-w-xl [font-family:'Manrope-Regular',Helvetica] text-lg font-normal leading-8 tracking-[0] text-[#424841] sm:text-xl sm:leading-[32.5px]">
                        Una exploracion de herencia, ingredientes selectos y el arte de
                        la repostería.
                    </p>
                </div>

                <div className="relative h-[500px] w-full max-w-[416px] self-center lg:self-auto">
                    <div className="absolute left-0 top-0 h-[500px] w-full rotate-[1deg] rounded-xl bg-[url(/ab6axudu9c6-cxvice5d7w7eowxyg4fsm7qvgv3vj-uc6yjvnsnkjm4a9btgtqoljsmuqknmtqrduxlh8ig0ssk1retmakp-gpxorbueib5vf5gtprrjyr1jz84rckugsf37igvixv3kewsb4rpj83ujhlkxuoigklhjqqernylnjzvbapz4penctd-6a6gshinae4mjigqzxrgyufrmq0vwjdnrd60psqbkhjjohkiv8-2dnp3dt6h0awb2fiyubq3n7jgtt-7f6rjua7ho.png)] bg-cover bg-[50%_50%] shadow-[0px_1px_2px_#0000000d]" />

                    <div className="absolute -bottom-8 -left-8 flex h-32 w-32 items-start justify-center opacity-20 mix-blend-multiply">
                        <div className="relative h-full w-full flex-1 grow bg-[url(/ab6axuc3dwuc3bgm1phlk0-ruh2vqdezeishi12hudjphotds-6vun4a9q1dalmz-fnqqi9gvfxcn58mb9erfmxkzb0adod1sbxina6yvldntcd-yytucokdac3mxzjeweptfcyq6j089ekah7pfcwfcjvvk4cb-2jjqyum2whzih7lvubyhdvg5vlpulisbpfc6mkmmfubxecnkcw5s1ju7iujo6ohls-amjxvjrky3lwzkqk4ldme2ykac13phddwdpnndnsh9ydq0mywu.png)] bg-cover bg-[50%_50%]" />
                    </div>
                </div>
            </div>
        </section>
    );
};
