import { BookData } from "@/types";

export default async function fetchOneBook(id:number):Promise<BookData | null>{
//에러 시 null 값 반환되니까 union으로 타입 정의
    const url = `https://onebite-books-server-main-kappa.vercel.app/book/${id}`

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }

        return await response.json();

    }catch(err){
        console.error(err);
        return null;
    }
    
}