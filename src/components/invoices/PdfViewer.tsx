import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";

interface PDFViewerProps {
  children: any;
}

const styles = StyleSheet.create({
  PDFviewers: {
    height: "100%",
    width: "100%",
  },
});

const PDFviewer: FC<PDFViewerProps> = ({ children }) => {
  const { PDFviewers } = styles;
  return <PDFViewer style={PDFviewers}>{children}</PDFViewer>;
};

export default PDFviewer;
