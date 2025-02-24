import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater'
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Client = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    code: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    shippingStatus: { type: String, required: true },
}, { timestamps: true, },);

// Add plugins
mongoose.plugin(slug);
Client.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
 });

export default mongoose.model('Client', Client);
