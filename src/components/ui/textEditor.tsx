import type { PropsWithChildren, TextareaHTMLAttributes } from "react";
import Button from "./button";
import {
  Bold,
  ChevronDown,
  Code,
  Italic,
  List,
  ListOrdered,
  Plus,
  Quote,
  Smile,
  Underline,
} from "lucide-react";
import Divider from "./divider";

interface ITextEditor
  extends PropsWithChildren,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  onContent: (data?: any) => void;
  onVideo: () => void;
  onMic: () => void;
  onPost: () => void;
}

function TextEditor({ children, onContent, onVideo, onMic, onPost, ...otherProps }: ITextEditor) {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-3 pt-3">{children}</div>
      <div className="flex gap-2 items-start px-3">
        <Button.Icon>
          <Smile size={15} className="mt-1" />
        </Button.Icon>
        <textarea
           {...otherProps}
          placeholder="How are you feeling today?"
          className="w-full h-20 resize-none px-1 outline-0"
        />
      </div>
      <Divider />
      <div className="flex justify-between items-center px-3 pb-3">
        <div className="flex items-center gap-4">
          <Button.Icon onClick={onContent} className="bg-neutral-10 rounded-lg p-1.5">
            <Plus size={12} />
          </Button.Icon>
          <Button.Icon onClick={onMic}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/mic.svg"
              alt="mic icon"
            />
          </Button.Icon>
          <Button.Icon onClick={onVideo}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/video.svg"
              alt="video icon"
            />
          </Button.Icon>
        </div>
        <div>
          <Button.Icon onClick={onPost}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/post.svg"
              alt="post icon"
            />
          </Button.Icon>
        </div>
      </div>
    </div>
  );
}

interface IToolBarProps {
  onToolClick: () => void;
  onDelete: () => void;
}
function ToolBar({ onToolClick, onDelete }: IToolBarProps) {
  const tootls = [
    {
      tool: "text",
      icons: [
        <Bold size={12} />,
        <Italic size={12} />,
        <Underline size={12} />,
      ],
    },
    {
      tool: "paragraph",
      icons: [<List size={12} />, <ListOrdered size={12} />],
    },
    {
      tool: "formatting",
      icons: [<Quote size={12} />, <Code size={12} />],
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <div className="bg-neutral-10 p-1.5 rounded-lg flex gap-2 items-center shadow-card w-fit">
        <div className="flex items-center gap-4 bg-neutral-0 p-2 px-2 rounded-md">
          <p className="text-[#000000CF] text-xs">Paragraph</p>
          <ChevronDown size={12} />
        </div>
        <div className="flex gap-1">
          {tootls.map((it, id) => {
            return (
              <div
                key={id}
                className={`flex ${
                  id > 0 ? "border-l border-[#0000001A]" : ""
                }`}
              >
                {it.icons.map((ic, idx) => {
                  return (
                    <Button.Icon
                      onClick={onToolClick}
                      key={idx}
                      className={`p-2.5 ${
                        it.tool === "text" && idx === 0
                          ? "bg-neutral-0 rounded-md"
                          : "bg-transparent"
                      }`}
                    >
                      {ic}
                    </Button.Icon>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Button.Icon onClick={onDelete} className="bg-[#FF000026] p-3 rounded-lg">
        <img
          src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/trash.svg"
          alt=""
        />
      </Button.Icon>
    </div>
  );
}

TextEditor.Toolbar = ToolBar;
export default TextEditor;
