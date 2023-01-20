import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    name: string;

    @Column({ nullable: false })
    tel: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: false })
    date: Date;

    @Column({ default: false })
    isConfirmed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
