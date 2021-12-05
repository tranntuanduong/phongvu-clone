
import TopContact from "@components/Contact/TopContact";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Container from "layouts/container";
import { ReactNode } from "react";

interface PageProps {
  children?: ReactNode;
}

function Page(props: PageProps) {

  const { children } = props;
  return (
    <>
      <TopContact />
      <Header />
      <Container>
      
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Page;
