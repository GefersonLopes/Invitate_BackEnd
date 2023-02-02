"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const { email, name } = createUserDto;
        const userEmail = await this.usersRepository.findOne({
            where: { email: email },
        });
        const username = await this.usersRepository.findOne({
            where: { name: name },
        });
        if (username) {
            throw new common_1.BadRequestException('username already exists');
        }
        if (userEmail) {
            throw new common_1.BadRequestException('email already exists');
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
    async findOne(id) {
        const user = await this.usersRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new common_1.NotFoundException('BURRO');
        }
        return user;
    }
    async update(updateData) {
        const { date, name } = updateData;
        const username = await this.usersRepository.findOne({
            where: { name: name },
        });
        const userDate = await this.usersRepository.findOne({
            where: { date: new Date(date) },
        });
        if (!username || !userDate) {
            throw new common_1.NotFoundException('BURRO');
        }
        username.isConfirmed = true;
        return this.usersRepository.save(username);
    }
    async del(id) {
        const user = await this.usersRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new common_1.NotFoundException('BURRO');
        }
        this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map