import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/tak_shop_dev');

        if (mongoose.connection.readyState === 1) {
            console.log('Kết nối đến cơ sở dữ liệu thành công!');
        } else {
            console.error('Kết nối đến cơ sở dữ liệu không thành công!');
            process.exit(1);
        }

        mongoose.connection.on('connected', () => {
            console.log('Cơ sở dữ liệu đã sẵn sàng để sử dụng!');
        });

        mongoose.connection.on('disconnected', () => {
            console.error('Kết nối đến cơ sở dữ liệu bị ngắt!');
            process.exit(1);
        });
    } catch (error) {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
        process.exit(1);
    }
}

export default { connect };
