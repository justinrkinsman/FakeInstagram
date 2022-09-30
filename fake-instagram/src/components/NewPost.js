import { Header } from "./Header"
import { UploadButton } from "./newPostComponents/UploadPhoto"
import { AddDescription } from "./newPostComponents/AddDescription"
import { PostButton } from "./newPostComponents/PostPhoto"

export function NewPost() {
    return(
        <div id="newPostPage">
            <Header />
            <div id='newPost'>
                <p>Create New Post</p>
                <UploadButton />
                <AddDescription />
                <PostButton />
            </div>
        </div>
    )
}