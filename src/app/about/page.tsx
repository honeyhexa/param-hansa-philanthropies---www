import { Page } from "@/components/common/page";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import { HeroV1 } from "@/components/sections/hero/pages";

export default function AboutPage() {
  return (
    <Page>
      <HeroV1
        lineOne="Who we are, why we are,"
        lineTwo="why do we do what we do."
      />
      <Section>
        <div className="">
          <AnimatedLines
            className="px-2 py-64 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="Our work creates ripples of progress, measurable impact through innovative research and powerful collaborations with leading institutions."
          />
        </div>
      </Section>
    </Page>
  );
}
