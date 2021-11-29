import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TopContact from "../components/Contact/TopContact";
import Page from "../layouts/page";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Page>
      <TopContact></TopContact>
    </Page>
  );
};

export default Home;
