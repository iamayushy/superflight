import { alertUser } from "@/utils/common";
import Card from "../ui/card";
import TextEditor from "../ui/textEditor";
import { useState } from "react";

interface IPostInputProps {
  onPost: (data?: any) => void;
  onInputClick: () => void;
}
function PostInput({ onPost, onInputClick }: IPostInputProps) {
  const [text, setText] = useState("");
  const handleInputChange = (e: any) => {
    if (e.target.value?.trim()?.length > 0) {
         setText(e.target.value);
    }
  };
  const handlePost = () => {
    if (text?.length > 0) {
        onPost(text)
        setText("");
    };
  };
  return (
    <Card className="w-[35.5rem] !p-2">
      <TextEditor
        onPost={handlePost}
        onChange={handleInputChange}
        onClick={onInputClick}
        value={text}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                handlePost()
                setText("")
            }
        }}
        onContent={alertUser}
        onMic={alertUser}
        onVideo={alertUser}
      >
        <TextEditor.Toolbar onDelete={alertUser} onToolClick={alertUser} />
      </TextEditor>
    </Card>
  );
}
export default PostInput;
