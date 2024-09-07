import { BookData } from "@/types";

export default async function fetchBooks(q?:string) : Promise<BookData[]> {
    //비동기는 반환 값이 Promise
    //? - 선택적 property
    let url = `https://onebite-books-server-main-kappa.vercel.app/book`

    if(q){
        url += `/search?q=${q}`;
    }

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error()
        }

        return await response.json()
    }
    catch(err){
        console.error(err);
        return [];
    }
    
    
}