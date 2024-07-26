function vowel(str){
    let remove = "";
    for(let i=0; i<str.length; i++){
        if(!'AEIOUaeiou'.includes(str[i])){
            remove = remove+str[i];
        }
    }
    console.log(`string after removal of vowel is ${remove}`);
}

vowel("ahmad");
vowel("aeioucd")

