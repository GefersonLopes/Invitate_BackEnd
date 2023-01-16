import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Param,
    Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAll() {
        return this.usersService.getUsers();
    }

    @Get('/confirmed')
    async findAllConfirmed() {
        return this.usersService.getUsersConfirmed();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Patch()
    async update(@Body() updateData: UpdateUserDto) {
        return this.usersService.update(updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.usersService.del(id);
    }
}
