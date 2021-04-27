let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];
//1
let storyWords = story.split(' ');
//2
console.log(`The word count: ${storyWords.length}`)
    //3
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
//4**.reduce((acc, cur)...0???
overusedWords.forEach(item => {
        console.log(`#4 Overused word - ${item}: ${betterWords.reduce((acc, cur) => {
        if (cur == item) {
            return (acc + 1)
        } else {
            return acc
        }
    }, 0)}`)
    })
    //5*word[word.length-1] === '.' []??
let sentences = 0;
storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentences += 1;
    }
});
console.log('The sentence: count: ' + sentences)
    //7
console.log(betterWords.join(' '));
//8.1
storyWords = story.split(' ')
console.log(storyWords)

let removeOverused = (wordArray) => {
    overusedWords.forEach(word => {
        wordArray = wordArray.filter(oWord => !(word == oWord))
    })
    return wordArray
}
console.log(`#8.1 :${removeOverused(storyWords)}`)
    //8.2
console.log('#8.2 Most frequent word:')
let mostFrequent = (wordArray) => {
    // let tmpWordArray = wordArray;
    let topWord = {};
    wordArray.forEach(word => {
        if (topWord[word]) {
            topWord[word] = topWord[word] + 1
        } else {
            topWord[word] = 1
        }
    })

    let sortedWord = [];
    sortedWord = Object.entries(topWord).sort((a, b) => b[1] - a[1])
    return sortedWord[0]
}
console.log(mostFrequent(storyWords))
    //8.3
console.log('#8.3 Replacing overused words with "___"')
let replaceOveruse = (originalArray) => {
    overusedWords.forEach(overusedWord => {
        originalArray = originalArray.map(word => {
            if (word == overusedWord) {
                return '___'
            } else {
                return word
            }
        })
    })
    return originalArray;
}
console.log(replaceOveruse(storyWords))