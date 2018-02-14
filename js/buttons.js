function hoverf(x){

    if(x.src.includes("book.png"))
        x.src = 'pictures/book-hover.png';
    else if(x.src.includes("map.png"))
        x.src = 'pictures/map-hover.png';
    else if(x.src.includes("summary.png"))
        x.src = 'pictures/summary-hover.png';

}

function leavef(x){

    if(x.src.includes("book-hover.png"))
        x.src = 'pictures/book.png';
    else if(x.src.includes("map-hover.png"))
        x.src = 'pictures/map.png';
    else if(x.src.includes("summary-hover.png"))
        x.src = 'pictures/summary.png';
}