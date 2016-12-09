import Ember from 'ember';

const PostCommentStateObject = Ember.Object.extend();

PostCommentStateObject.reopenClass({
  initialState(instance) {
    return {
      text: null
    };
  }
});

export default PostCommentStateObject;