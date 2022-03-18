// stitches.config.ts
import { createStitches } from '@stitches/react';
import {sky, slate} from "@radix-ui/colors";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            ...slate,
            ...sky
        },
        fonts: {
            serif: 'Poppins, sans-serif'
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '24px',
            6: '32px',
            7: '48px',
            8: '64px'
        },
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem'
        },
        shadows: {
            0: '0 0 #0000',
            1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            3: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            4: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            5: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            6: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
        },
        radii: {
            1: '4px',
            2: '8px',
            3: '12px'
        },
    },
    utils: {
    },
});