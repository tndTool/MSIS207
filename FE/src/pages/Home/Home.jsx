import React from 'react';

import Helmet from '~/components/Main/Helmet';
import HeroSlider from '~/components/Main/HeroSlider';

const Home = () => {
    return <Helmet title="Home">{<HeroSlider />}</Helmet>;
};

export default Home;
