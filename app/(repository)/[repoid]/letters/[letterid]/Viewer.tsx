"use client"

import { BlockNoteEditor } from "@blocknote/core"
import { BlockNoteView, useBlockNote } from "@blocknote/react"
import "@blocknote/core/style.css"
import { getRandomUser } from "@/lib/randomUser"
import * as Y from "yjs"
import { Button } from "@/app/components/ui/button"
import { rtdb } from "@/app/api/firebase"
import { ref, push, get, limitToLast, query } from "firebase/database"
import { db } from "@/app/api/firebase"
import { doc, getDoc } from "firebase/firestore"
import { IndexeddbPersistence } from "y-indexeddb"

interface Props {
  params: { repoid: string; letterid: string }
}

export default function Viewer({ params }: Props) {
  const ydoc = new Y.Doc()
  const docRef = doc(db, "repos", params.repoid)

  return (
    <div>
      <Button onClick={async () => {}}>Accept</Button>
      <Button onClick={async () => {}}>Reject</Button>
    </div>
  )
}
