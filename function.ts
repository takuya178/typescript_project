function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})

function sendRequest(data: string, cb: (response: any) => void) {
  const result = data;
  cb(result);
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
})