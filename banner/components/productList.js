import { Card, ResourceList } from '@shopify/polaris'
import React from 'react'
import ProductItem from './productItem'

function productList({ products }) {
    return (
        <Card>
          <ResourceList
            showHeader
            resourceName={{singular:"Product", plural:"Products"}}
            items={products}
            renderItem={product => {
                return <ProductItem product={product}/>
            }}
          />
        </Card>
    )
}

export default productList
