const removeWords = (wordsToRemove: string[], wordsList: string[]) => {
    const lists = [
        wordsList.map((item: string) => item.toLowerCase()),
        wordsToRemove.map((item:string) => item.toLowerCase())
    ];

    return lists[0].filter((word) => lists[1].indexOf(word) < 0);
};

export default removeWords;