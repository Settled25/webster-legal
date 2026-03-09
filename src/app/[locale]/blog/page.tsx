"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { Check } from "lucide-react";

function SidebarNewsletter() {
  const t = useTranslations("blog");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <Card className="p-6">
      <h3 className="font-body font-semibold text-base text-black">
        {t("sidebarNewsletterTitle")}
      </h3>
      <p className="font-body text-sm text-zinc-600 mt-2">
        {t("sidebarNewsletterSubtitle")}
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder={t("sidebarNewsletterPlaceholder")}
          required
          className="w-full h-10 text-sm border border-zinc-200 rounded-btn px-3 bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition font-body"
        />
        <button
          type="submit"
          className="w-full h-10 mt-2 bg-pine text-white text-sm font-body font-semibold rounded-btn hover:bg-pine-dark transition-colors duration-200 inline-flex items-center justify-center gap-2"
        >
          {submitted ? (
            <>
              <Check size={16} />
              {t("sidebarNewsletterSubscribed")}
            </>
          ) : (
            t("sidebarNewsletterButton")
          )}
        </button>
      </form>
    </Card>
  );
}

export default function BlogPage() {
  const t = useTranslations("blog");

  const blogPosts = [
    {
      category: t("post1Category"),
      title: t("post1Title"),
      excerpt: t("post1Excerpt"),
      date: t("post1Date"),
    },
    {
      category: t("post2Category"),
      title: t("post2Title"),
      excerpt: t("post2Excerpt"),
      date: t("post2Date"),
    },
    {
      category: t("post3Category"),
      title: t("post3Title"),
      excerpt: t("post3Excerpt"),
      date: t("post3Date"),
    },
    {
      category: t("post4Category"),
      title: t("post4Title"),
      excerpt: t("post4Excerpt"),
      date: t("post4Date"),
    },
    {
      category: t("post5Category"),
      title: t("post5Title"),
      excerpt: t("post5Excerpt"),
      date: t("post5Date"),
    },
    {
      category: t("post6Category"),
      title: t("post6Title"),
      excerpt: t("post6Excerpt"),
      date: t("post6Date"),
    },
  ];

  const categories = [t("cat1"), t("cat2"), t("cat3"), t("cat4")];

  return (
    <main>
      {/* Section 1: Page Header */}
      <section className="bg-white pt-[120px] pb-8 md:pt-[100px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-[1200px] mx-auto px-6 text-center"
        >
          <h1 className="font-heading text-[48px] text-black">{t("h1")}</h1>
          <p className="font-body text-[17px] text-zinc-600 mt-2">
            {t("subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Section 2: Featured Post */}
      <section className="bg-white pt-8 pb-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
        <Card className="p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-zinc-100 aspect-video md:aspect-auto md:h-full flex items-center justify-center min-h-[240px]">
              <span className="font-body text-zinc-600 text-sm">
                {t("featuredImage")}
              </span>
            </div>
            <div className="p-10">
              <span className="font-mono text-xs text-pine uppercase tracking-[2px]">
                {t("featuredCategory")}
              </span>
              <h2 className="font-heading text-[28px] text-black mt-3">
                {t("featuredTitle")}
              </h2>
              <p className="font-body text-base text-zinc-600 mt-4 leading-relaxed">
                {t("featuredExcerpt")}
              </p>
              <p className="font-body text-sm text-zinc-600 mt-4">
                {t("featuredDate")}
              </p>
              <a
                href="#"
                className="font-body font-medium text-base text-pine mt-4 inline-block hover:underline"
              >
                {t("featuredReadMore")}
              </a>
            </div>
          </div>
        </Card>
        </div>
      </section>

      {/* Section 3: Post Grid + Sidebar */}
      <section className="bg-white pb-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} />
            ))}
          </motion.div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <SidebarNewsletter />
            <Card className="p-6">
              <h3 className="font-body font-semibold text-base text-black">
                {t("sidebarCategoriesTitle")}
              </h3>
              <ul className="mt-3 space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="font-body text-[15px] text-zinc-600 hover:text-pine transition-colors duration-200"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
