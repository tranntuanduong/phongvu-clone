
import TopContact from "@components/Contact/TopContact";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Container from "layouts/container";
import { ReactNode } from "react";

interface PageProps {
  children?: ReactNode;
}

function PageLayout(props: PageProps) {

  const { children } = props;
  return (
    <>
      <TopContact />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
