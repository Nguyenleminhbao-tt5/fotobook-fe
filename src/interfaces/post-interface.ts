import IComment from "./comment-interface";
import IUser from "./user-interface";

export default interface IPost {
    isGroup?: boolean,
    user: IUser,
    description: string,
    comments: IComment,
    countLikes: number
}