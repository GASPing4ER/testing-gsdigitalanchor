import Image from "next/image";
import featuredImage from "@/public/images/articles/conversion/featured-image.png";
import { cormorant } from "@/src/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your Website Isn't Converting and How to Fix It",
  description:
    "Learn the most common reasons why your website isn't converting and actionable tips to fix them.",
  keywords: [
    "website conversion",
    "conversion optimization",
    "website design",
    "user experience",
    "SEO conversion",
    "call-to-action optimization",
    "website performance",
  ],
  openGraph: {
    title: "Why Your Website Isn't Converting and How to Fix It",
    description:
      "Discover the main reasons why your website isn't converting and actionable steps to fix them, from design improvements to user experience optimization.",
    url: "https://gsdigitalanchor.com/insights/website-conversion-optimization",
    images: [
      {
        url: "/images/articles/conversion/featured-image.png",
        width: 1200,
        height: 630,
        alt: "Website conversion optimization tips",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Website Isn't Converting and How to Fix It",
    description:
      "Actionable tips to improve website conversions, focusing on user experience, call-to-action optimization, and performance improvements.",
    images: ["/images/articles/conversion/featured-image.png"],
  },
};

const InsightPage = () => {
  const articleUrl =
    "https://gsdigitalanchor.com/insights/website-conversion-optimization";
  const articleTitle = "Why Your Website Isn't Converting and How to Fix It";
  const articleDescription =
    "Learn the most common reasons why your website isn't converting and how to fix them, focusing on user experience, design, and SEO improvements.";

  return (
    <article
      className="max-w-[1200px] mx-auto px-6 py-32 sm:px-12 md:px-24 bg-light-gray text-dark-gray"
      id="first-section"
    >
      <header className="mb-8">
        <h1
          className={`${cormorant.className} text-3xl sm:text-5xl font-serif font-medium text-dark-gray leading-tight`}
        >
          Why Your Website Isn’t Converting and How to Fix It
        </h1>
        <p className="text-lg sm:text-xl mt-4 font-sans text-gray-600">
          By <span className="text-[#AB7952]">Gašper Šimec</span> | September
          19, 2024
        </p>
      </header>

      <figure className="mb-12">
        <Image
          src={featuredImage}
          alt="Website conversion optimization"
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md shadow-lg"
        />
      </figure>

      <p className="text-base sm:text-xl font-sans leading-relaxed my-8">
        If your website is driving traffic but not converting visitors into
        customers, you’re not alone. Many websites struggle with conversion
        optimization due to a variety of reasons, ranging from poor design to
        unclear messaging. In this article, we’ll explore the key issues that
        could be holding your website back and how to fix them.
      </p>

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          INTRODUCTION
        </h2>

        <h3 className="text-xl font-medium">Common Conversion Killers</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Many factors can cause a drop in conversions, including slow website
          speeds, confusing navigation, poor mobile responsiveness, and weak
          calls to action. Identifying these pain points is the first step
          toward improving your website’s performance.
        </p>

        <h3 className="text-xl font-medium">User Experience Matters</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          A poor user experience (UX) is one of the top reasons visitors abandon
          a website without converting. Ensuring your site is easy to navigate,
          fast, and mobile-friendly can significantly boost your conversion
          rates.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          DESIGN AND UX OPTIMIZATION
        </h2>

        <h3 className="text-xl font-medium">Simplify Navigation</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          If visitors can’t find what they’re looking for quickly, they will
          leave. Streamlining your site’s navigation and making it intuitive can
          keep users engaged and drive conversions.
        </p>

        <h3 className="text-xl font-medium">Optimize for Mobile</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          With mobile traffic surpassing desktop, ensuring your website is
          mobile-friendly is crucial. Optimize layouts, text, and images for
          smaller screens to provide a seamless experience for mobile users.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          IMPROVING CALLS TO ACTION (CTAs)
        </h2>

        <h3 className="text-xl font-medium">Clear and Compelling CTAs</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Your call to action (CTA) is where conversions happen. Ensure your
          CTAs are clear, compelling, and placed strategically throughout your
          site. Use action-oriented language to encourage users to take the next
          step.
        </p>

        <h3 className="text-xl font-medium">A/B Test Your CTAs</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Regularly test different variations of your CTAs—such as color,
          wording, and placement—to find what works best for your audience. A/B
          testing can help you refine your approach and improve conversion
          rates.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          MOBILE OPTIMIZATION
        </h2>

        <h3 className="text-xl font-medium">
          The Importance of Mobile-Friendly Design
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          With over 50% of global web traffic coming from mobile devices, having
          a mobile-optimized website is no longer optional. If your site isn’t
          mobile-friendly, you’re likely losing potential conversions from users
          who abandon slow or poorly formatted pages.
        </p>

        <h3 className="text-xl font-medium">
          Responsive Design Best Practices
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Implementing a responsive design ensures that your website adapts to
          any screen size, providing a seamless experience across devices. Focus
          on fast load times, easy navigation, and readable text to improve
          mobile user experience and boost conversions.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          SITE SPEED AND PERFORMANCE
        </h2>

        <h3 className="text-xl font-medium">
          How Slow Loading Pages Hurt Conversions
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          A slow website can drastically affect your conversion rates. Studies
          show that users expect a site to load in under 3 seconds. Anything
          longer and the risk of bounce rates increases, leading to fewer
          conversions.
        </p>

        <h3 className="text-xl font-medium">Speed Optimization Tips</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Compress images, leverage browser caching, and minimize CSS and
          JavaScript files to improve your website’s loading time. Tools like
          Google’s PageSpeed Insights can help identify areas for improvement
          and track performance.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          SOCIAL PROOF AND TRUST SIGNALS
        </h2>

        <h3 className="text-xl font-medium">
          Building Trust with Your Audience
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          If visitors don’t trust your website, they won’t convert. Social
          proof, such as customer testimonials, reviews, and case studies, helps
          establish credibility and encourages conversions by showing that
          others have successfully used your product or service.
        </p>

        <h3 className="text-xl font-medium">
          Implementing Trust Badges and Guarantees
        </h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Adding trust signals such as SSL certificates, money-back guarantees,
          and secure payment badges can ease consumer hesitation, fostering
          confidence in your brand and increasing conversion rates.
        </p>
      </section>

      <hr className="my-8" />

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          CONCLUSION
        </h2>

        <h3 className="text-xl font-medium">Take Action</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          If your website isn’t converting, it’s time to take action. By
          improving your site’s design, optimizing user experience, and refining
          your calls to action, you can turn visitors into customers. Regular
          testing and tweaking will ensure your website continues to perform
          well over time.
        </p>
      </section>

      <footer className="mt-12 py-6 border-t border-gray-300">
        <p className="text-lg font-sans text-gray-600">Share this article:</p>
        <div className="flex space-x-4 mt-4">
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
