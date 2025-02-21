import Product from '../models/Product.js';
import mongooseObj from '../../util/mongoose.js';

class ProductController {

     // [GET] /products/:slug
     show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('products/show.hbs', { 
                    product: mongooseObj.mongooseToObj(product) });
            })
            .catch(next);
    }

    // // [GET] /courses/:id/edit
    // edit(req, res, next) {
    //     Course.findById(req.params.id)
    //         .then(course => res.render('courses/edit.hbs', { 
    //             course: mongooseObj.mongooseToObj(course) 
    //         }))
    //         .catch(next);
    // }

    // // [PUT] /courses/:id
    // update(req, res, next) {
    //     Course.updateOne({ _id: req.params.id }, req.body)
    //         .then(() => res.redirect('/me/stored/courses'))
    //         .catch(next);
    // }

    // // [DELETE] /courses/:id
    // destroy(req, res, next) {
    //     Course.delete({ _id: req.params.id })
    //         .then(() => res.redirect(req.get('Referrer') || '/me/stored/courses'))
    //         .catch(next);
    // }

    // // [DELETE] /courses/:id/force
    // forceDestroy(req, res, next) {
    //     Course.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect(req.get('Referrer') || '/me/stored/courses'))
    //         .catch(next);
    // }

    // // [PATCH] /courses/:id/restore
    // restore(req, res, next) {
    //     Course.restore({ _id: req.params.id })
    //         .then(() => res.redirect(req.get('Referrer') || '/me/stored/courses'))
    //         .catch(next);
    // }

}

export default new ProductController();