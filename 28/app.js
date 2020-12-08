var emitter = require("./emitter");

var emitter = new emitter();

emitter.on("bad", () => {
  console.log("mot mon nao do bi diem kiem");
})

emitter.on("bad", () => {
  console.log("da co diem kem, can phat thong bao toi phu huynh");
})

//bang diem
var scores = [10, 4];

for (var s of scores) {
  if (s < 5) {
    console.log("diem thap qua");
    emitter.emit("bad");
  }
}