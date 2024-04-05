'use client'

import screens from '@config/styles/screens.json'

import { useState, useEffect } from 'react'

export function useDevice() {
    const [windowSize, setWindowSize] = useState({
        md: false,
        lg: false,
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                let lg, md
                lg = md = false

                let width = window.innerWidth

                if (width >= Number(screens.page.replace(/px/, '')) - 2) {
                    lg = true
                }
                if (!lg) {
                    md = true
                }

                setWindowSize({
                    lg,
                    md,
                })
            }
            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])
    return windowSize
}
