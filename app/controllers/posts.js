import Ember from 'ember';

const { run, isEmpty } = Ember;

export default Ember.Controller.extend({
  _refreshRoute() {
    this.send('_refreshRoute');
  },
  actions: {
    handleSearch(search) {
        this.set('search', search);

        if (search.length >= 3 || isEmpty(search)) {
            run.debounce(this, '_refreshRoute', 300);
        }
    }
  }
});
