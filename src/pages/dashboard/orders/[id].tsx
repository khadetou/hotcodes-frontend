import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Pdf from "@/components/invoices/Pdf";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";

const PDFViewer = dynamic(() => import("@/components/invoices/PdfViewer"), {
  ssr: false,
});
const Invoice = () => {
  const {
    query: { id },
  } = useRouter();

  let plateforme: string | null;
  plateforme =
    typeof window !== "undefined" ? localStorage.getItem("plateforme") : "";

  console.log(plateforme);
  const { GetOrderDesignById, GetOrderMobileById, GetOrderWebById, LoadUser } =
    useActions();
  const { orderd, orderw, orderm } = useTypedSelector(
    (state) => state.orderReducer
  );
  useEffect(() => {
    // LoadUser();
    if (plateforme === "mobile") {
      GetOrderMobileById(id as string);
    } else if (plateforme === "design") {
      GetOrderDesignById(id as string);
    } else if (plateforme === "web") {
      GetOrderWebById(id as string);
    }
  }, [plateforme, id]);

  return (
    <section className="h-screen">
      <PDFViewer>
        <Pdf
          orderd={orderd}
          orderm={orderm}
          orderw={orderw}
          plateforme={plateforme}
        />
      </PDFViewer>
    </section>
  );
};

export default Invoice;
