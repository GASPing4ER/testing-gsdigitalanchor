import Image from "next/image";
import featuredImage from "@/public/images/articles/role-of-email-marketing/featured-image.jpg"; // Adjust the path as needed
import { cormorant } from "@/src/lib/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Role of Email Marketing in a Modern Digital Strategy",
  description:
    "Discover how email marketing plays a crucial role in modern digital strategies, helping businesses engage with their audience and drive conversions.",
  keywords: [
    "email marketing",
    "digital strategy",
    "email campaigns",
    "customer engagement",
    "email marketing tools",
    "personalized emails",
    "email automation",
  ],
  openGraph: {
    title: "The Role of Email Marketing in a Modern Digital Strategy",
    description:
      "Explore the importance of email marketing in today's digital landscape, including best practices and strategies for success.",
    url: "https://gsdigitalanchor.com/insights/role-of-email-marketing-in-digital-strategy",
    images: [
      {
        url: "/images/articles/digital-marketing/email-marketing-featured-image.png",
        width: 1200,
        height: 630,
        alt: "The Role of Email Marketing in a Modern Digital Strategy",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Role of Email Marketing in a Modern Digital Strategy",
    description:
      "Learn how email marketing can enhance your digital strategy, driving customer engagement and improving overall marketing performance.",
    images: [
      "/images/articles/digital-marketing/email-marketing-featured-image.png",
    ],
  },
};

const InsightPage = () => {
  const articleUrl =
    "https://gsdigitalanchor.com/insights/role-of-email-marketing";
  const articleTitle =
    "The Role of Email Marketing in a Modern Digital Strategy";
  const articleDescription =
    "Explore the significance of email marketing as a key component in modern digital strategies, including personalization, automation, and campaign optimization.";

  return (
    <article
      className="max-w-[1200px] mx-auto px-6 py-32 sm:px-12 md:px-24 bg-light-gray text-dark-gray"
      id="first-section"
    >
      <header className="mb-8">
        <h1
          className={`${cormorant.className} text-3xl sm:text-5xl font-serif font-medium text-dark-gray leading-tight`}
        >
          The Role of Email Marketing in a Modern Digital Strategy
        </h1>
        <p className="text-lg sm:text-xl mt-4 font-sans text-gray-600">
          By <span className="text-[#AB7952]">Gašper Šimec</span> | September
          22, 2024
        </p>
      </header>

      <figure className="mb-12">
        <Image
          src={featuredImage}
          alt="The Role of Email Marketing in a Modern Digital Strategy"
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md shadow-lg"
        />
      </figure>

      <p className="text-base sm:text-xl font-sans leading-relaxed my-8">
        Email marketing remains one of the most effective tools in a modern
        digital strategy. It allows businesses to build direct connections with
        their audience, drive engagement, and boost conversions. In this
        article, we’ll explore how email marketing can fit into your digital
        strategy, offering both value and measurable results.
      </p>

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          INTRODUCTION
        </h2>

        <h3 className="text-xl font-medium">Why Email Marketing Matters</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Email marketing offers a direct line to your audience, making it an
          essential tool for nurturing relationships, promoting products, and
          encouraging conversions. With its ability to deliver personalized
          content at scale, email continues to be a powerful asset in any
          marketer’s toolkit.
        </p>

        <h3 className="text-xl font-medium">
          Email in the Digital Marketing Mix
        </h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Integrated into a broader digital strategy, email marketing supports
          other channels such as social media, content marketing, and paid ads.
          Its versatility and adaptability make it a valuable complement to
          these efforts, driving consistent engagement and reinforcing your
          brand’s message.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          KEY ELEMENTS OF SUCCESSFUL EMAIL MARKETING
        </h2>

        <h3 className="text-xl font-medium">
          Personalization and Segmentation
        </h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Personalizing emails and segmenting your audience allows you to send
          more relevant content, increasing the likelihood of engagement. Using
          data such as purchase history, preferences, and behavior, you can
          craft tailored messages that resonate with individual customers.
        </p>

        <h3 className="text-xl font-medium">Automation and Timing</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Automation helps streamline your campaigns, ensuring the right message
          reaches the right people at the right time. Automated workflows, such
          as welcome emails, abandoned cart reminders, or post-purchase
          follow-ups, help keep your audience engaged without constant manual
          intervention.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          OPTIMIZING EMAIL MARKETING PERFORMANCE
        </h2>

        <h3 className="text-xl font-medium">Testing and Iteration</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Regularly testing subject lines, content, and send times can lead to
          improved open rates and conversions. A/B testing helps identify what
          resonates most with your audience, enabling you to fine-tune your
          approach for optimal results.
        </p>

        <h3 className="text-xl font-medium">Tracking and Analytics</h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Monitoring metrics like open rates, click-through rates, and
          conversion rates provides valuable insights into the effectiveness of
          your campaigns. These analytics help you refine your strategy and
          better understand what content drives the most value for your
          business.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-8">
        <h2
          className={`${cormorant.className} text-[#AB7952] text-3xl font-medium`}
        >
          CONCLUSION
        </h2>

        <h3 className="text-xl font-medium">
          Enhancing Your Digital Strategy with Email Marketing
        </h3>

        <p className="text-base sm:text-lg font-sans leading-relaxed">
          Email marketing remains an indispensable part of any comprehensive
          digital strategy. With the right balance of personalization,
          automation, and continuous optimization, it can significantly enhance
          your engagement and drive meaningful results.
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
