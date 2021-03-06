import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"
        ></link>
      </Head>
      <AppLayout></AppLayout>
    </>
  );
};

export default Home;
