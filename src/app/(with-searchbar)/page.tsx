// "use client"; //지시자를 명시하면 사용할 수 있음!

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {

  console.log("home 컴포넌트 실행");

    //REACT Hook은 브라우저에만 동작을 한다.
  
  return (
    <div>
      인덱스페이지
    </div>
  );
}
