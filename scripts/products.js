// Load all poducts
const loadAllProducts = async () => {
    showLoading();
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        const allProducts = data;
        displayAllProducts(allProducts);
    } catch (error) {
        console.error('Error fetching all products: ', error);
    }
}

// Load all categories
const loadAllCategories = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        const categories = data;
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories: ', error);
    }
}

// show Loading Spinner
const showLoading = () => {
    const spinner = document.getElementById('spinner');
    const categoryProductContainer = document.getElementById('categoryProductContainer');
    spinner.classList.remove('hidden');
    categoryProductContainer.classList.add('hidden');
}

// hide loading spinner
const hideLoading = () => {
    const spinner = document.getElementById('spinner');
    const categoryProductContainer = document.getElementById('categoryProductContainer');
    spinner.classList.add('hidden');
    categoryProductContainer.classList.remove('hidden');
}
