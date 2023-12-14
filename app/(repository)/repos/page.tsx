import React from 'react'
import { DocumentData, collection, doc, getDoc, limitToLast, orderBy, setDoc, startAt } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";
import { Table } from '@radix-ui/themes';
import Link from 'next/link';
import '@radix-ui/themes/styles.css';
import { limitToFirst } from 'firebase/database';


interface Repo {
    id: string,
    data: DocumentData
}
const RepositoryListPage = async () => {
    const citiesRef = collection(db, "repos");

    const q = query(citiesRef, orderBy("title"), startAt(20));
    const querySnapshot = await getDocs(q)

    const repos = querySnapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data()
        }
    ))


    return (
        <div>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell>ID</Table.Cell>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>Owner</Table.Cell>
                        <Table.Cell>Description</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {repos.map((repo: Repo) => (
                        <Table.Row key={repo.id}>
                            <Table.Cell><Link href={`./${repo.id}`}>{repo.id}</Link></Table.Cell>
                            <Table.Cell>{repo.data.title}</Table.Cell>
                            <Table.Cell>{repo.data.owner}</Table.Cell>
                            <Table.Cell>{repo.data.description}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default RepositoryListPage