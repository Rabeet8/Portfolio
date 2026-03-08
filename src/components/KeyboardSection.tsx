import React from "react";
import GlowingKeyboard from "@/components/ui/glowing-keyboard";

const highlight = [
  {
    startRow: 2,
    startIndex: 1,
    text: ["F", "O", "L", "L", "O", "W", "", "M", "E", ""],
  },
  {
    startRow: 4,
    startIndex: 2,
    text: ["L", "E", "G", "I", "O", "N"],
  },
];

export function KeyboardSection() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Always Typing
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Built With Passion
        </h2>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <GlowingKeyboard
          highlight={highlight}
          glowColor="#f43f5d"
          transparentKey
        />
      </div>
    </section>
  );
}
