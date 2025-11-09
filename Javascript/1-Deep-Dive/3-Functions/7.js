// function handleLikePost(step) {
//   let likeCount = 0;
//   return function addLike() {
//     likeCount += step;
//     return likeCount;
//   };
// }

// const doubleLike = handleLikePost(2);
// console.log(doubleLike());
// console.log(doubleLike());
// console.log(doubleLike());

function getData(baseUrl) {
  // partial application (a partially applied function reduces the total number of arguments for a function.)
  return function (route) {
    fetch(`${baseUrl}${route}`)
      .then((res) => res.json())
      .then((data) => console.log(dta));
  };
}
const getSocialMediaData = getData("https://jsonplaceholder.typicode.com");
getSocialMediaData("/comments");

// So now we have basically two separate functions, each with their own argument while giving us a pattern for the functions to remember data that's passed to it
