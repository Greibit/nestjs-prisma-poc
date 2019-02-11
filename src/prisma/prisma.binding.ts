import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    leads: <T = Array<Lead | null>>(args: { where?: LeadWhereInput | null, orderBy?: LeadOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lead: <T = Lead | null>(args: { where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    leadsConnection: <T = LeadConnection>(args: { where?: LeadWhereInput | null, orderBy?: LeadOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createLead: <T = Lead>(args: { data: LeadCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLead: <T = Lead | null>(args: { data: LeadUpdateInput, where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLead: <T = Lead | null>(args: { where: LeadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertLead: <T = Lead>(args: { where: LeadWhereUniqueInput, create: LeadCreateInput, update: LeadUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLeads: <T = BatchPayload>(args: { data: LeadUpdateManyMutationInput, where?: LeadWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeads: <T = BatchPayload>(args: { where?: LeadWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    lead: <T = LeadSubscriptionPayload | null>(args: { where?: LeadSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Lead: (where?: LeadWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateLead {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Lead implements Node {
  id: ID!
  name: String!
  surname: String
}

"""A connection to a list of items."""
type LeadConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeadEdge]!
  aggregate: AggregateLead!
}

input LeadCreateInput {
  name: String!
  surname: String
}

"""An edge in a connection."""
type LeadEdge {
  """The item at the end of the edge."""
  node: Lead!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LeadOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  surname_ASC
  surname_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LeadPreviousValues {
  id: ID!
  name: String!
  surname: String
}

type LeadSubscriptionPayload {
  mutation: MutationType!
  node: Lead
  updatedFields: [String!]
  previousValues: LeadPreviousValues
}

input LeadSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeadWhereInput
}

input LeadUpdateInput {
  name: String
  surname: String
}

input LeadUpdateManyMutationInput {
  name: String
  surname: String
}

input LeadWhereInput {
  """Logical AND on all given filters."""
  AND: [LeadWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeadWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeadWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  surname: String

  """All values that are not equal to given value."""
  surname_not: String

  """All values that are contained in given list."""
  surname_in: [String!]

  """All values that are not contained in given list."""
  surname_not_in: [String!]

  """All values less than the given value."""
  surname_lt: String

  """All values less than or equal the given value."""
  surname_lte: String

  """All values greater than the given value."""
  surname_gt: String

  """All values greater than or equal the given value."""
  surname_gte: String

  """All values containing the given string."""
  surname_contains: String

  """All values not containing the given string."""
  surname_not_contains: String

  """All values starting with the given string."""
  surname_starts_with: String

  """All values not starting with the given string."""
  surname_not_starts_with: String

  """All values ending with the given string."""
  surname_ends_with: String

  """All values not ending with the given string."""
  surname_not_ends_with: String
}

input LeadWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createLead(data: LeadCreateInput!): Lead!
  updateLead(data: LeadUpdateInput!, where: LeadWhereUniqueInput!): Lead
  deleteLead(where: LeadWhereUniqueInput!): Lead
  upsertLead(where: LeadWhereUniqueInput!, create: LeadCreateInput!, update: LeadUpdateInput!): Lead!
  updateManyLeads(data: LeadUpdateManyMutationInput!, where: LeadWhereInput): BatchPayload!
  deleteManyLeads(where: LeadWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  leads(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lead]!
  lead(where: LeadWhereUniqueInput!): Lead
  leadsConnection(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeadConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  lead(where: LeadSubscriptionWhereInput): LeadSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LeadOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'surname_ASC' |
  'surname_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface LeadCreateInput {
  name: String
  surname?: String | null
}

export interface LeadSubscriptionWhereInput {
  AND?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput | null
  OR?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput | null
  NOT?: LeadSubscriptionWhereInput[] | LeadSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LeadWhereInput | null
}

export interface LeadUpdateInput {
  name?: String | null
  surname?: String | null
}

export interface LeadUpdateManyMutationInput {
  name?: String | null
  surname?: String | null
}

export interface LeadWhereInput {
  AND?: LeadWhereInput[] | LeadWhereInput | null
  OR?: LeadWhereInput[] | LeadWhereInput | null
  NOT?: LeadWhereInput[] | LeadWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  surname?: String | null
  surname_not?: String | null
  surname_in?: String[] | String | null
  surname_not_in?: String[] | String | null
  surname_lt?: String | null
  surname_lte?: String | null
  surname_gt?: String | null
  surname_gte?: String | null
  surname_contains?: String | null
  surname_not_contains?: String | null
  surname_starts_with?: String | null
  surname_not_starts_with?: String | null
  surname_ends_with?: String | null
  surname_not_ends_with?: String | null
}

export interface LeadWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateLead {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Lead extends Node {
  id: ID_Output
  name: String
  surname?: String | null
}

/*
 * A connection to a list of items.

 */
export interface LeadConnection {
  pageInfo: PageInfo
  edges: Array<LeadEdge | null>
  aggregate: AggregateLead
}

/*
 * An edge in a connection.

 */
export interface LeadEdge {
  node: Lead
  cursor: String
}

export interface LeadPreviousValues {
  id: ID_Output
  name: String
  surname?: String | null
}

export interface LeadSubscriptionPayload {
  mutation: MutationType
  node?: Lead | null
  updatedFields?: Array<String> | null
  previousValues?: LeadPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string