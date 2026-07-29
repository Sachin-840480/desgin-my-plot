"use client";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider() {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
