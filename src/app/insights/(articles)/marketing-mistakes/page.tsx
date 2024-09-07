import Image from "next/image";

import featuredImage from "@/public/images/articles/marketing-mistakes/featured-image.png";
import { cormorant } from "@/src/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "10 Common Digital Marketing Mistakes Small Businesses Make (and How to Avoid Them)",
  description:
    "Learn about the most common digital marketing mistakes small businesses make and how to avoid them to ensure your marketing efforts lead to success.",
  keywords: [
    "small business digital marketing",
    "digital marketing mistakes",
    "small business marketing tips",
    "digital marketing strategies",
    "common marketing pitfalls",
    "marketing errors",
    "small business growth",
    "online marketing tips",
    "marketing advice",
    "marketing best practices",
  ],
  openGraph: {
    title:
      "10 Common Digital Marketing Mistakes Small Businesses Make (and How to Avoid Them)",
    description:
      "Discover the top digital marketing mistakes small businesses often make and learn how to avoid them for a successful online presence.",
    url: "https://gsdigitalanchor.com/insights/marketing-mistakes-small-businesses",
    images: [
      {
        url: "/images/articles/marketing-mistakes/featured-image.png",
        width: 1200,
        height: 630,
        alt: "Small business marketing mistakes",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "10 Common Digital Marketing Mistakes Small Businesses Make (and How to Avoid Them)",
    description:
      "Explore the most common digital marketing mistakes made by small businesses and learn how to avoid them with our expert tips.",
    images: ["/images/articles/marketing-mistakes/featured-image.png"],
  },
};

const InsightPage = () => {
  const articleUrl = "https://gsdigitalanchor.com/insights/marketing-mistakes";
  const articleTitle =
    "10 Common Digital Marketing Mistakes Small Businesses Make (and How to Avoid Them)";
  const articleDescription =
    "Discover the top digital marketing mistakes small businesses often make and learn how to avoid them for a successful online presence.";

  return (
    <article
      className="max-w-[1200px] mx-auto px-6 py-32 sm:px-12 md:px-24 bg-luxury-light text-luxury-dark text-slate-900"
      id="first-section"
    >
      <header className="mb-8">
        <h1
          className={`${cormorant.className} text-3xl sm:text-5xl font-serif font-medium text-luxury-dark leading-tight`}
        >
          10 Common Digital Marketing Mistakes Small Businesses Make (and How to
          Avoid Them)
        </h1>
        <p className="text-lg sm:text-xl mt-4 font-sans text-slate-600">
          By <span className="text-[#AB7952]">Gašper Šimec</span> | September 2,
          2024
        </p>
      </header>

      <figure className="mb-12">
        <Image
          src={featuredImage}
          alt="Small business marketing mistakes"
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md shadow-lg"
        />
      </figure>

      <p className="text-base sm:text-xl font-sans leading-relaxed my-8">
        In the digital age, effective online marketing is crucial for small
        businesses. However, many fall into common traps that hinder their
        success. This article highlights ten frequent digital marketing mistakes
        small businesses make and provides actionable tips on how to avoid them.
      </p>

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          INTRODUCTION
        </h2>

        <h3 className="text-xl font-medium">
          The Impact of Digital Marketing on Small Businesses
        </h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Digital marketing offers small businesses a powerful way to compete
          with larger companies. However, without the right strategies, many
          businesses struggle to see the desired results. Understanding the
          common pitfalls is the first step towards creating a more effective
          marketing plan.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          10 COMMON DIGITAL MARKETING MISTAKES
        </h2>

        <h3 className="text-xl font-medium">1. Lack of a Clear Strategy</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Without a well-defined digital marketing strategy, businesses often
          waste time and resources on ineffective tactics. To avoid this,
          outline clear goals, identify your target audience, and plan your
          marketing efforts accordingly.
        </p>

        <h3 className="text-xl font-medium">2. Ignoring SEO</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Search engine optimization (SEO) is essential for driving organic
          traffic to your website. Failing to optimize your site for search
          engines can result in poor visibility and lower rankings. Invest in
          SEO to improve your online presence.
        </p>

        <h3 className="text-xl font-medium">3. Not Knowing Your Audience</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Understanding your audience is key to crafting effective marketing
          messages. Avoid generic content by conducting market research to learn
          about your customers’ needs, preferences, and behaviors.
        </p>

        <h3 className="text-xl font-medium">4. Inconsistent Branding</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Consistent branding helps build trust and recognition. Ensure that
          your brand’s visual elements, tone, and messaging are cohesive across
          all marketing channels.
        </p>

        <h3 className="text-xl font-medium">5. Overlooking Mobile Users</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          With a significant portion of web traffic coming from mobile devices,
          neglecting mobile optimization can alienate potential customers.
          Ensure your website and content are mobile-friendly for a seamless
          user experience.
        </p>

        <h3 className="text-xl font-medium">
          6. Focusing on Quantity Over Quality
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Producing a large volume of content without regard for quality can
          dilute your brand and disengage your audience. Prioritize creating
          high-quality content that provides value to your audience.
        </p>

        <h3 className="text-xl font-medium">
          7. Neglecting Social Media Engagement
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Simply posting on social media is not enough; engaging with your
          audience is crucial. Respond to comments, participate in
          conversations, and build a community around your brand.
        </p>

        <h3 className="text-xl font-medium">8. Ignoring Analytics</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Analytics provide valuable insights into the effectiveness of your
          marketing efforts. Regularly review your data to understand what’s
          working and make informed decisions to optimize your strategy.
        </p>

        <h3 className="text-xl font-medium">
          9. Not Having a Conversion Focused Website
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Your website should not only be informative but also designed to
          convert visitors into customers. Use clear calls-to-action, optimize
          landing pages, and ensure a smooth user journey to increase
          conversions.
        </p>

        <h3 className="text-xl font-medium">10. Overlooking Email Marketing</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Email marketing remains one of the most effective ways to engage with
          customers. Avoid neglecting this channel by building and maintaining
          an email list, and regularly sending targeted, value-driven content.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          HOW TO AVOID THESE MISTAKES
        </h2>

        <h3 className="text-xl font-medium">1. Develop a Comprehensive Plan</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Start with a solid digital marketing strategy that includes clear
          objectives, target audience insights, and a detailed plan of action.
          Regularly revisit and adjust your plan as needed.
        </p>

        <h3 className="text-xl font-medium">2. Invest in SEO</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Make SEO a priority by optimizing your website content, improving site
          speed, and staying updated on the latest SEO trends and best
          practices.
        </p>

        <h3 className="text-xl font-medium">3. Know Your Audience</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Use data-driven insights to create customer personas and tailor your
          marketing messages to meet their specific needs and preferences.
        </p>

        <h3 className="text-xl font-medium">4. Maintain Consistent Branding</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Ensure that all aspects of your branding are aligned and consistent
          across every channel, from your website to social media profiles.
        </p>

        <h3 className="text-xl font-medium">5. Optimize for Mobile</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Make your website mobile-responsive and test its performance across
          different devices to ensure a smooth experience for all users.
        </p>

        <h3 className="text-xl font-medium">6. Focus on Quality Content</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Prioritize creating valuable, high-quality content that addresses your
          audience’s pain points and positions your brand as a trusted resource.
        </p>

        <h3 className="text-xl font-medium">7. Engage on Social Media</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Actively engage with your audience on social media by responding to
          comments, sharing relevant content, and participating in industry
          conversations.
        </p>

        <h3 className="text-xl font-medium">
          8. Use Analytics to Inform Decisions
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Regularly analyze your marketing data to gain insights into what’s
          working and where improvements can be made. Adjust your strategy based
          on these findings.
        </p>

        <h3 className="text-xl font-medium">
          9. Create a Conversion-Focused Website
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Design your website with the user journey in mind, and use clear
          calls-to-action to guide visitors towards desired actions, such as
          making a purchase or signing up for a newsletter.
        </p>

        <h3 className="text-xl font-medium">10. Leverage Email Marketing</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Build and maintain an email list, segment your audience, and send
          targeted, value-driven emails to nurture relationships and drive
          conversions.
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
