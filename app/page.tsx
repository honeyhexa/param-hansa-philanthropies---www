import { CAREERS, PEOPLE, WE_DO } from "@/content/home";
import { BigText, HoverImage } from "@/lib/ui/molecules";
import { AnimatedLines } from "@/lib/ui/molecules/AnimatedLines";
import { cn } from "@/utils";
import { Button, FooterSection, HeroSection, PageContainer, Text } from "@/ui";
import Image from "next/image";
import Carousel from "@/lib/ui/molecules/Swiper/Swiper";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />

      {/* SECTION TWO */}
      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 lg:p-16">
          <Text animateLines size="4xl">
            Giving. Focused on research at the intersection of computing and
            life sciences, on ideas that harness the power of natural sciences
            to create better versions of our planet’s future.
          </Text>
        </div>
        <div className="p-6 lg:p-16 lg:border-l flex flex-col justify-between gap-4">
          <Text size="4xl">Join us on the journey.</Text>
          <div className="flex flex-row gap-4">
            <Button variant="primary">Contact us</Button>
            <Button variant="primary">us</Button>
            <Button variant="primary">us</Button>
          </div>
        </div>
      </PageContainer>

      {/* SECTION THREE */}
      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-10 py-6 lg:py-16 border-y">
        <div className="col-span-6 h-96 md:h-[72rem]">
          <HoverImage
            className="h-full w-full object-cover"
            width="1080"
            height="1080"
            src="/assets/section-one.png"
            alt=""
          />
        </div>
        <div className="col-span-4 p-6 lg:p-16">
          <Text animateLines size="3xl">
            Mission
          </Text>
          <Text animateLines size="6xl" className="mt-2">
            Foundation for change.
          </Text>
          <Text
            animateLines
            size="4xl"
            className="text-neutral-500 mt-2 lg:mt-4"
          >
            ParamHansa Philanthropies embodies a noble vision, focusing on
            uplifting and enriching the lives of individuals and societies in
            need, exemplifying the ideals of selflessness and empathy. It stands
            as a powerful force for good, demonstrating an unwavering dedication
            to improving the well-being of humanity through its charitable
            actions and initiatives.
          </Text>
        </div>
      </PageContainer>

      {/* SECTION FOUR */}
      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-3">
        {WE_DO.map((o, i) => (
          <div
            key={i}
            className={cn("p-6 lg:p-16", {
              "border-t lg:border-t-0 lg:border-l": i > 0,
            })}
          >
            <Text animateLines size="3xl">
              {o.label}
            </Text>
            <Text animateLines size="6xl" className="mt-2">
              {o.title}
            </Text>
            <Text
              animateLines
              size="2xl"
              className="text-neutral-500 mt-2 lg:mt-4"
            >
              {o.desc}
            </Text>
          </div>
        ))}
      </PageContainer>

      {/* SECTION FIVE */}
      <PageContainer className="w-full flex flex-col border-y">
        <div className="p-6 lg:p-16">
          <Text animateLines size="3xl">
            Meet the
          </Text>
          <Text animateLines size="6xl" className="mt-2">
            People behind the curtain.
          </Text>
        </div>
        <PageContainer className="block lg:hidden">
          <Carousel>
            {PEOPLE.map((o, i) => (
              <div key={i} className="flex flex-col mb-16">
                <HoverImage
                  className="h-96 object-cover object-top"
                  width="1080"
                  height="1080"
                  src={o.src}
                  alt=""
                />
                <div className="flex flex-col p-6 lg:p-12 gap-2 lg:gap-4">
                  <Text animateLines size="5xl">
                    {o.name}
                  </Text>
                  <Text animateLines size="2xl" className="text-neutral-500">
                    {o.desc}
                  </Text>
                </div>
              </div>
            ))}
          </Carousel>
        </PageContainer>
        <PageContainer className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {PEOPLE.map((o, i) => (
              <div key={i} className="flex flex-col">
                <HoverImage
                  className="h-96 object-cover object-top"
                  width="720"
                  height="720"
                  src={o.src}
                  alt=""
                />
                <div className="flex flex-col p-6 lg:p-12 gap-2 lg:gap-4">
                  <Text animateLines size="5xl">
                    {o.name}
                  </Text>
                  <Text animateLines size="2xl" className="text-neutral-500">
                    {o.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageContainer>

      {/* SECTION SIX */}
      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-10 py-6 lg:py-16">
        <div className="col-span-4 p-6 lg:p-16">
          <Text animateLines size="3xl">
            Mission
          </Text>
          <Text animateLines size="6xl" className="mt-2">
            Foundation for change.
          </Text>
          <Text
            animateLines
            size="4xl"
            className="text-neutral-500 mt-2 lg:mt-4"
          >
            ParamHansa Philanthropies embodies a noble vision, focusing on
            uplifting and enriching the lives of individuals and societies in
            need, exemplifying the ideals of selflessness and empathy. It stands
            as a powerful force for good, demonstrating an unwavering dedication
            to improving the well-being of humanity through its charitable
            actions and initiatives.
          </Text>
        </div>
        <div className="col-span-6 h-96 md:h-[72rem]">
          <HoverImage
            className="h-full w-full object-cover"
            width="1080"
            height="1080"
            src="/assets/section-three.png"
            alt=""
          />
        </div>
      </PageContainer>

      {/* SECTION SEVEN */}
      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-10 py-6 lg:py-16 border-y">
        <div className="col-span-6 h-96 md:h-[72rem]">
          <HoverImage
            className="h-full w-full object-cover"
            width="1080"
            height="1080"
            src="/assets/section-one.png"
            alt=""
          />
        </div>
        <div className="col-span-4 p-6 lg:p-16">
          <Text animateLines size="3xl">
            Mission
          </Text>
          <Text animateLines size="6xl" className="mt-2">
            Foundation for change.
          </Text>
          <Text
            animateLines
            size="4xl"
            className="text-neutral-500 mt-2 lg:mt-4"
          >
            ParamHansa Philanthropies embodies a noble vision, focusing on
            uplifting and enriching the lives of individuals and societies in
            need, exemplifying the ideals of selflessness and empathy. It stands
            as a powerful force for good, demonstrating an unwavering dedication
            to improving the well-being of humanity through its charitable
            actions and initiatives.
          </Text>
        </div>
      </PageContainer>

      {/* SECTION EIGHT */}
      <PageContainer className="w-full flex flex-col">
        <div className="p-6 lg:p-16">
          <Text animateLines size="6xl" className="mt-2">
            Join us
          </Text>
        </div>
      </PageContainer>

      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-3 border-y">
        {CAREERS.map((o, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col items-stretch lg:items-start p-6 lg:p-16",
              {
                "border-t lg:border-t-0 lg:border-l": i > 0,
              }
            )}
          >
            <Text animateLines size="6xl" className="mt-2">
              {o.title}
            </Text>
            <Text
              animateLines
              size="2xl"
              className="text-neutral-500 mt-2 lg:mt-4"
            >
              {o.desc}
            </Text>
            <Button className="mt-4 lg:mt-8" variant="secondary">
              <Text animateLines size="2xl">
                {o.button.label}
              </Text>
            </Button>
          </div>
        ))}
      </PageContainer>

      <FooterSection />
    </main>
  );
}
