/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type ChatAssistantGenerationStatus = {
  __typename?: 'ChatAssistantGenerationStatus';
  lastUserMessageId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ChatSession = {
  __typename?: 'ChatSession';
  _count: ChatSessionCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ChatSessionCount = {
  __typename?: 'ChatSessionCount';
  messages: Scalars['Int']['output'];
};

export type ChatSessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatSessionInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutChatSessionsInput;
};

export type ChatSessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type ChatSessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatSessionCreateManyUserInputEnvelope = {
  data: Array<ChatSessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatSessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatSessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatSessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatSessionCreateManyUserInputEnvelope>;
};

export type ChatSessionCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ChatSessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatSessionCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatSessionCreateWithoutMessagesInput>;
};

export type ChatSessionCreateOrConnectWithoutMessagesInput = {
  create: ChatSessionCreateWithoutMessagesInput;
  where: ChatSessionWhereUniqueInput;
};

export type ChatSessionCreateOrConnectWithoutUserInput = {
  create: ChatSessionCreateWithoutUserInput;
  where: ChatSessionWhereUniqueInput;
};

export type ChatSessionCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutChatSessionsInput;
};

export type ChatSessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatSessionInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatSessionListRelationFilter = {
  every?: InputMaybe<ChatSessionWhereInput>;
  none?: InputMaybe<ChatSessionWhereInput>;
  some?: InputMaybe<ChatSessionWhereInput>;
};

export type ChatSessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatSessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ChatSessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ChatSessionScalarRelationFilter = {
  is?: InputMaybe<ChatSessionWhereInput>;
  isNot?: InputMaybe<ChatSessionWhereInput>;
};

export type ChatSessionScalarWhereInput = {
  AND?: InputMaybe<Array<ChatSessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatSessionScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatSessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatSessionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  messages?: InputMaybe<MessageUpdateManyWithoutChatSessionNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatSessionsNestedInput>;
};

export type ChatSessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
  data: ChatSessionUpdateManyMutationInput;
  where: ChatSessionScalarWhereInput;
};

export type ChatSessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatSessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatSessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatSessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatSessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ChatSessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ChatSessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ChatSessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatSessionCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatSessionCreateWithoutMessagesInput>;
  update?: InputMaybe<ChatSessionUpdateToOneWithWhereWithoutMessagesInput>;
  upsert?: InputMaybe<ChatSessionUpsertWithoutMessagesInput>;
};

export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
  data: ChatSessionUpdateWithoutMessagesInput;
  where?: InputMaybe<ChatSessionWhereInput>;
};

export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
  data: ChatSessionUpdateWithoutUserInput;
  where: ChatSessionWhereUniqueInput;
};

export type ChatSessionUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatSessionsNestedInput>;
};

export type ChatSessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  messages?: InputMaybe<MessageUpdateManyWithoutChatSessionNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
  create: ChatSessionCreateWithoutUserInput;
  update: ChatSessionUpdateWithoutUserInput;
  where: ChatSessionWhereUniqueInput;
};

export type ChatSessionUpsertWithoutMessagesInput = {
  create: ChatSessionCreateWithoutMessagesInput;
  update: ChatSessionUpdateWithoutMessagesInput;
  where?: InputMaybe<ChatSessionWhereInput>;
};

