import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },

  actions: {
   saveQuestion(save) {
     var newQuestion = this.store.createRecord('questions', save);
     newQuestion.save();
     this.transitionTo('index');
   },
    edit(question, save) {
      Object.keys(save).forEach(function(key) {
        if(save[key]!==undefined) {
          question.set(key,save[key]);
        }
      });
    question.save();
    this.transitionTo('index');
    },
  }
});
