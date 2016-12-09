import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    queryParams: {
        search: {
            as: 's',
            replace: true
        }
    },
    model({ search }) {
        if (search) {
            return this.store.query('post', { search });
        } else {
            return this.store.findAll('post');
        }
    },
    actions: {
        _refreshRoute() {
            this.refresh();
        }
    }
});