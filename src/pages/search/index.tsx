import SeacrhableLaout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";



export default function Page(){
    const router = useRouter();
     // const q= router.query.q;
     const {q} =router.query;//구조분해 할당

    return <h1>Search {q}</h1>
}

Page.getLayout = (page:ReactNode) =>{
    return <SeacrhableLaout>{page}</SeacrhableLaout>
}