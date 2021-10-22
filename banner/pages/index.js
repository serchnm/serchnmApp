import { ResourcePicker } from "@shopify/app-bridge-react";
import React, { useState, useEffect } from 'react'
import ProductEmptyState from "../components/productEmptyState";
import ProductPage from "../components/productPage";
import store from 'store-js';



function index({ host }) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    const productList = store.get(`${host}-products`);
    if(productList) {
      setProducts(productList);
    }
  }, []);

  useEffect(() => {
    const ids = products.map(product => {
      return {
        id: product.id
      }
    });
    setProductId(ids);
  }, [products]);


  function handleProductsSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
    store.set(`${host}-products`, payload.selection);
  }
  return (
    <>
      <ResourcePicker 
        resourceType="Product" 
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductsSelection}
        initialSelectionIds={productId}
       /> 
    {products.length > 0 ? (
      <ProductPage setIsOpen={setIsOpen} products={products}/>
     ) : (
       <ProductEmptyState setIsOpen={setIsOpen} />
    )}
   </> 
  );
}

export default index;

