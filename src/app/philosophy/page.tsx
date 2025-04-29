import { Page } from "@/components/common/page";
import { Guides, ZStack } from "@/components/misc";
import { AnimatedLines } from "@/components/misc/animated-lines";
import Section from "@/components/misc/section";
import { HeroV2 } from "@/components/sections/hero/pages";
import { PILLARS } from "@/content/philosophy";

import { Inknut_Antiqua } from "next/font/google";

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

export default function Philosophy() {
  return (
    <Page headerProps={{ theme: "light" }}>
      <HeroV2
        lineOne={`A vision of <i>unity</i> — where`}
        lineTwo={`atoms and spirit converge.`}
        theme="light"
      />
      <ZStack>
        <video
          className="-mt-32 m-auto"
          src="/meditate.mp4"
          autoPlay
          muted
          loop
        />
        <div className="-mt-32 m-auto h-64 bg-linear-to-b from-[#FAFAFA] to-transparent"></div>
        <div className="-mt-64 m-auto h-32 bg-linear-to-t from-[#FAFAFA] to-transparent"></div>
      </ZStack>

      <ZStack>
        <div className="w-full h-full m-auto max-w-6xl">
          <Guides></Guides>
        </div>
        <div className="-mt-0 h-32 bg-linear-to-b from-[#FAFAFA] to-transparent"></div>
        <div className="-mt-32 h-32 bg-linear-to-t from-[#FAFAFA] to-transparent"></div>
        <div className="w-full m-auto max-w-6xl">
          <div className="">
            <AnimatedLines
              className="px-2 pr-12 py-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
              text="Meet our four pillars that don’t just guide us — they define us, they’re the gears of our operating system."
            />
          </div>
        </div>
      </ZStack>
      <Section>
        <table>
          <thead></thead>
          <tbody className="pb-64 flex flex-col">
            {PILLARS.map((o, i) => (
              <tr
                className="group grid grid-cols-8 h-32 border-b border-x border-x-zinc-500/20 border-b-zinc-500/20 first:border-t-zinc-500/20 first:border-t bg-[#FAFAFA] hover:bg-[#4A1A51] transition ease-in-out"
                key={i}
              >
                <th className="flex flex-col items-start justify-center">
                  <span className="ml-8 h-3 w-3 rounded-full bg-zinc-200" />
                </th>
                <th className="col-start-2 col-span-1 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-normal text-2xl leading-[1.2] -ml-8 ">
                  <span className={inknutAntiqua.className}>{o.value}</span>
                </th>
                <th className="col-start-3 col-span-1 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-instrument italic font-normal text-4xl leading-[1.2] ml-8">
                  {o.name}
                </th>
                <th className="col-start-5 col-span-3 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] ml-8">
                  {o.description}
                </th>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </Page>
  );
}