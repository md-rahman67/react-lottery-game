function genTicket(n) {
    let arr = new Array(n);

    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 25);
    }

    return arr;
}

export {genTicket}