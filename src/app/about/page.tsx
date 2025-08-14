import { Page } from "@/components/common/page";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
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
          <AnimatedLines
            className="col-start-1 col-span-4 px-2 pb-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text={`Param Hansa Philanthropies (PHP) is Dheeraj and Swapna Pandey&apos;s
            private foundation
              registered under Section 501(c)(3) of US Internal Revenue Code
              aiming at improving human life through application of science and
              technology.`}
          />
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] border-b border-b-zinc-500/20">
          <div className="col-start-3 col-span-2 border-t border-t-zinc-500/20 px-2">
            <p className="bg-[#FAFAFA] text-zinc-500 pt-8 pb-16 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2]">
              Param Hansa Philanthropies Foundation (PHPF) India is registered
              as a Section 8 Non-Profit Company and the implementing partner of
              PHP USA.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="pt-64 grid grid-cols-4">
          <AnimatedLines
            className="col-start-1 col-span-4 px-2 pb-32 text-[#4A1A51] text-pretty font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="Our vision is to enhance the quality of human life through the power
            of science, complimented by innovations in technology."
          />
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
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
          <ProgressiveBlurBasic
              imgSrc="/amit-kumar-01.webp"
              name="Amit Kumar"
              role="Co-Founder"
            />
          </div>
          <div className="flex flex-col">
            <ProgressiveBlurBasic
              imgSrc="/rakesh-kumar-01.webp"
              name="Rakesh Kumar"
              role="Director"
            />
          </div>
          <div className="flex flex-col">
          <ProgressiveBlurBasic
              imgSrc="/adarsh-das-01.webp"
              name="Adarsh Das"
              role="Director"
            />
          </div>
        </div>
      </Section>
    </Page>
  );
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProgressiveBlurBasic(o: any) {
  return (
    <div className='border border-zinc-500/20 relative aspect-square w-full h-[40rem] overflow-hidden rounded-[4px]'>
      <Image
        src={o.imgSrc}
        alt={o.name}
        className='absolute inset-0 bg-white object-cover'
        height="2100"
        width="1800"
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-0 left-0 h-[25%] w-full'
        blurIntensity={2}
      />
      <div className='absolute bottom-0 left-0'>
        <div className='flex flex-col items-start gap-0 px-5 py-4'>
          <p className='text-xl font-medium text-[#4A1A51] drop-shadow-sm'>{o.name}</p>
          <span className='mb-2 text-base text-zinc-800/80'>{o.role}</span>
        </div>
      </div>
    </div>
  );
}
