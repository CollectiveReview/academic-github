import type { NextPage } from 'next'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, Editor } from '@tiptap/react'
import { useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {
    const YdocRef = useRef < Y.Doc | null > (null)
    const YWebSocketProviderRef = useRef < WebsocketProvider | null > (null)
    const [editor, setEditor] = useState < Editor | null > (null)

    useEffect(() => {
        YdocRef.current = new Y.Doc()

        YWebSocketProviderRef.current = new WebsocketProvider(
            'ws://localhost:1234',
            'roomname',
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
    }, [])

    return (
        <div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default Home