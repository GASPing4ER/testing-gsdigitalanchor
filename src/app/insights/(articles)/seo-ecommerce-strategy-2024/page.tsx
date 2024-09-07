import Image from "next/image";

import featuredImage from "@/public/images/articles/seo-ecommerce/featured-image.png";
import { cormorant } from "@/src/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO for E-Commerce: How to Drive More Traffic to Your Online Store",
  description:
    "Learn how to optimize your e-commerce site for search engines and drive more organic traffic with proven SEO strategies in 2024.",
  keywords: [
    "SEO for e-commerce",
    "SEO strategy 2024",
    "e-commerce traffic",
    "on-page SEO",
    "off-page SEO",
    "SEO content strategy",
    "link building",
    "technical SEO",
  ],
  openGraph: {
    title: "SEO for E-Commerce: How to Drive More Traffic to Your Online Store",
    description:
      "Discover the best SEO practices for boosting organic traffic to your e-commerce store in 2024. From keyword research to technical SEO, learn how to enhance visibility.",
    url: "https://gsdigitalanchor.com/insights/seo-ecommerce-strategy-2024",
    images: [
      {
        url: "/images/articles/seo-ecommerce/featured-image.png",
        width: 1200,
        height: 630,
        alt: "SEO for e-commerce strategies",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for E-Commerce: How to Drive More Traffic to Your Online Store",
    description:
      "A comprehensive guide to driving more traffic to your e-commerce store with SEO strategies, covering technical SEO, on-page, and off-page tactics.",
    images: ["/images/articles/seo-ecommerce/featured-image.png"],
  },
};

const InsightPage = () => {
  const articleUrl =
    "https://gsdigitalanchor.com/insights/seo-ecommerce-strategy-2024";
  const articleTitle =
    "SEO for E-Commerce: How to Drive More Traffic to Your Online Store";
  const articleDescription =
    "Learn how to optimize your e-commerce site for search engines and drive more organic traffic with proven SEO strategies in 2024.";

  return (
    <article
      className="max-w-[1200px] mx-auto px-6 py-32 sm:px-12 md:px-24 bg-light-gray text-dark-gray"
      id="first-section"
    >
      <header className="mb-8">
        <h1
          className={`${cormorant.className} text-3xl sm:text-5xl font-serif font-medium text-dark-gray leading-tight`}
        >
          SEO for E-Commerce: How to Drive More Traffic to Your Online Store
        </h1>
        <p className="text-lg sm:text-xl mt-4 font-sans text-gray-600">
          By <span className="text-[#AB7952]">Gašper Šimec</span> | September 7,
          2024
        </p>
      </header>

      <figure className="mb-12">
        <Image
          src={featuredImage}
          alt="SEO for e-commerce strategies"
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md shadow-lg"
        />
      </figure>

      <p className="text-base sm:text-xl font-sans leading-relaxed my-8">
        Search engine optimization (SEO) is a critical component of any
        e-commerce success. In 2024, a solid SEO strategy can significantly
        increase organic traffic, improve brand visibility, and boost sales.
        This guide will help you navigate SEO best practices to ensure your
        online store thrives in a competitive digital landscape.
      </p>

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          INTRODUCTION
        </h2>

        <h3 className="text-xl font-medium">
          Why SEO is Crucial for E-Commerce in 2024
        </h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          With increasing competition in the e-commerce space, SEO remains a
          powerful tool for driving organic traffic. It helps your store rank
          higher on search engine result pages (SERPs), ensuring potential
          customers can easily find you when they search for products online.
        </p>

        <h3 className="text-xl font-medium">Key SEO Trends to Watch in 2024</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          SEO in 2024 will focus on user experience, mobile-first indexing, and
          AI-driven search results. E-commerce websites must prioritize
          technical SEO, content quality, and link-building to stay ahead.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          ON-PAGE SEO FOR E-COMMERCE
        </h2>

        <h3 className="text-xl font-medium">Keyword Optimization</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Start by researching keywords relevant to your products and
          categories. Use these strategically in your product titles,
          descriptions, and meta tags to enhance visibility. Focus on both
          short-tail and long-tail keywords for broader reach.
        </p>

        <h3 className="text-xl font-medium">Optimizing Product Pages</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Each product page should be optimized for SEO. Include keyword-rich
          titles, unique descriptions, and high-quality images with descriptive
          alt text. Ensure the page is easy to navigate and loads quickly on
          both desktop and mobile devices.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          TECHNICAL SEO
        </h2>

        <h3 className="text-xl font-medium">Website Structure</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          An organized and clean website structure is key to good SEO. Use
          breadcrumb navigation, ensure URLs are structured logically, and
          create a clear hierarchy of product categories and subcategories. This
          not only improves user experience but helps search engines index your
          site efficiently.
        </p>

        <h3 className="text-xl font-medium">Mobile-First Optimization</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          With the majority of e-commerce traffic coming from mobile devices,
          optimizing for mobile is non-negotiable. Your site must be responsive,
          fast-loading, and easy to navigate on all screen sizes.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          OFF-PAGE SEO & LINK BUILDING
        </h2>

        <h3 className="text-xl font-medium">Building Backlinks</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Backlinks from reputable websites signal to search engines that your
          site is trustworthy and authoritative. Focus on building quality
          backlinks through guest posting, influencer collaborations, and
          partnerships with complementary businesses.
        </p>

        <h3 className="text-xl font-medium">Leveraging Social Media</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          While social media signals don’t directly impact SEO, an active
          presence on social platforms can drive traffic to your site, which
          indirectly boosts SEO performance. Use social media to promote your
          content, products, and special offers.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          PERFORMANCE MONITORING
        </h2>

        <h3 className="text-xl font-medium">Tracking SEO Performance</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Regularly monitor the performance of your SEO efforts using tools like
          Google Analytics and Search Console. Track key metrics such as organic
          traffic, bounce rates, and conversion rates to refine your strategy.
        </p>

        <h3 className="text-xl font-medium">Continuous Improvement</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          SEO is an ongoing process. Stay up-to-date with the latest algorithm
          changes, industry trends, and customer behavior to continuously
          improve your website’s SEO and maintain its competitive edge.
        </p>
      </section>
      <footer className="mt-12 py-6 border-t border-gray-300">
        <p className="text-lg font-sans text-gray-600">Share this article:</p>
        <div className="flex space-x-4 mt-4">
          {/* Social Media Share Links */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              articleUrl
            )}&text=${encodeURIComponent(articleTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-gold hover:text-luxury-dark transition duration-300"
            aria-label="Share on Twitter"
          >
            Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              articleUrl
            )}&quote=${encodeURIComponent(articleTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-gold hover:text-luxury-dark transition duration-300"
            aria-label="Share on Facebook"
          >
            Facebook
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              articleUrl
            )}&title=${encodeURIComponent(
              articleTitle
            )}&summary=${encodeURIComponent(articleDescription)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-gold hover:text-luxury-dark transition duration-300"
            aria-label="Share on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </footer>
      <Link
        href="/contact"
        className="bg-slate-900 text-slate-50 px-4 py-3 rounded-xl text-sm"
      >
        Lets work together!
      </Link>
    </article>
  );
};

export default InsightPage;
