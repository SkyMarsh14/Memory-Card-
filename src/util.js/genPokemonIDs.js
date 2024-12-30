const genPokemonData = (length, startIndex, endIndex) =>{
    let uniqueSet = []
    while(length>uniqueSet.length){
        const randomIndex = Math.floor(Math.random()*endIndex)+startIndex;
        if(!uniqueSet.includes(randomIndex)){
            uniqueSet.push(
                {index:randomIndex,
                    id:crypto.randomUUID()
                });
        }
    }
    return uniqueSet;
}

export default genPokemonData;