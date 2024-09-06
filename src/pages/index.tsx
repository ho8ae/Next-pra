import { ReactNode } from "react";
import style from "./index.module.css";
import SeacrhableLaout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-rendom-books";
import Head from "next/head"; //page별로 meta-tag 가능 ! 


//서버 사이드 렌더링 방식 getServerSideProps
export const getStaticProps = async () => {
  //컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  //여기는 서버에서 다뤄짐

  // const allBooks = await fetchBooks()
  // const recoBooks = await fetchRandomBooks();


  const [allBooks, recoBooks] = await Promise.all([ //Promise type으로 가지고 오네.;;
    fetchBooks(),
    fetchRandomBooks(),
  ])

  return {
    props: { allBooks, recoBooks },

  };

};

export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  //InferGetStaticPropsType 자동으로 추론해서 props type을 정의해주는거임

  return (
    <>
    <Head> 
      <title>한입 북스</title>
      <meta property="og:image" content="/thumbnail.png"/>
      <meta property="og:title" content="한입북스"/>
      <meta property="og:desctription" content="한입 북스에 등록된 도서들을 만나보세요"/>

    </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => <BookItem key={book.id}{...book} />)}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => <BookItem key={book.id}{...book} />)}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SeacrhableLaout>{page}</SeacrhableLaout>
};

