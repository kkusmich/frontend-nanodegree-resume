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
		"Images" : ["images/isotrak1_small.jpg", "images/isotrak2_small.jpg"]
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