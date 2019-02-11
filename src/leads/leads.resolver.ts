import {
    Query,
    Resolver,
    Subscription,
    Mutation,
    Args,
    Info,
  } from '@nestjs/graphql';
  import { PrismaService } from '../prisma/prisma.service';
  import { Lead } from '../prisma/prisma.binding';
  
  @Resolver()
  export class LeadsResolver {
    constructor(private readonly prisma: PrismaService) {}
  
    @Query('leads')
    async getLeads(@Args() args, @Info() info): Promise<Lead[]> {
      return await this.prisma.query.leads(args, info);
    }
  
    @Query('lead')
    async getLead(@Args() args, @Info() info): Promise<Lead> {
      return await this.prisma.query.lead(args, info);
    }
  
    @Mutation('createLead')
    async createLead(@Args() args, @Info() info): Promise<Lead> {
      return await this.prisma.mutation.createLead(args, info);
    }
  }