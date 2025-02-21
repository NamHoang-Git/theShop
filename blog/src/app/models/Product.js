import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater'
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    discount: { type: Number, default: 0 },
    sold: { type: Number, required: true },
    price: { type: Number, required: true },
    priceOrigin: { type: Number, required: true },
    star: { type: Number, required: true },
    reviews: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    imageURL: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true, },);

// Add plugins
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
 });

export default mongoose.model('Product', Product);
