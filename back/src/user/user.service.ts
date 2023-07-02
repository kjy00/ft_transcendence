import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}
  async signup(nickname: string, password: string, email: string) {
    const user = await this.userRepository.findOne({ where: { nickname } });
    if (user) {
      throw new Error('이미 존재하는 사용자입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      nickname,
      password: hashedPassword,
      email,
    });
  }
}
