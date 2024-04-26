				JSON FORMAT
JSON FORMAT
const resume={"Name":"Arulmozhidevi",
"Education":"B.E Computer Science",
"Area of Interest":"Development",
"Course completed":"FullStackDevelopment",
"language known":"Tamil,English,Hindi",
"Hobbies":"Badminton,drawing,listening music",
"Father's Name":"Tamilmani",
"Mother's Name":"Poongodi",
"Husband's Name":"Muthukumaran"}
console.log(resume)

FOR LOOP
const resume={"Name":"Arulmozhidevi",
"Education":"B.E Computer Science",
"Area of Interest":"Development",
"Course completed":"FullStackDevelopment",
"language known":"Tamil,English,Hindi",
"Hobbies":"Badminton,drawing,listening music",
"Father's Name":"Tamilmani",
"Mother's Name":"Poongodi",
"Husband's Name":"Muthukumaran"}
var data=Object.values(resume)
for(var i=0;i<data.length;i++)
{
    console.log(data[i])
}

FOR-IN LOOP
const resume={"Name":"Arulmozhidevi",
"Education":"B.E Computer Science",
"Area of Interest":"Development",
"Course completed":"FullStackDevelopment",
"language known":"Tamil,English,Hindi",
"Hobbies":"Badminton,drawing,listening music",
"Father's Name":"Tamilmani",
"Mother's Name":"Poongodi",
"Husband's Name":"Muthukumaran"}
for(var data in resume)
{
    console.log(resume[data])
}

FOR-OF LOOP
const resume={"Name":"Arulmozhidevi",
"Education":"B.E Computer Science",
"Area of Interest":"Development",
"Course completed":"FullStackDevelopment",
"language known":"Tamil,English,Hindi",
"Hobbies":"Badminton,drawing,listening music",
"Father's Name":"Tamilmani",
"Mother's Name":"Poongodi",
"Husband's Name":"Muthukumaran"}
var data=Object.values(resume)
for(var i of data)
{
    console.log(i)
}

FOR-EACH LOOP
const resume={"Name":"Arulmozhidevi",
"Education":"B.E Computer Science",
"Area of Interest":"Development",
"Course completed":"FullStackDevelopment",
"language known":"Tamil,English,Hindi",
"Hobbies":"Badminton,drawing,listening music",
"Father's Name":"Tamilmani",
"Mother's Name":"Poongodi",
"Husband's Name":"Muthukumaran"}
var data=Object.values(resume)
data.forEach((ele)=>console.log(ele));