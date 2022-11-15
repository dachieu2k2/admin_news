import { NewsActionKind, NewsStateType, NewsType } from "../Contexts/constants";

export interface NewsAction {
    type: NewsActionKind;
    payload: NewsType;
}

export const newsReducer = (state: NewsStateType, action: NewsAction) => {
    const { payload, type } = action;
    switch (type) {
        default:
            return state;
        // throw new Error("Not found actions!")
    }
}