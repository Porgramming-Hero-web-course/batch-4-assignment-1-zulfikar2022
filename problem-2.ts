
function removeDuplicates (numbersArray: number[]): number[] {
    let newArray: number[] = [];

    numbersArray.forEach(element => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}



