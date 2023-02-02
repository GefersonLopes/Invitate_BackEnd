import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findAllConfirmed(): Promise<{
        count: number;
        users: import("./entities/user.entity").User[];
    }>;
    findById(id: number): Promise<import("./entities/user.entity").User>;
    update(updateData: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: number): Promise<void>;
}
