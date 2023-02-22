import ProductCategory from '../schemas/product-category.js';

class ProductCategoryService {
    async create(productCategory: any) {
        const { name, description, image, shortName } = productCategory;
        const newProductCategory = await ProductCategory.create({ name, description, image, shortName })
        return newProductCategory;
    };
}

export default new ProductCategoryService();