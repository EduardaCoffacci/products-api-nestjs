import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { ProductsRepository } from './products.repository.js';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productsRepository.create(createProductDto);

    return {
      message: 'Produto criado',
      product: newProduct,
    };
  }

  async findAll(
  name?: string,
  minPrice?: string,
  maxPrice?: string,
) {
  return this.productsRepository.findAll(
    name,
    minPrice,
    maxPrice,
  );
}

  async findOne(id: string) {
    const product = await this.productsRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.update(id, updateProductDto);

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return {
      message: 'Produto atualizado',
      product,
    };
  }

  async remove(id: string) {
    const removedProduct = await this.productsRepository.delete(id);

    if (!removedProduct) {
      throw new NotFoundException('Produto não encontrado');
    }

    return {
      message: 'Produto removido com sucesso',
      product: removedProduct,
    };
  }
}
