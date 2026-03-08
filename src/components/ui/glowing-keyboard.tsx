"use client";

import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  CommandIcon,
  DotIcon,
  GlobeIcon,
  MicIcon,
  MoonIcon,
  OptionIcon,
  PauseIcon,
  SearchIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SunDimIcon,
  SunIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  LayoutPanelLeft,
} from "lucide-react";
import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";

const iconSize = 12;

type CustomKeyType = "FingerPrintKey" | "ArrowKeys";

interface IconKeyboardKeyProps {
  icon: string | React.ReactNode;
  text?: string | React.ReactNode;
  className?: string;
  isSingleKey?: boolean;
  custom?: CustomKeyType;
  index?: number;
  rowIndex?: number;
  isHovered?: boolean;
  isLastRow?: boolean;
  keySize?: number;
  transparentKey?: boolean;
  glowColor?: string;
  highlight: {
    startRow: number;
    startIndex: number;
    text: string[];
  }[];
}

interface GlowingKeyboardSvgProps {
  isAlwaysActive?: boolean;
  transparentKey?: boolean;
  keySize?: number;
  glowColor?: string;
  highlight: {
    startRow: number;
    startIndex: number;
    text: string[];
  }[];
}

type KeyRowDataProps = Omit<IconKeyboardKeyProps, "index" | "rowIndex" | "isHovered" | "isLastRow" | "keySize" | "transparentKey" | "glowColor" | "highlight">;

