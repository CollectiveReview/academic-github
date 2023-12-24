import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("./Viewer"), { ssr: false });

interface Props {
  params: { repoid: string; letterid: string };
}
const LetterDetailPage = ({ params }: Props) => {
  // const letterRef = ref(rtdb, params.letterid);

  return (
    <div>
      <Viewer params={params} />
    </div>
  );
};

export default LetterDetailPage;
