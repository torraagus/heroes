import { FC } from "react";
import HeroeDetails from "./components/heroDetails/HeroeDetails";
import Home from "./components/home/Home";
import SearchHeroes from "./components/searchHeroes/SearchHeroes";

export interface IRoute {
	path?: string;
	exact?: boolean;
	noNavBar?: boolean;
	title?: string;
	filters?: { by: string; value: string }[];
	component?: FC<IRoute>;
}

type Routes = Array<IRoute>;

const routes: Routes = [
	{
		path: "/",
		exact: true,
		component: Home,
	},
	{
		path: "/search",
		exact: true,
		component: SearchHeroes,
	},
	{
		path: "/heroes/:id",
		exact: true,
		component: HeroeDetails,
	},
];

export default routes;