const GlowingKeyboard = memo(
  ({
    isAlwaysActive = false,
    transparentKey = true,
    keySize = 40,
    glowColor = "#f43f5d",
    highlight,
  }: GlowingKeyboardSvgProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
      <div
        className="flex flex-col gap-1 p-2 w-fit mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {keysData.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="flex gap-1 items-center justify-center">
              {row.map((item, index) => {
                if (item.custom === "FingerPrintKey") {
                  return (
                    <FingerPrintKey
                      key={`fp-${rowIndex}-${index}`}
                      index={index}
                      rowIndex={rowIndex}
                      keySize={keySize}
                      transparentKey={transparentKey}
                    />
                  );
                }

                if (item.custom === "ArrowKeys") {
                  return (
                    <ArrowKeys
                      key={`ak-${rowIndex}-${index}`}
                      index={index}
                      rowIndex={rowIndex}
                      highlight={highlight}
                    />
                  );
                }

                return (
                  <IconKeyboardKey
                    key={`key-${rowIndex}-${index}`}
                    {...item}
                    index={index}
                    rowIndex={rowIndex}
                    isHovered={isAlwaysActive || isHovered}
                    isLastRow={rowIndex === keysData.length - 1}
                    keySize={keySize}
                    transparentKey={transparentKey}
                    glowColor={glowColor}
                    highlight={highlight}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
);

GlowingKeyboard.displayName = "GlowingKeyboard";

const IconKeyboardKey = memo(
  ({
    icon,
    text,
    className,
    isSingleKey,
    index = 0,
    rowIndex = 0,
    isHovered,
    isLastRow,
    keySize,
    transparentKey,
    glowColor,
    highlight,
  }: IconKeyboardKeyProps) => {
    const data = getKeyData(highlight, index, text, isHovered, rowIndex);

    return (
      <motion.div
        className={cn(
          "flex flex-col items-center justify-between rounded-md border border-border/50 px-1.5 py-1 text-muted-foreground select-none",
          transparentKey ? "bg-transparent" : "bg-secondary/30",
          data.shouldGlow && "glowing-key",
          isLastRow && "!items-center !justify-center",
          className
        )}
        style={{
          width: keySize,
          height: keySize,
          color: data.shouldGlow ? glowColor : undefined,
        }}
        animate={data.shouldGlow ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {!isSingleKey && (
          <span className="text-[8px] leading-none self-start opacity-70">
            {icon}
          </span>
        )}
        <span
          className={cn(
            "text-[10px] leading-none",
            isSingleKey && "text-xs",
            data.shouldGlow && "blur-in font-bold"
          )}
        >
          {data.text}
        </span>
      </motion.div>
    );
  }
);

IconKeyboardKey.displayName = "IconKeyboardKey";

const getKeyData = (
  highlight: {
    startRow: number;
    startIndex: number;
    text: string[];
  }[],
  index: number,
  text?: string | null | React.ReactNode,
  isHovered?: boolean,
  rowIndex?: number
) => {
  const isText = typeof text === "string";
  const modifiedKeysData = {
    text,
    shouldGlow: false,
  };

  for (const element of highlight) {
    if (element.text[index - element.startIndex] === "") {
      continue;
    }

    if (
      isText &&
      isHovered &&
      rowIndex === element.startRow &&
      index >= element.startIndex &&
      index <= element.startIndex + element.text.length - 1
    ) {
      modifiedKeysData.shouldGlow = true;
      modifiedKeysData.text = element.text[index - element.startIndex];
      break;
    }
  }

  return modifiedKeysData;
};

const FingerPrintKey = memo(
  ({
    index,
    rowIndex,
    keySize,
    transparentKey,
  }: {
    index: number;
    rowIndex: number;
    keySize: number;
    transparentKey: boolean;
  }) => {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-md border border-border/50",
          transparentKey ? "bg-transparent" : "bg-secondary/30"
        )}
        style={{ width: keySize, height: keySize }}
      >
        <div className="w-4 h-4 rounded-full border border-muted-foreground/50" />
      </div>
    );
  }
);

FingerPrintKey.displayName = "FingerPrintKey";

const ArrowKeys = memo(
  ({
    index,
    rowIndex,
    highlight,
  }: {
    index: number;
    rowIndex: number;
    highlight: {
      startRow: number;
      startIndex: number;
      text: string[];
    }[];
  }) => {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <IconKeyboardKey
          icon={null}
          text={<ArrowUpIcon size={10} />}
          isSingleKey
          index={index}
          rowIndex={rowIndex}
          className="!w-8 !h-4 !justify-center"
          highlight={highlight}
        />
        <div className="flex gap-0.5">
          <IconKeyboardKey
            icon={null}
            text={<ArrowLeftIcon size={10} />}
            isSingleKey
            index={index + 1}
            rowIndex={rowIndex}
            className="!w-8 !h-4 !justify-center"
            highlight={highlight}
          />
          <IconKeyboardKey
            icon={null}
            text={<ArrowRightIcon size={10} />}
            isSingleKey
            index={index + 2}
            rowIndex={rowIndex}
            className="!w-8 !h-4 !justify-center"
            highlight={highlight}
          />
        </div>
        <IconKeyboardKey
          icon={null}
          text={<ArrowDownIcon size={10} />}
          isSingleKey
          index={index + 3}
          rowIndex={rowIndex}
          className="!w-8 !h-4 !justify-center"
          highlight={highlight}
        />
      </div>
    );
  }
);

ArrowKeys.displayName = "ArrowKeys";

export default GlowingKeyboard;

const firstRowData: KeyRowDataProps[] = [
  { icon: null, text: "esc", className: "!basis-full" },
  { icon: <SunDimIcon size={iconSize} />, text: "F1" },
  { icon: <SunIcon size={iconSize} />, text: "F2" },
  { icon: <LayoutPanelLeft size={iconSize} />, text: "F3" },
  { icon: <SearchIcon size={iconSize} />, text: "F4" },
  { icon: <MicIcon size={iconSize} />, text: "F5" },
  { icon: <MoonIcon size={iconSize} />, text: "F6" },
  { icon: <SkipBackIcon size={iconSize} />, text: "F7" },
  { icon: <PauseIcon size={iconSize} />, text: "F8" },
  { icon: <SkipForwardIcon size={iconSize} />, text: "F9" },
  { icon: <VolumeIcon size={iconSize} />, text: "F10" },
  { icon: <Volume1Icon size={iconSize} />, text: "F11" },
  { icon: <Volume2Icon size={iconSize} />, text: "F12" },
  { custom: "FingerPrintKey", icon: null },
];

const secondRowData: KeyRowDataProps[] = [
  { icon: "~", text: "`", className: "first:!items-center" },
  { icon: "!", text: "1" },
  { icon: "@", text: "2" },
  { icon: "#", text: "3" },
  { icon: "$", text: "4" },
  { icon: "%", text: "5" },
  { icon: "^", text: "6" },
  { icon: "&", text: "7" },
  { icon: "*", text: "8" },
  { icon: "(", text: "9" },
  { icon: ")", text: "0" },
  { icon: "_", text: "-" },
  { icon: "+", text: "=" },
  { icon: null, text: "delete", className: "!basis-full" },
];

const thirdRowData: KeyRowDataProps[] = [
  { icon: null, text: "tab", className: "!basis-full" },
  { icon: "q", text: "Q", isSingleKey: true },
  { icon: "w", text: "W", isSingleKey: true },
  { icon: "e", text: "E", isSingleKey: true },
  { icon: "r", text: "R", isSingleKey: true },
  { icon: "t", text: "T", isSingleKey: true },
  { icon: "y", text: "Y", isSingleKey: true },
  { icon: "u", text: "U", isSingleKey: true },
  { icon: "i", text: "I", isSingleKey: true },
  { icon: "o", text: "O", isSingleKey: true },
  { icon: "p", text: "P", isSingleKey: true },
  { icon: "{", text: "[" },
  { icon: "}", text: "]" },
  { icon: "|", text: "/", className: "last:!items-center" },
];

const fourthRowData: KeyRowDataProps[] = [
  { icon: <DotIcon size={iconSize + 3} className="-ml-1.5 -mt-0.5" />, text: "caps lock", className: "!basis-full" },
  { icon: "a", text: "A", isSingleKey: true },
  { icon: "s", text: "S", isSingleKey: true },
  { icon: "d", text: "D", isSingleKey: true },
  { icon: "f", text: "F", isSingleKey: true },
  { icon: "g", text: "G", isSingleKey: true },
  { icon: "h", text: "H", isSingleKey: true },
  { icon: "j", text: "J", isSingleKey: true },
  { icon: "k", text: "K", isSingleKey: true },
  { icon: "l", text: "L", isSingleKey: true },
  { icon: ":", text: ";" },
  { icon: '"', text: "'" },
  { icon: null, text: "return", className: "!basis-full" },
];

const fifthRowData: KeyRowDataProps[] = [
  { icon: null, text: "shift", className: "!basis-full" },
  { icon: "z", text: "Z", isSingleKey: true },
  { icon: "x", text: "X", isSingleKey: true },
  { icon: "c", text: "C", isSingleKey: true },
  { icon: "v", text: "V", isSingleKey: true },
  { icon: "b", text: "B", isSingleKey: true },
  { icon: "n", text: "N", isSingleKey: true },
  { icon: "m", text: "M", isSingleKey: true },
  { icon: "<", text: "," },
  { icon: ">", text: "." },
  { icon: "?", text: "/" },
  { icon: null, text: "shift", className: "!basis-full" },
];

const sixthRowData: KeyRowDataProps[] = [
  { icon: "fn", text: <GlobeIcon size={iconSize} /> },
  { icon: <ChevronUpIcon size={iconSize} />, text: "control", className: "!items-end" },
  { icon: <OptionIcon size={iconSize} />, text: "option", className: "!items-end" },
  { icon: <CommandIcon size={iconSize} />, text: "command", className: "!items-end !basis-20" },
  { icon: null, text: "", className: "!basis-80" },
  { icon: <CommandIcon size={iconSize} />, text: "command", className: "!items-start !basis-20" },
  { icon: <OptionIcon size={iconSize} />, text: "option", className: "!items-start" },
  { icon: null, custom: "ArrowKeys" },
];

const keysData = [
  firstRowData,
  secondRowData,
  thirdRowData,
  fourthRowData,
  fifthRowData,
  sixthRowData,
];
