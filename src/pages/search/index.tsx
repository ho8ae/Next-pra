import { useRouter } from "next/router";



export default function Page(){
    const router = useRouter();
     // const q= router.query.q;
     const {q} =router.query;//구조분해 할당

    return <h1>Search</h1>
}