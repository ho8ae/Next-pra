import { ReactNode } from "react";
import style from "./index.module.css";
import SeacrhableLaout from "@/components/searchable-layout";
import books from "@/mock/books.json"; //@ 는 src를 가리키는 것
import BookItem from "@/components/book-item";




export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book)=><BookItem key={book.id}{...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book)=><BookItem key={book.id}{...book}/>)}
      </section>
    </div>

  );
}

Home.getLayout = (page: ReactNode) => {
  return <SeacrhableLaout>{page}</SeacrhableLaout>
};

