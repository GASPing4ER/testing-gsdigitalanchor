import { cormorant } from "@/src/lib/fonts";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen w-full">
      <div
        className="w-full min-h-screen px-6 py-24 sm:p-24 flex flex-col justify-center items-center gap-8 bg-slate-900 text-slate-50 border-b border-slate-50"
        id="first-section"
      >
        <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
          Portfolio coming soon!
        </h1>
        <p className="text-center">
          Thank you for your patience. While we are diligently working on
          developing our portfolio page, we invite you to check out our latest
          work on our Instagram page. Follow us @gsdigitalanchor to stay updated
          with our projects and get a glimpse of what is to come!
        </p>
      </div>
    </main>
  );
};

export default PortfolioPage;
