/**
  * Biography.
  *
  * First of four javaScript objects representing a different resume section.
  * The biography object contains my name, desired role, welcome message, and
  * biopic strings. Contacts is an object, while skills is an array of strings.
  *
  * Call the display function within this object to show it's content.
  */

var bio = {
  "name": "John Napoletano",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "jnapoletano@gmail.com",
    "github": "johnnapoletano",
    "twitter": "johnnapoletano",
    "location": "Hartford, CT"
  },
  "welcomeMessage": "Over twelve years of experience building, hosting, and " +
    "marketing websites. Seeking a Front-End, Back-End, or Full-Stack Web " +
    "Developer position at a retail, financial services, real-estate, travel, web " +
    "design, or hosting company. Prior work experience in Accounting, " +
    "Budgeting, and Financial Analysis shows that I can cooperate and collaborate " +
    "easily with all staff levels. I pay close attention to details, " +
    "yet never lose site of the big picture. I am willing to relocate within the " +
    "United States.",
  "skills": ["Linux", "MySQL", "PHP", "HTML", "CSS", "JavaScript", "AJAX", "jQuery",
    "Bootstrap", "Photoshop", "CPanel/WHM", "Accounting", "Budgeting", "Financial Analysis"],
  "biopic": "images/john-napoletano.jpg",
  display: function() {

    // Javascript strict mode.
    "use strict";

    // Header - format data.
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    // Header - DOM changes and print data.
    $("#header").prepend(formattedRole);
    $("#header hr").remove();
    $("#header").addClass("masthead");
    $("#header span:first").addClass("job-title");
    $("#header").prepend(formattedName);
    $("#name").after('<br>');
    $("#name").addClass("my-name");

    // BioPic - format data, print data, DOM changes.
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").after(formattedBioPic);
    $(".biopic").attr("alt", bio.name + " - " + bio.role);

    // Summary (Welcome Message) - format data, DOM changes, print data.
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $(".biopic").after(formattedWelcomeMessage);
    $(".welcome-message").wrap('<div class="welcome-container gray row"></div>');
    $(".welcome-message").before('<h2>Summary</h2>');

    // Contacts - format data.
    var formattedMobile   = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail    = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub   = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    // Contacts - header DOM changes, print data.
    $("#topContacts").remove();
    $(".biopic").after('<div class="contacts-container"><ul id="topContacts" class="flex-box top-contacts"></ul></div>');
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter); // optional
    $("#topContacts").append(formattedLocation);
    $("#topContacts .orange-text").addClass("contact-type");
    $("#topContacts .orange-text").removeClass("orange-text");
    $("#topContacts .white-text").addClass("contact-value");
    $("#topContacts .white-text").removeClass("white-text");

    // Contacts - footer DOM changes, print data.
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter); // optional
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").addClass("footer-contacts");
    $("#footerContacts .orange-text").addClass("contact-type");
    $("#footerContacts .orange-text").removeClass("orange-text");
    $("#footerContacts .white-text").addClass("contact-value");
    $("#footerContacts .white-text").removeClass("white-text");
    $("#footerContacts").after("<br>");
    $("#lets-connect .orange").addClass("dark-gray");
    $("#lets-connect .orange").removeClass("orange");
    $("#lets-connect").addClass("gray");
    $("#lets-connect").removeClass("dark-gray");
    $("#lets-connect").addClass("lets-connect-container");
    $("#lets-connect h2").addClass("lets-connect-heading");

    // Contacts - url wrap of multiple elements.
    var linkedEmail = "mailto:" + bio.contacts.email + "?Subject=Nice%20Resume";
    var linkedGitHub = "https://github.com/" + bio.contacts.github;
    var linkedTwitter = 'https://twitter.com/' + bio.contacts.twitter;
    $("li span.contact-type:contains('email')").siblings().wrap('<a class="contact-link" href="' + linkedEmail + '"></a>');
    $("li span.contact-type:contains('github')").siblings().wrap('<a class="contact-link" href="' + linkedGitHub + '"></a>');
    $("li span.contact-type:contains('twitter')").siblings().wrap('<a class="contact-link" href="' + linkedTwitter + '"></a>');

    // Skills - loop if exist.
    if (bio.skills.length > 0) {

      // No formatting on skills heading.
      $(".welcome-container").after(HTMLskillsStart);

      // Add row class to DOM.
      $("#technicalSkills").addClass("row");

      // The loop.
      var formattedSkill = "";
      var i;
      for (i = 0; i < bio.skills.length; i++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

// Display section.
bio.display();


/**
 * Education.
 *
 * The education object contains an array of schools. Each object in the schools
 * array contains a name, location, degree, dates and url string. The property
 * named majors is an array of strings.
 *
 * The education object also contains an array of completed online courses.
 * Each object in the onlineCourses array contains a title, school, dates, and
 * url string.
 *
 * Call the display function within this object to show it's content.
 *
 * NOTICE: education dates are a string or an integer? The project rubric gives
 * conflicting information. I assume the "dates: string (works with a hyphen
 * between them)" means "2016 - 2017" is valid, two year integers combined.
 */

var education = {
  "schools": [
    {
      "name": "Bentley University - Graduate School of Business",
      "location": "Waltham, MA, US",
      "degree": "Masters",
      "majors": ["Finance", "Accounting"],
      "dates": "1994 - 1996",
      "url": "http://www.bentley.edu"
    },
    {
      "name": "Bentley University",
      "location": "Waltham, MA, US",
      "degree": "Bachelors",
      "majors": ["Finance"],
      "dates": "1990 - 1994",
      "url": "http://www.bentley.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Linux/Unix 3: Unix Services",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    },
    {
      "title": "Linux/Unix 2: Networking and DNS",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    },
    {
      "title": "Linux/Unix 1: The Unix file system",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    },
    {
      "title": "PHP/SQL 3: Seamless Web 2.0 Integration",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    },
    {
      "title": "PHP/SQL 2: Relational Theory and Logical Design",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    },
    {
      "title": "PHP/SQL 1: Introduction to Database Programming",
      "school": "O'Reilly School of Technology",
      "dates": "2014",
      "url": "http://www.oreilly.com/"
    }
  ],
  display: function() {

    // Javascript strict mode.
    "use strict";

    // Add class row to DOM
    $("#education").addClass("row");

    // Schools - loop if exist.
    var i;
    for (i = 0; i < education.schools.length; i++) {

      // Format school data.
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", "));

      // Fix major(s) singular or plural.
      if (education.schools[i].majors.length > 1) {
        formattedSchoolMajor = formattedSchoolMajor.replace("Major", "Majors");
      }

      // Replace # with school url.
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);

      // Print school data.
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last a").append(formattedSchoolDegree); // see also concat '+' two vars in work object.
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);

      // School DOM changes.
    $(".education-entry:last a:first").wrap('<h4 class="entry-title"></h4>');

    }

    // Online Courses - loop if exist.
    for (i = 0; i < education.onlineCourses.length; i++) {

      // Format course data.
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

      // Replace # with course url.
      formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[i].url);
      formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[i].url);

      // Print heading on first pass with DOM change.
      if (i === 0) {
        $("#education").append(HTMLonlineClasses);
        $("#education h3").addClass("online-heading");
      }

      // Print course data.
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last a").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);

      // Course DOM changes.
      $(".education-entry:last .date-text").addClass("date-text-online");
      $(".education-entry:last .date-text").removeClass("date-text");
      $(".education-entry:last a:last").addClass("online-school-link");
      $(".education-entry:last br").remove();
    }
  }
};

