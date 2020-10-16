const removeWords = (wordsToRemove: string[], wordsList: string[]) => {
    const lists = [
        wordsList.map((item: string) => item.toLowerCase()),
        wordsToRemove.map((item:string) => item.toLowerCase())
    ];
    let joinList: any = wordsList.join(' ').toLowerCase();

    for (let i = 0; i < lists[1].length; i++) {
        joinList = joinList.replace(new RegExp(wordsToRemove[i], "g"), '');
    }

    return joinList.split(' ');
};

export default removeWords;