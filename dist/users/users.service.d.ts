import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    getUsers(): Promise<User[]>;
    getUsersConfirmed(): Promise<{
        count: number;
        users: User[];
    }>;
    findOne(id: number): Promise<User>;
    update(updateData: UpdateUserDto): Promise<User>;
    del(id: number): Promise<void>;
}
