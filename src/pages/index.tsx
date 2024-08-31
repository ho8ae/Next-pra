import { ReactNode } from "react";
import style from "./index.module.css";
import SeacrhableLaout from "@/components/searchable-layout";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}> 인덱스</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SeacrhableLaout>{page}</SeacrhableLaout>
};