export type ChatSessionWhereInput = {
  AND?: InputMaybe<Array<ChatSessionWhereInput>>;
  NOT?: InputMaybe<Array<ChatSessionWhereInput>>;
  OR?: InputMaybe<Array<ChatSessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatSessionWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatSessionWhereInput>>;
  NOT?: InputMaybe<Array<ChatSessionWhereInput>>;
  OR?: InputMaybe<Array<ChatSessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<MessageListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type Count = {
  __typename?: 'Count';
  count: Scalars['Int']['output'];
};

export type CreateChatInput = {
  /** The message content from the user */
  message: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LogOutResponse = {
  __typename?: 'LogOutResponse';
  isAuthenticated: Scalars['Boolean']['output'];
  userId: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  chatSession: ChatSession;
  chatSessionId: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  sender: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageCreateInput = {
  chatSession: ChatSessionCreateNestedOneWithoutMessagesInput;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManyChatSessionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManyChatSessionInputEnvelope = {
  data: Array<MessageCreateManyChatSessionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageCreateManyInput = {
  chatSessionId: Scalars['Int']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateNestedManyWithoutChatSessionInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutChatSessionInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatSessionInput>>;
  createMany?: InputMaybe<MessageCreateManyChatSessionInputEnvelope>;
};

export type MessageCreateOrConnectWithoutChatSessionInput = {
  create: MessageCreateWithoutChatSessionInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutChatSessionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  chatSession?: InputMaybe<ChatSessionOrderByWithRelationInput>;
  chatSessionId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrderInput>;
  sender?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  ChatSessionId = 'chatSessionId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  Payload = 'payload',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  chatSessionId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  sender?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageUpdateInput = {
  chatSession?: InputMaybe<ChatSessionUpdateOneRequiredWithoutMessagesNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageUpdateManyWithWhereWithoutChatSessionInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutChatSessionNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutChatSessionInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatSessionInput>>;
  createMany?: InputMaybe<MessageCreateManyChatSessionInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutChatSessionInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutChatSessionInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutChatSessionInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutChatSessionInput = {
  data: MessageUpdateWithoutChatSessionInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutChatSessionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  payload?: InputMaybe<Scalars['JSON']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageUpsertWithWhereUniqueWithoutChatSessionInput = {
  create: MessageCreateWithoutChatSessionInput;
  update: MessageUpdateWithoutChatSessionInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  chatSession?: InputMaybe<ChatSessionScalarRelationFilter>;
  chatSessionId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  payload?: InputMaybe<JsonNullableFilter>;
  sender?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageWhereUniqueInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  chatSession?: InputMaybe<ChatSessionScalarRelationFilter>;
  chatSessionId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  payload?: InputMaybe<JsonNullableFilter>;
  sender?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: ChatSession;
  createChatSession: ChatSession;
  createManyChatSession: Count;
  createManyMessage: Count;
  createManyUser: Count;
  createMessage: Message;
  createUser: User;
  deleteChatSession: ChatSession;
  deleteMessage: Message;
  deleteUser: User;
  signIn: SessionResponse;
  signOut: LogOutResponse;
  signUp: SessionResponse;
  updateChat: Message;
  updateChatSession: ChatSession;
  updateManyChatSession: Count;
  updateManyMessage: Count;
  updateManyUser: Count;
  updateMessage: Message;
  updateUser: User;
};


export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateChatSessionArgs = {
  data: ChatSessionCreateInput;
  select?: InputMaybe<SelectInput>;
};


export type MutationCreateManyChatSessionArgs = {
  data: Array<ChatSessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMessageArgs = {
  data: Array<MessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
  select?: InputMaybe<SelectInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
  select?: InputMaybe<SelectInput>;
};


export type MutationDeleteChatSessionArgs = {
  select?: InputMaybe<SelectInput>;
  where: ChatSessionWhereUniqueInput;
};


export type MutationDeleteMessageArgs = {
  select?: InputMaybe<SelectInput>;
  where: MessageWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  select?: InputMaybe<SelectInput>;
  where: UserWhereUniqueInput;
};


export type MutationSignInArgs = {
  sessionInput: SessionInput;
};


export type MutationSignOutArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  data: UserCreateInput;
};


export type MutationUpdateChatArgs = {
  chatSessionId: Scalars['Int']['input'];
  input: CreateChatInput;
};


export type MutationUpdateChatSessionArgs = {
  data: ChatSessionUpdateInput;
  select?: InputMaybe<SelectInput>;
  where: ChatSessionWhereUniqueInput;
};


export type MutationUpdateManyChatSessionArgs = {
  data: ChatSessionUpdateManyMutationInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatSessionWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  select?: InputMaybe<SelectInput>;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  select?: InputMaybe<SelectInput>;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  /** Get assistant generation job status for a specific user message */
  chatAssistantGenerationStatusByMessage?: Maybe<ChatAssistantGenerationStatus>;
  findAllChatSessions: Array<ChatSession>;
  findAllMessages: Array<Message>;
  findAllUsers: Array<User>;
  findFirstChatSession?: Maybe<ChatSession>;
  findFirstMessage?: Maybe<Message>;
  findFirstUser?: Maybe<User>;
  findOneChatSession?: Maybe<ChatSession>;
  findOneMessage?: Maybe<Message>;
  findOneUser?: Maybe<User>;
  getAuthSession: SessionResponse;
};


export type QueryChatAssistantGenerationStatusByMessageArgs = {
  chatSessionId: Scalars['Int']['input'];
  lastUserMessageId: Scalars['Int']['input'];
};


export type QueryFindAllChatSessionsArgs = {
  cursor?: InputMaybe<ChatSessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatSessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatSessionOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatSessionWhereInput>;
};


export type QueryFindAllMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindAllUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstChatSessionArgs = {
  cursor?: InputMaybe<ChatSessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatSessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatSessionOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatSessionWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  select?: InputMaybe<SelectInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindOneChatSessionArgs = {
  select?: InputMaybe<SelectInput>;
  where: ChatSessionWhereUniqueInput;
};


export type QueryFindOneMessageArgs = {
  select?: InputMaybe<SelectInput>;
  where: MessageWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  select?: InputMaybe<SelectInput>;
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SelectInput = {
  include?: InputMaybe<Scalars['JSON']['input']>;
};

export type SessionInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SessionResponse = {
  __typename?: 'SessionResponse';
  isAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  chatSessions?: Maybe<Array<ChatSession>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  chatSessions: Scalars['Int']['output'];
};

export type UserCreateInput = {
  chatSessions?: InputMaybe<ChatSessionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutChatSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatSessionsInput>;
  create?: InputMaybe<UserCreateWithoutChatSessionsInput>;
};

export type UserCreateOrConnectWithoutChatSessionsInput = {
  create: UserCreateWithoutChatSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutChatSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserOrderByWithRelationInput = {
  chatSessions?: InputMaybe<ChatSessionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  chatSessions?: InputMaybe<ChatSessionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateOneRequiredWithoutChatSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatSessionsInput>;
  create?: InputMaybe<UserCreateWithoutChatSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChatSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutChatSessionsInput>;
};

export type UserUpdateToOneWithWhereWithoutChatSessionsInput = {
  data: UserUpdateWithoutChatSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutChatSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpsertWithoutChatSessionsInput = {
  create: UserCreateWithoutChatSessionsInput;
  update: UserUpdateWithoutChatSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  chatSessions?: InputMaybe<ChatSessionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  chatSessions?: InputMaybe<ChatSessionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateChatSessionMutationVariables = Exact<{
  data: ChatSessionCreateInput;
}>;


export type CreateChatSessionMutation = { __typename?: 'Mutation', createChatSession: { __typename?: 'ChatSession', id: string, title: string, userId: number, createdAt: string, updatedAt: string } };

export type FindAllChatSessionsQueryVariables = Exact<{
  where?: InputMaybe<ChatSessionWhereInput>;
}>;


export type FindAllChatSessionsQuery = { __typename?: 'Query', findAllChatSessions: Array<{ __typename?: 'ChatSession', id: string, title: string, userId: number, createdAt: string, updatedAt: string }> };

export type ChatAssistantGenerationStatusByMessageQueryVariables = Exact<{
  chatSessionId: Scalars['Int']['input'];
  lastUserMessageId: Scalars['Int']['input'];
}>;


export type ChatAssistantGenerationStatusByMessageQuery = { __typename?: 'Query', chatAssistantGenerationStatusByMessage?: { __typename?: 'ChatAssistantGenerationStatus', lastUserMessageId?: number | null, status?: string | null } | null };

export type CreateChatMutationVariables = Exact<{
  input: CreateChatInput;
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: { __typename?: 'ChatSession', id: string, title: string, userId: number, createdAt: string, updatedAt: string, messages?: Array<{ __typename?: 'Message', id: string, type: string, sender: string, content?: string | null, timestamp: string, updatedAt: string, createdAt: string }> | null } };

export type UpdateChatMutationVariables = Exact<{
  chatSessionId: Scalars['Int']['input'];
  input: CreateChatInput;
}>;


export type UpdateChatMutation = { __typename?: 'Mutation', updateChat: { __typename?: 'Message', id: string, chatSessionId: number, type: string, sender: string, payload?: any | null, content?: string | null, timestamp: string, createdAt: string, updatedAt: string } };

export type CreateMessageMutationVariables = Exact<{
  data: MessageCreateInput;
  select?: InputMaybe<SelectInput>;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string, chatSessionId: number, content?: string | null, payload?: any | null, type: string, sender: string, timestamp: string, createdAt: string, updatedAt: string } };

export type FindAllMessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
}>;


export type FindAllMessagesQuery = { __typename?: 'Query', findAllMessages: Array<{ __typename?: 'Message', id: string, chatSessionId: number, content?: string | null, payload?: any | null, type: string, sender: string, timestamp: string, createdAt: string, updatedAt: string }> };

export type FindOneMessageQueryVariables = Exact<{
  where: MessageWhereUniqueInput;
}>;


export type FindOneMessageQuery = { __typename?: 'Query', findOneMessage?: { __typename?: 'Message', id: string, chatSessionId: number, content?: string | null, payload?: any | null, type: string, sender: string, timestamp: string, createdAt: string, updatedAt: string } | null };

export type GetAuthSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthSessionQuery = { __typename?: 'Query', getAuthSession: { __typename?: 'SessionResponse', isAuthenticated?: boolean | null, user?: { __typename?: 'User', id: string, role: UserRole, email: string, createdAt: string, updatedAt: string } | null } };

export type SignInMutationVariables = Exact<{
  sessionInput: SessionInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SessionResponse', isAuthenticated?: boolean | null, user?: { __typename?: 'User', id: string, role: UserRole, email: string, createdAt: string, updatedAt: string } | null } };

export type SignOutMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: { __typename?: 'LogOutResponse', isAuthenticated: boolean, userId: string } };

export type SignUpMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SessionResponse', isAuthenticated?: boolean | null, user?: { __typename?: 'User', id: string, role: UserRole, email: string, createdAt: string, updatedAt: string } | null } };


export const CreateChatSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatSessionCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateChatSessionMutation, CreateChatSessionMutationVariables>;
export const FindAllChatSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllChatSessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatSessionWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllChatSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindAllChatSessionsQuery, FindAllChatSessionsQueryVariables>;
export const ChatAssistantGenerationStatusByMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatAssistantGenerationStatusByMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastUserMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatAssistantGenerationStatusByMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastUserMessageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastUserMessageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastUserMessageId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ChatAssistantGenerationStatusByMessageQuery, ChatAssistantGenerationStatusByMessageQueryVariables>;
export const CreateChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChatMutation, CreateChatMutationVariables>;
export const UpdateChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateChatMutation, UpdateChatMutationVariables>;
export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"select"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SelectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"select"},"value":{"kind":"Variable","name":{"kind":"Name","value":"select"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const FindAllMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindAllMessagesQuery, FindAllMessagesQueryVariables>;
export const FindOneMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindOneMessageQuery, FindOneMessageQueryVariables>;
export const GetAuthSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAuthenticated"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetAuthSessionQuery, GetAuthSessionQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAuthenticated"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAuthenticated"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAuthenticated"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;