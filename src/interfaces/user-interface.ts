export default interface IUser {
    user_id?: string,
    email?: string,
    firstName?: string,
    lastName?: string
    avatar?: string,
    age?: Number,
    DoB?: Date,
    sex?: 'male' |'female'
}