for (let fizz = 1; fizz <=20 ; fizz++) {
    if (fizz % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(fizz);
    }
}

console.log("———————————————————————————————————");

const tracks = ["track1", "track2", "track3", "track4", "track5", "track6", "track7"];
for (let index = 0; index < tracks.length; index++) {
    console.log(`${index + 1}. ${tracks[index]}`);
}

console.log("———————————————————————————————————");

let cardSaad = {
    name: "Saad",
    age: 27,
    occupation: "Software Engineer",
    country: "Egypt",
    hobby: "Coding",
    marriage: "Married",
}

for (const key in cardSaad) {
	console.log(`${key}: ${cardSaad[key]}`);
}

console.log("———————————————————————————————————");

let countDown = 100;
while (countDown <= 100 && countDown >= 1) {
    console.log(countDown);
    countDown /= 2;
}

console.log("———————————————————————————————————");

let attempts = 0;
do {
	attempts++;
	console.log(attempts);
} while (attempts > 3);

console.log("———————————————————————————————————");

let myScores = [20, 40, 60, 80];
for (const score of myScores) {
	if (score < 50) {
		continue;
	}
	console.log(score);
}

console.log("———————————————————————————————————");

let iyScores = [20, 40, 60, 80, 96];
for (const score of iyScores) {
	if (score >= 95) {
		console.log(score);
        break;
	}
}

console.log("———————————————————————————————————");

let array = [21, 25, 74, 33, 45, 12, 36, 98, 100];

for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
};
