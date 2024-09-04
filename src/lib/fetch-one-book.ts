import { BookData } from "@/type";

export default async function fetchOneBook(id:number):Promise<BookData | null>{
//에러 시 null 값 반환되니까 union으로 타입 정의
    const url = `http://localhost:12345/book/${id}`

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