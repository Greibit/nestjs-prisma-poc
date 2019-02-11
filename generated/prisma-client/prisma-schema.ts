export const typeDefs = /* GraphQL */ `type AggregateLead {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Lead {
  id: ID!
  name: String!
  surname: String
}

type LeadConnection {
  pageInfo: PageInfo!
  edges: [LeadEdge]!
  aggregate: AggregateLead!
}

input LeadCreateInput {
  name: String!
  surname: String
}

type LeadEdge {
  node: Lead!
  cursor: String!
}

enum LeadOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  surname_ASC
  surname_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LeadWhereInput
  AND: [LeadSubscriptionWhereInput!]
  OR: [LeadSubscriptionWhereInput!]
  NOT: [LeadSubscriptionWhereInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  surname: String
  surname_not: String
  surname_in: [String!]
  surname_not_in: [String!]
  surname_lt: String
  surname_lte: String
  surname_gt: String
  surname_gte: String
  surname_contains: String
  surname_not_contains: String
  surname_starts_with: String
  surname_not_starts_with: String
  surname_ends_with: String
  surname_not_ends_with: String
  AND: [LeadWhereInput!]
  OR: [LeadWhereInput!]
  NOT: [LeadWhereInput!]
}

input LeadWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLead(data: LeadCreateInput!): Lead!
  updateLead(data: LeadUpdateInput!, where: LeadWhereUniqueInput!): Lead
  updateManyLeads(data: LeadUpdateManyMutationInput!, where: LeadWhereInput): BatchPayload!
  upsertLead(where: LeadWhereUniqueInput!, create: LeadCreateInput!, update: LeadUpdateInput!): Lead!
  deleteLead(where: LeadWhereUniqueInput!): Lead
  deleteManyLeads(where: LeadWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  lead(where: LeadWhereUniqueInput!): Lead
  leads(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lead]!
  leadsConnection(where: LeadWhereInput, orderBy: LeadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeadConnection!
  node(id: ID!): Node
}

type Subscription {
  lead(where: LeadSubscriptionWhereInput): LeadSubscriptionPayload
}
`