import { graphql } from '@/gql/gql';

// Define your query using the graphql tag
export const GetMessagesQuery = graphql(`
	query GetMessages($where: MessageWhereInput) {
		findAllMessages(where: $where) {
			id
			type
			sender
			content
			payload
			timestamp
			chatSessionId
		}
	}
`);

// The types and hooks will be automatically generated!
// You can then use the generated hook like this:
// const { data, isLoading } = useGetMessagesQuery({ where: { chatSessionId: { equals: 1 } } });
