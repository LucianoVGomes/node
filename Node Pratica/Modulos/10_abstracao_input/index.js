// then() 'Vai executar uma resposta' catch() 'Vai executar algum erro'

import inquirer from 'inquirer'

inquirer.prompt ([{
    name: 'p1', message: 'Qual a primeira nota ?',
},{
    name: 'p2', message: 'Qual a segunda nota?',
}
]).then((answers) =>{
  console.log(answers)  
}).catch(err => console.log(err))