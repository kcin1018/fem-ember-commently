import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
    classNames: ['post-comment'],
    isEditing: false,

    saveComment: task(function* () {
        this.set('isDisabled', true);
        yield this.get('model').save().catch(() => {
            alert('error');
            this.set('isDisabled', false);
        }).then(() => {
            this.set('isEditing', false);
            this.set('isDisabled', false);
        });
    }),

    actions: {
        cancelComment() {
            this.get('model').rollbackAttributes();
            this.set('isEditing', false);
            this.set('isDisabled', false);
        }
    }
});