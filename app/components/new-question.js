import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var save = {
        content: this.get('content'),
        author: this.get('author'),
        addition: this.get('addition'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', save);
    }
  }
});
