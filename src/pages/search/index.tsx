import BookItem from "@/components/book-item";
import SeacrhableLaout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
    //쿼리 스트링을 읽어야함
    const q = context.query.q;
    const books = await fetchBooks(q as string);


    return{
        props:{books},
    };
};

export default function Page({books,}:InferGetServerSidePropsType<typeof getServerSideProps>){
    return (
      <div>
        {books.map((book) =>(<BookItem key={book.id} {...book}/>))}
      </div>  
    );
}

Page.getLayout = (page:ReactNode) =>{
    return <SeacrhableLaout>{page}</SeacrhableLaout>
}