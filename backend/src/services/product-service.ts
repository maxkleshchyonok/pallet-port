import Product from "../schemas/product.js";

class ProductService {
    async create(product: any) {
        const { name, material, condition, image1, image2, shortName, length, width, height, maxLoad, category } = product;
        const newProductCategory = await Product.create({ name, material, condition, image1, image2, shortName, length, width, height, maxLoad, category })
        return newProductCategory;
    };
}

export default new ProductService();