// no boardgames
import footprintsFate from './portfolio/footprintsFate';
import itingo from './portfolio/itingo';
import techSopot from './portfolio/techSopot';
import ddGames from './portfolio/ddGames';
import yellowElephant from './portfolio/yellowElephant';
import ds5 from './portfolio/ds5';
import darkDevFoundation from './portfolio/darkDevFoundation';
import bejahi from './portfolio/bejahi';
import voteWise from './portfolio/voteWise';

// agile.fans
import agileFans from './portfolio/agileFans';
import kanbanism from './portfolio/kanbanism';
import actionDelegation from './portfolio/actionDelegation';
import sudoScrumBan from './portfolio/sudoScrumBan';
import coastOfDelay from './portfolio/coastOfDelay';
import pomodoroPlan from './portfolio/pomodoroPlan';
import crazyWipLimits from './portfolio/crazyWipLimits';
import easyKanban from './portfolio/easyKanban';
import kanbanRiders from './portfolio/kanbanRiders';
import motivators from './portfolio/motivators';
import healthCheck from './portfolio/healthCheck';
import leanCoffee from './portfolio/leanCoffee';
// import antySystems from './portfolio/antySystems';
// import antySystems from './portfolio/antySystems';



//  anti-systems
import antySystems from './portfolio/antySystems';
import lgbtTree from './portfolio/lgbtTree';
import historyOfAnarchy from './portfolio/historyOfAnarchy';
import graffiti from './portfolio/graffiti';
import ecocide from './portfolio/ecocide';
import hackerspaces from './portfolio/hackerspaces';

// other boardgames
import mks from './portfolio/mks';


// The stories
import theStories from './portfolio/theStories';
import heritageStories from './portfolio/heritageStories';
import castleStories from './portfolio/castleStories';
import byPl from './portfolio/byPl';
import paleoStories from './portfolio/paleoStories';
import archaeoStories from './portfolio/archaeoStories';
import kdhStories from './portfolio/kdhStories';
import pyramidStories from './portfolio/pyramidStories';



const historyProgects = [
	// 12312, old gdansk
  // theStories, heritageStories, castleStories, paleoStories, archaeoStories, kdhStories, pyramidStories
	byPl,
	footprintsFate,
	bejahi,

];

const ngoProgects = [footprintsFate, voteWise, itingo, darkDevFoundation, ds5, techSopot];

const researchesProgects = {
	title: 'Agile.fans',
	desc: 
	[
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	],
	link: '',  icon: '',
	img: '',
	boardgames: [
	// darkmetricks, fnb, hackerspaces, ror  etc
	footprintsFate,
	antySystems,
	bejahi,
	graffiti,
	historyOfAnarchy,
	
	ecocide,
	byPl,
	lgbtTree
]};

// history / culture
const theStoriesBoardgames = {
	title: 'THE Stories',
	desc: 
	[
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	],
	link: '',  icon: '',
	img: '',
	boardgames: [
	theStories,
	byPl,
	heritageStories,
	castleStories,
	paleoStories,
	archaeoStories,
	kdhStories, 
	pyramidStories,
]};

const agileFansBoardgames = {
	title: 'Agile Fans',
	desc: 
	[
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	],
	link: '',  icon: '',
	img: '',
	boardgames: [
			// agile.fans
		agileFans,
		kanbanism,
		actionDelegation,
		// sudoScrumBan.
		coastOfDelay,
		pomodoroPlan,
		crazyWipLimits,
		easyKanban,
		kanbanRiders,
		motivators,
		healthCheck,
		// leanCoffee
	]
}


const antiSystemsBoardgames = {
	title: 'Anti Systems',
	desc: 
	[
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	],
	link: '',  icon: '',
	img: '',
	boardgames: [
	// add 12312, fnb, hackerspaces, ror etc
	// anti-systems
	antySystems,
	graffiti,
	hackerspaces,
	historyOfAnarchy,
	ecocide,
	lgbtTree,
]}


const otherBoardgames = {
	title: 'Other',
	desc: 
	[
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
	],
	link: '',  icon: '',
	img: '',
	boardgames: [
	mks
]}



const portfolio = [
	{
		year: 2024,
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		progects: [antySystems, graffiti, ecocide, voteWise]
	},
	{
		year: 2023,
		subTitle: 'Lorem ipsum is placeholder text commonly used.',

		progects: [
			bejahi,
			footprintsFate,
			mks,
			lgbtTree

			//   agileFans,
		]
	},
	{
		year: 2022,
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		progects: [darkDevFoundation, ddGames, itingo, byPl]
	},
	{
		year: 2021,
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		progects: [
			yellowElephant,
			historyOfAnarchy
			//   techSopot,
			//   ds5,
		]
	}
	// {
	// 	year: 2020,
	// subTitle: 'Lorem ipsum is placeholder text commonly used.',
	// 	progects: [

	// 	]
	// },
];

export {
	portfolio,
	theStoriesBoardgames, 
	agileFansBoardgames, 
	antiSystemsBoardgames, 
	otherBoardgames,
	ngoProgects,
	researchesProgects,
	historyProgects,
	footprintsFate,
	ecocide,
	antySystems,
	voteWise,
	byPl,
	lgbtTree,
	itingo,
	agileFans,
	bejahi,
	graffiti,
	darkDevFoundation,
	mks,
	historyOfAnarchy,
	ds5,
	yellowElephant,
	ddGames,
	techSopot
};
