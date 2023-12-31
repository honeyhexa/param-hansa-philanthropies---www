import { cn, cva } from "@/utils";
import { Element } from "@/ui";
import { AnimatedLines } from "@/ui";

const text = cva("text", {
  variants: {
    size: {
      "7.5rem": [
        "text-[2rem] md:text-[4rem] lg:text-[7.5rem]",
        "font-semibold",
        "tracking-tight",
        "leading-none",
      ],
      "7xl": ["text-7xl"],
      "6xl": [
        "text-2xl lg:text-6xl",
        "font-semibold",
        "tracking-tight",
        "leading-tight",
      ],
      "5xl": [
        "text-base lg:text-5xl",
        "font-semibold",
        "tracking-tight",
        "leading-tight",
      ],
      "4xl": [
        "text-base md:text-2xl lg:text-4xl",
        "font-regular",
        "tracking-tight",
        "leading-tight",
      ],
      "3xl": ["text-sm lg:text-[2rem] font-semibold leading-[120%]"],
      "2xl": ["text-base lg:text-2xl", "leading-tight"],
      xl: ["text-xl"],
      lg: ["text-lg"],
      md: ["text-md"],
      base: ["text-base"],
      sm: ["text-sm"],
      xs: ["text-xs"],
    },
  },
  compoundVariants: [{ size: "base" }],
  defaultVariants: {
    size: "base",
  },
});

export const Text: React.FC<any> = ({ as = "p", size, animateLines = false, className, children, ...rest }) => {
  let updatedChildren = children
  if(animateLines) {
    updatedChildren = <AnimatedLines text={children} />
  }
  return (
    <Element as={as} className={cn(text({ size }), className)} {...rest}>{updatedChildren}</Element>
  );
}

const button = cva("button", {
  variants: {
    variant: {
      primary: ["bg-black", "text-white"],
      secondary: ["border border-slate-300", "bg-white", "text-black"],
    },
    size: {
      xs: ["px-4 py-1.5"],
    },
  },
  compoundVariants: [{ size: "xs" }],
  defaultVariants: {
    size: "xs",
    variant: "primary",
  },
});

export const Button: React.FC<any> = ({ size, variant, className, ...rest }) => {
  return (
    <button className={cn(button({ size, variant }), "rounded-lg", className)} {...rest} />
  );
};

export const Brand: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width="65"
    height="50"
    viewBox="0 0 65 50"
    fill="none"
  >
    <path
      d="M37.0282 49.9999H45.3779C45.9286 49.9999 46.3061 49.4448 46.1038 48.9326L41.1899 36.4941C39.9094 33.2057 37.3484 30.7395 34.2538 29.7999L27.1042 27.5686C24.0097 26.629 21.5553 24.1628 20.1681 20.8744L13.232 3.14074C12.5917 1.37912 11.0978 0.322144 9.39045 0.322144H1.14702C0.596417 0.322144 0.218919 0.876929 0.421023 1.3891L8.10993 20.8744C9.39045 24.1628 11.9515 26.629 15.0461 27.5686L22.1956 29.7999C25.2902 30.7395 27.7445 33.2057 29.1317 36.4941L33.2934 47.1813C33.9337 48.9429 35.4276 49.9999 37.0282 49.9999Z"
      fill="#303030"
    />
    <path
      d="M37.0282 49.9999H45.3779C45.9286 49.9999 46.3061 49.4448 46.1038 48.9326L41.1899 36.4941C39.9094 33.2057 37.3484 30.7395 34.2538 29.7999L27.1042 27.5686C24.0097 26.629 21.5553 24.1628 20.1681 20.8744L13.232 3.14074C12.5917 1.37912 11.0978 0.322144 9.39045 0.322144H1.14702C0.596417 0.322144 0.218919 0.876929 0.421023 1.3891L8.10993 20.8744C9.39045 24.1628 11.9515 26.629 15.0461 27.5686L22.1956 29.7999C25.2902 30.7395 27.7445 33.2057 29.1317 36.4941L33.2934 47.1813C33.9337 48.9429 35.4276 49.9999 37.0282 49.9999Z"
      fill="url(#paint0_linear_14_1982)"
      fillOpacity="0.6"
      style={{ mixBlendMode: "soft-light" }}
    />
    <path
      d="M45.8851 32.9709L51.434 47.1813C52.0743 48.9429 53.5682 49.9999 55.2756 49.9999H63.6255C64.1762 49.9999 64.5537 49.445 64.3515 48.9328L58.05 32.9709C56.7695 29.6825 54.2085 27.2162 51.1139 26.2767L43.9644 24.0453C40.8698 23.1058 38.4155 20.6395 37.0282 17.3512L31.4793 3.14074C30.8391 1.37912 29.3451 0.322144 27.6378 0.322144H19.2878C18.7372 0.322144 18.3597 0.877025 18.5619 1.38922L24.8633 17.3512C26.1438 20.6395 28.7049 23.1058 31.7995 24.0453L38.949 26.2767C42.0436 27.3337 44.4979 29.7999 45.8851 32.9709Z"
      fill="#303030"
    />
    <path
      d="M45.8851 32.9709L51.434 47.1813C52.0743 48.9429 53.5682 49.9999 55.2756 49.9999H63.6255C64.1762 49.9999 64.5537 49.445 64.3515 48.9328L58.05 32.9709C56.7695 29.6825 54.2085 27.2162 51.1139 26.2767L43.9644 24.0453C40.8698 23.1058 38.4155 20.6395 37.0282 17.3512L31.4793 3.14074C30.8391 1.37912 29.3451 0.322144 27.6378 0.322144H19.2878C18.7372 0.322144 18.3597 0.877025 18.5619 1.38922L24.8633 17.3512C26.1438 20.6395 28.7049 23.1058 31.7995 24.0453L38.949 26.2767C42.0436 27.3337 44.4979 29.7999 45.8851 32.9709Z"
      fill="url(#paint1_linear_14_1982)"
      fillOpacity="0.6"
      style={{ mixBlendMode: "soft-light" }}
    />
    <circle cx="51.3246" cy="10.7368" r="10.7368" fill="#303030" />
    <circle
      cx="51.3246"
      cy="10.7368"
      r="10.7368"
      fill="url(#paint2_linear_14_1982)"
      fillOpacity="0.6"
      style={{ mixBlendMode: "soft-light" }}
    />
    <defs>
      <linearGradient
        id="paint0_linear_14_1982"
        x1="46.5254"
        y1="49.9999"
        x2="-3.04576"
        y2="3.57427"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.130208" />
        <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_14_1982"
        x1="64.7727"
        y1="49.9999"
        x2="15.1943"
        y2="3.46092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.130208" />
        <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_14_1982"
        x1="62.0614"
        y1="21.4735"
        x2="40.5879"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.130208" />
        <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
