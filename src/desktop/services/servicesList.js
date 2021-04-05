import { faChalkboardTeacher, faProjectDiagram, faTasks, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const servicesList = [
	{
		id: 0,
		name: 'IT Consulting',
		icon: faChalkboardTeacher,
		summary: [
			'Cloud Architecture & Migration',
			'Containerization',
			'Security & Compliance',
			'Email Migration to Cloud',
			'IT Strategic Plan & Roadmap',
		],
	},
	{
		id: 1,
		name: 'Big Data',
		icon: faProjectDiagram,
		summary: [
			'Business Intelligence',
			'Artificial Intelligence',
			'Internet of Things',
			'Machine Learning',
			'Data Movement',
			'Predictive Modeling',
		],
	},
	{
		id: 2,
		name: 'Program Management',
		icon: faTasks,
		summary: [
			'Program Analysis & Planning',
			'Financial Management',
			'Program Oversight & Documentation',
			'Program Implementation',
		],
	},
	{
		id: 3,
		name: 'Application Development',
		icon: faMobileAlt,
		summary: [
			'Mobile App Development',
			'UI/UX Design',
			'Backend Development',
			'Quality Assurance',
			'App Support & Maintenaince',
		],
	},
];

export default servicesList;
