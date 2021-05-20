const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) return 'Vazio!';

 const newArrayTech = arrayTech
  .sort()
  .map((techs) => ({
    tech: techs,
    name,
  })); 
  return newArrayTech;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

module.exports = techList;
