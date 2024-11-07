import {Language} from "../language.ts";

export const NODES = [
    {
        id: 'user',
        data: { label: '' },
        position: { x: 0, y: 0,},
        type: 'diferent'
    },
    {
        id: 'frontend',
        data: { label: 'Frontend' },
        position: {
            x: 400,
            y: 200,
        },
        type: 'beam'
    },
    {
        id: 'frontend_js',
        data: { label: '', language: Language.JavaScript },
        position: {
            x: 600,
            y: 300,
        },
        type: 'language'
    },
    {
        id: 'frontend_java',
        data: { label: '', language: Language.Java },
        position: {
            x: 200,
            y: 300,
        },
        type: 'language'
    },
    {
        id: 'frontend_ts',
        data: { label: '', language: Language.TypeScript },
        position: {
            x: 550,
            y: 400,
        },
        type: 'language'
    },
    {
        id: 'frontend_html',
        data: { label: '', language: Language.HTML },
        position: {
            x: 250,
            y: 400,
        },
        type: 'language'
    },
    {
        id: 'frontend_css',
        data: { label: '', language: Language.CSS },
        position: {
            x: 400,
            y: 400,
        },
        type: 'language'
    },
]