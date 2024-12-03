import "@liveblocks/react-tiptap/styles.css";
import "@liveblocks/react-ui/styles.css";
import './App.css';
import { Editor } from "./components/Editor";
// import { Editor } from '@tiptap/react';

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider
} from "@liveblocks/react/suspense";

function App() {

  return (
    <LiveblocksProvider publicApiKey={"pk_prod_gxMswny6RyjWvbaYTpGcBLblVGp6nFEeqiw7lapCdaMZ3JkXfZEsdwdez4fhB6_W"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Editor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

export default App
