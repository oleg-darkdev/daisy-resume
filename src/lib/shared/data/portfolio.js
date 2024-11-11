// social
import footprintsFate from './portfolio/footprintsFate';
import itingo from './portfolio/itingo';
import techSopot from './portfolio/techSopot';
import ddGames from './portfolio/ddGames';
import ds5 from './portfolio/ds5';
import darkDevFoundation from './portfolio/darkDevFoundation';
import bejahi from './portfolio/bejahi';
import voteWise from './portfolio/voteWise';
// fablab

// commercial
import puzzleManagement from './portfolio/puzzleManagement';
import kanbanism from './portfolio/kanbanism';
import actionDelegation from './portfolio/actionDelegation';
import sudoScrumBan from './portfolio/sudoScrumBan';
import coastOfDelay from './portfolio/coastOfDelay';
import pomodoroPlan from './portfolio/pomodoroPlan';
import crazyWipLimits from './portfolio/crazyWipLimits';
import easyKanban from './portfolio/easyKanban';
import kanbanRiders from './portfolio/kanbanRiders';
import motivators from './portfolio/motivators';
import cynefin from './portfolio/cynefin';
import healthCheck from './portfolio/healthCheck';
import leanCoffee from './portfolio/leanCoffee';
import mks from './portfolio/mks';
// import antySystems from './portfolio/antySystems';
// import antySystems from './portfolio/antySystems';

//  anti-systems
import antySystems from './portfolio/antySystems';
import lgbtTree from './portfolio/lgbtTree';
import historyOfAnarchy from './portfolio/historyOfAnarchy';
import graffiti from './portfolio/graffiti';
import ecocide from './portfolio/ecocide';
import hackerspaces from './portfolio/hackerspaces';

// sports
import mindBeat from './portfolio/mindBeat';
import rozbrat from './portfolio/rozbrat';
import yellowElephant from './portfolio/yellowElephant';

// Cultural
import theStories from './portfolio/theStories';
import heritageStories from './portfolio/heritageStories';
import castleStories from './portfolio/castleStories';
import byPl from './portfolio/byPl';
import paleoStories from './portfolio/paleoStories';
import archaeoStories from './portfolio/archaeoStories';
import kdhStories from './portfolio/kdhStories';
import pyramidStories from './portfolio/pyramidStories';

const portfolio = [
	{
		year: 'Cultural',
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		projects: [
			bejahi,
			theStories,
			castleStories,
			pyramidStories,
			byPl,
			heritageStories,
			footprintsFate
		]
	},
	{
		year: 'BTB',
		subTitle: 'Lorem ipsum is placeholder text commonly used.',

		projects: [
			puzzleManagement,
			cynefin,
			actionDelegation,

			// motivators,
			healthCheck
			// leanCoffee

			// kanbanism,
			// sudoScrumBan.
			// coastOfDelay,
			// pomodoroPlan,
			// crazyWipLimits,
			// easyKanban,
			// kanbanRiders,
		]
	},
	{
		year: 'Educational',
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		projects: [graffiti, ecocide, mks, historyOfAnarchy, lgbtTree, antySystems]
	},
	{
		year: 'Social',
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		projects: [
			itingo,
			ds5,
			darkDevFoundation,
			voteWise

			// techSopot,
		]
	},
	{
		year: 'Sports',
		subTitle: 'Lorem ipsum is placeholder text commonly used.',
		projects: [yellowElephant, mindBeat, rozbrat]
	}

	// {
	// 	year: 'Commercial',
	// 	subTitle: 'Lorem ipsum is placeholder text commonly used.',
	// 	projects: []
	// }
	//
];

export { portfolio };
