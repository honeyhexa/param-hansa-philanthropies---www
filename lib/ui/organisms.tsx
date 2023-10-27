import { PageContainer, Text, ZStack } from "@/ui";
import Image from "next/image";

export const HeroSection: React.FC<any> = (props) => {
  return (
    <>
      <PageContainer className="p-8 lg:p-16">
        <Text className="text-[2rem] lg:text-[7.5rem] font-semibold tracking-tight leading-none">Param Hansa<br /> Philanthropies</Text>
        <Text className="mt-4 lg:mt-8 text-base lg:text-4xl font-normal tracking-tight leading-none">Helping the new future.</Text>
      </PageContainer>
      <PageContainer>
        <Image className="w-full h-[36rem] lg:h-fit object-cover" src="/hero.png" height="1440" width="1920" alt="hero img" />
      </PageContainer>
    </>
  );
};

export const FooterSection: React.FC<any> = (props) => {
  return (
    <PageContainer>
      <ZStack>
        <Image className="w-full h-[36rem] lg:h-fit object-cover" src="/footer.png" height="1440" width="1920" alt="hero img" />
        <Text className="mt-8 lg:mt-16 ml-8 lg:ml-16 text-2xl lg:text-6xl font-semibold tracking-tight leading-none w-2/3">Philanthropies in biotech is the bridge between scientific progress and human well-being, where compassion meets innovation to pave the way for a healthier and more equitable world.</Text>
      </ZStack>
    </PageContainer>
  );
};