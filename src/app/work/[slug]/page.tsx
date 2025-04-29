import { Page } from "@/components/common/page";
import { BlockContent } from "@/components/misc/portable-text";
import Section from "@/components/misc/section";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { postQuery } from "@/sanity/lib/queries";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ArticlePage(props: any) {
  const params = await props.params;
  const [{ data: post }] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <Page headerProps={{ theme: "light" }}>
      <Section
        sectionProps={{
          className:
            "bg-[#FAFAFA] text-[#4A1A51] border-b border-b-zinc-500/20",
        }}
        guides={false}
      >
        <div className="flex flex-col items-center">
          <div className="pt-40 mb-8 w-full m-auto max-w-xl flex flex-row items-center justify-start">
            <Link
              href="/blog"
              className="dark:bg-transparent dark:text-[#4A1A51] bg-[#4A1A51] text-[#FAFAFA]"
              data-theme="dark"
            >
              <div className="group-hover:bg-[#4A1A51] group-hover:text-[#FAFAFA] flex flex-row items-center justify-between px-2 py-4 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <ArrowLeft className="h-6 mr-2" /> Blog
              </div>
            </Link>
          </div>
          <h1 className="pb-16 max-w-6xl text-[#4A1A51] text-center font-instrument tracking-[-0.01em] text-7xl leading-[1.1]">
            {post.title}
          </h1>
          <Image
            className="w-full aspect-[16/9] object-cover"
            src={urlFor(post.mainImage).url()}
            alt="article hero"
            height="1080"
            width="1920"
          />
          <p className="pt-16 pb-8 text-sm text-center text-[#4A1A51]/50 font-schibsted font-medium tracking-[-0.02em] ">
            Last edited - March 20, 2025
          </p>
        </div>
      </Section>
      <Section>
        <div className="w-full m-auto max-w-xl pb-32 bg-[#FAFAFA]">
          <div
            className={`px-2 
          [&>h2]:py-12 [&>h2]:text-3xl [&>h2]:text-[#4A1A51] [&>h2]:font-schibsted [&>h2]:font-semibold [&>h2]:tracking-[-0.04em]
          [&>h3]:py-8 [&>h3]:text-xl [&>h3]:text-[#4A1A51] [&>h3]:font-schibsted [&>h3]:font-semibold [&>h3]:tracking-[-0.02em]
          [&>p]:pb-0 [&>p]:text-lg [&>p]:text-[#4A1A51]/90 [&>p]:font-schibsted [&>p]:font-medium [&>p]:tracking-[-0.02em] [&>p]:leading-7
          [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:py-2 [&>ul>li]:text-lg [&>ul>li]:text-[#4A1A51]/90 [&>ul>li]:font-schibsted [&>ul>li]:font-medium [&>ul>li]:tracking-[-0.02em] [&>ul>li]:leading-7
          `}
          >
            <BlockContent value={post.body} />
          </div>
        </div>
      </Section>
    </Page>
  );
}
