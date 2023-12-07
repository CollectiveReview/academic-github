import React from 'react'

import { rtdb } from '@/app/api/firebase'
import { ref, push, get, limitToLast, query } from "firebase/database"
import dynamic from 'next/dynamic';

const Viewer = dynamic(() => import("./Viewer"), { ssr: false });

interface Props {
    params: { letterid: string }
}
const LetterDetailPage = ({ params }: Props) => {
    // const letterRef = ref(rtdb, params.letterid);

    return (
        <div>
            <Viewer params={params} />

        </div>
    )
}

export default LetterDetailPage