import { ArrowRight } from "lucide-react";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";

export const NewsLetter = ({ theme = "light" }) => (
  <Section
    sectionProps={{
      className:
        "text-[#4A1A51] bg-[#FAFAFA] dark:text-[#FAFAFA] dark:bg-[#4A1A51]",
      "data-theme": theme,
    }}
  >
    <div className="flex flex-col">
      <div className="w-full h-full m-auto max-w-6xl py-40 border-t border-t-zinc-500/20">
        <AnimatedLines
          className="pl-2 pr-64 text-pretty font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.0]"
          text={`
          Stay ahead of the curve. <br/>
          Monthly insights on AI, genomics and ethical progress.
          `}
        />
        <div className="mt-16 grid grid-cols-4">
          <input
            className="col-start-1 col-span-3 p-2 font-schibsted font-semibold tracking-[-0.04em] text-5xl leading-[1.0] !outline-none border-b border-b-zinc-500/20"
            placeholder="Enter your email"
          />
          <div className="group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
            Enroll me <ArrowRight className="h-8 mr-4" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);
