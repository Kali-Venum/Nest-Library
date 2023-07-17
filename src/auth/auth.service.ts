import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

// Schema.
import { User } from './schemas/user.schema';

// DTO.
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(
    registerDTO: RegisterDTO,
  ): Promise<{ user: any; token: string }> {
    const { name, email, password } = registerDTO;

    const hashedPassword = bcrypt.hash(password, 10);

    const user = await this.UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { user, token };
  }

  async login(loginDTO: LoginDTO) {
    return 0;
  }
}
