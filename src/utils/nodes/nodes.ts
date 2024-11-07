import {Language} from "../language.ts";

const frontend = [
    {
        id: 'frontend',
        data: { label: 'Frontend' },
        position: {
            x: 260,
            y: 140,
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
            x: 270,
            y: 350,
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
            x: 120,
            y: 270,
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
    {
        id: 'tailwind',
        data: { label: 'Tailwind' },
        position: {
            x: 680,
            y: 300,
        },
        type: 'technology'
    },
    {
        id: 'bootstrap',
        data: { label: 'Bootstrap' },
        position: {
            x: 600,
            y: 450,
        },
        type: 'technology'
    },
    {
        id: 'thymeleaf',
        data: { label: 'Thymeleaf' },
        position: {
            x: 300,
            y: 520,
        },
        type: 'technology'
    },
];

const backend = [
    {
        id: 'backend',
        data: { label: 'Backend' },
        position: {
            x: -300,
            y: 150,
        },
        type: 'beam'
    },
    {
        id: 'backend_js',
        data: { label: '', language: Language.JavaScript },
        position: {
            x: -500,
            y: 150,
        },
        type: 'language'
    },
    {
        id: 'backend_java',
        data: { label: '', language: Language.Java },
        position: {
            x: -300,
            y: 350,
        },
        type: 'language'
    },
    {
        id: 'backend_swift',
        data: { label: '', language: Language.Swift },
        position: {
            x: -470,
            y: 280,
        },
        type: 'language'
    },
    {
        id: 'vapor',
        data: { label: 'Vapor' },
        position: {
            x: -650,
            y: 370,
        },
        type: 'technology'
    },
    {
        id: 'node',
        data: { label: 'Node' },
        position: {
            x: -670,
            y: 70,
        },
        type: 'technology'
    },
    {
        id: 'spring',
        data: { label: 'Spring' },
        position: {
            x: -300,
            y: 500,
        },
        type: 'technology'
    },
    {
        id: 'springBoot',
        data: { label: 'Spring Boot' },
        position: {
            x: -250,
            y: 580,
        },
        type: 'subTechnology'
    },
    {
        id: 'springGateway',
        data: { label: 'Spring Gateway' },
        position: {
            x: -300,
            y: 660,
        },
        type: 'subTechnology'
    },
    {
        id: 'springSecurity',
        data: { label: 'Spring Security' },
        position: {
            x: -350,
            y: 580,
        },
        type: 'subTechnology'
    },
]

export const NODES = [
    {
        id: 'user',
        data: { label: '' },
        position: { x: 0, y: 0,},
        type: 'diferent'
    },
    ...frontend,
    ...backend,
];