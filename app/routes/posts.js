import Ember from 'ember';

const { Route, RSVP } = Ember;

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

        // let query = null;

        // if (search) {
        //     query = this.store.query('post', { search });
        // } else {
        //     query = this.store.findAll('post');
        // }

        // return query.then((posts) => {
        //     let commentsPromises = posts.map((post) => post.get('comments'));
        //     return RSVP.all(commentsPromises).then(() => {
        //         return posts;
        //     });
        // });
    },
    actions: {
        _refreshRoute() {
            this.refresh();
        }
    }
});