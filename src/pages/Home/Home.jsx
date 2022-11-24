import React from 'react';

import Helmet from '~/layouts/Main/Helmet';
import HeroSlider from '~/layouts/Main/HeroSlider';

const Home = () => {
    return <Helmet title="Home">{<HeroSlider />}</Helmet>;
};

export default Home;
