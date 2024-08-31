import GlobalLayout from "@/components/global-layout";
import SeacrhableLaout from "@/components/searchable-layout";
import "@/styles/globals.css";
import { NextPage } from "next";

import type { AppProps } from "next/app";
import { ReactNode } from "react";


type NextPageWithLayout = NextPage & {
  getLayout? : (page:ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }
  : AppProps & {
  Componen: NextPageWithLayout
}) {

  //페이지 별 레이아웃을 하면서 예외처리까지
  const getLayout = 
  Component.getLayout ?? ((page:ReactNode)=>page);
  
  

  return (
    <GlobalLayout>
        {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
