import Card from "@/components/ui/card";
import Button from "../ui/button";

interface IPostsProps {
  name: string;
  time: string;
  emoji?: string;
  content: string;
  profilePicUrl: string;
  onLike: (data: any) => void;
  onComment: (data: any) => void;
  onShare: (data: any) => void;
}
function Posts({ name, time, emoji, content, profilePicUrl, onLike, onComment, onShare }: IPostsProps) {
  return (
    <Card
      className="w-[35.5rem] !p-2"
      footerAction={
        <div className="flex gap-6 ml-4">
          <Button.Icon onClick={onLike}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/heart.svg"
              alt="heart"
            />
          </Button.Icon>
          <Button.Icon onClick={onComment}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/comment.svg"
              alt="comment"
            />
          </Button.Icon>
          <Button.Icon onClick={onShare}>
            <img
              src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/send.svg"
              alt="share"
            />
          </Button.Icon>
        </div>
      }
    >
      <div className="p-3 flex flex-col gap-4">
        <div className="flex gap-1 items-center">
          <div>
            <img width={37} height={37} src={profilePicUrl} alt={name} />
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-[#0000005E]">{time} ago</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <p>{emoji}</p>
          </div>
          <div>
            <p className="text-sm text-[#000000D4]">{content}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default Posts;
