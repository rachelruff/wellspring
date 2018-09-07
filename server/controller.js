const getProductCategoriesProducts = (req, res, next) => {
  const db = req.app.get('db');
  db.get_product_categories_products()
  .then( prodCat => res.status(200).send(prodCat) )
  .catch( () => res.status(500).send() );
}

module.exports = {
  getProductCategoriesProducts,

}


