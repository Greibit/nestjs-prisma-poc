import { Module } from '@nestjs/common';
import { LeadsResolver } from './leads.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [LeadsResolver],
  imports: [PrismaModule],
})
export class LeadsModule {}