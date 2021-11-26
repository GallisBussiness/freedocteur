import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ResponseServiceInterface } from 'src/ResponseServiceInterface';
import {
  CreateUserDto,
  ROLES,
  STATUS_USER,
  TYPE_USER,
} from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { CreateMedecinUserDto } from './dto/createMedecinUserDto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { Medecin, MedecinDocument } from './entities/medecin.entity';

@Injectable()
export class MedecinService {
  constructor(
    @InjectModel(Medecin.name) private medecinModel: Model<MedecinDocument>,
    private userService: UserService,
  ) {}

  async create(createMedecinUserDto: CreateMedecinUserDto) {
    const { username, password, ...rest } = createMedecinUserDto;
    const userField: CreateUserDto = {
      username,
      password,
      type_user: TYPE_USER.MEDECIN,
      role: ROLES.USER,
      status: STATUS_USER.DISABLED,
    };
    const res = await this.userService.create(userField);
    const { statusCode } = res;
    if (statusCode !== 200) return res;
    const {
      data: { _id },
    } = res;
    const medecinField: CreateMedecinDto = {
      ...rest,
      userId: new Types.ObjectId(_id),
    };
    const createdMedecin = new this.medecinModel(medecinField);
    const medecin = await createdMedecin.save();
    return { data: medecin, statusCode: 200 };
  }

  async findAll() {
    const medecins = await this.medecinModel.find().exec();

    return { data: medecins, statusCode: 200 };
  }

  async findOne(id: Types.ObjectId): Promise<ResponseServiceInterface> {
    const medecin = await this.medecinModel.findOne({
      id: new Types.ObjectId(id),
    });

    if (!medecin) return new NotFoundException();
    return { data: medecin, statusCode: 200 };
  }

  update(id: Types.ObjectId, updateMedecinDto: UpdateMedecinDto) {
    return `This action updates a #${id} medecin`;
  }

  remove(id: number) {
    return `This action removes a #${id} medecin`;
  }
}
