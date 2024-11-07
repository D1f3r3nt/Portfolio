import {Language} from "../language.ts";

export const NODES = [
    {
        id: '1',
        data: { label: '' },
        position: { x: 0, y: 0,},
        type: 'diferent'
    },
    {
        id: '2',
        data: { label: 'Frontend' },
        position: {
            x: 400,
            y: 200,
        },
        type: 'beam'
    },
    {
        id: '3',
        data: { label: '', language: Language.JavaScript },
        position: {
            x: 300,
            y: 250,
        },
        type: 'language'
    },
    {
        id: '4',
        data: { label: '', language: Language.Java },
        position: {
            x: 350,
            y: 300,
        },
        type: 'language'
    },
    {
        id: '5',
        data: { label: '', language: Language.TypeScript },
        position: {
            x: 450,
            y: 300,
        },
        type: 'language'
    },
    {
        id: '6',
        data: { label: '', language: Language.HTML },
        position: {
            x: 450,
            y: 300,
        },
        type: 'language'
    },
    {
        id: '7',
        data: { label: '', language: Language.CSS },
        position: {
            x: 450,
            y: 300,
        },
        type: 'language'
    },
]