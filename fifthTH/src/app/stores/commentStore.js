import { EventEmitter } from 'events';
import {
    ADD_COMMENT,
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_END
} from '../constants/commentsConstants';
import dispatcher from '../dispatcher';
import axios from 'axios';

class CommentStore extends EventEmitter {
    constructor(){
        super(...arguments);

        this.comments = [];

        this.fetchCommentsStart = this.fetchCommentsStart.bind(this);
        this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
        this.getComments = this.getComments.bind(this);
        this.change = this.change.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchCommentsStart(){
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let { data } = response;

                dispatcher.dispatch({
                    type: FETCH_COMMENTS_END,
                    payload: data
                });
            })
    }

    fetchCommentsEnd(comments)
    {
        this.comments = comments;
        this.change();
    }

    change(){
        console.log("add 3");
        this.emit('change', this.comments);
    }

    getComments(){
        return this.comments;
    }

    addComment(comment){
        console.log("add 2");
        this.comments.push(comment);
        this.change();
    }


    handleActions(action){
        switch (action.type)
        {
            case ADD_COMMENT: {
                console.log("add 1");
                this.addComment(action.payload);
                break;
            }
            case FETCH_COMMENTS_START: {
                this.fetchCommentsStart();
                break;
            }
            case FETCH_COMMENTS_END: {
                this.fetchCommentsEnd(action.payload);
                break;
            }
        }
    }
}

const cS = new CommentStore;
dispatcher.register(cS.handleActions);
export default cS;
