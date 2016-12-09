import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Route, inject } = Ember;

export default Route.extend({
    currentUser: inject.service(),
    newComment: stateFor('post-comment', 'currentModel'),
    model({ id }) {
        return this.store.findRecord('post', id);
    },
    actions: {
        saveComment(commentText) {
            let user = this.get('currentUser.user');
            let post = this.get('currentModel');

            // create the comment object
            let comment = this.store.createRecord('comment', {
                user,
                post,
                body: commentText
            });

            // save and clear the comment
            comment.save().then(() => {
                let newComments = stateFor('post-comment');
                let newComment = newComments.get(post);
                newComment.set('text', '');
            });
        }
    }
});