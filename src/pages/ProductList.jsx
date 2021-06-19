//rfc snippet code
import React, { useState, useEffect } from "react"; //useState snippet with has been added, useEffect manuel added
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductList() {
  //destructure...
  const [products, setProducts] = useState([]);

  //useEffect function...
  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService();

    //productService getProducts başarılı olursa...
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []); //SECTION 12 ,[] - Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat sürekli istekte bulunur.

  //Table Celled Header settings: SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım
  //ve celled-headerlara göre column bilgisi alalım.
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            // Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {} → products.map((product) => ()
            products.map((product) => (
              //step2: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row key={product.id}>
                {/* celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...*/}
                {<Table.Cell>{product.productName}</Table.Cell>}
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

/*=============================================     
   { {
      "id": 1,
      "productName": "Chai",
      "unitPrice": 18,
      "unitsInStock": 39,
      "quantityPerUnit": "10 boxes x 30 bags",
      "category": {
        "categoryId": 1,
        "categoryName": "Beverages"
      }
  ================================================*/