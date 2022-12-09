import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '~/components/Main/Helmet';
import HomeSlider from '~/components/Main/HomeSlider';
import Section, { SectionTitle, SectionBody } from '~/components/Main/Section';
import Policy from '~/components/Main/Policy';
import ProductCard from '~/components/Main/ProductCard';
import Grid from '~/components/Main/Grid';

import productData from '~/assets/fake-data/products';

const Home = () => {
    const policy = [
        {
            name: 'Miễn phí giao hàng',
            description: 'Miễn phí ship với đơn hàng > 199K',
            icon: 'bx bx-shopping-bag',
        },
        {
            name: 'Thanh toán COD',
            description: 'Thanh toán khi nhận hàng (COD)',
            icon: 'bx bx-credit-card',
        },
        {
            name: 'Khách hàng VIP',
            description: 'Ưu đãi dành cho khách hàng VIP',
            icon: 'bx bx-diamond',
        },
        {
            name: 'Hỗ trợ bảo hành',
            description: 'Đổi, sửa đồ tại tất cả store',
            icon: 'bx bx-donate-heart',
        },
    ];

    const homeSliderData = [
        {
            title: 'Áo Xanh',
            description: 'Thời trang phang thời tiết',
            img: 'https://res.cloudinary.com/dcwka06ph/image/upload/v1669648383/Website_project/Slider/heroslider_1_ulyyoj.png',
            color: 'darkcyan',
            path: '/top',
        },
        {
            title: 'Áo Hồng',
            description: 'Thời trang phang thời tiết',
            img: 'https://res.cloudinary.com/dcwka06ph/image/upload/v1669343239/Website_project/Slider/slide_2_shsclv.png',
            color: 'pink',
            path: '/top',
        },
        {
            title: 'Áo Cam',
            description: 'Thời trang phang thời tiết',
            img: 'https://res.cloudinary.com/dcwka06ph/image/upload/v1669648373/Website_project/Slider/heroslider_2_yzxzeb.png',
            color: 'orange',
            path: '/top',
        },
    ];

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
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
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
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
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
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
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
        </Helmet>
    );
};

export default Home;
