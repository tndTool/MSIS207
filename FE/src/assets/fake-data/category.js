const top_category = [
    {
        display: 'Áo Thun',
        categorySlug: 'ao-thun',
    },
    {
        display: 'Áo Polo',
        categorySlug: 'ao-polo',
    },
    {
        display: 'Áo Croptop',
        categorySlug: 'ao-croptop',
    },
];
const outwear_category = [
    {
        display: 'Hoodie',
        categorySlug: 'hoodie',
    },
    {
        display: 'Jacket',
        categorySlug: 'jacket',
    },
    {
        display: 'Varsity',
        categorySlug: 'varsity',
    },
];
const bottoms_category = [
    {
        display: 'Short',
        categorySlug: 'short',
    },
    {
        display: 'Pants',
        categorySlug: 'pants',
    },
];
const accessories_category = [
    {
        display: 'Wallet',
        categorySlug: 'wallet',
    },
    {
        display: 'Bag',
        categorySlug: 'bag',
    },
    {
        display: 'Beanie',
        categorySlug: 'beanie',
    },
];

const getTopCategory = () => top_category;
const getOutwearCategory = () => outwear_category;
const getBottomsCategory = () => bottoms_category;
const getAccessoriesCategory = () => accessories_category;

const categoryData = {
    getTopCategory,
    getOutwearCategory,
    getBottomsCategory,
    getAccessoriesCategory,
};

export default categoryData;
