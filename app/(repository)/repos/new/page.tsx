'use client'

import Spinner from '@/app/components/Spinner'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import axios from "axios"
import { getAuth } from 'firebase/auth'
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { useForm } from "react-hook-form"

interface RepoForm {
    title: string;
    description: string
}

const NewRepoPage = () => {
    const { register, handleSubmit } = useForm<RepoForm>();
    const router = useRouter();
    const [isSubmitting, setSubmitting] = useState(false)
    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
            setSubmitting(true)
            const post = {
                ...data,
                uid: user!.uid,
                avatarURL: user!.photoURL
            }
            console.log(post)
            const res = await axios.post("/api/repos", post)
            console.log(res)
            router.push("/repos")
        })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')} />
            </TextField.Root>
            <TextArea placeholder='Description' {...register('description')} />
            <Button disabled={isSubmitting || user === null}> Create New Repository {isSubmitting && <Spinner />}</Button>
        </form>
    )
}

export default NewRepoPage