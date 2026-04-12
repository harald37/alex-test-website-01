import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto";
  priority?: boolean;
}

export const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "auto",
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[3/2]",
    auto: "",
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-[#141414]/5", // Subtle placeholder background
        aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Placeholder / Skeleton */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#f5f2ed] animate-pulse"
          />
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover",
          className
        )}
        referrerPolicy="no-referrer"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
};
