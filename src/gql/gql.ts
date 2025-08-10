/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\tmutation CreateChatSession($data: ChatSessionCreateInput!) {\n\t\tcreateChatSession(data: $data) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.CreateChatSessionDocument,
    "\n\tquery FindAllChatSessions($where: ChatSessionWhereInput) {\n\t\tfindAllChatSessions(where: $where) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.FindAllChatSessionsDocument,
    "\n\tquery ChatAssistantGenerationStatusByMessage(\n\t\t$chatSessionId: Int!\n\t\t$lastUserMessageId: Int!\n\t) {\n\t\tchatAssistantGenerationStatusByMessage(\n\t\t\tchatSessionId: $chatSessionId\n\t\t\tlastUserMessageId: $lastUserMessageId\n\t\t) {\n\t\t\tlastUserMessageId\n\t\t\tstatus\n\t\t}\n\t}\n": typeof types.ChatAssistantGenerationStatusByMessageDocument,
    "\n\tmutation CreateChat($input: CreateChatInput!) {\n\t\tcreateChat(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tsender\n\t\t\t\tcontent\n\t\t\t\ttimestamp\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.CreateChatDocument,
    "\n\tmutation UpdateChat($chatSessionId: Int!, $input: CreateChatInput!) {\n\t\tupdateChat(chatSessionId: $chatSessionId, input: $input) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\ttype\n\t\t\tsender\n\t\t\tpayload\n\t\t\tcontent\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.UpdateChatDocument,
    "\n\tmutation CreateMessage($data: MessageCreateInput!, $select: SelectInput) {\n\t\tcreateMessage(data: $data, select: $select) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.CreateMessageDocument,
    "\n\tquery FindAllMessages($where: MessageWhereInput) {\n\t\tfindAllMessages(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.FindAllMessagesDocument,
    "\n\tquery FindOneMessage($where: MessageWhereUniqueInput!) {\n\t\tfindOneMessage(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.FindOneMessageDocument,
    "\n\tquery GetAuthSession {\n\t\tgetAuthSession {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetAuthSessionDocument,
    "\n\tmutation SignIn($sessionInput: SessionInput!) {\n\t\tsignIn(sessionInput: $sessionInput) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SignInDocument,
    "\n\tmutation SignOut($userId: String!) {\n\t\tsignOut(userId: $userId) {\n\t\t\tisAuthenticated\n\t\t\tuserId\n\t\t}\n\t}\n": typeof types.SignOutDocument,
    "\n\tmutation SignUp($data: UserCreateInput!) {\n\t\tsignUp(data: $data) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": typeof types.SignUpDocument,
};
const documents: Documents = {
    "\n\tmutation CreateChatSession($data: ChatSessionCreateInput!) {\n\t\tcreateChatSession(data: $data) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.CreateChatSessionDocument,
    "\n\tquery FindAllChatSessions($where: ChatSessionWhereInput) {\n\t\tfindAllChatSessions(where: $where) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.FindAllChatSessionsDocument,
    "\n\tquery ChatAssistantGenerationStatusByMessage(\n\t\t$chatSessionId: Int!\n\t\t$lastUserMessageId: Int!\n\t) {\n\t\tchatAssistantGenerationStatusByMessage(\n\t\t\tchatSessionId: $chatSessionId\n\t\t\tlastUserMessageId: $lastUserMessageId\n\t\t) {\n\t\t\tlastUserMessageId\n\t\t\tstatus\n\t\t}\n\t}\n": types.ChatAssistantGenerationStatusByMessageDocument,
    "\n\tmutation CreateChat($input: CreateChatInput!) {\n\t\tcreateChat(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tsender\n\t\t\t\tcontent\n\t\t\t\ttimestamp\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.CreateChatDocument,
    "\n\tmutation UpdateChat($chatSessionId: Int!, $input: CreateChatInput!) {\n\t\tupdateChat(chatSessionId: $chatSessionId, input: $input) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\ttype\n\t\t\tsender\n\t\t\tpayload\n\t\t\tcontent\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.UpdateChatDocument,
    "\n\tmutation CreateMessage($data: MessageCreateInput!, $select: SelectInput) {\n\t\tcreateMessage(data: $data, select: $select) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.CreateMessageDocument,
    "\n\tquery FindAllMessages($where: MessageWhereInput) {\n\t\tfindAllMessages(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.FindAllMessagesDocument,
    "\n\tquery FindOneMessage($where: MessageWhereUniqueInput!) {\n\t\tfindOneMessage(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.FindOneMessageDocument,
    "\n\tquery GetAuthSession {\n\t\tgetAuthSession {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.GetAuthSessionDocument,
    "\n\tmutation SignIn($sessionInput: SessionInput!) {\n\t\tsignIn(sessionInput: $sessionInput) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.SignInDocument,
    "\n\tmutation SignOut($userId: String!) {\n\t\tsignOut(userId: $userId) {\n\t\t\tisAuthenticated\n\t\t\tuserId\n\t\t}\n\t}\n": types.SignOutDocument,
    "\n\tmutation SignUp($data: UserCreateInput!) {\n\t\tsignUp(data: $data) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.SignUpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChatSession($data: ChatSessionCreateInput!) {\n\t\tcreateChatSession(data: $data) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateChatSession($data: ChatSessionCreateInput!) {\n\t\tcreateChatSession(data: $data) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery FindAllChatSessions($where: ChatSessionWhereInput) {\n\t\tfindAllChatSessions(where: $where) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery FindAllChatSessions($where: ChatSessionWhereInput) {\n\t\tfindAllChatSessions(where: $where) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery ChatAssistantGenerationStatusByMessage(\n\t\t$chatSessionId: Int!\n\t\t$lastUserMessageId: Int!\n\t) {\n\t\tchatAssistantGenerationStatusByMessage(\n\t\t\tchatSessionId: $chatSessionId\n\t\t\tlastUserMessageId: $lastUserMessageId\n\t\t) {\n\t\t\tlastUserMessageId\n\t\t\tstatus\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery ChatAssistantGenerationStatusByMessage(\n\t\t$chatSessionId: Int!\n\t\t$lastUserMessageId: Int!\n\t) {\n\t\tchatAssistantGenerationStatusByMessage(\n\t\t\tchatSessionId: $chatSessionId\n\t\t\tlastUserMessageId: $lastUserMessageId\n\t\t) {\n\t\t\tlastUserMessageId\n\t\t\tstatus\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChat($input: CreateChatInput!) {\n\t\tcreateChat(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tsender\n\t\t\t\tcontent\n\t\t\t\ttimestamp\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateChat($input: CreateChatInput!) {\n\t\tcreateChat(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tsender\n\t\t\t\tcontent\n\t\t\t\ttimestamp\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateChat($chatSessionId: Int!, $input: CreateChatInput!) {\n\t\tupdateChat(chatSessionId: $chatSessionId, input: $input) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\ttype\n\t\t\tsender\n\t\t\tpayload\n\t\t\tcontent\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateChat($chatSessionId: Int!, $input: CreateChatInput!) {\n\t\tupdateChat(chatSessionId: $chatSessionId, input: $input) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\ttype\n\t\t\tsender\n\t\t\tpayload\n\t\t\tcontent\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateMessage($data: MessageCreateInput!, $select: SelectInput) {\n\t\tcreateMessage(data: $data, select: $select) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateMessage($data: MessageCreateInput!, $select: SelectInput) {\n\t\tcreateMessage(data: $data, select: $select) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery FindAllMessages($where: MessageWhereInput) {\n\t\tfindAllMessages(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery FindAllMessages($where: MessageWhereInput) {\n\t\tfindAllMessages(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery FindOneMessage($where: MessageWhereUniqueInput!) {\n\t\tfindOneMessage(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery FindOneMessage($where: MessageWhereUniqueInput!) {\n\t\tfindOneMessage(where: $where) {\n\t\t\tid\n\t\t\tchatSessionId\n\t\t\tcontent\n\t\t\tpayload\n\t\t\ttype\n\t\t\tsender\n\t\t\ttimestamp\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetAuthSession {\n\t\tgetAuthSession {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAuthSession {\n\t\tgetAuthSession {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignIn($sessionInput: SessionInput!) {\n\t\tsignIn(sessionInput: $sessionInput) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation SignIn($sessionInput: SessionInput!) {\n\t\tsignIn(sessionInput: $sessionInput) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignOut($userId: String!) {\n\t\tsignOut(userId: $userId) {\n\t\t\tisAuthenticated\n\t\t\tuserId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation SignOut($userId: String!) {\n\t\tsignOut(userId: $userId) {\n\t\t\tisAuthenticated\n\t\t\tuserId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignUp($data: UserCreateInput!) {\n\t\tsignUp(data: $data) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation SignUp($data: UserCreateInput!) {\n\t\tsignUp(data: $data) {\n\t\t\tisAuthenticated\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;