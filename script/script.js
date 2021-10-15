let books = [
    {
        BookName:'Shadows',
        img: 'images (3)',
        AuthorName: 'John Saul',
        price: '$4'
    },
    {
        BookName:'To Wake The Dead',
        img: 'images (4)',
        AuthorName: 'Richard Laymon',
        price: '$2'
    },
    {
        BookName:'The Midnight Tour',
        img: 'images (5)',
        AuthorName: 'Richard Laymon',
        price: '$10'
    },
    {
        BookName:'Ravage',
        img: 'images (6)',
        AuthorName: 'Iain Rob Wright',
        price: '$12'
    },
    {
        BookName:'Mo Hayder Birdman',
        img: 'images (7)',
        AuthorName: 'Jack Caffery',
        price: '$12'
    },
    {
        BookName:'The Backwoods',
        img: 'images (8)',
        AuthorName: 'Edward Lee',
        price: '$20'
    },
    {
        BookName:'The Others',
        img: 'images (9)',
        AuthorName: 'Mark Brandi',
        price: '$24'
    },
    {
        BookName:'Sick Girl',
        img: 'images (10)',
        AuthorName: 'Rachael Hargroove',
        price: '$12'
    },
    {
        BookName:'One By One',
        img: 'images (11)',
        AuthorName: 'Fredia McFadden',
        price: '$14'
    },
    {
        BookName:'Lock The Door',
        img: 'images (12)',
        AuthorName: 'Jane Holland',
        price: '$25'
    },
    {
        BookName:'God Help The Child',
        img: 'images (13)',
        AuthorName: 'Toni Morrison',
        price: '$50'
    },
    {
        BookName:'The Secret History',
        img: 'images (14)',
        AuthorName: 'Dona Tartt',
        price: ''
    },
]

books.forEach(element =>{
    // console.log(element);
});



let booksGallery = document.getElementById('gallery');
let html = '';
books.forEach(e =>{
    html += `
    <div class="img ">
        <img src="./img/images (3).jpeg" alt="image" class="img-fluid  py-2">
        <h3 class="fs-6 fw-bold ">Book Name: Book Name </h3>
        <h3 class="fs-6 fw-bold ">Book Name: Book Name</h3>
        <h3 class="fs-6 fw-bold">Book Name: Book Name</h3>
    </div>
    `

    console.log(e);

    booksGallery.innerHTML = html
})