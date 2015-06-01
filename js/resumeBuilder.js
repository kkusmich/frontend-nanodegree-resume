var bio = {
	"name" : "Kayla Kusmich",
	"role" : "Front End Developer",
	"welcomeMessage" : "Hello, nice meeting you!",
	"contacts" : {
		"mobile" : "416-567-6985",
		"email" : "kaylakusmich@gmail.com",
		"github" : "kkusmich",
		"location" : "Mississauga"
	},
	"skills" : ["project management", "problem-solving", "analytical", "team player", "communication", "customer service"],
	"bioPic" : "images/kayla_reduced.jpg"
}

var projects = {
	"projects" : [
	{
		"title" : "Interactive Resume",
		"Date" : "May 2015",
		"Description" : "Building online interactive resume",
		"Images" : ["images/resume.jpg"]
	},
	{
		"title" : "Isotrak Implementation",
		"Date" : "June 2012 - Dec 2014",
		"Description" : "Installation and Implementation of GPS Tracking Solution to 350 Tractors and 3000 Trailers",
		"Images" : ["images/isotrak1small.jpg", "images/isotrak2small.jpg"]
	}]
}

var work = {
	"jobs" : [
	{
		"Employer" : "Loblaw Companies Ltd",
		"Title" : "Project Manager",
		"Location" : "Brampton",
		"Date" : "Oct 2010 - Feb 2015",
		"Description" : "Oversee large-scale, top-priority technology initiatives and custom software development projects with up to $7.5M in budget"
	},
	{
		"Employer" : "Second Cup",
		"Title" : "Barista",
		"Location" : "Toronto",
		"Date" : "Jan 2011 - Dec 2013",
		"Description" : "Deliver friendly, efficient customer service and create a warm and welcoming atmosphere for customer through preparing and serving hot and cold beverages and food items."
	}]
}

var education = {
	"schools" : [
	{
		"Name" : "York University",
		"Location" : "Toronto",
		"Degree" : "Bachelor of Administrative Studies",
		"Majors" : ["Finance", "Administrative", "Project Management"],
		"Date" : "Jan 2007 - Aug 2010",
		"URL" : "www.yorku.ca"
	},
	{
		"Name" : "Bronte College of Canada",
		"Location" : "Mississauga",
		"Degree" : "Ontario Secondary Schools of Diploma",
		"Majors" : ["Business"],
		"Date" : "Apr 2006 - Dec 2006",
		"URL" : "www.brontecollege.ca"
	}],
	"onlineCourses" : [
	{
		"Title" : "Front End Developer",
		"School" : "Udacity",
		"Date" : "May 2015",
		"URL" : "www.udacity.com"
	}]
}

//header//
bio.display = function() {
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

//contacts//
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

//picture//
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);
var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcome);
}

bio.display ();

//skills//
if (bio.skills.length > 0) {
	 
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

function displayWork () {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].Date);
	$(".work-entry:last").append(formattedWorkDate);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
	$(".work-entry:last").append(formattedWorkLocation);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
	$(".work-entry:last").append(formattedWorkDescription);
}
}

displayWork ();

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log (name);
	name[1] = name[1].toUpperCase ();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " "+name[1];
}

$('#main').append(internationalizeButton);

projects.display = function () {
for (project in projects.projects) {
	$('#projects').append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);
	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].Date);
	$(".project-entry:last").append(formattedprojectDates);
	var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
	$(".project-entry:last").append(formattedprojectDescription);
	var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].Images[0]);
	$(".project-entry:last").append(formattedprojectImage);
	if (projects.projects[project].Images.length > 1) {
	var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].Images[1]);
	$(".project-entry:last").append(formattedprojectImage);}
}
}

projects.display ();

education.display = function () {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].Name);
		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
		$(".education-entry:last").append(formattedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].Date);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].Location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].Majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].Title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].School);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].Date);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedonlineURL);
	}
}

education.display ();

$("#mapDiv").append(googleMap);

//footercontacts//
function displayFooter () {
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);
}

displayFooter ();

