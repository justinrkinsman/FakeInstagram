import { Header } from "./Header"

export function NewPost() {
    return(
        <div id="newPostPage">
            <Header />
            <div id='newPost'>
                <p>Create New Post</p>
                <button>Upload</button>
                <input type='text' defaultValue={'Enter Description...'}></input>
                <button>Post</button>
            </div>
        </div>
    )
}