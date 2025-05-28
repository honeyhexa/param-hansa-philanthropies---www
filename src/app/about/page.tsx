import { Page } from "@/components/common/page";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import { HeroV1 } from "@/components/sections/hero/pages";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Page>
      <HeroV1
        lineOne="Who we are, why we are,"
        lineTwo="why do we do what we do."
      />
      <Section>
        <div className="grid grid-cols-4 pt-64">
          <h2 className="col-start-1 col-span-4 px-2 pb-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]">
            Param Hansa Philanthropies (PHP) is Dheeraj and Swapna Pandey&apos;s
            private foundation{" "}
            <span className="opacity-50">
              registered under Section 501(c)(3) of US Internal Revenue Code
              aiming at improving human life through application of science and
              technology.
            </span>
          </h2>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] border-b border-b-zinc-500/20">
          <div className="col-start-3 col-span-2 border-t border-t-zinc-500/20 px-2">
            <AnimatedLines
              className="bg-[#FAFAFA] text-zinc-500 pt-8 pb-16 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2] "
              text="Param Hansa Philanthropies Foundation (PHPF) India is registered
              as a Section 8 Non-Profit Company and the implementing partner of
              PHP USA."
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="pt-64 grid grid-cols-4">
          <h2 className="col-start-1 col-span-4 px-2 pb-32 text-[#4A1A51] text-pretty font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]">
            Our vision is to enhance the quality of human life through the power
            of science, complimented by innovations in technology.
          </h2>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] border-b border-b-zinc-500/20">
          <div className="col-start-3 col-span-2 border-t border-t-zinc-500/20 px-2">
            <p className="bg-[#FAFAFA] text-zinc-500 pt-8 pb-16 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2] ">
              Our mission is to collaborate and support research at the
              intersection of computing and life sciences besides the ideas that
              harness the power of natural sciences to create better versions of
              our society.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="pt-64 grid grid-cols-4">
          <h2 className="col-start-1 col-span-4 px-2 text-[#4A1A51] text-pretty font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]">
            Meet our leadership
          </h2>
        </div>
        <div className="flex flex-col col-start-1 col-span-4">
          <Image
            alt="dheeraj quote"
            className="p-16"
            src="/dheeraj-quote.png"
            width={3368}
            height={2217}
          />
          <p className="text-center">Dheeraj & Swapna Pandey</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <Image
              alt="dheeraj quote"
              className="p-16"
              src="/dheeraj-quote.png"
              width={3368}
              height={2217}
            />
            <p className="text-center">Amit Kumar</p>
          </div>
          <div className="flex flex-col">
            <Image
              alt="dheeraj quote"
              className="p-16"
              src="/dheeraj-quote.png"
              width={3368}
              height={2217}
            />
            <p className="text-center">Rakesh Kumar</p>
          </div>
          <div className="flex flex-col">
            <Image
              alt="dheeraj quote"
              className="p-16"
              src="/dheeraj-quote.png"
              width={3368}
              height={2217}
            />
            <p className="text-center">Adarsh Kumar</p>
          </div>
        </div>
      </Section>
    </Page>
  );
}
