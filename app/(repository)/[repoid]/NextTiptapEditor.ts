import React from 'react'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, Editor } from '@tiptap/react'
import { useEffect, useRef, useState } from 'react'
import { UserAuth } from '../../api/AuthContext';

const NextTiptapEditor = () => {
    const YdocRef = useRef(new Y.Doc())
    const YWebSocketProviderRef = useRef(new WebsocketProvider(
        "ws://test-6pvnca4zhq-an.a.run.app/",
        "sampleroom",
        YdocRef.current
    ))
    const [editor, setEditor] = useState(new Editor({
        extensions: [
            StarterKit,
            Collaboration.configure({
                document: YdocRef.current,
            }),
            CollaborationCursor.configure({
                provider: YWebSocketProviderRef.current,
            }),
        ],
    }))
    const { user } = UserAuth();

    useEffect(() => {
        if (editor !== null) {
            const uid = user ? user.uid : null
            if (uid && uid === repo.owner.uid) {
                editor.setEditable(true)
            }
            else {
                editor.setEditable(false)
            }
        }
        return () => {
            YdocRef.current?.destroy()
            YWebSocketProviderRef.current?.destroy()
        }
    }, [user])


    return (

        <EditorContent editor= { editor } />
        <h1>please edit↑</h1>
            < /div>
    )
}

export default NextTiptapEditor