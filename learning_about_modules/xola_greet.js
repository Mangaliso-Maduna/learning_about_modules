import chalk from 'chalk'
import greet from './greet.js'
const figlet= require('figlet')


figlet('Hello world!!',(err,data)=>{
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
})

console.log(greet('Xola')+'\n')
const styledMsg = chalk.bgRed.yellow(greet('Xola'))
console.log(styledMsg)

