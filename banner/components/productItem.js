import React from 'react';
import { Thumbnail } from '@shopify/polaris';
import { HideMinor } from '@shopify/polaris-icons';

function productItem({product}) {
    console.log(product);
    const image = product.images ? product.images[0].originalSrc : HideMinor;
    return (
        <>
            <Thumbnail source={image} />
            {product.title}
        </>
    )
}

export default productItem
