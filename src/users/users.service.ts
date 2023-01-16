import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import moment from 'moment';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) {}

    async create(createUserDto: CreateUserDto) {
        const { email, name } = createUserDto;
        const userEmail = await this.usersRepository.findOne({
            where: { email: email },
        });
        const username = await this.usersRepository.findOne({
            where: { name: name },
        });

        if (username) {
            throw new BadRequestException('username already exists');
        }
        if (userEmail) {
            throw new BadRequestException('email already exists');
        }
        return this.usersRepository.save(createUserDto);
    }

    async getUsers() {
        return this.usersRepository.find();
    }

    async getUsersConfirmed() {
        const users = await this.usersRepository.find({
            where: { isConfirmed: true },
        });
        return { count: users.length, users };
    }

    async findOne(id: number) {
        const user = await this.usersRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException('BURRO');
        }
        return user;
    }

    async update(updateData: UpdateUserDto) {
        const { date, name } = updateData;
        const username = await this.usersRepository.findOne({
            where: { name: name },
        });
        const userDate = await this.usersRepository.findOne({
            where: { date: new Date(date) },
        });

        if (!username || !userDate) {
            throw new NotFoundException('BURRO');
        }
        username.isConfirmed = true;
        return this.usersRepository.save(username);
    }

    async del(id: number) {
        const user = await this.usersRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException('BURRO');
        }
        this.usersRepository.delete(id);
    }
}
