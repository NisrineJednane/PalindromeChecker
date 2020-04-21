function palindromeChecker(str){
	//faster for longer input
	
	let x= 0;		        //start at front of string
	let y= str.length-1;    //start at end of string

		//start loop from front
		while(str[x].match(/[\W_]/)) {
			x++;
			continue;
	}
		//simultaneously start from back
		while(str[y].match(/[\W_]/)) {
			y--;
			continue;
	}
	
	//catch false case, both loops working simultaneously, save time
	if(str[x].toLowerCase()!==str[y].toLowerCase()) {
			return false;
			x++;
			y--;
	}
			return true;
}

