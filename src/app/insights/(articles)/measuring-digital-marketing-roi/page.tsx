import Image from "next/image";
import featuredImage from "@/public/images/articles/digital-marketing/featured-image.png"; // Adjust the path as needed
import { cormorant } from "@/src/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Measure the ROI of Your Digital Marketing Campaigns",
  description:
    "Learn effective strategies to measure and analyze the ROI of your digital marketing campaigns to optimize your marketing efforts and drive better results.",
  keywords: [
    "digital marketing ROI",
    "measuring marketing ROI",
    "marketing analytics",
    "campaign performance",
    "digital marketing metrics",
    "ROI analysis",
    "marketing strategy",
  ],
  openGraph: {
    title: "How to Measure the ROI of Your Digital Marketing Campaigns",
    description:
      "Discover key methods for measuring the ROI of your digital marketing campaigns, including performance metrics, analytical tools, and strategies for optimization.",
    url: "https://gsdigitalanchor.com/insights/measuring-digital-marketing-roi",
    images: [
      {
        url: "/images/articles/digital-marketing/featured-image.png",
        width: 1200,
        height: 630,
        alt: "Measuring the ROI of Digital Marketing Campaigns",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Measure the ROI of Your Digital Marketing Campaigns",
    description:
      "Understand how to accurately measure the ROI of your digital marketing campaigns and enhance your marketing strategies for improved performance.",
    images: ["/images/articles/digital-marketing/featured-image.png"],
  },
};

const InsightPage = () => {
  const articleUrl =
    "https://gsdigitalanchor.com/insights/measuring-digital-marketing-roi";
  const articleTitle =
    "How to Measure the ROI of Your Digital Marketing Campaigns";
  const articleDescription =
    "Learn how to effectively measure the ROI of your digital marketing efforts with key performance metrics, analytical tools, and optimization strategies.";

  return (
    <article
      className="max-w-[1200px] mx-auto px-6 py-32 sm:px-12 md:px-24 bg-light-gray text-dark-gray"
      id="first-section"
    >
      <header className="mb-8">
        <h1
          className={`${cormorant.className} text-3xl sm:text-5xl font-serif font-medium text-dark-gray leading-tight`}
        >
          How to Measure the ROI of Your Digital Marketing Campaigns
        </h1>
        <p className="text-lg sm:text-xl mt-4 font-sans text-gray-600">
          By <span className="text-[#AB7952]">Gašper Šimec</span> | September
          14, 2024
        </p>
      </header>

      <figure className="mb-12">
        <Image
          src={featuredImage}
          alt="Measuring the ROI of Digital Marketing Campaigns"
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md shadow-lg"
        />
      </figure>

      <p className="text-base sm:text-xl font-sans leading-relaxed my-8">
        Measuring the ROI of your digital marketing campaigns is essential for
        understanding their effectiveness and optimizing your strategies. In
        this article, we’ll cover the best practices and methods for assessing
        the return on investment of your digital marketing efforts.
      </p>

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          INTRODUCTION
        </h2>

        <h3 className="text-xl font-medium">Why ROI Measurement is Crucial</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Accurately measuring ROI allows marketers to gauge the success of
          their campaigns, allocate resources effectively, and demonstrate the
          value of their marketing activities. Understanding ROI is key to
          making data-driven decisions and improving marketing strategies.
        </p>

        <h3 className="text-xl font-medium">Key Metrics to Track</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Tracking the right metrics helps in evaluating campaign performance.
          Key metrics include customer acquisition cost, conversion rates, and
          lifetime value of customers. These indicators provide insights into
          the efficiency and effectiveness of your campaigns.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          CALCULATING ROI
        </h2>

        <h3 className="text-xl font-medium">Understanding the ROI Formula</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          The basic formula for calculating ROI is: (Net Profit / Cost of
          Investment) x 100. This formula provides a percentage that indicates
          the return on your marketing investment.
        </p>

        <h3 className="text-xl font-medium">Using Analytics Tools</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Analytics tools like Google Analytics, social media insights, and CRM
          systems help track and measure ROI. These tools provide valuable data
          on campaign performance and customer behavior.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          OPTIMIZING CAMPAIGNS BASED ON ROI
        </h2>

        <h3 className="text-xl font-medium">Adjusting Strategies</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Based on ROI analysis, you can adjust your marketing strategies to
          focus on high-performing channels and tactics. This helps in improving
          overall campaign effectiveness and maximizing ROI.
        </p>

        <h3 className="text-xl font-medium">A/B Testing and Iteration</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Implementing A/B tests and iterative changes allows you to refine your
          campaigns continuously. Testing different approaches helps in finding
          the most effective strategies and improving ROI over time.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          CONCLUSION
        </h2>

        <h3 className="text-xl font-medium">Enhancing Your ROI Strategy</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Measuring and optimizing ROI is a continuous process that requires
          attention to detail and data analysis. By understanding your ROI and
          adapting your strategies, you can enhance the effectiveness of your
          digital marketing campaigns and achieve better results.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h3 className="text-xl font-medium">Learn More</h3>
        <p className="text-base sm:text-lg font-sans leading-relaxed">
          For more information on digital marketing strategies and ROI
          measurement, check out our other articles or get in touch with our
          team for expert advice.
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
