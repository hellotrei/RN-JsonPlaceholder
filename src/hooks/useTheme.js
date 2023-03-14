import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//basit bir custom Hook
export const useTheme = () => useContext(ThemeContext);
