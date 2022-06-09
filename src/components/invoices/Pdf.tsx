import React, { FC, ReactNode } from "react";
import Img from "/public/images/Design-banner.png";
import {
  StyleSheet,
  Document as _Document,
  Page as _Page,
  Image,
  View,
  Text,
} from "@react-pdf/renderer";
import { useTypedSelector } from "@/hooks/useTypeSelector";

function componentWithChildren<Props>(Component: React.ComponentType<Props>) {
  return Component as React.ComponentType<Props & { children: ReactNode }>;
}

const Document = componentWithChildren(_Document);
const Page = componentWithChildren(_Page);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
  },
  section: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  logoImg: {
    width: "100%",
    height: "auto",
  },
  logo: {
    marginTop: "30px",
    marginLeft: "55px",
    width: "120px",
  },

  text1: {
    fontSize: 14,
    marginBottom: 4,
  },
  text2: {
    fontSize: 14,
    marginBottom: 4,
  },
  textContainer: {
    marginTop: "130px",
    marginLeft: "55px",
    marginRight: "55px",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  table: {
    position: "relative",
    marginTop: "130px",
    marginLeft: "55px",
    marginRight: "55px",
  },
  tablebar: {
    position: "absolute",
    top: "5px",
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tablebar1: {
    position: "absolute",
    bottom: "30%",
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tableHeaderTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: "7px",
    marginLeft: "9px",
    color: "#fff",
  },
  tableHeaderTitleEnd: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: "7px",
    marginRight: "9px",
    color: "#fff",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableResult: {
    marginTop: "10px",
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "auto",
  },
  tableTitle: {
    color: "#000",
    fontSize: 12,
    marginTop: "10px",
    padding: "9px",
  },
  footer: {
    marginTop: "170px",
  },
  website: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImages: {
    width: "22px",
    height: "22px",
    marginRight: "8px",
  },
  logoText: {
    fontSize: 12,
  },
  logoContainer: {
    marginTop: "50px",
    marginLeft: "55px",
    marginRight: "55px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  social: {
    width: "93px",
  },
});

interface PdfProp {
  orderw: any;
  orderm: any;
  orderd: any;
  plateforme: string | null;
}
const Pdf: FC<PdfProp> = ({ orderw, orderm, orderd, plateforme }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="/images/invoice/design-svg.png" />
          <Image src="/images/invoice/bg-image.png" />
        </View>
        <View style={styles.logo}>
          <Image style={styles.logoImg} src="/images/invoice/logo-png.png" />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.text1}>
            <Text>Invoice</Text>
            <Text>
              Date:
              {plateforme === "web"
                ? orderw?.date.split("T")[0]
                : plateforme == "mobile"
                ? orderm?.date.split("T")[0]
                : orderd?.date.split("T")[0]}
            </Text>
          </View>
          <View>
            <Text style={styles.text2}>Billing to:</Text>
            <Text style={styles.text2}>
              {plateforme === "web"
                ? orderw?.user.firstName + " " + orderw?.user.lastName
                : plateforme == "mobile"
                ? orderm?.user.firstName + " " + orderm?.user.lastName
                : orderd?.user.firstName + " " + orderd?.user.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.table}>
          <Image style={styles.tablebar} src="/images/invoice/bar.png" />
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderTitle}>Service</Text>
            <Text style={styles.tableHeaderTitle}>Plateform</Text>
            <Text style={styles.tableHeaderTitle}>App Name</Text>
            <Text style={styles.tableHeaderTitleEnd}>Type App</Text>
          </View>

          <View style={styles.tableResult}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableTitle}>Service</Text>
              <Text style={styles.tableTitle}>Plateform</Text>
              <Text style={styles.tableTitle}>App Name</Text>
              <Text style={styles.tableTitle}>Type App</Text>
            </View>
          </View>

          <Image style={styles.tablebar1} src="/images/invoice/bar.png" />
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderTitle}>Service</Text>
            <Text style={styles.tableHeaderTitle}>Plateform</Text>
            <Text style={styles.tableHeaderTitle}>App Name</Text>
            <Text style={styles.tableHeaderTitleEnd}>Type App</Text>
          </View>

          <View style={styles.tableResult}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableTitle}>Service</Text>
              <Text style={styles.tableTitle}>Plateform</Text>
              <Text style={styles.tableTitle}>App Name</Text>
              <Text style={styles.tableTitle}>Type App</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Image src="/images/invoice/line.png" />

          <View style={styles.logoContainer}>
            <View style={styles.website}>
              <Image
                style={styles.logoImages}
                src="/images/invoice/website.png"
              />
              <Text style={styles.logoText}>www.hotcodesagency.com</Text>
            </View>
            <View style={styles.website}>
              <Image
                style={styles.logoImages}
                src="/images/invoice/email.png"
              />
              <Text style={styles.logoText}>hotocesagency@gmail.com</Text>
            </View>
            <View style={styles.website}>
              <Image
                style={styles.logoImages}
                src="/images/invoice/phone.png"
              />
              <Text style={styles.logoText}>+221 33844422</Text>
            </View>
          </View>
          <View style={styles.socialContainer}>
            <Image style={styles.social} src="/images/invoice/socials.png" />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
