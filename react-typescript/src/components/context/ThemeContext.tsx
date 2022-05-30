import { createContext } from "react";
import { theme } from "./them";

type ThemeContextProviderProps = {
	children: React.ReactNode
}

export const ThemeContext = createContext(theme)

const ThemeContextProvider =({children} : ThemeContextProviderProps) => {
	return <ThemeContext.Provider value={theme}>
		{children}
	</ThemeContext.Provider>
}

export default ThemeContextProvider;