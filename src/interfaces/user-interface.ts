export default interface IUser {
    email?: string,
    fullName: string,
    avatar: string,
    age?: number,
    DoB?: Date,
    sex?: 'male' |'female'
}