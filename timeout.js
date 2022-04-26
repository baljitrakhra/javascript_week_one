const printHello = () => {
  console.log('Welcome to Jacascript')
}

setTimeout(() => {
  console.log("Welcome to Javascript")
}, 3000);
setTimeout(printHello,3000);

const executeAfterDelay = (time,func) => {
  time = time * 1000;
  setTimeout(func,time);
} 