import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export function useTheme(){
    const ctx = useContext(ThemeContext)

    if (!ctx) {
        throw new Error('useTheme는 반드시 ThemeProvider안에서 실행')
    }
    return ctx
}
