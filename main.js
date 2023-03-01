let array1 = [1,2,4,5,7,9];
let array2 = [5,10,15,20,25];
let array = [];

for(i=0; i<array1.length; i++){
    array.push(array1[i]);
}
for(j=0; j<array2.length; j++){
      array.push(array2[j])
 }
 
for(k=0; k<array.length; k++){
     for(l=0; l<array.length; l++){
	      if(array[l] > array[k]){
		     temp = array[l];
			 array[l] = array[k];
			 array[k] = temp;
		 }
	 }
}
console.log(array);