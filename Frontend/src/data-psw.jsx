/** 
Store temporary data of a person object
*/

class PersonalSupportWorker {
  constructor(firstName, lastName, age, location, gender, languages, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.languages = languages;
    this.email = email;
  }
};

var listOfPSWs = []; // Store initially

let p1 = new PersonalSupportWorker("John", "Smith", 28, "Etobicoke", "Male", ["English", "French", "Mandarin"], "js@gmail.com");
let p2 = new PersonalSupportWorker("Tom", "Hanks", 44, "Etobicoke", "Male", ["English", "Spanish", "Gaelic"], "th@gmail.com");
let p3 = new PersonalSupportWorker("Mary", "Smith", 32, "Vaughan", "Female", ["Italian"], "ms@gmail.com");
let p4 = new PersonalSupportWorker("Anita", "Patel", 55, "Etobicoke", "Female", ["Hindi", "Gujurati"], "ap@gmail.com");
let p5 = new PersonalSupportWorker("Thomas", "Brown", 36, "Richmond Hill", "Male", ["English", "Russian"], "tb@gmail.com");
let p6 = new PersonalSupportWorker("Katie", "Lee", 46, "Markham", "Female", ["English", "Cantonese"], "kl@gmail.com");
let p7 = new PersonalSupportWorker("John", "Wong", 28, "Scarborough", "Male", ["English", "Cantonese", "Mandarin"], "jw@gmail.com");
let p8 = new PersonalSupportWorker("Maddy", "Kim", 25, "North York", "Female", ["English", "Korean"], "mk@gmail.com");
let p9 = new PersonalSupportWorker("Sorin", "Dinca", 52, "Richmond Hill", "Male", ["English", "Romanian", "Russian"], "sd@gmail.com");
let p10 = new PersonalSupportWorker("Bella", "Macron", 28, "Toronto", "Female", ["English", "German", "Italian", "French"], "bm@gmail.com");
let p11 = new PersonalSupportWorker("John", "Wok", 68, "Mississauga", "Male", ["English", "Cantonese", "Mandarin"], "jwok@gmail.com");
let p12 = new PersonalSupportWorker("John", "Doe", 42, "Scarbrough", "Male", ["English", "Cantonese", "Mandarin"], "jdoe@gmail.com");
let p13 = new PersonalSupportWorker("Roberta", "Sharma", 32, "Brampton", "Female", ["English", "Punjabi", "Bengali"], "rs@gmail.com");
let p14 = new PersonalSupportWorker("Stella", "Ahmed", 37, "Oakville", "Female", ["English", "Arabic", "Portuguese"], "sa@gmail.com");
let p15 = new PersonalSupportWorker("Max", "Prime", 39, "Aurora", "Male", ["English", "Korean", "French"], "mp@gmail.com");
let p16 = new PersonalSupportWorker("Ken", "Sato", 39, "Toronto", "Male", ["English", "Japanese"], "ks@gmail.com");

var newListOfPSWs = listOfPSWs.concat([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16]);

export {newListOfPSWs};