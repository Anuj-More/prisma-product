import {
    Global,
    Injectable,
    OnModuleDestroy,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Global()
@Injectable()
export class DatabaseService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor() {
        const adapter = new PrismaMariaDb({
            user: 'root',
            password: process.env.MYSQL_ROOT_PASSWORD,
            database: process.env.MYSQL_DATABASE_NAME,
            connectionLimit: 5,
        });

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
