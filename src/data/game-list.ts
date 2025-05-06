interface Game {
	name: string;
	link: string;
	image: string;
	type: string;
	year: number;
}

interface GameWithDisplayYear extends Game {
	displayYear: string;
}

interface GamesByYear {
	[year: number]: GameWithDisplayYear[];
}

const baseImageUrl = "https://image.ahalo.ren/games/";

const games: Game[] = [
	{
		name: "暗喻幻想: ReFantazio",
		link: "metaphor",
		image: `${baseImageUrl}metaphor.jpg`,
		type: "JRPG",
		year: new Date("2024/10/25").getTime(),
	},
	{
		name: "女神异闻录3 Reload - Episode Aiges",
		link: "p3r-dlc",
		image: `${baseImageUrl}p3r-dlc.jpg`,
		type: "JRPG",
		year: new Date("2025/05/04").getTime(),
	},
	{
		name: "光与影: 33号远征队",
		link: "expedition-33",
		image: `${baseImageUrl}expedition_33.jpg`,
		type: "JRPG",
		year: new Date("2025/05/02").getTime(),
	},
	{
		name: "卧龙: 苍天陨落",
		link: "wolong",
		image: `${baseImageUrl}AE9H7B.png`,
		type: "ARPG",
		year: new Date("2023/04/01").getTime(),
	},
	{
		name: "最终幻想16",
		link: "ff16",
		image: `${baseImageUrl}kmYRSw.png`,
		type: "JRPG",
		year: new Date("2023/07/04").getTime(),
	},
	{
		name: "伊苏10: 北境历险",
		link: "ys10",
		image: `${baseImageUrl}L7CZDj.png`,
		type: "JRPG",
		year: new Date("2023/10/14").getTime(),
	},
	{
		name: "伊苏8: 丹娜的陨涕日",
		link: "ys8",
		image: `${baseImageUrl}Fz5M8m.png`,
		type: "JRPG",
		year: new Date("2023/10/17").getTime(),
	},
	{
		name: "伊苏9: 怪人之夜",
		link: "ys9",
		image: `${baseImageUrl}6r0ERs.png`,
		type: "JRPG",
		year: new Date("2023/10/21").getTime(),
	},
	{
		name: "漫威蜘蛛侠2",
		link: "marvel-spider-man-2",
		image: `${baseImageUrl}rbaiar.png`,
		type: "ARPG",
		year: new Date("2023/10/24").getTime(),
	},
	{
		name: "最终幻想7 重制版",
		link: "ff7-remake",
		image: `${baseImageUrl}wR3TIC.png`,
		type: "JRPG",
		year: new Date("2023/10/28").getTime(),
	},
	{
		name: "十三机兵防卫圈",
		link: "13sar",
		image: `${baseImageUrl}Zt0K8Z.png`,
		type: "AVG",
		year: new Date("2023/11/02").getTime(),
	},
	{
		name: "如龙7 光与暗的去向",
		link: "ryu-7",
		image: `${baseImageUrl}cEHuz8.png`,
		type: "JRPG",
		year: new Date("2023/11/13").getTime(),
	},
	{
		name: "如龙7外传 无名之龙",
		link: "ryu-7-gaiden",
		image: `${baseImageUrl}95UKL4.png`,
		type: "JRPG",
		year: new Date("2023/11/13").getTime(),
	},
	{
		name: "战神4",
		link: "god-of-war",
		image: `${baseImageUrl}G6gGuE.png`,
		type: "ARPG",
		year: new Date("2023/11/25").getTime(),
	},
	{
		name: "战神: 诸神黄昏",
		link: "god-of-war-ragnarök",
		image: `${baseImageUrl}BBIU50.png`,
		type: "ARPG",
		year: new Date("2023/11/18").getTime(),
	},
	{
		name: "女神异闻录3 重制版",
		link: "p3r",
		image: `${baseImageUrl}VzK68N.png`,
		type: "JRPG",
		year: new Date("2024/05/02").getTime(),
	},
];

//根据年份分组游戏
const gamesByYear: GamesByYear = games.reduce<GamesByYear>((acc, game) => {
	const year = new Date(game.year).getFullYear();
	if (!acc[year]) {
		acc[year] = [];
	}
	acc[year].push({
		...game,
		displayYear: new Date(game.year).toLocaleDateString("zh-CN", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		}),
	});
	return acc;
}, {});

// 对每个年份组内的游戏按日期降序排序（最新的在前）
for (const year of Object.keys(gamesByYear)) {
	gamesByYear[Number(year)].sort(
		(a: GameWithDisplayYear, b: GameWithDisplayYear) => b.year - a.year,
	);
}

export { gamesByYear, type GameWithDisplayYear };
