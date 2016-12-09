import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-full', 'Integration | Component | post full', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('model', {
        title: 'My Post',
        body: 'this is the body',
        createdAt: '2016-12-07T23:48:13.678Z',
        updatedAt: '2016-12-07T23:48:13.678Z'
    });

    this.on('saveComment', function() {

    });

    this.render(hbs `{{post-full model=model saveComment=(action "saveComment")}}`);
    let innerText = this.$().text().replace(/\s+/g, '');
    console.log(innerText);
    assert.ok(innerText.indexOf('MyPostDetails...') >= 0, 'MyPostDetails... is present');
});
