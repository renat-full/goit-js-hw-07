const categories = document.querySelector('ul#categories');
const quantityCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${quantityCategories.length}`);
quantityCategories.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const quantityItem = item.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${quantityItem}`);
});