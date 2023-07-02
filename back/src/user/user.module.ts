import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { UserProviders } from './user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...UserProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
