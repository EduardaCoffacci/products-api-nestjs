import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { ProductsRepository } from './products.repository.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/produto.schema.js';

@Module({

  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
