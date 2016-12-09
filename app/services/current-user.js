import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
  store: inject.service(),
  loadUserInfo() {
    return this.get('store').peekRecord('user', 'current') ||
      this.get('store').findRecord('user', 'current');
    // return this.get('store').find('user', 'current').then((user) => {
    //   this.set('user', user);
    // });
  }
});
