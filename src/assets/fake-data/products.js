const products = [
    {
        title: 'Áo 01',
        price: '189000',
        image01:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654100/Website_project/Products/Top/black_south_tee_front_r7aime.jpg',
        image02:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654108/Website_project/Products/Top/black_south_tee_behind_tz0ij0.jpg',
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange'],
        path: '/top',
        slug: '/ao-thun',
        size: ['s', 'm', 'l', 'xl'],
    },
    {
        title: 'Áo 02',
        price: '159000',
        image01:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654100/Website_project/Products/Top/black_south_tee_front_r7aime.jpg',
        image02:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654108/Website_project/Products/Top/black_south_tee_behind_tz0ij0.jpg',
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'blue'],
        path: '/top',
        slug: '/ao-thun',
        size: ['s', 'm', 'l', 'xl'],
    },
    {
        title: 'Áo 03',
        price: '190000',
        image01:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654100/Website_project/Products/Top/black_south_tee_front_r7aime.jpg',
        image02:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654108/Website_project/Products/Top/black_south_tee_behind_tz0ij0.jpg',
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange', 'yellow'],
        path: '/top',
        slug: '/ao-thun',
        size: ['s', 'm', 'l', 'xl'],
    },
    {
        title: 'Áo 04',
        price: '194000',
        image01:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654100/Website_project/Products/Top/black_south_tee_front_r7aime.jpg',
        image02:
            'https://res.cloudinary.com/dcwka06ph/image/upload/v1669654108/Website_project/Products/Top/black_south_tee_behind_tz0ij0.jpg',
        categorySlug: 'ao-thun',
        colors: ['white', 'orange', 'blue'],
        path: '/top',
        slug: '/ao-thun',
        size: ['s', 'm', 'l', 'xl'],
    },
];

const getAllProducts = () => products;

const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
};

const productData = {
    getAllProducts,
    getProducts,
};

export default productData;
