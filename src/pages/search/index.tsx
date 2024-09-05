import BookItem from "@/components/book-item";
import SeacrhableLaout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

// export const getStaticProps = async(context:GetStaticPropsContext)=>{
//     //쿼리 스트링을 읽어야함 단 ssg는 쿼리 스트링을 불러오지 못함
    
//     const q = context.query.q;
//     const books = await fetchBooks(q as string);


//     return{
//         props:{books},
//     };
// };
// SSR props - {books,}:InferGetServerSidePropsType<typeof getServerSideProps>
export default function Page(){
  const [books,setBooks] = useState<BookData[]>([]);


  const router = useRouter();
  const q = router.query.q;

const fetchSearchResult = async() =>{
  const data = await fetchBooks(q as string);
  setBooks(data);
}


  useEffect(()=>{
    if(q){
      fetchSearchResult();//검색 결과를 불러오는 로직
    }
  },[q]);

    return (
      <div>
        {books.map((book) =>(<BookItem key={book.id} {...book}/>))}
      </div>  
    );
}

Page.getLayout = (page:ReactNode) =>{
    return <SeacrhableLaout>{page}</SeacrhableLaout>
}