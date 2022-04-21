export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a software engineer@Novopay specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3), Heroku, Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, JIRA, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		{
			title: "Saas products",
			skillName: "CleverTap, FreshDesk",
			color: "5",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Programming Diaries",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "NUS Evolution Innovation Lab",
			duration: "September 2021 - Present",
			subtitle: "Student Researcher, Soft & Hybrid Robotics - Hardware Prototyping & Testing",
			details: [
				">> Tasked to assist the research team in the development of a hybrid robotic gripper system for delicate object manipulation, in partnership with industry collaborators.",
				"Ideating and characterizing various soft / hybrid actuator designs for the gripper system.",
				"Building an object detection model using deep learning algorithms for automated efficient manipulation",
				"Optimizing the motion planning of a robotic manipulator arm",
				"Designing a user-friendly interface for object detection model generation and motion planning"
			],
			tags: [
				"Manipulation",
				"Ideation & Prototyping",
				"3D-Printing",
				"Computer-aided Design",
				"Soft Robotics",
				"Hybrid Robotics"
			],
			icon: "qrcode",
		},
		{
			title: "NUS Advanced Robotics Centre ARC",
			duration: "October 2019 - Present",
			subtitle: "Student Researcher, Autonomous Mobile Robotics - Full Stack",
			details: [
				">> Collaborated with the ARC Mobility Team responsible for research on Autonomous Mobile Robots (AMR), including robotic perceptions, algorithms, simulations, and its real-world implementations.",
				"Teamed up with 20 student researchers of ARC on innovative projects, working on Autonomous Wheelchair, Backpack LiDAR, Gazebo/Isaac Simulation Developments, and part of the Aichi Challenge team.",
				"Interested in full-stack robotics development (hardware, software & integration)",
				"Experienced in open source development platforms incl. Robot Operating System (ROS) based on Python and C++, OpenCV, Nvidia SDK",
				"This is an extension from my NUS SRP (Science Research Program) research."
			],
			tags: ["Navigation", "Mapping", "Perception", "Simulation", "Robot Operating System (ROS)", "Mobile Robotics"],
			icon: "group",
		},
		{
			title: "Johnson & Johnson",
			duration: "May 2021 - July 2021",
			subtitle: "Robotics Assistant Engineer - Internship",
			details: [
				">> Assisted in implementation of new technologies & innovation related to automation (software/hardware) in manufacturing processes, reporting to J&J Supply Chain, Strategy, Innovation & Deployment Team.",
				"Install sensors & robotic systems integration within automated manufacturing systems.",
				"Identify new opportunities for improvement of manufacturing processes.",
				"Collect data for analysis, perform testing, evaluations & experiments.",
				"Prepare technical reports, conduct technical presentations & communicate with stake holders.",
				"Support negotiations with internal customers to reconcile requirements with proposed solutions & business needs / with external partners in projects",
				"Support decision-making to resolve business problems",
				"Enforce compliance of safety & good manufacturing practices and processes in production area",
			],
			tags: ["Manipulation", "Integration", "Simulation", "Data Analysis", "Robot Operating System (ROS)"],
			icon: "qrcode",
		},
		// {
		// 	title: "Future Urban Mobility, Singapore-MIT Alliance for Research & Technology Centre (SMART)",
		// 	duration: "May 2017 - April 2018",
		// 	subtitle: "Student Researcher, Robotic Mapping",
		// 	details: [
		// 		">> Selected to be part of the MOE-NUS Science Research Program (SRP). The SRP is part of Singapore Ministry of Education's highly-selective Gifted Education Program (GEP) that provides high school students the opportunity to engage in university-level research opportunities. I chose Robotics as my main field of interest, engaged in the research titled "Simulation and Localisation of Self-Driving Vehicles by Utilizing OpenStreetMap".",
		// 		"Conducted research to evaluate map databases available which best suits the simulation requirements of self-driving vehicles -- equipped with vital information for mapping and localisation purposes.",
		// 		"Design environments with high accuracy for simulation purposes with Gazebo.",
		// 		"Performed vigorous testings on the reliability of the simulation by fine-tuning parameters on ROS.",
		// 		"Acquired knowledge in Robot Operating Systems (ROS), Mapping and Localisation with SLAM methods and simulation through Linux Gazebo platforms.",
		// 		"Represented Anderson Junior College to Singapore Science and Engineering Fair 2018 (Finalist) and the International Elementz Science Conference 2018 (Bronze Medalist).",
		// 	],
		// 	tags: ["Manipulation", "Integration", "Simulation", "Data Analysis", "Robot Operating System (ROS)"],
		// 	icon: "group",
		// },
	],
	education: [
		{
			title: "Bachelor of Engineering, Mechanical Engineering (Robotics Specialization)",
			duration: "August 2019 - Present",
			subtitle: "National University of Singapore",
			details: [
				"Robotics Specialization (Robot Intelligence Track)",
				"Innovation and Design Program (Engineering iDP)",
				"University Town College Program (Residential College 4)",
				"Winter Program (NUS Research Institute Suzhou, China)",
			],
			tags: [
				"Second Major in Innovation & Design (iDP)",
				"Minor in Data Engineering",
				"Minor in Urban Studies",
			],
			icon: "graduation-cap",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/8461233/vinay-somawat",
				},
				{
					text: "GitHub",
					link: "https://github.com/felixjhmong",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/somawatvinay/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/felixmong/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thesigmakid",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/r194dME8y",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
