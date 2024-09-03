import { ReactNode } from "react";
import style from "./index.module.css";
import SeacrhableLaout from "@/components/searchable-layout";
import books from "@/mock/books.json"; //@ 는 src를 가리키는 것
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

//서버 사이드 렌더링 방식
export const getServerSideProps = () => {
  //컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수


  //여기는 서버에서 다뤄짐

  const data = "hello";


  //객체를 반환해야함 props 값이 있어야함
  return{ 
    props:{
      data,
    },
  };
};

export default function Home({data,} :InferGetServerSidePropsType<typeof getServerSideProps>) {

  console.log(data);


  

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem key={book.id}{...book} />)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem key={book.id}{...book} />)}
      </section>
    </div>

  );
}

Home.getLayout = (page: ReactNode) => {
  return <SeacrhableLaout>{page}</SeacrhableLaout>
};

