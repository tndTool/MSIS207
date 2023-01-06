import React, { useEffect, useState } from 'react';

import Helmet from '~/components/Main/Helmet';
import Section, { SectionBody, SectionTitle } from '~/components/Main/Section';
import Grid from '~/components/Main/Grid';
import ProductCard from '~/components/Main/ProductCard';
import ProductView from '~/components/Main/ProductView';

import request from '../../utils/request';

const ProductsAll = (props) => {
    
    const [relatedProducts, setRelatedProducts] = useState([]);
    const product = relatedProducts.find((e) => e.Slug === props.match.params.slug);

    useEffect(() => {
        async function fetchData() {
            const {data} = await request.get('/product/getAll');
            
            setRelatedProducts(data)
        }
        fetchData();
    },[]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product}>
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
                                img01={item.Image01}
                                img02={item.Image02}
                                name={item.Title}
                                price={Number(item.Price)}
                                slug={item.Slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default ProductsAll;
