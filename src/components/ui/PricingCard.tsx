"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Card } from "./Card";

interface PricingCardProps {
  stage: string;
  title: string;
  description: string;
  percentage: number;
}

export function PricingCard({
  stage,
  title,
  description,
  percentage,
}: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 800;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * percentage));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, percentage]);

  return (
    <motion.div variants={fadeUp} ref={ref}>
      <Card className="h-full flex flex-col">
        <span className="font-mono text-xs text-pine uppercase tracking-[2px]">
          {stage}
        </span>
        <h3 className="font-heading text-2xl text-black mt-3">{title}</h3>
        <p className="font-body text-base text-zinc-600 mt-3 leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-4">
          <span className="font-mono text-[28px] text-pine">{count}%</span>
          <p className="font-body text-sm text-zinc-600">
            de la cantidad recuperada
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
