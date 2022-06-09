import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useEffect, useRef } from "react";
import tippy from "tippy.js";
const WhatsAppFloating = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      tippy(ref.current, {
        content: " Call us ! ",
        arrow: true,
        animation: "scale-extreme",
        theme: "grad",
      });
    }
  }, [ref]);
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=+221786004564&text&app_absent=0"
      target="_blank"
      rel="noreferrer"
    >
      <div
        ref={ref}
        className="fixed bottom-[9%] right-[4%] rounded-full p-5 bg-grad-btn cursor-pointer shadow-shadow animate-bounce "
      >
        <FaWhatsapp className="text-[38px] font-bold text-white" />
      </div>
    </a>
  );
};

export default WhatsAppFloating;
