'use client'

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, Editor } from '@tiptap/react'
import { UserAuth } from '../../api/AuthContext';

const NextTiptapEditor = () => {
    const Ydoc = new Y.Doc()
    const YWebSocketProvider = new WebsocketProvider(
        "ws://test-6pvnca4zhq-an.a.run.app/",
        "sampleroom",
        Ydoc
    )
    const editor = new Editor({
        extensions: [
            StarterKit,
            Collaboration.configure({
                document: Ydoc,
            }),
            CollaborationCursor.configure({
                provider: YWebSocketProvider,
            }),
        ],
    })
    const { user } = UserAuth();

    return (
        <div>
            This is a page
            <EditorContent editor={editor} />
            <h1>please edit↑</h1>
        </div>
    );
}

export default NextTiptapEditor

// if (editor !== null) {
//         const uid = user ? user.uid : null
//         if (uid && uid === repo.owner.uid) {
//             editor.setEditable(true)
//         }
//         else {
//             editor.setEditable(false)
//         }
//     }
//     return () => {
//         YdocRef.current?.destroy()
//         YWebSocketProviderRef.current?.destroy()
//     }