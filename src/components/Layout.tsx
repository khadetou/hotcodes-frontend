import { FC, useEffect } from "react";
import Aos from "aos";
import Scroll from "./smoothScroll";

interface LayoutProp {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Layout: FC<LayoutProp> = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
