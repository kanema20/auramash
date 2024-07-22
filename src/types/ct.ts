import { ObjectId } from "mongodb";

export enum Category {
    CELEB,
    ATHLETE,
    ACTOR,
    CRYPTO,
    MOVIES,
}

export default class KOL {
    constructor(public handle: string, public aurarank: number, public pfp: string, public wins: number, public category: Category, public id?: ObjectId) {}
}