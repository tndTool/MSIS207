import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '~/components/Main/Helmet';
import HeroSlider from '~/components/Main/HomeSlider';
import Section, { SectionTitle, SectionBody } from '~/components/Main/Section';
import Policy from '~/components/Main/Policy';
import ProductCard from '~/components/Main/ProductCard';
import Grid from '~/components/Main/Grid';

import heroSliderData from '~/assets/fake-data/home-slider';
import policy from '~/assets/fake-data/policy';
import productData from '~/assets/fake-data/products';

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* Home slider */}
            <HeroSlider data={heroSliderData} control={true} auto={true} />
            {/* End */}

            {/* Policy */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link key={index} to="/policy">
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
                        {productData.getProducts(4).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                path={item.path}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* End */}

            {/* New arrival */}
            {/* <Section>
                <SectionTitle>sản phẩm mới</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
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
            </Section> */}
            {/* End*/}

            {/* Popular product*/}
            {/* <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(12).map((item, index) => (
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
            </Section> */}
            {/* End  */}
        </Helmet>
    );
};

export default Home;
