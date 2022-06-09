import { FC, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollbarOptions } from "smooth-scrollbar/interfaces";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overScrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options: Partial<ScrollbarOptions> = {
  damping: 0.07,
  plugins: {
    overscroll: overScrollOptions,
  },
};

const Scroll: FC = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const el = document.querySelector("html");
    if (el !== null) {
      Scrollbar.init(el, options);
    }

    return () => {
      if (Scrollbar) {
        Scrollbar.destroy(document.body);
      }
    };
  }, []);

  return null;
};

export default Scroll;
