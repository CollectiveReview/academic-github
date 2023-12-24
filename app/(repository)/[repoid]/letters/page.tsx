import { rtdb } from "@/app/api/firebase";
import { Table } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { get, limitToLast, query, ref } from "firebase/database";
import Link from "next/link";

interface Props {
  params: { repoid: string };
}
interface Letter {
  id: string;
  createdAt: number;
  comment: string;
  status: string;
}
interface Letters {
  [key: string]: Letter;
}
const LettersListPage = async ({ params }: Props) => {
  const letterRef = ref(rtdb, params.repoid);
  const letterSnapshot = await get(query(letterRef, limitToLast(10)));
  const letters: Letters = letterSnapshot.val();

  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>Created At</Table.Cell>
            <Table.Cell>Comment</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(letters).map((key: string) => (
            <Table.Row key={key}>
              <Table.Cell>
                <Link href={`./letters/${key}`}>{key}</Link>
              </Table.Cell>
              <Table.Cell>{letters[key].status}</Table.Cell>
              <Table.Cell>{letters[key].createdAt}</Table.Cell>
              <Table.Cell>{letters[key].comment}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LettersListPage;
