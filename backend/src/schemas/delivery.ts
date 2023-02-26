import mongoose from "mongoose";

const Delivery = new mongoose.Schema({
    deliveryType: { type: String,
                        enum: [ 'SELFPICKUP', 'BUS', 'TRUCK', 'COURIER' ]
    },
    deliveryTimeMin: { type: Number },
    deliveryTimeMax: { type: Number },
    deliveryPrice: { type: Number }
});

export default mongoose.model('Delivery', Delivery);
