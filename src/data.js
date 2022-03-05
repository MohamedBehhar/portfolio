import { SiJavascript, SiSass, SiTailwindcss,  } from 'react-icons/si'
import { FaReact, FaCss3Alt, FaBootstrap  } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'

export const links  = [
	{
		id:1,
		text:'about',
		url:'#about',
	},
	{
		id:2,
		text:'works',
		url:'#works',
	},
	{
		id:3,
		text:'contact',
		url:'#contact',
	},
]

export const technologies = [
	{
		id: 1,
		text: 'Html',
		icon: <ImHtmlFive />,
	},
	{
		id: 2,
		text: 'Css',
		icon: <FaCss3Alt />,
	},
	{
		id: 3,
		text: 'JavaScript',
		icon: <SiJavascript />,
	},
	{
		id: 4,
		text: 'React',
		icon: <FaReact />,
	},
	{
		id: 5,
		text: 'Tailwind',
		icon: <SiTailwindcss />,
	},
	{
		id: 6,
		text: 'Bootstrap',
		icon: <FaBootstrap />,
	},
	{
		id: 7,
		text: 'Sass',
		icon: <SiSass />,
	},
]

export const works = [
	{
		id: 1,
		title: 'E-commerce product page',
		description: 'A single product page made with React',
		url: 'https://jovial-bassi-ddb0b4.netlify.app/',
		github: '',
		img: 'images/productPage.png'
	},
	{
		id: 2,
		title: 'Tip Calculator',
		description: 'A simple calculator built with React',
		url: 'https://620a3359ac52ba1e7c57e74e--quirky-minsky-58d005.netlify.app/',
		github: '',
		img: 'images/tipCalculator.png'
	},
	{
		id: 3,
		title: 'Sunnyside agency landing page',
		description: 'Responsive landing page build with Html, Css and JavaScript',
		url: 'https://mohamedbehhar.github.io/Sunnyside-agency-landing-page/#',
		github: '',
		img: 'images/agencyLandingPage.png'
	},
	{
		id: 4,
		title: 'Landing page with dark theme',
		description: 'Responsive landing page build with Html and Css with a dark theme',
		url: 'https://mohamedbehhar.github.io/landing-page-with-dark-theme/',
		github: 'https://github.com/MohamedBehhar/landing-page-with-dark-theme',
		img: 'images/darkThemeLP.png'
	},
	{
		id: 5,
		title: 'Landing page with alternating feature blocks',
		description: 'Responsive landing page build with Html and Css',
		url: 'https://mohamedbehhar.github.io/Landing-page-with-alternating-feature-blocks/',
		github: 'https://github.com/MohamedBehhar/Landing-page-with-alternating-feature-blocks',
		img: 'images/featureBlocksLP.png'
	},
	{
		id: 6,
		title: 'Landing page with curved section',
		description: 'Responsive landing page build with Html, Scss',
		url: 'https://mohamedbehhar.github.io/Landing-page-with-curved-section/',
		github: 'https://github.com/MohamedBehhar/Landing-page-with-curved-section',
		img: 'images/curvedSectionLP.png'
	},
]