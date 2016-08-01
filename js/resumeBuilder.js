 //console.log(awesomeThoughts);
 
 /*
  * Biography.
  */
 var bio = {
	"name" : "John Napoletano",
	"role" : "web Developer",
	"contacts" : {
		"mobile" : "650-555-5555",
		"email" : "john@example.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "Tampa"
	},
	"welcomeMessage" : "This is a welcome message etc etc etc.",
	"skills" : ["HTML", "Javascript", "PHP", "Linux", "MySQL"],
	"pic" : "images/john-napoletano.jpg"
};

// Header.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Contacts.
var formattedMobile   = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail    = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub   = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

// Pic.
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedBioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

// Skills.
$("#header").append(HTMLskillsStart);
var formattedSkill = '';
for (i = 0; i < bio.skills.length; i++) {
	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}

/*
 * Work Experience.
 var work = {
	"employer" 	  : "Website Developing Company",
	"title"    	  : "Web Developer",
	"dates"    	  : "1/2003 to present",
	"location" 	  : "Washington, DC",
	"description" : "I pretend that I work for some website developing company."
};

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["title"]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work["dates"]);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["location"]);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work["description"]);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);

// Projects.


// Education.
var school = {};
school.name = "Expensive School";
school.degree = "Master's";
school.dates = "1990 to 1996";
school.location = "Washington, DC";
school.major = "Computer Science";

var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);

// Education 2.
var education = {
  "schools": [
  {
	"name": "Eckerd College",
	"location": "Saint Petersburg, FL, US",
	"degree": "BA",
	"majors": ["CompSci", "French"],
	"dates": 2014,
	"url": "http://example.com"
  },
  {
	"name": "Nova Southeastern University",
	"location": "Fort Lauderdale, FL, US",
	"degree": "Masters",
	"majors": ["CompSci"],
	"dates": 2015,
	"url": "http://example.com"
  }
  ],
  "onlineCourses": [
  {
	"title": "JavaScript Syntax",
	"school": "Udacity",
	"dates": 2016,
	"url": "http://example.com"	  
  }
  ]
}

// Where I've lived and worked.
