export const SET_NEWS = "SET_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";


export type NewsType = {
    image: string;
    title: string;
    description: string;
    author: { name: string; Date: string; Phone: string };
    status: boolean;
    content: string;
    tag: string[];
    shortdescription: string;
};

export type NewsStateType = {
    news: NewsType[];
    isLoading: boolean;
};

export enum NewsActionKind {
    SET_NEWS = 'SET_NEWS',
    ADD_NEWS = "ADD_NEWS",
    UPDATE_NEWS = "UPDATE_NEWS",
    DELETE_NEWS = "DELETE_NEWS",
}