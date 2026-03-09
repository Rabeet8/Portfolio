import { FloatingIconsHero, type FloatingIconsHeroProps } from "@/components/ui/floating-icons-hero-section";
import * as React from "react";

// --- Tech Stack SVG Icons ---

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#61DAFB" />
    <circle cx="12" cy="12" r="2" fill="#282C34" />
    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="0.8" fill="none" />
    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="0.8" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="0.8" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

const IconNextJS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#000" stroke="hsl(0 0% 30%)" strokeWidth="0.5" />
    <path d="M10 8v8l6-4-6-4z" fill="white" />
  </svg>
);

const IconJavaScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
    <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000">JS</text>
  </svg>
);

const IconTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
    <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">TS</text>
  </svg>
);

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#06B6D4" />
    <path d="M8 10c.5-2 2-3 4-3 3 0 3.5 2 5 2.5s2-.5 2-2c-.5 2-2 3-4 3-3 0-3.5-2-5-2.5s-2 .5-2 2z" fill="#fff" />
    <path d="M6 14c.5-2 2-3 4-3 3 0 3.5 2 5 2.5s2-.5 2-2c-.5 2-2 3-4 3-3 0-3.5-2-5-2.5s-2 .5-2 2z" fill="#fff" />
  </svg>
);

const IconMaterialUI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#007FFF" />
    <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">MUI</text>
  </svg>
);

const IconReactNative = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#20232A" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="7" ry="3" stroke="#61DAFB" strokeWidth="0.8" fill="none" />
    <ellipse cx="12" cy="12" rx="7" ry="3" stroke="#61DAFB" strokeWidth="0.8" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="7" ry="3" stroke="#61DAFB" strokeWidth="0.8" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

const IconExpo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4630EB" />
    <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">EX</text>
  </svg>
);

const IconNodeJS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#339933" />
    <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">N</text>
  </svg>
);

const IconExpressJS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#353535" />
    <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff">EX</text>
  </svg>
);

const IconFastAPI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#009688" />
    <path d="M11 6h2l-1 6h3l-5 7 1-5H8l3-8z" fill="#fff" />
  </svg>
);

const IconSolidity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#636890" />
    <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">S</text>
  </svg>
);

const IconHardhat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FFF100" />
    <path d="M6 14h12v2H6z" fill="#000" />
    <path d="M8 10h8v4H8z" fill="#000" opacity="0.3" />
  </svg>
);

const IconFirebase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FFCA28" />
    <path d="M8 17l2-12 2 5-2 3 6 4H8z" fill="#F57C00" />
  </svg>
);

const IconGoogleCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4285F4" />
    <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#fff" fillOpacity="0.5" />
  </svg>
);

const IconGit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F05032" />
    <path d="M7 12l5-5 5 5-5 5-5-5z" fill="#fff" fillOpacity="0.4" />
  </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="hsl(0 0% 20%)" />
    <path d="M12 5c-3.866 0-7 3.134-7 7 0 3.1 2.014 5.727 4.806 6.657.35.064.478-.152.478-.337v-1.18c-1.956.425-2.37-.943-2.37-.943-.32-.812-.78-.943-.78-.943-.637-.435.049-.426.049-.426.704.049.97.603.97.603.626 1.073 1.643.763 2.044.583.063-.454.245-.763.446-.938-1.56-.177-3.2-.78-3.2-3.471 0-.767.274-1.394.724-1.886-.073-.176-.314-.892.068-1.86 0 0 .59-.19 1.934.72a6.74 6.74 0 0 1 1.76-.237c.597.003 1.198.081 1.76.237 1.34-.91 1.93-.72 1.93-.72.384.968.143 1.684.07 1.86.452.492.724 1.12.724 1.886 0 2.699-1.644 3.291-3.21 3.465.252.218.478.648.478 1.306v1.934c0 .188.126.407.483.337C16.99 17.724 19 15.097 19 12c0-3.866-3.134-7-7-7z" fill="#fff" />
  </svg>
);

const IconOpenAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#10A37F" />
    <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff">AI</text>
  </svg>
);

const IconPostman = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF6C37" />
    <path d="M8 8l8 4-8 4V8z" fill="#fff" />
  </svg>
);

const IconAxios = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#5A29E4" />
    <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff">AX</text>
  </svg>
);

