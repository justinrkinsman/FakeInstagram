import './Posts.css'
import { PostHeader } from './postComponents/PostHeader'
import { PostContent } from './postComponents/PostContent'
import { PostInteraction } from './postComponents/PostInteractionButtons'

export function Posts() {
    return (
        <div id='post'>
            <PostHeader />
            <PostContent />
            <PostInteraction />
        </div>
    )
}