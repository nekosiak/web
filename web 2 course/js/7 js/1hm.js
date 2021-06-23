let arr=(['hello', 'world', 23, '23', true])
let i=0;
let list = arr.map(function(num) {
    i++;
  return document.write(i+') '+num+'\t');
});

