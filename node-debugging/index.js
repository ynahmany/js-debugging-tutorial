function test() {
  for(let i=0; i < 1000; i++) {
    if(i > 990) {
      debugger;
      console.log(i);
    }
  }
}
test();