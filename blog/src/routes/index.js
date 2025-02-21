import loginRouter from "./login.js";
import signupRouter from "./signup.js";
import siteRouter from "./site.js";
import meRouter from "./me.js";
import productsRouter from "./products.js";

function route(app) {
  app.use("/login", loginRouter);
  app.use("/signup", signupRouter);
  app.use("/me", meRouter);
  app.use("/products", productsRouter);

  app.use("/", siteRouter);
}

export default route;
