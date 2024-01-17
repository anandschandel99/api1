const { timeStamp } = require('console')
const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "plese enter the value"]
        },
        quantity: {
            Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        emage: {
            type: String,
            required: false
        }


    },{

        timeStamp:true
    }
)
const Product=mongoose.model("Product",productSchema);
module.exports=Product;