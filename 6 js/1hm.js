function filterBy(arr,str) {
   let a="empty";
    switch(str){
    case '1':
    a= arr[2]+' '+arr[4]; break;
    case '2':
    a=arr[0]+' '+arr[1]+' '+arr[3]+' '+arr[4];break;
    case '3':
    a=arr[0]+' '+arr[1]+' '+arr[2]+' '+arr[3];break;
    }  
    alert(a);
}
let arr=['hello', 'world', 23, '23', true];
let str = prompt('put type (1-string/2-number/3-bool)');
filterBy(arr,str);
