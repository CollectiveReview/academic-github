// import type { NextPage } from 'next'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, Editor } from '@tiptap/react'
import { useEffect, useRef, useState } from 'react'
import { UserAuth } from '../api/AuthContext';

const NextTiptapEditor = ({ roomName }) => {
    const YdocRef = useRef(null)
    const YWebSocketProviderRef = useRef(null)
    const [editor, setEditor] = useState(null)
    const { user } = UserAuth();

    useEffect(() => {
        YdocRef.current = new Y.Doc()

        YWebSocketProviderRef.current = new WebsocketProvider(
            "ws://test-6pvnca4zhq-an.a.run.app/",
            roomName,
            YdocRef.current
        )

        setEditor(
            new Editor({
                extensions: [
                    StarterKit,
                    Collaboration.configure({
                        document: YdocRef.current,
                    }),
                    CollaborationCursor.configure({
                        provider: YWebSocketProviderRef.current,
                    }),
                ],
            })
        )
        if (editor !== null) {
            console.log(editor)
            editor.setEditable(false)
        }


        return () => {
            YdocRef.current?.destroy()
            YWebSocketProviderRef.current?.destroy()
        }
    }, [roomName])


    return (
        <div>
            <EditorContent editor={editor} />
            <h1>please edit↑</h1>
        </div>
    )
}

export default NextTiptapEditor