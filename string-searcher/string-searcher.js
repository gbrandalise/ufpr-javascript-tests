let searchForSubSrt = (text, valueToSearch) => {
    if (!text || !valueToSearch) {
        return -1;
    }
    let textArray = text.split('');
    let valueArray = valueToSearch.split('');
    let result = -1;
    for (let i = 0; i < textArray.length;i++) {
        let char = textArray[i];
        if (char === valueArray[0]) {
            result = i;
            for (let valueChar of valueArray) {
                if (i >= textArray.length) {
                    result = -1;
                    break;
                }
                char = textArray[i];
                if (valueChar !== char) {
                    result = -1;
                    i--;
                    break;
                }
                i++
            }
        }
    }
    return result;
}

export default searchForSubSrt;