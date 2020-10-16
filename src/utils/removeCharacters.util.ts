const removeChar = (charactersToRemove: string[], charactersList: string[]) => {
    let joinList: any = charactersList.join(' ');

    for (let i = 0; i < charactersToRemove.length; i++) {
        joinList = joinList.replace(new RegExp(charactersToRemove[i], "g"), '');
    }

    return joinList.split(' ');
};

export default removeChar;