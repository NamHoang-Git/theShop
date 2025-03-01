import Product from "../models/Product.js";
import Stored from "../models/Stored.js";
import Client from "../models/Client.js";
import mongooseUtil from "../../util/mongoose.js";
import mongooseObj from "../../util/mongoose.js";
import { getDeletedData } from "../../util/databaseHelper.js";

class MeController { 
  /* ACCOUNT */
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

  /* ADMIN */
    // [GET] /admin/data
    async data(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const products = await Product.find({});
        res.render("me/admin/data.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          products: mongooseUtil.multipleMongooseToObj(products),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/data/edit/:id
    async edit(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const product = await Product.findById(req.params.id);
        res.render("me/admin/edit.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          product: mongooseObj.mongooseToObj(product),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/create
    async create(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const products = await Product.findWithDeleted({});
        res.render("me/admin/create.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          products: mongooseUtil.multipleMongooseToObj(products),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/stored
    async stored(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const storeds = await Stored.find({});
        res.render("me/admin/stored.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          storeds: mongooseUtil.multipleMongooseToObj(storeds),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/shipping
    async shipping(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const clients = await Client.find({});
        res.render("me/admin/shipping.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          clients: mongooseUtil.multipleMongooseToObj(clients),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/bill
    async bill(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        const clients = await Client.find({});
        res.render("me/admin/bill.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount +
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          clients: mongooseUtil.multipleMongooseToObj(clients),
        });
      } catch (error) {
        next(error);
      }
    }

    // [GET] /admin/trash
    async trash(req, res, next) {
      try {
        const deletedData = await getDeletedData([Product, Stored, Client]);

        res.render("me/admin/trash.hbs", {
          isAuthPage: true,
          deletedCount:
            deletedData.Product.deletedCount + 
            deletedData.Stored.deletedCount +
            deletedData.Client.deletedCount,
          products: mongooseUtil.multipleMongooseToObj(deletedData.Product.records),
          storeds: mongooseUtil.multipleMongooseToObj(deletedData.Stored.records),
          clients: mongooseUtil.multipleMongooseToObj(deletedData.Client.records),
        });
      } catch (error) {
        next(error);
      }
    }

    // ADMIN / DATA
      // [POST] /admin/store
      store(req, res, next) {
        req.body.image = `img/Products/${req.body.imageURL}`;
        const product = new Product(req.body);
        product
          .save()
          .then(() => res.redirect("/me/admin/data"))
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
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/data";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [DELETE] /admin/force/:id
      force(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/data";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [PATCH] /admin/restore/:id
      restore(req, res, next) {
        Product.restore({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/data";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

    // ADMIN / STORED
      // [POST] /admin/stored/createStored
      createStored(req, res, next) {
        req.body.image = `img/Products/${req.body.imageURL}`;
        const stored = new Stored(req.body);
        stored
          .save()
          .then(() => res.redirect("/me/admin/stored"))
          .catch(next);
      }

      // [PUT] /admin/stored/:id
      updateStored(req, res, next) {
        Stored.updateOne({ _id: req.params.id }, req.body)
          .then(() => res.redirect("/me/admin/stored"))
          .catch(next);
      }

      // [DELETE] /admin/stored/:id
      deleteStored(req, res, next) {
        Stored.delete({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/stored";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [DELETE] /admin/stored/force/:id
      forceStored(req, res, next) {
        Stored.deleteOne({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/stored";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [PATCH] /admin/stored/restore/:id
      restoreStored(req, res, next) {
        Stored.restore({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/stored";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }
    
    // ADMIN / SHIPPING
      // [POST] /admin/shipping/createShipping
      createShipping(req, res, next) {
        const client = new Client(req.body);
        client
          .save()
          .then(() => res.redirect("/me/admin/shipping"))
          .catch(next);
      }

      // [PUT] /admin/shipping/:id
      updateShipping(req, res, next) {
        Client.updateOne({ _id: req.params.id }, req.body)
          .then(() => res.redirect("/me/admin/shipping"))
          .catch(next);
      }

      // [DELETE] /admin/shipping/:id
      deleteShipping(req, res, next) {
        Client.delete({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/shipping";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [DELETE] /admin/shipping/force/:id
      forceShipping(req, res, next) {
        Client.deleteOne({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/shipping";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [PATCH] /admin/shipping/restore/:id
      restoreShipping(req, res, next) {
        Client.restore({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/shipping";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

    // ADMIN / BILL
      // [POST] /admin/bill/createBill
      createBill(req, res, next) {
        const client = new Client(req.body);
        client
          .save()
          .then(() => res.redirect("/me/admin/bill"))
          .catch(next);
      }

      // [PUT] /admin/bill/:id
      updateBill(req, res, next) {
        Client.updateOne({ _id: req.params.id }, req.body)
          .then(() => res.redirect("/me/admin/bill"))
          .catch(next);
      }

      // [DELETE] /admin/bill/:id
      deleteBill(req, res, next) {
        Client.delete({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/bill";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [DELETE] /admin/bill/force/:id
      forceBill(req, res, next) {
        Client.deleteOne({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/bill";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }

      // [PATCH] /admin/bill/restore/:id
      restoreBill(req, res, next) {
        Client.restore({ _id: req.params.id })
          .then(() => {
            const redirectUrl = req.get("Referrer") || "/me/admin/bill";
            res.redirect(redirectUrl);
          })
          .catch(next);
      }
  
  // [GET] /cart
  cart(req, res, next) {
    res.render("me/cart.hbs", { isFooterOnlyPage: true });
  }

  // [GET] / (HOME)
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
