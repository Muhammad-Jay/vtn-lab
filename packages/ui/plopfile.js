module.exports = function (plop) {
    plop.setGenerator('react-component', {
        description: 'Generate a modular component',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'Where should this component live?',
                choices: ['features', 'components'],
            },
            {
                type: 'input',
                name: 'featureName',
                message: 'If in features, what is the feature name? (Skip if none)',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: function (data) {
            const path = data.type === 'features'
                ? `src/features/{{featureName}}/components/{{name}}/`
                : `src/components/{{name}}/`;

            return [
                {
                    type: 'add',
                    path: `${path}{{name}}.tsx`,
                    templateFile: 'plop-templates/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${path}index.ts`,
                    templateFile: 'plop-templates/index.ts.hbs',
                },
            ];
        },
    });
};