import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(User),
                    useValue: {
                        findOne: jest.fn(),
                        save: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Should be create user', () => {
        it('should be created if data is valid', async () => {
            const user: User = new User();

            user.id = 1;
            user.name = 'John Doe';
            user.age = 23;
            user.email = 'john@doe.com';
            user.password = '123456';
            user.createdAt = new Date();
            user.updatedAt = new Date();
            user.isActive = true;

            const mockedUser = {
                name: user.name,
                age: user.age,
                email: user.email,
                password: user.password,
            };

            const createUser = await service.create(mockedUser);

            expect(createUser).toHaveProperty('name');
            expect(createUser).toHaveProperty('email');
            expect(createUser.age).toEqual(23);
            expect(createUser.password).toEqual(undefined);
            expect(typeof createUser).toEqual('object');
        });
    });
});
