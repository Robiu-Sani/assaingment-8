export const getBookFromLocalStore = () => {
    const getReadBook = localStorage.getItem('readBook');
    if (getReadBook) {
        return JSON.parse(getReadBook);
    }
    return [];
}

export const saveReadBook = book => {
    const getbook = getBookFromLocalStore();
    const isHere = getbook.find(bookid => bookid.bookId === book.bookId);

    if (!isHere) {
        getbook.push(book);
        localStorage.setItem('readBook', JSON.stringify(getbook));
    }
}

export const getWishBook = () => {
    const getwishBook = localStorage.getItem('wishBook');
    if (getwishBook) {
        return JSON.parse(getwishBook);
    }
    return [];
}

export const saveWishBook = wish => {
    const getWish = getWishBook();
    const wishHere = getWish.find(wishbook => wishbook.bookId === wish.bookId);

    if (!wishHere) {
        getWish.push(wish);
        localStorage.setItem('wishBook', JSON.stringify(getWish))
    }
}

export const getCompareBook = () => {
    const getCompare = localStorage.getItem('compareBook')
    if (getCompare) {
        return JSON.parse(getCompare)
    }
    return []
}

export const saveCompareBook = compare => {
    const compareStore = getCompareBook();
    const compareHere = compareStore.find(compares => compares.bookId === compare.bookId);

    if (!compareHere) {
        compareStore.push(compare);
        localStorage.setItem('compareBook' , JSON.stringify(compareStore))
    }
}


export default {getBookFromLocalStore , saveReadBook , getWishBook , saveWishBook, getCompareBook , saveCompareBook}