export default function Page({ searchParams }: {
    searchParams: {
        q?: string;
    };
}) {
    return <div> Search Page {searchParams.q}</div>;
}