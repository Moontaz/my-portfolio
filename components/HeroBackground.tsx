import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const HeroBackground = () => {
  return (
    <div className="">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full absolute inset-0"
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent"
            colors={[
              [106, 220, 153],
              [255, 255, 255],
            ]}
            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.7, 0.8, 1]}
            dotSize={2}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
