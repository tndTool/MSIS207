import React, { useEffect } from 'react';

import Helmet from '~/components/Main/Helmet';
import Section, { SectionBody, SectionTitle } from '~/components/Main/Section';
import Grid from '~/components/Main/Grid';
import ProductCard from '~/components/Main/ProductCard';
import ProductView from '~/components/Main/ProductView';

import productData from '~/assets/fake-data/products';

const ProductsAll = (props) => {
    const product = productData.getProductBySlug(props.match.params.slug);

    const relatedProducts = productData.getProducts(4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default ProductsAll;
