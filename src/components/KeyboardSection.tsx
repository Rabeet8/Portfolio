import React from "react";
import GlowingKeyboard from "@/components/ui/glowing-keyboard";

const highlight = [
  {
    startRow: 2,
    startIndex: 1,
    text: ["F", "O", "L", "L", "O", "W"],
  },
  {
    startRow: 3,
    startIndex: 4,
    text: ["S", "Y", "E", "D"],
  },
  {
    startRow: 4,
    startIndex: 6,
    text: ["R", "A", "B", "E", "E", "T"],
  },
];

export function KeyboardSection() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          CODE. BUILD. SHIP
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          TURNING IDEAS INTO SOFTWARE
        </h2>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <GlowingKeyboard
          highlight={highlight}
          glowColor="#f43f5d"
          transparentKey
          keySize={54}
        />
      </div>
    </section>
  );
}
