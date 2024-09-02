import {
  ABeeZee,
  Cormorant_Garamond,
  Montserrat,
  EB_Garamond,
  Cinzel,
} from "next/font/google";
import localFont from "next/font/local";

export const citadel = localFont({
  src: "../../public/fonts/citadel/CitadelScriptStd.otf",
});

export const aBeeZee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
});

export const philosopher = localFont({
  src: [
    {
      path: "../../public/fonts/philosopher/Philosopher-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/philosopher/Philosopher-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/philosopher/Philosopher-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/philosopher/Philosopher-Italic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
