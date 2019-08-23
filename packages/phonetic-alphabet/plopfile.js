module.exports = plop => {
  // https://plopjs.com/documentation/
  plop.setGenerator('entity', {
    prompts: [
      {
        type: 'input',
        name: 'className',
        message: 'Name of entity (will be converted to PascalCase): '
      }
    ],

    actions: [
      {
        type: 'add',
        templateFile: 'plop-templates/entity/entity.ts.hbs',
        path: 'src/{{lowerCase className}}.ts'
      }
    ]
  });
};
