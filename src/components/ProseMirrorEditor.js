// ProseMirrorEditor.js
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from 'y-prosemirror'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { schema } from './schema.js'
import { exampleSetup } from 'prosemirror-example-setup'
import { keymap } from 'prosemirror-keymap'
import React, { useEffect, useRef } from 'react';

function ProseMirrorEditor({ isConnected }) {
  const editorContainerRef = useRef(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:8080', 'prosemirror-demo', ydoc);
    const yXmlFragment = ydoc.getXmlFragment('prosemirror');

    // ... Rest of the setup code

    return () => {
      // Clean up any resources when the component unmounts
    };
  }, [isConnected]);

  return <div ref={editorContainerRef}></div>;
}

export default ProseMirrorEditor;
