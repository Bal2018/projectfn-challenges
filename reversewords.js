var in_string;

function reverse_word(in_string){       //fn to reverse the words
    var new_rstring=[];
    new_st=in_string.split(" ");        //initiailise new str to original str, each index holding words seperated by spaces
    num_words=new_st.length; 

    for (j=0; j<num_words; j++){        //start at the beginning of the new string,loop for each word entered
        one_word = new_st[j];
        new_word = "";
        i = one_word.length; 

        for (i>=0; i--;) {
            new_word = new_word+one_word[i];
        } 
        new_rstring.push(new_word);  //append the reverse word back onto the string
    }
    return new_rstring.join(' ');
}

in_string = String(prompt('Enter the string to reverse'));
console.log(in_string);
console.log(reverse_word(in_string));