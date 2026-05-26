import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';
import {
    ProductCreateInput,
    ProductUpdateInput,
} from '../generated/prisma/models.js';

@Injectable()
export class ProductService {
    constructor(private readonly dbService: DatabaseService) {}

    async create(productCreateInput: ProductCreateInput) {
        const product = await this.dbService.product.create({
            data: {
                ...productCreateInput
            }
        })
        return product;
    }

    async findAll() {
        const product = await this.dbService.product.findMany();
        return product;
    }

    async findOne(id: number) {
        const product = await this.dbService.product.findUnique({
            where: {id}
        })
        return product;
    }

    async update(id: number, updateProductDto: ProductUpdateInput) {
        const product = await this.dbService.product.update({
            data: { ...updateProductDto },
            where: {id}
        });
         return product;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
