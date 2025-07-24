import Posts from "@/components/feed/post";
import PostInput from "@/components/feed/postInput";
import Modal from "@/components/ui/modal";
import { userContext } from "@/context/userContext";
import { posts } from "@/mock/posts";
import { alertUser } from "@/utils/common";
import { useContext, useState } from "react";
import Login from "../auth/login";
import Register from "../auth/register";

export default function UserFeed () {
    const [userPosts, setUserPosts] = useState(() => posts)
    const [isLoginPage, setLoginPage] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const {name, profilePic, id} = useContext(userContext);
    const handleLogin = () => {
        console.log("click",id )
        if (!id) {
            setIsOpen(true);
        }
        else {
            setIsOpen(false);
        }
    }
    const handleNewPost = (data: string) => {

      setUserPosts((prev) => [
        {
          name,
          profilePic: profilePic ?? "",
          lastTime: "",
          emoji: "💡",
          content: data,
          id: id as any
        },
        ...prev,
      ]);
    };


    return <section className="flex flex-col items-center gap-6 mt-24">
        <div>
            <PostInput
            onPost={(data) => handleNewPost(data)}
            onInputClick={() => handleLogin()}
            />
        </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} className="!bg-transparent">
          {isLoginPage ?  <Login isModalView onSuccessFull={() => setIsOpen(false)} onSignup={() => setLoginPage(false)}/>: <Register isModalView onSuccessFull={() => setIsOpen(false)} onSignin={() => setLoginPage(true)}/> }
        </Modal>

    <div className="flex flex-col gap-6">
        {userPosts.map(({name, lastTime, emoji, content, profilePic}) => {
            return <div
            >
                <Posts
                onComment={alertUser}
                onLike={alertUser}
                onShare={alertUser}
                name={name}
                profilePicUrl={profilePic}
                time={lastTime}
                emoji={emoji}
                content={content}
                />
            </div>
        })}
    </div>
    </section>
}
