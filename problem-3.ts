
function countWordOccurrences(sentence: string, word: string): number {
    let wordCount = 0;
    let sentenceArray = sentence.split(' ');

    sentenceArray.forEach(element => {
        if (element.toLowerCase() === word.toLowerCase()) {
            wordCount++;
        }
    })
    return wordCount;
}
