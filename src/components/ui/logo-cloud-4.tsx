import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative">
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[200px]"
        direction="left"
        blurIntensity={1}
      />

      <InfiniteSlider>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 120}
            height={logo.height || 30}
            className="h-[30px] w-auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[200px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
