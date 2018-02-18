import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      name: 'Sparkachu',
      level: 3
    },{
      name: 'Charember',
      level: 29
    }, {
      name: 'Rhauk',
      level: 5
    }, {
      name: 'Poodle',
      level: 9
    }]}
});
