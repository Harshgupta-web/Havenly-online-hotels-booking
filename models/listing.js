const mongoose = require("mongoose");
const Review = require("./review.js");
const { required } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        required:true,
    },
    image: {
        filename: String,
        url: String,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    review:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review"
            
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
            ref:"User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

})

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        
        await Review.deleteMany({_id:{$in:listing.review}})
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing.model("Listing", listingSchema);
module.exports = Listing;