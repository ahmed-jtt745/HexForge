let value = "1111111111111111";

function binToDec(value){
    let answer = 0;
    let j = 0;
    for(let i = value.length - 1; i >= 0; i--){
        if(value[i] == "1")
            answer += ((2**j) * 1);
        j++;
    }

    console.log("Answer = ", answer);
}

binToDec(value);