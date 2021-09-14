// Exercício 2.4:

const skills = ["HTML", "CSS", "JavaScript", "GIT", "Lógica da Programação"];

function concatSkills(string) {
    const function1 = param1 => (
      `Tryber ${param1} aqui!`
    );
    let result = `${function1(string)} Minhas cinco principais habilidades são:`;

    skills.forEach((skill) =>
    result = `${result} - ${skill}`);

    result = `${result} #goTrybe`;

    return result;
}

console.log(concatSkills("Gabriela"));