const IconEthers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2535A0" />
    <path d="M12 5l5 7-5 7-5-7 5-7z" fill="#fff" fillOpacity="0.6" />
  </svg>
);

const IconWeb3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F16822" />
    <text x="12" y="15" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#fff">W3</text>
  </svg>
);

const IconLLM = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="10" fill="#8B5CF6" />
    <text x="12" y="15" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#fff">LLM</text>
  </svg>
);

const IconCICD = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2088FF" />
    <path d="M8 12a4 4 0 1 0 8 0" stroke="#fff" strokeWidth="1.5" fill="none" />
    <path d="M14 8l2 4h-4l2-4z" fill="#fff" />
  </svg>
);

const IconAndroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#3DDC84" />
    <circle cx="9.5" cy="10" r="1" fill="#fff" />
    <circle cx="14.5" cy="10" r="1" fill="#fff" />
    <path d="M7 13h10v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3z" fill="#fff" fillOpacity="0.5" />
  </svg>
);

const IconiOS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#A2AAAD" />
    <path d="M14 6c-.5-1-1.5-1.5-2.5-1 1-.5 2 0 2.5 1zM10 8c-2 0-4 2-4 5s2 6 4 6c.5 0 1.5-.5 2-.5s1.5.5 2 .5c2 0 4-3 4-6s-2-5-4-5c-.5 0-1.5.5-2 .5S12 8 10 8z" fill="#fff" />
  </svg>
);

const IconRestAPI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#E535AB" />
    <text x="12" y="15" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#fff">API</text>
  </svg>
);

const techIcons: FloatingIconsHeroProps['icons'] = [
  // Frontend
  { id: 1, icon: IconReact, className: 'top-[8%] left-[8%]' },
  { id: 2, icon: IconNextJS, className: 'top-[5%] left-[25%]' },
  { id: 3, icon: IconJavaScript, className: 'top-[12%] right-[30%]' },
  { id: 4, icon: IconTypeScript, className: 'top-[6%] right-[12%]' },
  { id: 5, icon: IconTailwind, className: 'top-[22%] left-[5%]' },
  { id: 6, icon: IconMaterialUI, className: 'top-[18%] right-[8%]' },
  // Mobile
  { id: 7, icon: IconReactNative, className: 'top-[35%] left-[3%]' },
  { id: 8, icon: IconExpo, className: 'top-[38%] right-[4%]' },
  { id: 9, icon: IconAndroid, className: 'top-[28%] left-[18%]' },
  { id: 10, icon: IconiOS, className: 'top-[25%] right-[22%]' },
  // Backend
  { id: 11, icon: IconNodeJS, className: 'top-[50%] left-[6%]' },
  { id: 12, icon: IconExpressJS, className: 'top-[48%] right-[6%]' },
  { id: 13, icon: IconFastAPI, className: 'top-[55%] left-[20%]' },
  { id: 14, icon: IconRestAPI, className: 'top-[52%] right-[18%]' },
  { id: 15, icon: IconAxios, className: 'top-[42%] left-[12%]' },
  // Blockchain
  { id: 16, icon: IconSolidity, className: 'top-[65%] left-[8%]' },
  { id: 17, icon: IconHardhat, className: 'top-[62%] right-[10%]' },
  { id: 18, icon: IconEthers, className: 'top-[70%] left-[22%]' },
  { id: 19, icon: IconWeb3, className: 'top-[68%] right-[24%]' },
  // Cloud & DevOps
  { id: 20, icon: IconFirebase, className: 'top-[78%] left-[5%]' },
  { id: 21, icon: IconGoogleCloud, className: 'top-[80%] right-[8%]' },
  { id: 22, icon: IconGit, className: 'top-[75%] left-[30%]' },
  { id: 23, icon: IconGitHub, className: 'top-[82%] right-[28%]' },
  { id: 24, icon: IconCICD, className: 'top-[85%] left-[15%]' },
  { id: 25, icon: IconPostman, className: 'top-[88%] right-[15%]' },
  // AI
  { id: 26, icon: IconOpenAI, className: 'top-[10%] left-[45%]' },
  { id: 27, icon: IconLLM, className: 'top-[85%] left-[45%]' },
];

export function TechStackSection() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tools & Technologies
        </h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          Technologies and tools I work with to build modern, scalable applications.
        </p>
      </div>
      <FloatingIconsHero icons={techIcons} />
    </section>
  );
}
