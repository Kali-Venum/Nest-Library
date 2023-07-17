import { Body, Controller, Post } from '@nestjs/common';

// Service.
import { AuthService } from './auth.service';

// DTO.
import { RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(
    @Body() registerDTO: RegisterDTO,
  ): Promise<{ user: any; token: string }> {
    return this.authService.register(registerDTO);
  }
}
