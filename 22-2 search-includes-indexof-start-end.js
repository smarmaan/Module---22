const lyrics =
  "Hai Tamanna Humeim Tumhein Dulhan Banaye Tere Hathon Pe Mehndi Apne Naam Ki Sajayein Tere Lele Balayein Tere Sadke Utaarein Hai Tamanna Humein Tumhein Apna Banaye Nahi Mushkil Wafa Zara Dekho YahanTere Aankhon Mein Basta Hai Mera Jahan Kabhi Sun Toh Zara Jo Main Keh Na Saka Meri Duniya Tum Hi Ho Tum Hi Aasara";

const Lyrics_low = lyrics.toLowerCase();
const search_string = "Tere Hathon Pe Mehndi";
const search_string_low = search_string.toLowerCase();

const doesExist = Lyrics_low.includes(search_string_low);
// console.log(doesExist);

const OneLineExist = lyrics.toLowerCase().includes(search_string.toLowerCase());
console.log(OneLineExist);
console.log(lyrics.indexOf("Tere"));
console.log(lyrics[41]);
console.log(lyrics[42]);
console.log(lyrics[43]);
console.log(lyrics[44]);

console.log(lyrics.startsWith("Hai Tamanna"));
console.log(lyrics.endsWith("Aasara"));
