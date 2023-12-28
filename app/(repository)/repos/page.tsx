import { Avatar, Table } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { DocumentData } from "firebase/firestore";
import Link from 'next/link';
import CreateRepoButton from "./CreateRepoButton";

interface Repo {
    id: string,
    data: DocumentData
}
const RepositoryListPage = async () => {
    const res = await fetch(`https://gnt.place/api/repos`, { cache: 'no-cache' })
    const repos = await res.json()

    return (
        <div>
            <CreateRepoButton />
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>Contributors</Table.Cell>
                        <Table.Cell>Created At</Table.Cell>
                        <Table.Cell>Description</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {repos?.map((repo: Repo) => (
                        <Table.Row key={repo.id}>
                            <Table.Cell><Link href={`./${repo.id}`}>{repo.data.title}</Link></Table.Cell>
                            <Table.Cell>{repo.data.users ?
                                <Avatar
                                    src={repo.data.users[0].avatarURL}
                                    fallback="?"
                                />
                                : "Unknown"
                            }</Table.Cell>
                            <Table.Cell>{(new Date(repo.data.createdAt)).toLocaleString()}</Table.Cell>
                            <Table.Cell>
                                <p className='w-[300px] line-clamp-2'>{repo.data.description}</p>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default RepositoryListPage