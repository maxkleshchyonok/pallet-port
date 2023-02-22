import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    name: { type: String },
    material: { type: String,
                enum: [ 'METAL', 'PLASTIC', 'WOOD', 'CARDBOARD' ]
    },
    condition: { type: String,
                 enum: [ 'NEW', 'USED 1 CATEGORY', 'USED 2 CATEGORY', 'USED 3 CATEGORY', 'BROKEN']
    },
    description: { type: String },
    image1: { type: String },
    image2: { type: String },
    shortName: { type: String },
    length: { type: String },
    width: { type: String },
    height: { type: String },
    maxLoad: { type: String },
    category: {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        shortName: { type: String }
    }
});

export default mongoose.model('Product', Product);