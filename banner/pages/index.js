import { ResourcePicker } from "@shopify/app-bridge-react";
import { EmptyState, Page } from "@shopify/polaris";
import React, { useState } from 'react'
import ProductList from "../components/productList";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);
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
      <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product", 
        onAction: () => setIsOpen(true)
      }}>

        <ProductList products={products} />
      </Page>
     ) : (
      <EmptyState
      heading="Manage the product you want to display"
      action={{
        content: "Select products",
        onAction: () => setIsOpen(true),
        
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
        <p>Select the products you want to use on your banner</p>
      </EmptyState>
    )}
   </> 
  );
}

export default index;

