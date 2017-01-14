import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(questions) {
      if (confirm ('Would you like to delete this question?')) {
        this.sendAction('destroyQuestion', questions);
      }
    }
  }
});
