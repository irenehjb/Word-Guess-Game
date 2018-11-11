<script>
    /* array of words */

    var words = [
        "breaking bad",
        "the sopranos",
        "narcos",
        "black mirror",
        "homeland",
        "sherlock",
        "rectify",
    ];

        /* random word picked */
    var word = words[Math.floor(Math.random() * words.length)];

    /* answer array */
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    var remainingWords = word.length;

    /* game loop */
    while (remainingWords > 0) {
        alert(answerArray.join(""));
        var guess = prompt("Guess a letter");
        if (guess === null) {
            break;
        }
        else if (guess.length !===1) {
            ("Please enter a letter");
        }
        else {
            for (var j = 0; j < word.length; j++) {
                if (word[j) === guess);
                    remainingWords--;
                }
            }
        }
    }

    // show answer

    alert(answerArray.join(""));
    alert("Contratulations! The answer is " + word);
</script>