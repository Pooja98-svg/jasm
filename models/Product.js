class Product{
    constructor(id,storeid,productid,productname, productcategoryname1,productcategoryid1,unit,productimage,unitprice){
        this.id=id;
        this.storeid=storeid;
        this.productid=productid;
        this.productname=productname;
        this.productcategoryname1=productcategoryname1;
        this.productcategoryid1=productcategoryid1;
        this.unit=unit;
        this.unitprice=unitprice;
        this.productimage=productimage;
    }
}
export default Product;
/*class Product {
    constructor(id, unit, quan, price, storeids, product) {
      (this.id = id), (this.unit = unit);
      this.quan = quan;
      this.price = price;
      this.storeids = storeids;
      this.product = product;
    }
  }
  export default Product;
  */