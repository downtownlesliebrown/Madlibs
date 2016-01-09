function generateStory() {
    var storyOneChecked = document.getElementById('story-one').checked;
    var storyTwoChecked = document.getElementById('story-two').checked;
    var storyThreeChecked = document.getElementById('story-three').checked;
    var storyOne = "Every Christmas we  verb  to a   adjective   tree farm far away. This is not just any   adjective   tree farm. My dad and I    verb   onto the   noun   to    verb   for the perfect   noun  .  Some people like them   adjective  , but I prefer them   adjective  . After  searching for hours I usually   adverb   exclaim Dad! The perfect tree is over   there! Off we    verb   to get the tree. The problem is we always forget the  noun  and the  noun  . But at the end of the day we    adverb   get the tree and head home    adverb  . I wish it was Christmas all year round  I    adverb  think to myself.";
    var storyTwo = "Today I went shopping. When I arrived at the store I saw a   adjective     noun  , who upon noticing me    adverb   said I need to   verb  . Well,   that was   adjective  I thought to myself and walked in the store. The store had rearranged it\s inventory, so I felt    adverb   lost. I   walked up to store clerk and said    adverb   I am looking for a   adjective     noun   that doesn’t    verb   as often as the last one I had. The store clerk    looked at me with a   adjective   look in his eye and said, What you are looking for can be found by the   noun  , if you see a   noun   that    adverb   can    verb  , then you've gone too far. As I tried to understand his directions, I thought to myself, I should have just ordered it    on amazon.com, Their products seem to    verb   the perfect amount";
    var storyThree = "Many say that brainstorming is   adjective   and does not   verb  . However, with the combination of the right computer and   noun   anyone  can lead a good    verb  . When you have    adverb   pulled together a   adjective      group of   noun   in a big room with lots of TV\s then  magical things will happen. In the past we have    adverb   suggested  participants work together to find the most   adjective   solution. The   most difficult part is many   adjective     noun   like to   verb . This has proved to be    adverb   problematic.  But in the end the most important   noun   usually is brought to light.  Typically we try to encourage ideas to    verb  , and never shut ideas  down. This concludes our instructions. Thanks for    adverb   listening!";
    var adjectivesAutomatedArray = [
        'round',
        'flat',
        'edgy'];
    var nounsAutomatedArray = ['dog',
        'homework',
        'cookie'];
    var adverbsAutomatedArray = [
        'noisily',
        'irritably',
        'cheerfully'];
    var verbsAutomatedArray = ['run',
        'sit',
        'stand'];

    var adjectivesInputArray = document.getElementById('input-adjectives').value.split(',');
    var adjectivesComboArray = adjectivesInputArray.concat(adjectivesAutomatedArray);
        if (adjectivesComboArray.length>4) {
            adjectivesComboArray.splice(4,100);
        }
    var nounsInputArray = document.getElementById('input-nouns').value.split(',');
    var nounsComboArray = nounsInputArray.concat(nounsAutomatedArray);
        if (nounsComboArray.length>4) {
            nounsComboArray.splice(4,100);
        }
    var adverbsInputArray = document.getElementById('input-adverbs').value.split(',');
    var adverbsComboArray = adverbsInputArray.concat(adverbsAutomatedArray);
        if (adverbsComboArray.length>4) {
            adverbsComboArray.splice(4,100);
        }
    var verbsInputArray = document.getElementById('input-verbs').value.split(',');
    var verbsComboArray = verbsInputArray.concat(verbsAutomatedArray);
        if (verbsComboArray.length>4) {
            verbsComboArray.splice(4,100);
        }

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
    shuffle(adjectivesComboArray);
    shuffle(nounsComboArray);
    shuffle(adverbsComboArray);
    shuffle(verbsComboArray);

    if (storyOneChecked) {
        var storyOneReplaceWords = storyOne;
        for (var i = 0; i < adjectivesComboArray.length; i++) {
            storyOneReplaceWords = storyOneReplaceWords.replace("adjective", adjectivesComboArray[i]);
        }
        for (var i = 0; i < nounsComboArray.length; i++) {
            storyOneReplaceWords = storyOneReplaceWords.replace("noun", nounsComboArray[i]);
        }
        for (var i = 0; i < adverbsComboArray.length; i++) {
            storyOneReplaceWords = storyOneReplaceWords.replace("adverb", adverbsComboArray[i]);
        }
        for (var i = 0; i < verbsComboArray.length; i++) {
            storyOneReplaceWords = storyOneReplaceWords.replace("verb", verbsComboArray[i]);
        }
        var display = document.getElementById('full-paragraph');
        display.innerText = storyOneReplaceWords;
    }
    else if (storyTwoChecked) {
    // var storyTwoReplaceWords = storyTwo;
        for (var i = 0; i < adjectivesComboArray.length; i++) {
            storyTwoReplaceWords = storyTwo.replace("adjective", adjectivesComboArray[i]);
        }
        for (var i = 0; i < nounsComboArray.length; i++) {
            storyTwoReplaceWords = storyTwoReplaceWords.replace("noun", nounsComboArray[i]);
        }
        for (var i = 0; i < adverbsComboArray.length; i++) {
            storyTwoReplaceWords = storyTwoReplaceWords.replace("adverb", adverbsComboArray[i]);
        }
        for (var i = 0; i < verbsComboArray.length; i++) {
            storyTwoReplaceWords = storyTwoReplaceWords.replace("verb", verbsComboArray[i]);
        }
        var display = document.getElementById('full-paragraph');
        display.innerText = storyTwoReplaceWords;
    }
    else {
        var storyThreeReplaceWords = storyThree;
        for (var i = 0; i < adjectivesComboArray.length; i++) {
            storyThreeReplaceWords = storyThreeReplaceWords.replace("adjective", adjectivesComboArray[i]);
        }
        for (var i = 0; i < nounsComboArray.length; i++) {
            storyThreeReplaceWords = storyThreeReplaceWords.replace("noun", nounsComboArray[i]);
        }
        for (var i = 0; i < adverbsComboArray.length; i++) {
            storyThreeReplaceWords = storyThreeReplaceWords.replace("adverb", adverbsComboArray[i]);
        }
        for (var i = 0; i < verbsComboArray.length; i++) {
            storyThreeReplaceWords = storyThreeReplaceWords.replace("verb", verbsComboArray[i]);
        }
        var display = document.getElementById('full-paragraph');
        display.innerText = storyThreeReplaceWords;
    }
}
