export const fetchProducts = async (category) => {
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    return res.json();
};

export const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    return res.json();
};