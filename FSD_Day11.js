class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
  //  let attempts = 0;
    while (true) {
       // attempts++;
        try {
           // console.log(`Attempt #${attempts}`);
            return primitiveMultiply(a, b);
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
                throw error;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64

//2nd
function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}

//verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
// verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
// verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
// verify(/\b\w+ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
// verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
// verify(/\b\w{7,}\b/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
 verify(/\b[^eE\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "bedrøvet abe", "BEET"]);

