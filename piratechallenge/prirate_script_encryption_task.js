var in_string;
// 
function piratize(sentence) {
    var new_rstring=[];
    new_st=sentence.split(" ");
    num_words=new_st.length; 
    for (j=0; j<num_words; j++){
        one_word = new_st[j];
        new_word = "";
        i = one_word.length;
        if (one_word==='pounds'){
            new_word='doubloons';
        }else if (isNaN(one_word)===true) {
            new_word = one_word.substr(1,i-1);
            new_word = new_word+one_word[0];
            new_word = new_word + 'arr';
        } 
        else  {
            new_word=one_word;
        }
        new_rstring.push(new_word);  
    }
    return new_rstring.join(' ');
}

console.log( piratize( "hello" ) ); // returns "elloharr"

console.log( piratize( "hello world") ); // returns "elloharr orldwarr"

console.log( piratize( "pizza costs 20 pounds" ) ); // returns "izzaparr ostscarr 20 doubloons"