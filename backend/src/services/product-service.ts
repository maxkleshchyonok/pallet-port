import Product from "../schemas/product.js";

class ProductService {
    async create(product: any) {
        const { name, material, condition, image1, image2, shortName, length, width, height, maxLoad, category } = product;
        const newProduct = await Product.create({ name, material, condition, image1, image2, shortName, length, width, height, maxLoad, category });
        return newProduct;
    };

    async get(id: string) {
        const product = await Product.findById(id);
        return product;
    };

    async update(id: string, product: any) {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        return updatedProduct;
    };

    async delete(id: string) {
        const deletedProduct = await Product.findByIdAndDelete(id);
        return deletedProduct;
    };
}

export default new ProductService();