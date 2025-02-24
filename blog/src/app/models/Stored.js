import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater'
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Stored = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    priceOrigin: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    inventory: { type: Number, default: 0 },
    imageURL: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true, },);

// Add plugins
mongoose.plugin(slug);
Stored.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
 });

export default mongoose.model('Stored', Stored);
