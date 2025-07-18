import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: {
		'https://local.nestql.com/graphql': {
			headers: {
				'Content-Type': 'application/json',
			},
		},
	},
	documents: ['src/**/*.ts', 'src/**/*.tsx'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			config: {
				strictScalars: true,
				useTypeImports: true,
				scalars: {
					DateTime: 'string',
					JSON: 'any',
				},
			},
		},
	},
	overwrite: true,
	ignoreNoDocuments: true,
};

export default config;
