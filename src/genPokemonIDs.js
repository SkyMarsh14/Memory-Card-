const getUniqueNumber = (length, startIndex, endIndex) =>{
    let uniqueSet = []
    while(length>uniqueSet.length){
        const randomIndex = Math.floor(Math.random()*endIndex)+startIndex;
        uniqueSet.includes(randomIndex)&&uniqueSet.push(randomIndex);
    }
    return uniqueSet;
}

export default getUniqueNumber;