import dispacther from '../dispatcher';
import {ADD_COMMENT, FETCH_COMMENTS_START} from '../constants/commentsConstants';

export function addComment({title, userId, body}) {
    const comment = {title, userId, body};

    dispacther.dispatch({
        type: ADD_COMMENT,
        payload: comment
    });
}

export function fetchComments() {
    dispacther.dispatch({
        type: FETCH_COMMENTS_START,
    });
}