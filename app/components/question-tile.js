import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    edit(question, save) {
      this.sendAction('edit', question, save);
    }
  }
});
