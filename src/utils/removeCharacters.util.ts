const removeChar = (charactersToRemove: string[], charactersList: string[]) => {
    let joinList: any = charactersList.join(' ').toLowerCase();

    const charToRemove = charactersToRemove.map((item: string) => item.toLowerCase());

    for (let i = 0; i < charactersToRemove.length; i++) {
        joinList = joinList.replace(new RegExp(charToRemove[i], "g"), '');
    }

    return joinList.split(' ');
};

export default removeChar;