import Product from "../models/Product.js";
import mongooseUtil from "../../util/mongoose.js";
import mongooseObj from "../../util/mongoose.js";

class MeController {
  /* account */
  // [GET] /account/profile
  profile(req, res, next) {
    res.render("me/account/profile.hbs", { isFooterOnlyPage: true });
  }

  // [GET] /account/password
  password(req, res, next) {
    res.render("me/account/password.hbs", { isFooterOnlyPage: true });
  }

  // [GET] /account/edit
  editAccount(req, res, next) {
    res.render("me/account/edit.hbs", { isFooterOnlyPage: true });
  }

  /* admin */
  // [GET] /admin/data
  data(req, res, next) {
    Promise.all([
      Product.find({}),
      Product.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([products, deletedCount]) =>
        res.render("me/admin/data.hbs", {
          isAuthPage: true,
          deletedCount,
          products: mongooseUtil.multipleMongooseToObj(products),
        })
      )
      .catch(next);
  }

  // [GET] /admin/create
  create(req, res, next) {
    Promise.all([
      Product.findWithDeleted({ deleted: true }),
      Product.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([products, deletedCount]) =>
        res.render("me/admin/create.hbs", {
          isAuthPage: true,
          deletedCount,
          products: mongooseUtil.multipleMongooseToObj(products),
        })
      )
      .catch(next);
  }

  // [GET] /me/admin/trash
  trash(req, res, next) {
    Promise.all([
      Product.findWithDeleted({ deleted: true }),
      Product.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([products, deletedCount]) =>
        res.render("me/admin/trash.hbs", {
          isAuthPage: true,
          deletedCount,
          products: mongooseUtil.multipleMongooseToObj(products),
        })
      )
      .catch(next);
  }

  // [GET] me/admin/data/edit/:id
  edit(req, res, next) {
    Promise.all([
      Product.findById(req.params.id),
      Product.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([product, deletedCount]) => {
        res.render("me/admin/edit.hbs", {
          isAuthPage: true,
          deletedCount,
          product: mongooseObj.mongooseToObj(product),
        });
      })
      .catch(next);
  }

  // [PUT] /admin/:id
  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/admin/data"))
      .catch(next);
  }

  // [DELETE] /admin/:id
  delete(req, res, next) {
    Product.delete({ _id: req.params.id })
      .then(() => res.redirect(req.get("Referrer") || "/me/admin/data"))
      .catch(next);
  }

  // [DELETE] /admin/force/:id
  force(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect(req.get("Referrer") || "/me/admin/data"))
      .catch(next);
  }

  // [PATCH] /admin/restore/:id
  restore(req, res, next) {
    Product.restore({ _id: req.params.id })
      .then(() => res.redirect(req.get("Referrer") || "/me/admin/data"))
      .catch(next);
  }

  // [POST] /admin/store
  store(req, res, next) {
    req.body.image = `img/Products/${req.body.imageURL}`;
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.redirect("/me/admin/data"))
      .catch(next);
  }

  // [GET] /
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("me/me.hbs", {
          isAuthPage: true,
          products: mongooseUtil.multipleMongooseToObj(products),
        });
      })
      .catch(next);
  }
}

export default new MeController();