// Display section.
education.display();


/**
 * Work Experience.
 *
 * The work object contains an array of jobs. Each object in the jobs array
 * contains an employer, title, location, dates worked, and description strings.
 *
 * Call the display function within this object to show it's content.
 *
 * NOTICE: url property is not in the spec, however, it's necessary to replace
 * the '#' in the var HTMLworkEmployer <a href="#">%data%</a> code line.
 */

var work = {
  "jobs": [
    {
      "employer": "Website Builders (Self-Employed)",
      "title": "Full-Stack Web Developer",
      "location": "Hartford, CT",
      "dates": "2003 - present",
      "description": "Part-time Domain Name Investor and full-time Web Developer. " +
        "Daily routine may include the purchase or sale of a domain name at " +
        "auction. Most days are spent creating new website designs, front-end " +
        "and back-end coding, editing stock photos, administering a web server, " +
        "review of monetization strategies, and SEO analysis. Web developement " +
        "work is primarily done in HTML, CSS, Javascript, PHP, and MySQL on a " +
        "dedicated Linux server.",
      "url": "http://www.websitebuilders.com"
    },
    {
      "employer": "Au Bon Pain",
      "title": "Finance Manager",
      "location": "Boston, MA",
      "dates": "1999 - 2003",
      "description": "Au Bon Pain Corporation, Boston, MA a $200 million annual " +
        "revenue, 280 restaurant location retailer. Developed strategies to " +
        "re-engineer and streamline the accounting, financial planning, reporting, " +
        "and analysis functions. Hired and developed staff of four professionals. " +
        "Created new quarterly Board of Directors, monthly financial close, " +
        "and forecasting reporting packages. Implemented performance ranks for " +
        "District Manager review process. Re-engineered cash forecasting and " +
        "controls. Coordinated and produced annual budget. Responsible for " +
        "monthly review and interpretation of financial results. Analyzed " +
        "leases, profitability and ROI of restaurant portfolio.",
      "url": "http://www.aubonpain.com"
    },
    {
      "employer": "Hoyts Cinemas",
      "title": "Financial Analyst",
      "location": "Boston, MA",
      "dates": "1997 - 1999",
      "description": "Hoyts Cinemas Corporation, Boston, MA a $500 million annual " +
        "revenue, 275 cinema location retailer. One of four team members " +
        "participating in the monthly close and reporting functions, P&L, " +
        "Balance Sheet, and Cash Flow analysis, lease payments, budgeting, " +
        "benchmarking, field and overhead analytical support.",
      "url": "http://www.hoyts.com.au"
    },
    {
    "employer": "TAD Resources International",
    "title": "Financial Analyst",
    "location": "Boston, MA",
    "dates": "1995 - 1997",
    "description": "Adecco purchased TAD Resources International, Cambridge, " +
      "MA a $1.2 billion annual revenue, 400 offices staffing company. One of four " +
      "corporate team members participating in the financial planning, reporting, " +
      "and analysis functions. Researched industry competitors for benchmarking, " +
      "provided analytical support to field, bid proposal and contract " +
      "profitability analysis. Projected and initiated borrowing and investing " +
      "activities in millions of dollars. Developed an optimizing spreadsheet " +
      "for borrowing activities. Monitored and reconciled the corporate bank " +
      "account, supported monthly and annual cash forecasts.",
      "url": "http://www.adecco.com"
    }
  ],
  display: function() {

    // Javascript strict mode.
    "use strict";

    // Add class row to DOM
    $("#workExperience").addClass("row");

    // Jobs - loop if exist.
    var i;
    for (i = 0; i < work.jobs.length; i++) {

      // Format jobs data.
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      // Replace # with jobs url.
      formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[i].url);

      // Print jobs data.
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle); // concat two vars.
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);

      // Jobs DOM changes.
      $(".work-entry:last a:first").wrap('<h4 class="entry-title"></h4>');
    }
  }
};

