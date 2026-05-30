// 1. Define the main function using Arrow Function syntax
const callbackExec = (callback) => {
  // Check if the argument passed is actually a function
  if (typeof callback === "function") {
    // Execute the callback function after a delay of 2000 milliseconds (2 seconds)
    setTimeout(callback, 2000);
  }
};

// 2. Execute the function by passing an anonymous Arrow Function as an argument
callbackExec(() => {
  console.log("Hello, World!");
  console.log("This callback function executed successfully after 2 seconds!");
});
