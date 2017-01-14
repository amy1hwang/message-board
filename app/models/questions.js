import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  addition: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});