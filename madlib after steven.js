function generateMadLib() {
    var christmasChecked = document.getElementById('christmas-tree').checked;
    var shoppingChecked = document.getElementById('shopping').checked;
    var brainstormChecked = document.getElementById('brainstorm').checked;

    var christmasStory = "Every Christmas we verb to a adjective tree farm far away. This is not just any adjective tree farm. My dad and I verb onto the noun to verb for the perfect noun. Some people like them adjective, but I prefer them adjective. After searching for hours I usually adverb exclaim \"Dad! The perfect tree is over there!\" Off we verb to get the tree. The problem is we always forget the noun and the noun. But at the end of the day we adverb get the tree and head home adverb. \"I wish it was Christmas all year round\"  I adverb think to myself.";
    var shoppingStory = "Today I went shopping. When I arrived at the store I saw a adjective noun, who upon noticing me adverb said \"I need to verb\". \"Well, that was adjective\" I thought to myself and walked in the store. The store had rearranged it's inventory, so I felt adverb lost. I walked up to the store clerk and said adverb \"I am looking for a adjective noun that doesn’t verb as often as the last one I had.\" The store clerk looked at me with a adjective look in his eye and said, \"What you are looking for can be found by the noun, if you see a noun that adverb can verb, then you've gone too far.\" As I tried to understand his directions, I thought to myself, \"I should have just ordered it on Amazon, their products seem to verb the perfect amount.\""
    var brainstormStory = "Many say that brainstorming is adjective and does not verb. However, with the combination of the right computer and noun anyone can lead a good verb. When you have adverb pulled together a adjective group of noun in a big room with lots of TV's then magical things will happen. In the past we have adverb suggested participants work together to find the most adjective solution. The most difficult part is many adjective noun like to verb. This has proved to be adverb problematic. But in the end the most important noun usually is brought to light. Typically we try to encourage ideas to verb, and never shut ideas down. This concludes our instructions. Thanks for adverb listening!"

    var nounAutoArray = ["UNICORN", "GOBLIN", "ROCKET LAUNCHER", "SUPER MODEL", "DEATH CAKE", "SQUIRREL", "NAIL POLISH", "TOILET", "IPHONE", "AUTOPSY REPORT"];
    var verbAutoArray = ["SKIP", "BOOGIE", "CRAWL", "SULK", "PRANCE", "GALLOP", "SHIMMY", "SING", "WIGGLE", "TIP-TOE"];
    var adjectiveAutoArray = ["SLIMY", "FLIRTY", "FUZZY", "SQUISHY", "UNBEARABLE", "SPUNKY", "MOIST", "FOUL", "CRUNCHY", "SILKY"];
    var adverbAutoArray = ["QUIETLY", "OSTENTATIOUSLY", "POMPOUSLY", "SNEAKILY", "SEDUCTIVELY", "GRUDGINGLY", "STUPIDLY", "QUICKLY", "VALIANTLY", "LOUDLY"];

    function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
    }
    shuffle(nounAutoArray);
    shuffle(verbAutoArray);
    shuffle(adjectiveAutoArray);
    shuffle(adverbAutoArray);

    function userInputToComboArray (elementId, autoArray) {
        var inputArray = document.getElementById(elementId + '-input').value.toUpperCase().split(',');
        var comboArray = inputArray.concat(autoArray);
        if (comboArray.length>4){
            comboArray.splice(4,100);
        }
        return comboArray;
    }

    var nounComboArray = userInputToComboArray('noun', nounAutoArray);
    var verbComboArray = userInputToComboArray('verb', verbAutoArray);
    var adverbComboArray = userInputToComboArray('adverb', adverbAutoArray);
    var adjectiveComboArray = userInputToComboArray('adjective', adjectiveAutoArray);

    shuffle(nounComboArray);
    shuffle(verbComboArray);
    shuffle(adverbComboArray);
    shuffle(adjectiveComboArray);

    function replaceWordsInStory (story) {
        var storyWithReplacedWords = story;

        function loopThroughComboArrays (comboArray, wordType) {
            for (var i = 0; i < comboArray.length; i++) {
                storyWithReplacedWords = storyWithReplacedWords.replace(wordType, comboArray[i]);
            }
        }
        loopThroughComboArrays(nounComboArray, "noun");
        loopThroughComboArrays(adverbComboArray, "adverb");
        loopThroughComboArrays(verbComboArray, "verb");
        loopThroughComboArrays(adjectiveComboArray, "adjective");

        var display = document.getElementById('display-story');
        display.innerText = storyWithReplacedWords;
    }

    if (christmasChecked) {
        replaceWordsInStory(christmasStory);
    } else if (shoppingChecked) {
        replaceWordsInStory(shoppingStory);
    } else if (brainstormChecked){
        replaceWordsInStory(brainstormStory);
    }
}
