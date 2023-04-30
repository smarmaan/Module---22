const lyrics =
  "Hai Tamanna Humeim Tumhein Dulhan Banaye";

const splitAlpha = lyrics.split("");

console.log(splitAlpha);
console.log(splitAlpha.length);

const splitSpace = lyrics.split(" ");
console.log(splitSpace);


const splitDot = lyrics.split(".");
console.log(splitDot);


console.log(lyrics.indexOf("Tumhein"));

const lyrics_slice= lyrics.slice(19,40)
console.log(lyrics_slice);

const lines = ["Hai Tamanna Humeim Tumhein Dulhan Banaye", "Tere Hathon Pe Mehndi Apne Naam Ki Sajayein","Tere Lele Balayein","Tere Sadke Utaarein","Hai Tamanna Humein Tumhein Apna Banaye"]


console.log(lines.join(". "));