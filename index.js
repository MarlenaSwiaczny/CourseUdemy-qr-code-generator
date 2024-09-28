/* 
npm init
w package.json - wpisujemy "type": "module",
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

var myInquirer = inquirer;
var myQR = qr;

console.log("GENERATOR KODÓW QR")

myInquirer
  .prompt([
    {"message": "Podaj adres: ",
    "name": "url",
    }
  ])
  .then((answers) => {
    console.log("dzięki, twoja odpowiedź to: ", answers.url);
    var url = answers.url;
    var img = myQR.image(url)
    img.pipe(fs.createWriteStream(`my_qr_code.png`));

    fs.writeFile("my_address.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      //"Prompt couldn't be rendered in the current environment"
    } else {
      //"Something else went wrong"
    }
  });


  
