import {booksByCategory} from './booksByCategory.js'
function authors(array) {
    let authorsObject = [];
    array.forEach(element => {
        element.books.forEach(book => {if(!authorsObject.includes(book.author)) authorsObject.push(book.author);});
    });
    return authorsObject;
}