const objects = require('./exercicio_5');

describe('Testing objects', () => {

  it('if obj1 is equal to obj2', () => {
    expect(objects.obj1).toEqual(objects.obj2);
  });

  it('if obj1 is different from obj3', () => {
    expect(objects.obj1).not.toEqual(objects.obj3);
 });

  it('if obj2 is different from obj3', () => {
    expect(objects.obj2).not.toEqual(objects.obj3);
 });

});
