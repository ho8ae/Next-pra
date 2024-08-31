import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react"
import style from './searchable-layout.module.css';

export default function SeacrhableLaout({
    children,
}: {
    children: ReactNode
}) {

    const router = useRouter();
    const [search, setSearch] = useState("");


    const q = router.query.q as string; //여러개 일 수도 있어서 속성 값이 애매할 수도


    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    const onChageSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        //리엑트발생한 ChangeEvent Type in HTML 태그 발생한다.
        setSearch(e.target.value);

    };

    const onSubmit = () => {
        if (!search || q === search) return alert('동일한 검색어 입니다.');
        router.push(`/search?q=${search}`);

    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }

    };


    return (
    <div >
        <div className={style.searchbar_container}>
            <input value={search} onKeyDown={onKeyDown} onChange={onChageSearch} placeholder="검색어를 입력.." />
            <button onClick={onSubmit}>검색 </button>
        </div>
        {children}

    </div>
    );
};