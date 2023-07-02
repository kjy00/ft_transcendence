import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signup.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('signup')
  async signup(@Body() body: SignupDto) {
    await this.userService.signup(body.nickname, body.password, body.email);
  }
  @Get('signup/email')
  checkEmail() {}
  @Post('signup/email')
  sendEmail() {}
}
