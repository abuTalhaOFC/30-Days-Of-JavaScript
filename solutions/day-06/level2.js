<<<<<<< HEAD
//01.Develop a small script which generate any number of characters random id:
let idAsset = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","c","d","e","f"]
let randomId = ''
for (let i = 0; i < Math.floor(Math.random() * 100)+2; i++){
    randomId += idAsset[Math.floor(Math.random() * 18)]
}
console.log(`Rebdom Id genarator = ${randomId}`)

//02.Write a script which generates a random hexadecimal number.
let hexAsset = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","c","d","e","f"]
let randomHex = '#'
for (let j = 0; j < 6; j++){
    randomHex += hexAsset[Math.floor(Math.random() * 18)]
}
console.log(`Rebdom hex genarator = ${randomHex}`)
//03.Write a script which generates a random rgb color number.
function random(number){
    return Math.floor(Math.random()*number);;
}
function randomColor(){
 return 'rgb('+random(255)+','+random(255)+','+random(255)+')';    
}
console.log(randomColor())
//04.Using the above countries array, create the following new array.
const countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
  let upperCaseCountries = []
for(let i = 0; i < countries.length; i++){
    upperCaseCountries.push(countries[i].toLocaleUpperCase())
}  
console.log(upperCaseCountries)
//05.Using the above countries array, create an array for countries length'.[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = []
for(let l = 0; l < countries.length; l++){
    countriesLength.push(countries[l].length)
}
console.log(countriesLength)
//06.Use the countries array to create the following array of arrays:[['Albania', 'ALB', 7]..],
let countriesNstArr = []
for(let h = 0; h < countries.length; h++){
    let arr = []
    arr.push(`${countries[h]}, ${countries[h].slice(0,3).toLocaleUpperCase()}, ${countries[h].length}`)
    countriesNstArr.push(arr)

}
console.log(countriesNstArr)
//07.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.['Finland','Ireland', 'Iceland']

let landArr = []
for(let k = 0; k < countries.length; k++){
    if(countries[k].toLocaleLowerCase().search("land")> -1){
        landArr.push(countries[k])
    }
}
console.log(landArr)
//08.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesWithAi =[]
for(let p = 0; p < countries.length; p++){
    
    if(countries[p].toLocaleLowerCase().slice(countries[p].length - 2) == "ia"){
        countriesWithAi.push(countries[p])
    }
    
}
console.log(countriesWithAi)
//09.Using the above countries array, find the country containing the biggest number of characters.
let countriesHasMostCharacters = ''
let nn = 0
for(let u = 0; u < countries.length; u++){
        if(countries[u].length > nn){
            nn = countries[u].length
            countriesHasMostCharacters = countries[u]
        }
}
console.log(countriesHasMostCharacters)

//10.Using the above countries array, find the country containing only 5 characters.
let countriesWith5 = []
for (let m = 0; m < countries.length; m++){
    if(countries[m].length == 5){
        countriesWith5.push(countries[m])
    }
}
console.log(countriesWith5)
//11.Find the longest word in the webTechs array//!! same as 9
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let longestWordInWebTec ;
  let nn2 = 0;
for (let g = 0; g < webTechs.length; g++){
    if(webTechs[g].length > nn2){
        nn2 = webTechs[g].length
        longestWordInWebTec = webTechs[g]
    }
}
console.log(longestWordInWebTec)

//12.Use the webTechs array to create the following array of arrays: [["HTML", 4],..]
let newTechs = []
for(let r = 0; r < webTechs.length; r++){
let arr = []
arr.push(`${webTechs[r].toLocaleUpperCase()}`, webTechs[r].length)
newTechs.push(arr)
}
console.log(newTechs)

//13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern)
//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let mernPlusArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const value of mernPlusArr){
    console.log(value)
}

//15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ['banana', 'orange', 'mango', 'lemon']
let revFruit = []


for( let k = fruit.length-1; k >= 0; k--){
    revFruit.push(fruit[k])
}
console.log(revFruit)

