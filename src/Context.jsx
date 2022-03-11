import React,{useContext, useState} from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
	const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
	
	window.addEventListener('scroll', reveal);
	function reveal(){
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++)
		{
			var windowHeight = window.innerHeight;
			var revealTop = reveals[i].getBoundingClientRect().top;
			var revealPoint = 200;

			if (revealTop < windowHeight - revealPoint)
				reveals[i].classList.add('active');
			else
				reveals[i].classList.remove('active');
		}
	}

	const openSideBar = () => {
		SetIsSidebarOpen(true);
		console.log('open');
	}
	
	const closeSideBar = () => {
		SetIsSidebarOpen(false);
	}

	return (
		<AppContext.Provider
		value = {{openSideBar, closeSideBar, isSidebarOpen, SetIsSidebarOpen}}
		>
		{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}