import { LikeButton } from "../../reusuableComponents/LikeButton"
import { ViewAllCommentsButton, ViewAllCommentsText } from "../../reusuableComponents/ViewAllCommentsButton"
import { DMButton } from "../../reusuableComponents/DirectMessageButton"
import { FavoritesButton } from "../../reusuableComponents/FavoriteButton"
import { Likes } from "../../reusuableComponents/Likes"
import { Description } from "../../reusuableComponents/Description"
import { AddComment } from "../../reusuableComponents/AddComment"
import { PostComment } from "../../reusuableComponents/PostComment"
import { FullName } from "../../reusuableComponents/FullName"

export const PostInteraction = () => {
    return (
        <fieldset>
            <LikeButton />
            <ViewAllCommentsButton />
            <DMButton />
            <FavoritesButton />
            <Likes />
            <Description />
            <ViewAllCommentsText />
            <div>
                Top 2 comments listed here with
                <FullName />
                <p>Create component for comments</p>
            </div>
            <AddComment />
            <PostComment />
        </fieldset>
    )
}