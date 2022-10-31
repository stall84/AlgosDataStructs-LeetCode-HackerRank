function simpleHash(str) {
    let total = 0;
    for (let char of str) {
        total += char.charCodeAt(0)
    }
    return total;
}

