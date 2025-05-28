import { Guides, ZStack } from "@/components/misc";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import Link from "next/link";

export const HeroV0 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = "dark",
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <ZStack
    className="overfow-hidden overflow-clip dark:bg-[#4A1A51] dark:text-[#FAFAFA] bg-[#FAFAFA] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl">
      <Guides />
    </div>



    <div className="w-full h-full m-auto max-w-6xl flex flex-col items-center justify-center">
      <video
        className="brightness-75 rotate-55 contrast-100 scale-150 hue-rotate-90"
        autoPlay
        muted
        loop
      >
       
        {/* <source
          src="https://designed-cells.chipsa.design/video/r&d-sequence/r&d-sequence-2.webm"
          type="video/webm"
        /> */}
        {/* <source
          src="/about-sequence-2.webm"
          type="video/webm"
        /> */}
      </video>
    </div>
    



    
    <div className="w-full min-h-[60rem] h-screen max-h-[64rem] m-auto max-w-6xl">
      {lineOne && (
        <h1 className=" pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl drop-shadow-2xl">
          <AnimatedLines className="drop-shadow-xs" text={lineOne} />
        </h1>
      )}
      {lineTwo && (
        <h1 className=" pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
          <AnimatedLines animationDelay={0.07} text={lineTwo} />
        </h1>
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-1 lowercase">
          Synthetic Cells, <br />
          Sacred Code
        </p>
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-4 col-span-1 lowercase">
          Engineering Life <br />
          with Integrity.
        </p>
      </div>

      <div className="mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-3 col-span-1"
          >
            <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {primaryCTA?.label}
            </div>
          </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-4 col-span-1"
          >
            <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {secondaryCTA.label}
            </div>
          </Link>
        )}
      </div>
    </div>
  </ZStack>
);

export const HeroV1 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = "dark",
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <Section
    contained={false}
    sectionProps={{
      className:
        "dark:bg-[#4A1A51] dark:text-[#FAFAFA] bg-[#FAFAFA] text-[#4A1A51]",
      "data-theme": theme,
    }}
  >
    <div className="w-full min-h-[60rem] h-screen max-h-[64rem] m-auto max-w-6xl">
      {lineOne && (
        <h1 className="pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl">
          <AnimatedLines text={lineOne} />
        </h1>
      )}
      {lineTwo && (
        <h1 className="pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
          <AnimatedLines animationDelay={0.07} text={lineTwo} />
        </h1>
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-1 lowercase">
          Synthetic Cells, <br />
          Sacred Code
        </p>
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-4 col-span-1 lowercase">
          Engineering Life <br />
          with Integrity.
        </p>
      </div>

      <div className="mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-3 col-span-1"
          >
            <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {primaryCTA?.label}
            </div>
          </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-4 col-span-1"
          >
            <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {secondaryCTA.label}
            </div>
          </Link>
        )}
      </div>
    </div>
  </Section>
);

export const HeroV2 = ({
  lineOne,
  lineTwo,
  theme = "light",
}: {
  lineOne: string;
  lineTwo: string;
  theme?: string;
}) => (
  <ZStack
    className="dark:bg-[#4A1A51] dark:text-[#FAFAFA] bg-[#FAFAFA] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl">
      <Guides />
    </div>
    <div className="w-full min-h-[60rem] h-screen max-h-[64rem] m-auto max-w-6xl">
      {lineOne && (
        <h1 className="pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl">
          <AnimatedLines text={lineOne} />
        </h1>
      )}
      {lineTwo && (
        <h1 className="pr-2 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
          <AnimatedLines animationDelay={0.07} text={lineTwo} />
        </h1>
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 lowercase">
          Paramhansa Yogananda’s timeless teachings remind us that true progress
          harmonizes the material and the divine. At param hansa philanthropies,
          we channel his wisdom to ensure technology serves not just humanity,
          but the sanctity of life itself.
        </p>
      </div>
    </div>
  </ZStack>
);
