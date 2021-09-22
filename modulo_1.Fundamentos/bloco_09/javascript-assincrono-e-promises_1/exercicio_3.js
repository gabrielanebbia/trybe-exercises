const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars); // O setTimeout poderia ser dentro da função
};

setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos
