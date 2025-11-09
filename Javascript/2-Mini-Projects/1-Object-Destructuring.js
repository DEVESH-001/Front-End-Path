// Object destructuring enables us to extract properties from objects and bind them to variables

const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
}; 

const { title, star, director } = favouriteFilm;

console.log(`My favourite film is ${title}, starring ${star} and directed by ${director}.`);

// -------- --------  -------- Challenge

const dreamHoliday = {
    destination: 'Himachal',
    activity: 'Trekking',
    accommodation: 'Camp',
    companion: 'Friends'
}

/* 
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add 
   extra properties or change the existing ones. 
2. Destructure the object and use the individual 
   variables to log out one or more sentences about 
   your dream holiday. 
   
E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/

const { destination, activity, accommodation, companion } = dreamHoliday;
console.log(`My dream holiday is to go to ${destination} for ${activity}. I would stay in a ${accommodation} and go with my ${companion}.`);