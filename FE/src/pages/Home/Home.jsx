import React, { useEffect, useState } from 'react';

import Helmet from '~/components/Main/Helmet';
import HomeSlider from '~/components/Main/HomeSlider';
import Section, { SectionTitle, SectionBody } from '~/components/Main/Section';
import Policy from '~/components/Main/Policy';
import ProductCard from '~/components/Main/ProductCard';
import Grid from '~/components/Main/Grid';
import request from '../../utils/request';

const Home = () => {

        const [allProduct, setAllProduct] = useState([])
        const [policy, setPolicy] = useState([]);
        const [homeSliderData, setHomeSliderData] = useState([]);
    
        useEffect(() => {
            async function fetchData() {
                try {
                    const req = await request.get('/home/policy');
                    setPolicy(req.data);
                    const req2 = await request.get('/home/homeSliderData');
                    setHomeSliderData(req2.data);
                    const {data}= await request.get('/product/getAll');
                    setAllProduct(data);
                } catch (error) {
                    console.log(error)
                }      
            }
            fetchData();
        }, []);

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
                                <Policy name={item.name} description={item.description} icon={item.icon} />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* End */}

            {/* Best selling */}
            <Section>
                <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {allProduct.slice(0, 4).map((item, index) => (
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
            {/* End */}

            {/* New arrival */}
            <Section>
                <SectionTitle>sản phẩm mới</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {allProduct.slice(0, 4).map((item, index) => (
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
            {/* End*/}

            {/* Popular product*/}
            <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {allProduct.slice(0, 4).map((item, index) => (
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
            {/* End */}
        </Helmet>
    );
};

export default Home;
