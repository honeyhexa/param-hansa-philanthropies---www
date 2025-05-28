import { Page } from "@/components/common/page";
import { ZStack } from "@/components/misc";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { HeroV0 } from "@/components/sections/hero/pages";
import { LOGOS } from "@/content/home";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <HeroV0
        lineOne={`Supporting <i>research</i>`}
        lineTwo={`where compute meets life.`}
        primaryCTA={{
          label: (
            <>
              Who we are <ArrowRight className="h-8 mr-4" />
            </>
          ),
          href: "/about",
        }}
        secondaryCTA={{
          label: (
            <>
              What we do <ArrowRight className="h-8 mr-4" />
            </>
          ),
          href: "/work",
        }}
      />

      <Section contained={false}>
        <InfiniteSlider gap={24}>
          <p className="py-16 px-16 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-8xl leading-[1.1]">
            Progress should serve humanity, not just speed.{" "}
          </p>
        </InfiniteSlider>
      </Section>

      <Section>
        <div className="flex flex-col">
          <Image
            alt="dheeraj quote"
            className="p-16"
            src="/dheeraj-quote.png"
            width={3368}
            height={2217}
          />

          <AnimatedLines
            className="px-2 py-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="Param Hansa Philanthropies fuels discoveries that transcend disciplines at the nexus of computing and life sciences. We don’t follow trends—we build bridges to a future where technology serves life itself."
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] ">
          <div className="col-start-3 col-span-2 border-t border-t-zinc-500/20 px-2">
            <p className="bg-[#FAFAFA] pt-8 pb-16 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2] ">
              Through strategic partnerships and funding, we have enabled
              significant advancements in computational oncology, contributing
              to research & development in fight against cancer.
            </p>
          </div>
          <div className="col-start-3 col-span-2 border-t border-t-zinc-500/20 px-2 border-b border-b-zinc-500/20">
            <p className="bg-[#FAFAFA] pt-8 pb-16 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2] ">
              Additionally, by supporting young scientists, we are nurturing the
              next generation of innovators who will continue to push the
              boundaries of scientific knowledge.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-4">
          <Link
            href="/"
            className="group col-start-3 col-span-1"
          >
            <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
            <>
              Get Involved <ArrowRight className="h-8 mr-4" />
            </>
            </div>
          </Link>
        
      </div>
      </Section>

      <Section>
        <div className="">
          <AnimatedLines
            className="px-2 py-64 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="Our work creates ripples of progress, measurable impact through innovative research and powerful collaborations with leading institutions."
          />

          <div className="pb-32 grid grid-cols-4">
            {[...LOGOS].map((o, i) =>
              o ? (
                <ZStack className="group border-y border-y-zinc-500/20" key={i}>
                  <div className=" h-72 p-6 flex flex-col items-center justify-center text-[#4A1A51] group-hover:text-[#FAFAFA] transition ease-in-out">
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={o.src}
                      height={120}
                      width={160}
                    />
                  </div>
                </ZStack>
              ) : (
                <ZStack className="" key={i}>
                  <div className=" h-72 p-6 flex flex-col text-[#4A1A51] transition ease-in-out"></div>
                </ZStack>
              )
            )}
          </div>
        </div>
      </Section>
    </Page>
  );
}
