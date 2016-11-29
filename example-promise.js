// http://api.openweathermap.org/data/2.5/weather?q=Winnipeg&appid=e595af6e352ac9f9ad212604d7d3a39b&units=metric
//
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found.');
// }
//
// getTempCallback('Philadelphia', function(error, temp) {
//   if (error) {
//     console.log('error', error);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// // Promise
// console.log('\nNow, the promise...\n');
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('There was an error');
//     }, 2000);
//   });
// }
//
// getTempPromise('Winnipeg').then(function(temp) {
//   // success
//   console.log('promise success', temp);
// }, function(error) {
//   // error
//   console.log('promise error', error);
// });

// Challenge area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("Those aren't both numbers.");
    }
  });
}

addPromise(49,1).then(function(answer) {
  console.log("The answer is " + answer);
}, function(err) {
  console.log("Error: " + err);
});

addPromise(51,-1).then(function(answer) {
  console.log("The answer is " + answer);
}, function(err) {
  console.log("Error: " + err);
});


addPromise('James', 49).then(function(answer) {
  console.log("The answer is " + answer);
}, function(err) {
  console.log("Error: " + err);
});
