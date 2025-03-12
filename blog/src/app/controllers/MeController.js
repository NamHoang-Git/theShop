import Product from "../models/Product.js";
import Stored from "../models/Stored.js";
import Client from "../models/Client.js";
import Cart from "../models/Cart.js";
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

  // [GET] /admin/report
  async report(req, res, next) {
    try {
      const deletedData = await getDeletedData([Product, Stored, Client]);

      res.render("me/admin/report.hbs", {
        isAuthPage: true,
        deletedCount:
          deletedData.Product.deletedCount +
          deletedData.Stored.deletedCount +
          deletedData.Client.deletedCount,
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
        products: mongooseUtil.multipleMongooseToObj(
          deletedData.Product.records
        ),
        storeds: mongooseUtil.multipleMongooseToObj(deletedData.Stored.records),
        clients: mongooseUtil.multipleMongooseToObj(deletedData.Client.records),
      });
    } catch (error) {
      next(error);
    }
  }

  // ADMIN / DATA
  // [POST] /courses/form-action
  formActionData(req, res, next) {  
    Product.delete({ _id: { $in: req.body.productIds } })
      .then(() => {
        const redirectUrl = req.get("Referrer") || "/me/admin/data";
        res.redirect(redirectUrl);
      })
      .catch(next);
  }

  // [POST] /admin/store(create)
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
  async delete(req, res, next) {
    try {
        const productId = req.params.id;

        // Xóa sản phẩm trong Product
        await Product.delete({ _id: productId });

        // Xóa tham chiếu đến productId trong tất cả Cart
        await Cart.updateMany(
            { 'items.productId': productId },
            { $pull: { items: { productId } } }
        );

        const redirectUrl = req.get("Referrer") || "/me/admin/data";
        res.redirect(redirectUrl);
    } catch (error) {
        next(error);
    }
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

  // [GET] /pay
  async pay(req, res, next) {
    try {
        // Lấy dữ liệu từ query string
        const productsData = req.query.products;
        let products = [];
        let totalAmount = 0;

        if (productsData) {
            products = JSON.parse(decodeURIComponent(productsData));
            products.forEach(product => {
                totalAmount += product.price * product.quantity;
            });
        }

        // Dữ liệu tĩnh cho thông tin khách hàng (có thể lấy từ session hoặc database)
        const user = {
            email: 'ngokhoangnam4268@gmail.com',
            fullName: 'Ngô Kim Hoàng Nam',
            phone: '0383376601',
            address: 'Đống Đa',
            ward: '',
            district: '',
            city: ''
        };

        // Render trang thanh toán
        res.render('me/pay.hbs', {
            isFooterOnlyPage: true,
            user,
            products,
            totalAmount,
            formatCurrency: (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫',
            multiply: (a, b) => a * b
        });
    } catch (error) {
        next(error);
    }
  }

  // [PATCH] /me/cart/update-quantity/:productId
  async updateQuantity(req, res, next) {
    try {
        const cartId = req.cookies.cartId;
        const productId = req.params.productId;
        const { quantity } = req.body;

        if (!cartId || !productId || !quantity) {
            return res.status(400).json({ message: 'Thiếu thông tin cần thiết' });
        }

        const cart = await Cart.findOneAndUpdate(
            { cartId, 'items.productId': productId },
            { $set: { 'items.$.quantity': quantity } },
            { new: true }
        ).populate('items.productId');

        if (!cart) {
            return res.status(404).json({ message: 'Không tìm thấy giỏ hàng' });
        }

        const updatedCartItems = cart.items.map(item => ({
            productId: item.productId._id,
            name: item.productId.name,
            price: item.productId.price,
            image: item.productId.image,
            slug: item.productId.slug,
            quantity: item.quantity,
            productType: item.productId.productType || []
        }));

        res.json({ success: true, cartItems: updatedCartItems });
    } catch (error) {
        next(error);
    }
  }

  // [DELETE] /me/cart/remove/:productId
  async removeFromCart(req, res, next) {
    try {
        const cartId = req.cookies.cartId;
        const productId = req.params.productId;

        if (!cartId || !productId) {
            return res.status(400).json({ message: 'Thiếu cartId hoặc productId' });
        }

        // Tìm và cập nhật giỏ hàng: xóa sản phẩm có productId khỏi mảng items
        const cart = await Cart.findOneAndUpdate(
            { cartId },
            { $pull: { items: { productId } } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Không tìm thấy giỏ hàng' });
        }

        // Redirect về trang hiện tại hoặc /me
        const redirectUrl = req.get('Referrer') || '/me';
        res.redirect(redirectUrl);
    } catch (error) {
        next(error);
    }
  }

  // [DELETE] /me/cart/remove-multiple
  async removeMultipleFromCart(req, res, next) {
    try {
      const cartId = req.cookies.cartId; // Lấy cartId từ cookie
      const { productIds } = req.body; // Lấy danh sách productIds từ request body

      // Kiểm tra dữ liệu đầu vào
      if (!cartId) {
        return res.status(400).json({ success: false, message: 'Thiếu cartId' });
      }
      if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({ success: false, message: 'Danh sách sản phẩm để xóa không hợp lệ' });
      }

      // Tìm và cập nhật giỏ hàng: xóa các sản phẩm có productId trong danh sách productIds
      const cart = await Cart.findOneAndUpdate(
        { cartId },
        { $pull: { items: { productId: { $in: productIds } } } }, // Xóa tất cả items có productId trong productIds
        { new: true } // Trả về giỏ hàng sau khi cập nhật
      );

      if (!cart) {
        return res.status(404).json({ success: false, message: 'Không tìm thấy giỏ hàng' });
      }

      // Trả về phản hồi thành công
      res.status(200).json({
        success: true,
        message: 'Xóa nhiều sản phẩm thành công',
        updatedCartItems: cart.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /
  async index(req, res, next) {
    try {
        // Lấy tất cả sản phẩm từ Product cho body
        const products = await Product.find({});

        res.render("me/me.hbs", {
            isFooterOnlyPage: true,
            products: mongooseUtil.multipleMongooseToObj(products) // Truyền products cho body
            // cartItems được cung cấp bởi middleware loadCart qua res.locals
        });
    } catch (error) {
        next(error);
    }
  }
}

export default new MeController();
