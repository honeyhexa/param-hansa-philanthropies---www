import { Page } from "@/components/common/page";
import Section from "@/components/misc/section";
import { APPLY_INDIVIDUAL_LINK, APPLY_ORGANIZATION_LINK } from "@/content/apply";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Page>
      <Section
        sectionProps={{
          className: "bg-[#4A1A51]",
        }}
      >
        <div className="border-x border-x-zinc-500/20">
          <div className="h-96 flex flex-col justify-between">
            <div></div>
            <div>
              <h1 className="px-2 text-center text-[#FAFAFA] font-instrument tracking-[-0.01em] text-7xl leading-[1.25]">
                Get Involved
              </h1>
              <p className="px-64 pb-16 text-center text-[#FAFAFA]/80 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2]">
                Discover latest in reports, whitepapers, and educational
                materials from our funded research and initiatives.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-2 my-32">
          <div className="border border-zinc-500/20 border-r-[0.5px] bg-white flex flex-col">
            <h2 className="text-center col-start-1 col-span-4 px-2 pt-16 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]">
              Individual
            </h2>
            <p className="text-center col-start-1 col-span-4 px-16 pt-4 pb-16 text-zinc-500 text-pretty font-schibsted font-semibold tracking-[-0.04em] text-base leading-[1.1]">
              Param Hansa Philanthropies offers funding and fellowships
              throughout the year to individuals and groups who share our
              commitment to transformative change. We support visionaries whose
              initiatives foster enduring societal impact.
            </p>
            <div className="flex-grow"></div>
            <Link href={APPLY_INDIVIDUAL_LINK} className="group col-start-3 col-span-1">
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-center px-2 py-4 border-t border-t-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  Apply as an individual <ArrowRight className="h-8 ml-4" />
                </>
              </div>
            </Link>
          </div>
          <div className="border border-zinc-500/20 border-l-[0.5px] bg-white flex flex-col">
            <h2 className="text-center col-start-1 col-span-4 px-2 pt-16 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]">
              Organization
            </h2>
            <p className="text-center col-start-1 col-span-4 px-16 pt-4 pb-16 text-zinc-500 text-pretty font-schibsted font-semibold tracking-[-0.04em] text-base leading-[1.1]">
              Param Hansa Philanthropies fosters collaborations with
              institutions year-round, partnering with those who share our
              dedication to transformative progress. We seek institutional
              allies with innovative visions, committed to driving sustainable
              societal impact.
            </p>
            <div className="flex-grow"></div>

            <Link href={APPLY_ORGANIZATION_LINK} className="group col-start-3 col-span-1">
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-center px-2 py-4 border-t border-t-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  Apply as an organization <ArrowRight className="h-8 ml-4" />
                </>
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </Page>
  );
}
