import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/produto.schema.js';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async findAll() {
    return this.productModel.find();
  }
  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async create(product: { name: string; price: number; stock: number }) {
    return this.productModel.create(product);
  }

  async update(id: string, product: Partial<Product>) {
    return this.productModel.findByIdAndUpdate(id, product, { new: true });
  }
  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
