# 3.7.0 - Review Promises

---

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve');
        console.log('...in limbo...');
        reject('reject'); // nevver returned
        console.log('shuffling off...');
    });
}// when calling the promise, the compiler reads through everything it can before resolving/rejecting
```

---

Let's make it pause now...

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve');
        console.log('...in limbo...');
        reject('reject');
        console.log('shuffling off...');
    });
}
```

---

<img src='./assets/promise.png' style='width:100%;' />

---

[Next lecture: Async / Await](../lecture-1-async-await)