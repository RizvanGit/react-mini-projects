import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import './App.css'
import Contacts from './components/Contacts'
import Users from './components/Users'
import Comments from './components/Comments'
import Cars from './components/Cars'
import Comment from './components/Comment'
import NotFound from './components/NotFound'
const App = () => {

	return (
		<React.StrictMode>
			<BrowserRouter>
				<div	className="App">
					<Routes>
						<Route path="/" element={<MainLayout/>}>
							<Route index element={<Home />} />
							<Route path="users" element={<Users />} />
							<Route path="cars" element={<Cars />} />
							<Route path="comments" element={<Comments />} />
							<Route path="comments/:id" element={<Comment />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</React.StrictMode>
	)
}


export default App;
