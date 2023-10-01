// import type { NextPage } from 'next'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, Editor } from '@tiptap/react'
import { useEffect, useRef, useState } from 'react'

const NextTiptapEditor = ({ roomName }) => {
    const YdocRef = useRef(null)
    const YWebSocketProviderRef = useRef(null)
    const [editor, setEditor] = useState(null)

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

        return () => {
            YdocRef.current?.destroy()
            YWebSocketProviderRef.current?.destroy()
        }
    }, [roomName])

    return (
        <div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default NextTiptapEditor