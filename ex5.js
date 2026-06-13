import {booksByCategory} from './booksByCategory.js'
function countBooksInCategory(books) {
    let categoryObject = {};
    books.forEach((category) => {categoryObject[category.category] = category.books.length});
    return categoryObject
}