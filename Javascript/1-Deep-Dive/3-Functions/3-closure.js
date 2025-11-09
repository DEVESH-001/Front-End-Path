// Closure: closure allows a function to access variables from an outer function's scope even after the outer function has finished executing.

// function handleLikePost() {
//   let likeCount = 0;
//   return function addLike() {
//     likeCount += 1;
//     console.log(`Post has ${likeCount} likes`);
//     return likeCount;
//   };
// }
// const like = handleLikePost();
// console.log(like());
// console.log(like());

function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;    
    return likeCount;
  }
//   addLike();
  console.log('like count:', likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined