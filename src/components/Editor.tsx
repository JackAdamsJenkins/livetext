import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Threads } from "./Threads";
import { Toolbar } from "./Toolbar";

export function Editor() {
   const liveblocks = useLiveblocksExtension();

   const editor = useEditor({
      extensions: [
         liveblocks,
         StarterKit.configure({
            // The Liveblocks extension comes with its own history handling
            history: false,
         }),
      ],
   });

   return (
      <div>
         <Toolbar editor={editor} />
         <EditorContent editor={editor} className="editor" />
         <Threads editor={editor} />
      </div>
   );
}