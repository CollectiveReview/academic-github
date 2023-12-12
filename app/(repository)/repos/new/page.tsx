'use client'

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"

interface RepoForm {
    title: string;
    description: string
}

const NewRepoPage = () => {
    const { register, handleSubmit } = useForm<RepoForm>();
    const router = useRouter();

    return (
        <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
            const res = await axios.post("/api/repos", data)
            console.log(res)
            router.push("/repos")
        })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')} />
            </TextField.Root>
            <TextArea placeholder='Description' {...register('description')} />
            <Button>Create New Repository</Button>
        </form>
    )
}

export default NewRepoPage