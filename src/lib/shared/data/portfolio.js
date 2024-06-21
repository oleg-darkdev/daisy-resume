import template from './portfolio/template'
import agileFans from './portfolio/agileFans'
import itingo from './portfolio/itingo'
import lgbtTree from './portfolio/lgbtTree'
import byPl from './portfolio/byPl'
import techSopot from './portfolio/techSopot'
import ddGames from './portfolio/ddGames'
import yellowElephant from './portfolio/yellowElephant'
import ds5 from './portfolio/ds5'
import historyOfAnarchy from './portfolio/historyOfAnarchy'
import mks from './portfolio/mks'
import darkDevFoundation from './portfolio/darkDevFoundation'
import graffiti from './portfolio/graffiti'
import bejahi from './portfolio/bejahi'
import voteWise from './portfolio/voteWise'
import antySystems from './portfolio/antySystems'
import ecocide from './portfolio/ecocide'
import footprintsFate from './portfolio/footprintsFate'



const historyProgects = [
  // 12312, old gdansk
footprintsFate, bejahi,
];

const ngoProgects = [
footprintsFate,  voteWise, itingo, darkDevFoundation, ds5, techSopot
];

const researchesProgects = [
  // darkmetricks, fnb, hackerspaces, ror  etc
  footprintsFate,
  antySystems,
  bejahi,
  graffiti,
historyOfAnarchy, ecocide, byPl, lgbtTree
];

const boardgamesProgects = [
  // 12312, fnb, hackerspaces, ror etc
  graffiti,
    mks,
// ddGames,
historyOfAnarchy, ecocide, byPl, lgbtTree, agileFans,
];

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

export {portfolio, boardgamesProgects, ngoProgects, researchesProgects, historyProgects, footprintsFate, ecocide, antySystems, voteWise, byPl, lgbtTree, itingo,
agileFans,
 bejahi, graffiti, darkDevFoundation, mks, historyOfAnarchy, ds5,
yellowElephant, ddGames, techSopot
};
