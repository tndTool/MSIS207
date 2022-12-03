import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '~/components/Main/Helmet';
import HomeSlider from '~/components/Main/HomeSlider';
import Section, { SectionTitle, SectionBody } from '~/components/Main/Section';
import Policy from '~/components/Main/Policy';
import ProductCard from '~/components/Main/ProductCard';
import Grid from '~/components/Main/Grid';

import homeSliderData from '~/assets/fake-data/home-slider';
import policy from '~/assets/fake-data/policy';
import top_productData from '~/assets/fake-data/top_products';

const Home = () => {
    return (
        <Helmet title="Home">
            {/* Home slider */}
            <HomeSlider data={homeSliderData} control={true} auto={true} />
            {/* End */}

            {/* Policy */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link key={index} to="/">
                                <Policy name={item.name} description={item.description} icon={item.icon} />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* End */}

            {/* Best selling */}
            <Section>
                <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {top_productData.getProducts(4).map((item, index) => (
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
            {/* End */}

            {/* New arrival */}
            <Section>
                <SectionTitle>sản phẩm mới</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {top_productData.getProducts(4).map((item, index) => (
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
            {/* End*/}

            {/* Popular product*/}
            <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {top_productData.getProducts(4).map((item, index) => (
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
            {/* End test */}
        </Helmet>
    );
};

export default Home;