// Display section.
work.display();


/**
 * Projects.
 *
 * The projects object contains an array of projects. Each object in the
 * projects array contains a title, dates, and description string. An images
 * array contains url strings to show one or more project images.
 *
 * NOTICE: Dot notation used to define the display function for this object.
 *
 * NOTICE: url property is not in the spec, however, it's necessary to replace
 * the '#' in the var HTMLprojectTitle <a href="#">%data%</a> code line.
 */

var projects = {
  "projects": [
    {
      "title": "Classic Arcade Game Clone",
      "dates": "2016",
      "description": "I will be provided with visual assets and a game loop engine. " +
        "Using these tools I must add a number of entities to the game including the " +
        "player characters and enemies to recreate the classic arcade game Frogger.",
      "images": [
        "images/project-one-300x168.jpg",
        "images/project-one-300x168.jpg",
        "images/project-one-300x168.jpg"
      ],
      "url": "https://github.com/johnnapoletano"
    },
    {
      "title": "Website Optimization",
      "dates": "2016",
      "description": "I will optimize a provided website with a number of optimization " +
        "and performance related issues so that it achieves a target PageSpeed score " +
        "and runs at 60 frames per second.",
      "images": [
        "images/project-two-300x168.jpg",
        "images/project-two-300x168.jpg",
        "images/project-two-300x168.jpg"
      ],
      "url": "https://github.com/johnnapoletano"
    },
    {
      "title": "Neighborhood Map",
      "dates": "2016",
      "description": "I will develop a single page application featuring a map of " +
        "my neighborhood or a neighborhood I would like to visit. I will then add " +
        "additional functionality to this application, including: map markers to " +
        "identify popular locations or places I’d like to visit, a search function " +
        "to easily discover these locations, and a listview to support simple " +
        "browsing of all locations.",
      "images": [
        "images/project-three-300x168.jpg",
        "images/project-three-300x168.jpg",
        "images/project-three-300x168.jpg"
      ],
      "url": "https://github.com/johnnapoletano"
    },
    {
      "title": "Feed Reader Testing",
      "dates": "2016",
      "description": "In this project, I will be learning about testing with Javascript. " +
        "Testing is an important part of the development process and many organizations " +
        "practice a standard known as test-driven development or TDD. This is when " +
        "developers write tests first, before they ever start developing their application.",
      "images": [
        "images/project-four-300x168.jpg",
        "images/project-four-300x168.jpg",
        "images/project-four-300x168.jpg"
      ],
      "url": "https://github.com/johnnapoletano"
    }
  ]
};

