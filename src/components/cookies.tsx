import Script from "next/script";

const Cookies = () => {
  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="74e30f36-c1e7-4ca0-af2a-281ff6319038"
        data-blockingmode="auto"
        type="text/javascript"
      />
    </>
  );
};

export default Cookies;
