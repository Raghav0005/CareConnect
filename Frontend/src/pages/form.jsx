import React, { useState } from "react";
import "./form.css";
import { newListOfPSWs } from "./../data-psw.jsx";
export const ConsumerForm = () => {

  function HandleSubmit(e) {
    console.log("Submitting Form");
    e.preventDefault();
    /*
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(location);
    console.log(gender);
    console.log(language);
    console.log(email);
    */
    let matchedPSW = match();
  }

  let psw = newListOfPSWs[0];

  function match() {
    const len = newListOfPSWs.length;
    console.log(len)
    let arr = [];
    let maxScore = 0;
    let curScore;
    for (let i = 0; i < len; i++) {
      curScore = 0;
      if (location == newListOfPSWs[i].location) {
        curScore++; // location increases score by one
      }
      if (gender == newListOfPSWs[i].gender) {
        curScore += 2; // gender increases score by two
      }
      if (language == newListOfPSWs[i].language) {
        curScore += 2; // language increases score by two
      }
      if (curScore > maxScore) {
        maxScore = curScore;
        psw = newListOfPSWs[i];
      }
    }
    
    console.log("The Matched PSW is: ", psw);
    return psw;
  }

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [gender, setGender] = React.useState("Male");
  const [language, setLanguage] = React.useState("English");
  const [email, setEmail] = React.useState("");


  //console.log(firstName);

  return (

    <div className="consumerForm">
      <h1 className="Title">Please Enter the Following Details!</h1>
      <p className="Title">This information will be used to match you (or the patient) with a personal support worker in your area.</p>

      <form onSubmit={HandleSubmit}>
        <label htmlFor="fname" className="Space">First Name</label><br />
        <input type="text" className="fname textbox" name="fname" onChange={e => setFirstName(e.target.value)}></input><br />

        <label htmlFor="lname" className="Space">Last Name</label><br />
        <input type="text" className="lname textbox" name="lname" onChange={e => setLastName(e.target.value)}></input><br />

        <label htmlFor="age" className="Space">Age</label><br />
        <input type="number" className="age textbox" name="age" onChange={e => setAge(e.target.value)}></input><br />

        <label htmlFor="location" className="Space">City</label><br />
        <input type="text" className="location textbox" name="location" onChange={e => setLocation(e.target.value)}></input><br />

        <label htmlFor="Gender" className="Space">Gender</label><br />
        <select className="Gender" name="Gender" onChange={e => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br />

        <label htmlFor="language" className="Space">Languages</label><br />
        <select className="language" name="language" onChange={e => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Italian">Italian</option>
          <option value="German">German</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Arabic">Arabic</option>
          <option value="Bengali">Bengali</option>
          <option value="Hindi">Hindi</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Cantonese">Cantonese</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Russian">Russian</option>
        </select><br />

        <label htmlFor="email" className="Space">Email</label><br />
        <input type="email" className="email textbox" name="email" onChange={e => setEmail(e.target.value)}></input><br />

        <input className="Space" type="submit" value="Submit" />
      </form>
    </div>

  );
}

