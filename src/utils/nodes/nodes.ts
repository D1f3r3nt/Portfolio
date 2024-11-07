import {Language} from "../language.ts";

const frontend = [
    {
        id: 'frontend',
        data: { label: 'Frontend' },
        position: {
            x: 300,
            y: 200,
        },
        type: 'beam'
    },
    {
        id: 'frontend_js',
        data: { label: '', language: Language.JavaScript },
        position: {
            x: 430,
            y: 70,
        },
        type: 'language'
    },
    {
        id: 'frontend_java',
        data: { label: '', language: Language.Java },
        position: {
            x: 120,
            y: 270,
        },
        type: 'language'
    },
    {
        id: 'frontend_ts',
        data: { label: '', language: Language.TypeScript },
        position: {
            x: 500,
            y: 180,
        },
        type: 'language'
    },
    {
        id: 'frontend_html',
        data: { label: '', language: Language.HTML },
        position: {
            x: 270,
            y: 350,
        },
        type: 'language'
    },
    {
        id: 'frontend_css',
        data: { label: '', language: Language.CSS },
        position: {
            x: 470,
            y: 320,
        },
        type: 'language'
    },
    {
        id: 'react',
        data: { label: 'React' },
        position: {
            x: 630,
            y: 30,
        },
        type: 'technology'
    },
];

export const NODES = [
    {
        id: 'user',
        data: { label: '' },
        position: { x: 0, y: 0,},
        type: 'diferent'
    },
    ...frontend
];