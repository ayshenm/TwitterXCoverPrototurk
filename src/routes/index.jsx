import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explorer";
import Notifications from "../pages/notifications";
import NotFound from "../pages/not-found";
import MainLayout from "../layouts/main";
import Messages from "../pages/messages"
import List from "../pages/lists"
import Communities from "../pages/communities"
import Premium from "../pages/premium"
import Profile from "../pages/profile"

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'explore',
				element: <Explore />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			{
				path: 'messages',
				element: <Messages/>
			},
			{
				path: 'lists',
				element: <List/>
			},
			{
				path: 'communities',
				element: <Communities/>
			},
			{
				path: 'premium',
				element: <Premium/>
			},
			{
				path: 'profile',
				element: <Profile/>
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

export default routes
