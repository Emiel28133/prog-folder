let a = 0;
let b = 1;
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function run(){
    while (a <= 10000000) {
        console.log(a);
        await sleep(100);
        let temp = a + b;
        a = b;
        b = temp;
      }
}

run();