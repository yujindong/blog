import ECMALogo from "@/components/icons/ECMALogo";
import ReactLogo from "@/components/icons/ReactLogo";

export const localIcons = { ReactLogo, ECMALogo } as const;
export const createLocalIcon = (icon: keyof typeof localIcons) => {
  const Com = localIcons[icon];
  return <Com />;
};
