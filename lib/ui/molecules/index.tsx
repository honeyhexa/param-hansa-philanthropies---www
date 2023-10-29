/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { cn } from "@/utils";
import { Brand, Button, PageContainer, Text } from "@/ui";
import Image from "next/image";

export { AnimatedLines } from "./AnimatedLines";
export { BigText } from "./BigText";

export const HoverImage: React.FC<any> = ({ className, ...rest }) => (
  <div className="overflow-hidden">
    <Image
      className={cn(
        className,
        "hover:scale-105 transition-all duration-500 ease-in-out"
      )}
      {...rest}
    />
  </div>
);

export const Header: React.FC = () => {
  return (
    <PageContainer>
      <div className="flex justify-between items-start self-stretch py-6 lg:py-12 px-8 lg:px-16">
        <div className="flex items-center gap-3">
          <Brand className="w-8 md:w-12 lg:w-16" />
        </div>
        <div className="hidden lg:flex flex-row gap-4 items-center">
          <Text className="px-3" size="3xl">
            Home
          </Text>
          <Text className="px-3" size="3xl">
            Resources
          </Text>
          <div className="flex items-start p-1 rounded-[0.875rem] border border-[#909090]/[.44] bg-[#ececec]/[.44]">
            <Text
              size="3xl"
              className="px-6 py-1 rounded-xl bg-[#131316] text-white"
            >
              IND
            </Text>
            <Text size="3xl" className="px-6 py-1 rounded-full text-[#1e1e21]">
              USA
            </Text>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <PageContainer className="">
        <div className="flex flex-col items-start gap-16 self-stretch p-8 lg:p-16 bg-black">
          <div className="flex flex-col md:flex-row items-start gap-8 self-stretch">
            <div className="flex flex-col items-start gap-2.5 w-[403px]">
              <div className="flex items-center gap-3">
                <svg
                  width={65}
                  height={50}
                  viewBox="0 0 65 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.0282 50H45.3779C45.9286 50 46.3061 49.445 46.1038 48.9327L41.1899 36.4942C39.9094 33.2059 37.3484 30.7396 34.2538 29.8001L27.1042 27.5687C24.0097 26.6291 21.5553 24.1629 20.1681 20.8745L13.232 3.14086C12.5917 1.37924 11.0978 0.322266 9.39045 0.322266H1.14702C0.596417 0.322266 0.218919 0.877051 0.421023 1.38923L8.10993 20.8745C9.39045 24.1629 11.9515 26.6291 15.0461 27.5687L22.1956 29.8001C25.2902 30.7396 27.7445 33.2059 29.1317 36.4942L33.2934 47.1814C33.9337 48.943 35.4276 50 37.0282 50Z"
                    fill="white"
                  />
                  <path
                    d="M37.0282 50H45.3779C45.9286 50 46.3061 49.445 46.1038 48.9327L41.1899 36.4942C39.9094 33.2059 37.3484 30.7396 34.2538 29.8001L27.1042 27.5687C24.0097 26.6291 21.5553 24.1629 20.1681 20.8745L13.232 3.14086C12.5917 1.37924 11.0978 0.322266 9.39045 0.322266H1.14702C0.596417 0.322266 0.218919 0.877051 0.421023 1.38923L8.10993 20.8745C9.39045 24.1629 11.9515 26.6291 15.0461 27.5687L22.1956 29.8001C25.2902 30.7396 27.7445 33.2059 29.1317 36.4942L33.2934 47.1814C33.9337 48.943 35.4276 50 37.0282 50Z"
                    fill="white"
                    style={{ mixBlendMode: "soft-light" }}
                  />
                  <path
                    d="M45.8851 32.971L51.434 47.1814C52.0743 48.943 53.5682 50 55.2756 50H63.6255C64.1762 50 64.5537 49.4451 64.3515 48.9329L58.05 32.971C56.7695 29.6826 54.2085 27.2164 51.1139 26.2768L43.9644 24.0454C40.8698 23.1059 38.4155 20.6396 37.0282 17.3513L31.4793 3.14086C30.8391 1.37924 29.3451 0.322266 27.6378 0.322266H19.2878C18.7372 0.322266 18.3597 0.877147 18.5619 1.38934L24.8633 17.3513C26.1438 20.6396 28.7049 23.1059 31.7995 24.0454L38.949 26.2768C42.0436 27.3338 44.4979 29.8001 45.8851 32.971Z"
                    fill="white"
                  />
                  <path
                    d="M45.8851 32.971L51.434 47.1814C52.0743 48.943 53.5682 50 55.2756 50H63.6255C64.1762 50 64.5537 49.4451 64.3515 48.9329L58.05 32.971C56.7695 29.6826 54.2085 27.2164 51.1139 26.2768L43.9644 24.0454C40.8698 23.1059 38.4155 20.6396 37.0282 17.3513L31.4793 3.14086C30.8391 1.37924 29.3451 0.322266 27.6378 0.322266H19.2878C18.7372 0.322266 18.3597 0.877147 18.5619 1.38934L24.8633 17.3513C26.1438 20.6396 28.7049 23.1059 31.7995 24.0454L38.949 26.2768C42.0436 27.3338 44.4979 29.8001 45.8851 32.971Z"
                    fill="white"
                    style={{ mixBlendMode: "soft-light" }}
                  />
                  <circle cx="51.3246" cy="10.7368" r="10.7368" fill="white" />
                  <circle
                    cx="51.3246"
                    cy="10.7368"
                    r="10.7368"
                    fill="white"
                    style={{ mixBlendMode: "soft-light" }}
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8 w-[800px]">
              <div className="flex flex-col flex-shrink-0 items-start gap-4">
                <Text size="3xl">Home</Text>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Mission
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Goals
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Shipping and payment
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Partners
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Opportunities
                  </Text>
                </div>
              </div>
              <div className="flex flex-col flex-shrink-0 items-start gap-4">
                <Text size="3xl">Resources</Text>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Gallery
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    Blogs
                  </Text>
                  <Text className="text-sm text-neutral-400" size="2xl">
                    News
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-[#c5c5c5]" />
          <div className="flex flex-col md:flex-row items-start gap-24 self-stretch">
            <Text className="text-neutral-400" size="2xl">
              To enhance the quality of human life through the power of science
              complimented by innovations in technology
            </Text>
            <div className="flex flex-row gap-4">
              <Button variant="secondary">Contact&nbsp;us</Button>
              <Button variant="secondary">us</Button>
              <Button variant="secondary">us</Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};
