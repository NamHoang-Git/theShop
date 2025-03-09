import express from 'express';
import { engine } from 'express-handlebars'; // 'express-handlebars'

import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import route from './routes/index.js'; // Import route từ thư mục routes
import db from './config/db/index.js';
import methodOverride from 'method-override';

// Connect to DB
db.connect();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware để xử lý dữ liệu từ form
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(methodOverride('_method'))

// Cấu hình Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,

        // Helper định dạng giá thành 1.000.000
        formatCurrency: (number) => number.toLocaleString('vi-VN'),

        // Helper hiển thị đánh giá 1000 -> 1k
        formatNumber: (number) => {
            if (number >= 1000) {
                return (number / 1000).toFixed(1) + 'k';
            }
            return number;
        },

        // ✅ Helper để so sánh hai giá trị
        eq: (a, b) => a === b
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
}),);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Khởi tạo routes
route(app); // Gọi hàm route và truyền app vào

// Khởi động server
app.listen(3000, () => {
    console.log('express-handlebars server listening on: 3000');
});