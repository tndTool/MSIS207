import React from 'react';

import Helmet from '~/layouts/Main/Helmet';
import HeroSlider from '~/layouts/Main/HeroSlider';

const Top = () => {
    return (
        <Helmet title="Top">
            <HeroSlider />
        </Helmet>
    );
};

export default Top;
