import React,{useContext, useState} from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
	const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
	
	const openSideBar = () => {
		SetIsSidebarOpen(true);
		console.log('open');
	}
	
	const closeSideBar = () => {
		SetIsSidebarOpen(false);
	}

	return (
		<AppContext.Provider
		value = {{openSideBar, closeSideBar, isSidebarOpen}}
		>
		{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}