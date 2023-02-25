import mongoose from "mongoose";

const CartOffers = new mongoose.Schema({
    offer: {
        product: {
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
        },
        seller: {
            name: { type: String },
            email: { type: String },
            password: { type: String },
            phone: { type: String },
            rank: { type: Number },
            avatar: { type: String },
            roles: [{ type: String,
                      enum: ['BUYER', 'SELLER', 'ADMIN', 'SYSTEM', 'LOGISTIC']
            }],
            deliveryAddress: {
                street: { type: String },
                city: { type: String },
                zipCode: { type: String },
                state: { type: String },
                countryCode: { type: String },
                coordinates: {
                    "lat": { type: Number },
                    "lon": { type: Number }
                }
            },
            paymentAddress: {
                street: { type: String },
                city: { type: String },
                zipCode: { type: String },
                state: { type: String },
                countryCode: { type: String },
                coordinates: {
                    "lat": { type: Number },
                    "lon": { type: Number }
                }
            },
            companies: [{
                name: { type: String },
                NIP: { type: String },
                address: {
                    street: { type: String },
                    city: { type: String },
                    zipCode: { type: String },
                    state: { type: String },
                    countryCode: { type: String },
                    coordinates: {
                        "lat": { type: Number },
                        "lon": { type: Number }
                    }
                },
                IBAN: { type: String },
                paymentDate: { type: Number },
                VAT: { type: String },
                email: { type: String },
                phone: { type: String },
                workingHourMin: { type: Number },
                workingHourMax: { type: Number }
            }]
        },
        company: {
            name: { type: String },
            NIP: { type: String },
            address: {
                street: { type: String },
                city: { type: String },
                zipCode: { type: String },
                state: { type: String },
                countryCode: { type: String },
                coordinates: {
                    "lat": { type: Number },
                    "lon": { type: Number }
                }
            },
            IBAN: { type: String },
            paymentDate: { type: Number },
            VAT: { type: String },
            email: { type: String },
            phone: { type: String },
            workingHourMin: { type: Number },
            workingHourMax: { type: Number },
        },
        price: { type: Number },
        quantityMin: { type: Number },
        quantityMax: { type: Number },
        delivery: [{
            deliveryTypename: { type: String,
                                enum: [ 'SELFPICKUP', 'BUS', 'TRUCK', 'COURIER' ]
            },
            deliveryTimeMin: { type: Number },
            deliveryTimeMax: { type: Number },
            deliveryPrice: { type: Number }
        }],
        image1: { type: String },
        image2: { type: String },
        description: { type: String },
        offerStatus: { type: String,
                       enum: [ 'ACTIVE', 'MODERATION', 'CLOSED' ]
        },
        rating: { type: Number },
        isTop: { type: Boolean }
    },
    quantity: { type: Number },
    delivery: {
        deliveryTypename: { type: String,
                            enum: [ 'SELFPICKUP', 'BUS', 'TRUCK', 'COURIER' ]
        },
        deliveryTimeMin: { type: Number },
        deliveryTimeMax: { type: Number },
        deliveryPrice: { type: Number }
    }
});

export default mongoose.model('CartOffers', CartOffers);