// Define function.
projects.display = function() {

  // NOTICE: Dot notation is used here to define the display function for this
  // object. The previous three objects feature a display function which is
  // encapsulated directly within the JavaScript object definition. This was
  // done to show a second encapsulation method.

  // Javascript strict mode.
  "use strict";

  // Add class row to DOM
  $("#projects").addClass("row");

  // Projects - loop if exist.
  var i;
  for (i = 0; i < projects.projects.length; i++) {

    // Format project data.
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    // Replace # with project url.
    formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[i].url);

    // Print project data.
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);

    // Project DOM changes.
    $(".project-entry:last a:first").wrap('<h4 class="entry-title"></h4>');

    // Print project images if exist.
    if (projects.projects[i].images.length > 0) {
      var j;
      for (j = 0; j < projects.projects[i].images.length; j++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
        $(".project-entry:last").append(formattedProjectImage);
        $(".project-entry:last img:last").addClass("flex-image");

        // Add alt attribute or HTML won't validate.
        $(".project-entry:last img:last").attr("alt", "Project " + [i + 1] + " Snapshot " + [j + 1]);
      }
      // Add flex class to the images.
      $(".project-entry:last img").wrapAll('<div class="flex-images"></div>');
    }
  }
};

// Display section.
projects.display();

/**
 * Interactive map with info windows.
 * I also made changes to helper.js starting on line 188.
 */

// Add map div and classes to the DOM.
$("#mapDiv").append(googleMap);
$("#mapDiv").addClass("row");
$("#mapDiv").addClass("map-container");
$("#map").addClass("map-canvas");