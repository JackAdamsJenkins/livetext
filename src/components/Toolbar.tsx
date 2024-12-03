import { Editor } from "@tiptap/react";

export function Toolbar({ editor }: { editor: Editor | null }) {
   return (
      <div className="toolbar">
         <button
            onClick={() => {
               editor?.chain().focus().addPendingComment().run();
            }}
            data-active={editor?.isActive("liveblocksCommentMark")}
         >
            💬 Ecrit ton texte dessous
         </button>
      </div>
   );
}