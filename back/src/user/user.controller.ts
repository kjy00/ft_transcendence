import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signup.dto';
import { ResponseInterceptor } from '../interceptor/response.interceptor';

@UseInterceptors(ResponseInterceptor)
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
