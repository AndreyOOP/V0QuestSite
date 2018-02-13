function hoverf(x){

    if(x.src.includes("book.png"))
        x.src = 'book-hover.png';
}

function leavef(x){

    if(x.src.includes("book-hover.png"))
        x.src = 'book.png';
}