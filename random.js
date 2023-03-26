function story(){
	// Initial declarations
	var num1 = Math.ceil(Math.random()*20);
	var num2 = Math.ceil(Math.random()*20);
	var num3 = Math.ceil(Math.random()*20);
	var letters=" abcdefghijklmnopqrstuvwxyz";

	// Initial outputs
	document.getElementById("num1").innerHTML = num1;
	document.getElementById("num2").innerHTML = num2;
	document.getElementById("num3").innerHTML = num3;

	// Requirement 1 - largest number/s
	if(Math.max(num1,num2,num3)==num1&&num1!=num2&&num1!=num3){
        document.getElementById("big").innerHTML="number of players which was "+num1+"";
	}
	else if(Math.max(num1,num2,num3)==num2&&num2!=num1&&num2!=num3){
		document.getElementById("big").innerHTML="number of quests which was "+num2+"";
	}
	else if(Math.max(num1,num2,num3)==num3&&num3!=num1&&num3!=num2){
		document.getElementById("big").innerHTML="numbers of bosses which was "+num3+"";
	}
	else{
		if(num1==num2&&num1>num3){
			document.getElementById("big").innerHTML="number of players, and quests which were "+num1+"";
		}
		else if(num1==num3&&num1>num2){
			document.getElementById("big").innerHTML="number of players, and bosses which were "+num1+"";
		}
		else if(num2==num3&&num2>num1){
			document.getElementById("big").innerHTML="number of quests, and bosses which were "+num2+"";
		}
		else if(num1==num2==num3){
			document.getElementById("big").innerHTML="number of players, quests, and bosses which were "+num1+"";
		}
	}
		
	// Requirement 2 - num1th letter
	if (num1!=0){
		var letter = letters[num1];
		document.getElementById("email").innerHTML = "gamer"+letter+letter;
	}

	// Requirement 3 - num2*num3 time
	var minutes = num2*num3;
	var hours = parseInt((num2*num3)/60);
	var remMinutes = (num2*num3)%60;
	document.getElementById("time").innerHTML=hours+"hr "+remMinutes+"min ("+minutes+"min)";

    if (num1 == 1) {
        document.getElementById("surprise").innerHTML="Only 1 player? That's so lonely.";
    } else if (num1 == 0) {
        document.getElementById("surprise").innerHTML="How did zero players play for "+minutes+"mins?";
    }
}