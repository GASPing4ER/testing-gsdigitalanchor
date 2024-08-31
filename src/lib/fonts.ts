import { ABeeZee, Cormorant_Garamond, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const citadel = localFont({
  src: "../../public/fonts/citadel/CitadelScriptStd.otf",
});

export const aBeeZee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
