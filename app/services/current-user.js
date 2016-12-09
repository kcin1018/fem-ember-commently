import Ember from 'ember';

const { inject, RSVP } = Ember;

export default Ember.Service.extend({
  store: inject.service(),
  loadUserInfo() {
    // get the cached value or fetch it
    let cached = this.get('store').peekRecord('user', 'current');
    let p = cached ? RSVP.resolve(cached) : this.get('store').findRecord('user', 'current');

    // set the user on the service
    return p.then((user) => {
      this.set('user', user);
      return user;
    });
  }
});
