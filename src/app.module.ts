import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    LeadsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
