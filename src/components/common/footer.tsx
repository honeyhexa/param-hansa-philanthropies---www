import { Guides, ZStack } from "@/components/misc";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { PHPLogo } from "./php-logo";
import Link from "next/link";

export const Footer = ({ theme = "dark" }) => (
  <ZStack className="text-[#4A1A51] bg-[#FAFAFA] dark:text-[#FAFAFA] dark:bg-[#4A1A51]" data-theme={theme}>
    <div className="w-full h-full m-auto max-w-6xl">
      <Guides />
    </div>
    <div className="flex flex-col">
      <div className="w-full h-full m-auto max-w-6xl py-32 grid grid-cols-4">
        <div className="flex flex-col col-start-1 col-span-1">
          <PHPLogo className="ml-2 h-20 w-20" />
          <p className="pl-2 font-schibsted font-bold tracking-[-0.04em] text-3xl leading-[1.0]">
            Param Hansa <br />
            <span className="opacity-50">Philanthropies</span>
          </p>
          {/* <p className="pl-2 pt-8 font-instrument text-xl">Supporting research where compute meets life.</p> */}
        </div>
        <div className="flex flex-col col-start-3 col-span-1">
          <ul className="flex flex-col pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
            {QUICK_LINKS.map((o, i) => (<Link className="first:opacity-50" key={i} href={o.href ?? "/"}>{o.label}</Link>))}
          </ul>
        </div>
        <div className="flex flex-col col-start-4 col-span-1">
          <ul className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
            <li className="opacity-50">Socials</li>
            <li>FaceBook</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>X (formerly twitter)</li>
          </ul>
        </div>
        <div className="mt-16 flex flex-col col-start-3 col-span-1">
        <ul className="flex flex-col pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
          {RESOURCES.map((o, i) => (<Link className="first:opacity-50" key={i} href={o.href ?? "/"}>{o.label}</Link>))}
          </ul>
        </div>
      </div>

      <InfiniteSlider className="border-t border-t-zinc-500/20">
        <p className="py-8 opacity-20 font-schibsted font-bold tracking-[-0.04em] text-8xl leading-[1.1]">
          Param Hansa Philanthropies. Param Hansa Philanthropies.
        </p>
      </InfiniteSlider>
    </div>
  </ZStack>
);

const QUICK_LINKS = [
  { label: "Quick Links" },
  { label: "Our Work", href: "/work" },
  { label: "Get Involved", href: "/work" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "About Us", href: "/about" },
];

const RESOURCES = [
  { label: "Resources" },
  { label: "Press", href: "/press" },
  { label: "Blog", href: "/blog" },
  { label: "Documents", href: "/documents" },
  { label: "Brand", href: "/brand" },
];