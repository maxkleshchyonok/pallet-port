import ProductCategory from '../schemas/product-category.js';

class ProductCategoryService {
    async create(productCategory: any) {
        const { name, description, image, shortName } = productCategory;
        const newProductCategory = await ProductCategory.create({ name, description, image, shortName })
        return newProductCategory;
    };

    async get(id: string) {
        const newProductCategory = await ProductCategory.findById(id);
        return newProductCategory;
    };

    async update(id: string, productCategory: any) {
        const updatedProductCategory = await ProductCategory.findByIdAndUpdate(id, productCategory, { new: true });
        return updatedProductCategory;
    };

    async delete(id: string) {
        const productCategory = await ProductCategory.findByIdAndDelete(id);
        return productCategory;
    };
}

export default new ProductCategoryService();