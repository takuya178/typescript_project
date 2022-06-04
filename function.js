"use strict";
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    const result = data;
    cb(result);
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
