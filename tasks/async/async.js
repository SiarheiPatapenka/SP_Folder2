const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function getData(er, data){
console.log(data);  
    }
  callbackFunction(getData);
}

/**
 * console.log data got from promiseFunction
 */
// myFirstPromise.then((successMessage) => {
 //     console.log("Yay! " + successMessage); 
function printDataPromise() {
    promiseFunction().then(data =>{console.log(data)
    });
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let data =  await promiseFunction();
    console.log(data)
 //   return data;
}
 
/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function getError(er) {
        throw er
    }
      callbackFunctionError( getError);
 
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(er =>{console.log(er)})
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    let data =  await promiseFunctionError();
    console.log(data)
    //
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
