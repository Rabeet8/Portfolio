import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "Apr 2025 - Present",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
          Technyx System
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground text-sm md:text-base font-normal mb-4">
          <li>Developed and optimized mobile applications using React Native CLI, delivering performant UI screens and improving overall app stability and user experience.</li>
          <li>Engineered a multi-layer interactive SVG map system using react-native-svg, MaskedView, and Reanimated, implementing dynamic region highlighting, coordinate transformation logic, and animated zoom interactions while maintaining high rendering performance.</li>
          <li>Collaborated closely with Product Managers and QA teams to identify, debug, and resolve critical issues, ensuring timely and high-quality releases.</li>
          <li>Implemented new features and refined existing functionalities based on client feedback, aligning product improvements with user and business requirements.</li>
          <li>Managed the complete release pipeline including build generation, store submission, versioning, and production rollout for iOS and Android apps.</li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">React Native</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">TypeScript</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Reanimated</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">SVG</span>
        </div>
      </div>
    ),
  },
  {
    title: "Oct 2023 - Dec 2024",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
          0xequity
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground text-sm md:text-base font-normal mb-4">
          <li>Designed and developed smart contracts, creating comprehensive test cases to validate contract logic, edge cases, and expected transaction behavior across different blockchain scenarios.</li>
          <li>Implemented automated smart contract testing frameworks using Hardhat, enabling systematic validation of contract functionality, security constraints, and deployment readiness.</li>
          <li>Built frontend modules that interact with blockchain networks, integrating smart contracts using Ethers.js/Web3.js to enable seamless user interaction with decentralized application features.</li>
          <li>Integrated smart contracts with frontend interfaces and backend APIs, ensuring smooth communication between on-chain contract logic and off-chain application services.</li>
          <li>Developed decentralized application using Next.js workflows by connecting user-facing frontend components with smart contract functions, enabling secure transaction execution and real-time blockchain interaction.</li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Solidity</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Ethers.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Hardhat</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Next.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Web3</span>
        </div>
      </div>
    ),
  },
  {
    title: "Mar 2023 - Aug 2023",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
          Webners
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground text-sm md:text-base font-normal mb-4">
          <li>Developed scalable web applications using React.js and Next.js, building modular and maintainable UI components to support modern decentralized application interfaces.</li>
          <li>Integrated smart contracts into frontend applications using Ethers.js, enabling secure interaction with blockchain networks and execution of on-chain transactions from user interfaces.</li>
          <li>Implemented wallet connectivity using RainbowKit and Web3 wallet SDKs, allowing users to securely connect wallets and authorize blockchain transactions within the application.</li>
          <li>Integrated backend APIs with frontend applications, enabling real-time rendering of transaction data and dynamic updates from off-chain services.</li>
          <li>Built decentralized application workflows by connecting frontend components with smart contract functions and backend services, enabling seamless interaction between users, APIs, and blockchain networks.</li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">React.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Next.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Ethers.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">RainbowKit</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Web3</span>
        </div>
      </div>
    ),
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Career Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          My Experience
        </h2>
      </div>
      <Timeline data={experienceData} />
    </section>
  );
}
