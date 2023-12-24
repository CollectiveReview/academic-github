"use client";

import { Button } from "@/app/components/ui/button";
import "@blocknote/core/style.css";

// TODO: 正しく動作するようにする
// interface Props {
//   params: { repoid: string; letterid: string };
// }
export default function Viewer() {
  // export default function Viewer({ params }: Props) {
  // const ydoc = new Y.Doc();
  // const docRef = doc(db, "repos", params.repoid);

  return (
    <div>
      <Button onClick={async () => {}}>Accept</Button>
      <Button onClick={async () => {}}>Reject</Button>
    </div>
  );
}
