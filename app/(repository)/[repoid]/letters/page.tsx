import React from 'react'
import { Table, Card, Text } from '@radix-ui/themes'
import Link from 'next/link';
import '@radix-ui/themes/styles.css';


const LettersListPage = async () => {
  const letters = [
    {
      id: "0",
      createdat: "Dec 7 2022",
      comment: "Great",
      status: "Review",
    }
  ]
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
          {letters.map((letter) => (
            <Table.Row key={letter.id}>
              <Table.Cell><Link href={`./letters/${letter.id}`}>{letter.id}</Link></Table.Cell>
              <Table.Cell>{letter.createdat}</Table.Cell>
              <Table.Cell>{letter.comment}</Table.Cell>
              <Table.Cell>{letter.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Card asChild style={{ maxWidth: 300 }}>
        <a href="/">
          <Text as="div" size="2" weight="bold">
            { }
          </Text>
          <Text as="div" color="gray" size="2">
            Here comes the detail of the letter
          </Text>
        </a>
      </Card>
    </div>
  )
}

export default LettersListPage