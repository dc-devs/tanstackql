import type { CodegenConfig } from '@graphql-codegen/cli';

export type JsonValue =
	| string
	| number
	| boolean
	| null
	| JsonValue[]
	| { [key: string]: JsonValue };

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
			plugins: ['typescript', 'typescript-operations'],
			config: {
				strictScalars: true,
				useTypeImports: true,
				scalars: {
					DateTime: 'string',
					JSON: './codegen#JsonValue',
				},
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
