import { NodePlopAPI } from 'plop';

const baseGenerate = 'generate';

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
        templateFile: `${baseGenerate}/components/Component.tsx`,
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.module.scss',
        templateFile: `${baseGenerate}/components/Component.module.scss`,
      },
    ],
  });
}
