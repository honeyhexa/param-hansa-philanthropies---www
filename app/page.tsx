import { Button, FooterSection, HeroSection, PageContainer, Text } from "@/ui";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />

      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 lg:p-16">
          <Text size="4xl">
            Giving. Focused on research at the intersection of computing and
            life sciences, on ideas that harness the power of natural sciences
            to create better versions of our planet’s future.
          </Text>
        </div>
        <div className="p-6 lg:p-16 lg:border-l flex flex-col justify-between gap-4">
          <Text size="4xl">
          Join us on the journey.
          </Text>
          <div className="flex flex-row gap-4">
            <Button variant="primary">Contact us</Button>
            <Button variant="primary">us</Button>
            <Button variant="primary">us</Button>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-10 py-6 lg:py-16 border-y">
        <div className="col-span-6 h-96 md:h-[50rem]">
          <Image
            className="h-full w-full object-cover"
            width="1080"
            height="1080"
            src="/hero.png"
            alt=""
          />
        </div>
        <div className="col-span-4 p-6 lg:p-16">
          <Text size="3xl">Mission</Text>
          <Text size="6xl" className="mt-2">
            Foundation for change.
          </Text>
          <Text size="4xl" className="mt-2 lg:mt-4">
            ParamHansa Philanthropies embodies a noble vision, focusing on
            uplifting and enriching the lives of individuals and societies in
            need, exemplifying the ideals of selflessness and empathy. It stands
            as a powerful force for good, demonstrating an unwavering dedication
            to improving the well-being of humanity through its charitable
            actions and initiatives.
          </Text>
        </div>
      </PageContainer>

      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="p-6 lg:p-16">
          <Text size="3xl">We</Text>
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
        </div>
        <div className="p-6 lg:p-16 border-t lg:border-t-0 lg:border-l">
          <Text size="3xl">We</Text>
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
        </div>
        <div className="p-6 lg:p-16 border-t lg:border-t-0 lg:border-l">
          <Text size="3xl">We</Text>
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
        </div>
      </PageContainer>

      <PageContainer className="w-full flex flex-col border-y">
        <div className="p-6 lg:p-16">
          <Text size="3xl">Meet the</Text>
          <Text size="6xl" className="mt-2">
            People behind the curtain.
          </Text>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((o, i) => (
            <div key={i} className="flex flex-col">
              <Image
                className="h-96 object-cover"
                width="720"
                height="720"
                src="/hero.png"
                alt=""
              />
              <div className="flex flex-col p-6 lg:p-12 gap-2 lg:gap-4">
              <Text size="5xl">Dheeraj Pandey</Text>
              <Text size="2xl">
                Constant student of business & technology; beachcomber of people
                experiences; design worshipper. CeO of DevRev, Former CeO of
                Nutanix.
              </Text>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-10 py-6 lg:py-16 border-y">
        <div className="col-span-6 h-96 md:h-[50rem]">
          <Image
            className="h-full w-full object-cover"
            width="1080"
            height="1080"
            src="/hero.png"
            alt=""
          />
        </div>
        <div className="col-span-4 p-6 lg:p-16">
          <Text size="3xl">Mission</Text>
          <Text size="6xl" className="mt-2">
            Foundation for change.
          </Text>
          <Text size="4xl" className="mt-2 lg:mt-4">
            ParamHansa Philanthropies embodies a noble vision, focusing on
            uplifting and enriching the lives of individuals and societies in
            need, exemplifying the ideals of selflessness and empathy. It stands
            as a powerful force for good, demonstrating an unwavering dedication
            to improving the well-being of humanity through its charitable
            actions and initiatives.
          </Text>
        </div>
      </PageContainer>





      <PageContainer className="w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col items-stretch lg:items-start p-6 lg:p-16">
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
          <Button className="mt-4 lg:mt-8" variant="secondary"><Text size="2xl">Contact us</Text></Button>
        </div>
        <div className="flex flex-col items-stretch lg:items-start p-6 lg:p-16 border-t lg:border-t-0 lg:border-l">
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
          <Button className="mt-4 lg:mt-8" variant="secondary"><Text size="2xl">Contact us</Text></Button>
        </div>
        <div className="flex flex-col items-stretch lg:items-start p-6 lg:p-16 border-t lg:border-t-0 lg:border-l">
          <Text size="6xl" className="mt-2">
            Help
          </Text>
          <Text size="2xl" className="mt-2 lg:mt-4">
            Committed to nurturing a generation of innovators, researchers, and
            professionals who will contribute to a brighter future.
          </Text>
          <Button className="mt-4 lg:mt-8" variant="secondary"><Text size="2xl">Contact us</Text></Button>
        </div>
      </PageContainer>






      <FooterSection />
    </main>
  );
}
