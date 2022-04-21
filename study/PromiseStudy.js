/*
 * promise를 사용하면 콜백함수를 사용한 비동기 처리를 좀 더 깔끔하게 할 수 있다.
 *
 *
 * */

function double(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== 'number') {
        reject(new Error('Parameter is not a number'));
        return;
      }
      const result = number * 2;
      console.log(`${number} * 2 = ${result}`);
      resolve(result);
    }, 500);
  });
  return promise;
}

double(1).then(result => {
  console.log('resolved : ', result);
});
