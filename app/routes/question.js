import Ember from 'ember';

export default Ember.Route.extend({
  model(save) {
    return this.store.findRecord('questions', save.questions_id);
  },
  actions: {
    edit(question, save) {
      console.log("handled");
     question.save();
     this.transitionTo('index');
   },
    destroyQuestion(questions) {
      questions.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(save) {
      var newAnswer = this.store.createRecord('answer', save);
      var question = save.question;

      // add this answer to the question.
      question.get('answers').addObject(newAnswer);

      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
