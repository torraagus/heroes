import Heroe from "./components/heroe/Heroe";
import Home from "./components/home/Home";
import SearchHeroes from "./components/searchHeroes/SearchHeroes";

export interface IRoute {
	path: string;
	exact?: boolean;
	component: any;
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
		component: Heroe,
	},
];

export default routes;
