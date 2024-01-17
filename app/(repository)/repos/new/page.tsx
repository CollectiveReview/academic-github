'use client'

import Spinner from '@/app/components/Spinner'
import { repoSchema } from '@/lib/repoSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextField } from '@radix-ui/themes'
import axios from "axios"
import { getAuth } from 'firebase/auth'
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from 'zod'

export type RepoForm = z.infer<typeof repoSchema>

const NewRepoPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RepoForm>({
        resolver: zodResolver(repoSchema)
    });
    const router = useRouter();
    const [isSubmitting, setSubmitting] = useState(false)
    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
            setSubmitting(true)
            const post = {
                ...data,
                users: [
                    {
                        uid: user!.uid,
                        avatarURL: user!.photoURL
                    }
                ]
            }
            await axios.post("/api/repos", data)
            router.push("/repos")
            router.refresh()
        })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')} />
            </TextField.Root>
            {errors.title && <Text color='red'>{errors.title.message}</Text>}
            <TextArea placeholder='Description' {...register('description')} />
            {errors.description && <Text color='red'>{errors.description.message}</Text>}

            <Button disabled={isSubmitting || user === null}> Create New Repository {isSubmitting && <Spinner />}</Button>
        </form >
    )
}

export default NewRepoPage