//16.Print all the elements of array as shown below.
for (let tech of webTechs) {
    console.log(tech.toLocaleUpperCase());
}
=======
//01.Develop a small script which generate any number of characters random id:
let idAsset = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","c","d","e","f"]
let randomId = ''
for (let i = 0; i < Math.floor(Math.random() * 100)+2; i++){
    randomId += idAsset[Math.floor(Math.random() * 18)]
}
console.log(`Rebdom Id genarator = ${randomId}`)

//02.Write a script which generates a random hexadecimal number.
let hexAsset = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","c","d","e","f"]
let randomHex = '#'
for (let j = 0; j < 6; j++){
    randomHex += hexAsset[Math.floor(Math.random() * 18)]
}
console.log(`Rebdom hex genarator = ${randomHex}`)
//03.Write a script which generates a random rgb color number.
function random(number){
    return Math.floor(Math.random()*number);;
}
function randomColor(){
 return 'rgb('+random(255)+','+random(255)+','+random(255)+')';    
}
console.log(randomColor())
//04.Using the above countries array, create the following new array.
const countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
  let upperCaseCountries = []
for(let i = 0; i < countries.length; i++){
    upperCaseCountries.push(countries[i].toLocaleUpperCase())
}  
console.log(upperCaseCountries)
//05.Using the above countries array, create an array for countries length'.[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = []
for(let l = 0; l < countries.length; l++){
    countriesLength.push(countries[l].length)
}
console.log(countriesLength)
//06.Use the countries array to create the following array of arrays:[['Albania', 'ALB', 7]..],
let countriesNstArr = []
for(let h = 0; h < countries.length; h++){
    let arr = []
    arr.push(`${countries[h]}, ${countries[h].slice(0,3).toLocaleUpperCase()}, ${countries[h].length}`)
    countriesNstArr.push(arr)

}
console.log(countriesNstArr)
//07.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.['Finland','Ireland', 'Iceland']

let landArr = []
for(let k = 0; k < countries.length; k++){
    if(countries[k].toLocaleLowerCase().search("land")> -1){
        landArr.push(countries[k])
    }
}
console.log(landArr)
//08.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesWithAi =[]
for(let p = 0; p < countries.length; p++){
    
    if(countries[p].toLocaleLowerCase().slice(countries[p].length - 2) == "ia"){
        countriesWithAi.push(countries[p])
    }
    
}
console.log(countriesWithAi)
//09.Using the above countries array, find the country containing the biggest number of characters.
let countriesHasMostCharacters = ''
let nn = 0
for(let u = 0; u < countries.length; u++){
        if(countries[u].length > nn){
            nn = countries[u].length
            countriesHasMostCharacters = countries[u]
        }
}
console.log(countriesHasMostCharacters)

//10.Using the above countries array, find the country containing only 5 characters.
let countriesWith5 = []
for (let m = 0; m < countries.length; m++){
    if(countries[m].length == 5){
        countriesWith5.push(countries[m])
    }
}
console.log(countriesWith5)
//11.Find the longest word in the webTechs array//!! same as 9
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let longestWordInWebTec ;
  let nn2 = 0;
for (let g = 0; g < webTechs.length; g++){
    if(webTechs[g].length > nn2){
        nn2 = webTechs[g].length
        longestWordInWebTec = webTechs[g]
    }
}
console.log(longestWordInWebTec)

//12.Use the webTechs array to create the following array of arrays: [["HTML", 4],..]
let newTechs = []
for(let r = 0; r < webTechs.length; r++){
let arr = []
arr.push(`${webTechs[r].toLocaleUpperCase()}`, webTechs[r].length)
newTechs.push(arr)
}
console.log(newTechs)

//13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern)
//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let mernPlusArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const value of mernPlusArr){
    console.log(value)
}

//15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ['banana', 'orange', 'mango', 'lemon']
let revFruit = []


for( let k = fruit.length-1; k >= 0; k--){
    revFruit.push(fruit[k])
}
console.log(revFruit)

//16.Print all the elements of array as shown below.
for (let tech of webTechs) {
    console.log(tech.toLocaleUpperCase());
}
>>>>>>> 1941e809e1df536436e20ddc2ced25ab3f3e69d6
