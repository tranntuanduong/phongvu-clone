import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface PageProps {
  children?: ReactNode;
}

function Page(props: PageProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Page;
