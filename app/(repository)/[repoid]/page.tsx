import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor"), { ssr: false });
interface Props {
    params: { repoid: string }
}
export default function RepositoryDetailPage({ params }: Props) {
    return <Editor params={params} />;
}