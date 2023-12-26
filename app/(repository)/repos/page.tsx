import React from 'react'
import { DocumentData, collection, orderBy, startAt } from "firebase/firestore";
import { query, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
import '@radix-ui/themes/styles.css';

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
            <Button ><Link href="/repos/new">Create your own</Link></Button>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>Owner</Table.Cell>
                        <Table.Cell>Created At</Table.Cell>
                        <Table.Cell>Description</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {repos.map((repo: Repo) => (
                        <Table.Row key={repo.id}>
                            <Table.Cell><Link href={`./${repo.id}`}>{repo.data.title}</Link></Table.Cell>
                            <Table.Cell>{repo.data.owner}</Table.Cell>
                            <Table.Cell></Table.Cell>

                            <Table.Cell>
                                <p className='w-[300px] line-clamp-2'>{repo.data.description}</p>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            <div></div>
        </div>
    )
}

export default RepositoryListPage