'use client'

import { UserAuth } from "@/app/api/AuthContext";
import { Button, Tooltip } from '@radix-ui/themes';
import Link from 'next/link';

const CreateRepoButton = () => {
    const { user } = UserAuth();

    return (
        <div>
            <Button disabled={user === null}>{user === null ? (
                <div>
                    <Tooltip content="Login to Create Your Repo">
                        <span>Create your own</span>
                    </Tooltip>
                </div>
            ) : (
                <Link href="/repos/new">Create your own</Link>
            )} </Button>
        </div>
    )
}

export default CreateRepoButton