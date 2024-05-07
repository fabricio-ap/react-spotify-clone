import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'Gerador de componentes React!',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.tsx',
        templateFile: 'template/components/Component.tsx',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.module.scss',
        templateFile: 'template/components/Component.module.scss',
      },
    ],
  });
}
