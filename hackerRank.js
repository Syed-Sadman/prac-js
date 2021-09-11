/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const voww = s.filter(vow=>vow==[a,e,i,o,u])
    console.log(voww)
}


vowelsAndConsonants('javascript')


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}