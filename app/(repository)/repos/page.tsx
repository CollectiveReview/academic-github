import React from 'react'
import { collection, doc, getDoc, limitToLast, setDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";
import { Table } from '@radix-ui/themes';

const RepositoryListPage = async () => {
    const citiesRef = collection(db, "repos");

    const q = query(citiesRef, where("description", "==", "d"));
    const querySnapshot = await getDocs(q)

    const res = querySnapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data()
        }
    ))

    return (
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
                {/* {Object.keys(letters).map((key: string) => (
                    <Table.Row key={key}>
                        <Table.Cell><Link href={`./letters/${key}`}>{key}</Link></Table.Cell>
                        <Table.Cell>{letters[key].status}</Table.Cell>
                        <Table.Cell>{letters[key].createdAt}</Table.Cell>
                        <Table.Cell>{letters[key].comment}</Table.Cell>
                    </Table.Row>
                ))} */}
            </Table.Body>
        </Table.Root>
    )
}

export default RepositoryListPage