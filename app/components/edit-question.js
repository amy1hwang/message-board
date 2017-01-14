import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      console.log("edit-question.js edit");
      var save = {
        content: this.get('content'),
        author: this.get('author'),
        addition: this.get('addition'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, save);
    }
  }
});
