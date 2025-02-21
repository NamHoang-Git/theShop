import Product from '../models/Product.js';
import mongooseUtil from '../../util/mongoose.js';

class SiteController {
    
    // [GET] /
    index(req, res, next) {
        Product.find({})
            .then(products => {
                res.render("home", { 
                    isAuthPage: false ,
                    products: mongooseUtil.multipleMongooseToObj(products)
                });
            })
            .catch(next);
    }

}

export default new SiteController();