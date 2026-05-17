import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import {
    ProductCreateInput,
    ProductUpdateInput,
} from '../generated/prisma/models';

@Injectable()
export class ProductService {
    constructor(private readonly dbService: DatabaseService) {}

    create(productCreateInput: ProductCreateInput) {
        return 'This action adds a new product';
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
