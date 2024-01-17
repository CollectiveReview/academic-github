import prisma from '@/lib/prisma';
import { Table } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Link from 'next/link';
import CreateRepoButton from "./CreateRepoButton";

const RepositoryListPage = async () => {
    const repos = await prisma.repo.findMany();

    return (
        <div>
            <CreateRepoButton />

            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.RowHeaderCell>Title</Table.RowHeaderCell>
                        {/* <Table.Cell>Contributors</Table.Cell> */}
                        <Table.RowHeaderCell>Created At</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Description</Table.RowHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {repos?.map((repo) => (
                        <Table.Row key={repo.uid}>
                            <Table.Cell><Link href={`./${repo.uid}`}>{repo.title}</Link></Table.Cell>
                            {/* <Table.Cell>{repo.users ?
                                <Avatar
                                    src={repo.users[0].avatarURL}
                                    fallback="?"
                                />
                                : "Unknown"
                            }</Table.Cell> */}
                            <Table.Cell>{repo.createdAt.toLocaleString()}</Table.Cell>
                            <Table.Cell>
                                <p className='w-[300px] line-clamp-2'>{repo.description}</p>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

        </div>
    )
}

export const dynamic = 'force-dynamic'

export default RepositoryListPage