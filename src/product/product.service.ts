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
    }

    findAll() {
        return `This action returns all product`;
    }

    findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    update(id: number, updateProductDto: ProductUpdateInput) {
        return `This action updates a #${id} product`;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
