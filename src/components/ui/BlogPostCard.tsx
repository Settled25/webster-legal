"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Card } from "./Card";

interface BlogPostCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export function BlogPostCard({
  category,
  title,
  excerpt,
  date,
}: BlogPostCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="p-0 overflow-hidden h-full flex flex-col">
        <div className="bg-zinc-100 aspect-video rounded-t-card" />
        <div className="p-5 flex flex-col flex-1">
          <span className="font-mono text-[11px] text-pine uppercase tracking-[2px]">
            {category}
          </span>
          <h3 className="font-heading text-lg text-black mt-2 line-clamp-2">
            {title}
          </h3>
          <p className="font-body text-sm text-zinc-600 mt-2 line-clamp-2 flex-1">
            {excerpt}
          </p>
          <span className="font-body text-[13px] text-zinc-600 mt-3">
            {date}
          </span>
          <a
            href="#"
            className="font-body font-medium text-sm text-pine mt-2 hover:underline"
          >
            Leer m&aacute;s &rarr;
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
