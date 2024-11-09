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
            x: 650,
            y: 100,
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
            y: 150,
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

const mobile = [
    {
        id: 'mobile',
        data: { label: 'Mobile' },
        position: {
            x: -700,
            y: -100,
        },
        type: 'beam'
    },
    {
        id: 'mobile_java',
        data: { label: '', language: Language.Java },
        position: {
            x: -850,
            y: 90,
        },
        type: 'language'
    },
    {
        id: 'mobile_kotlin',
        data: { label: '', language: Language.Kotlin },
        position: {
            x: -950,
            y: -100,
        },
        type: 'language'
    },
    {
        id: 'mobile_dart',
        data: { label: '', language: Language.Dart },
        position: {
            x: -820,
            y: -280,
        },
        type: 'language'
    },
    {
        id: 'mobile_swift',
        data: { label: '', language: Language.Swift },
        position: {
            x: -600,
            y: -350,
        },
        type: 'language'
    },
    {
        id: 'flutter',
        data: { label: 'Flutter' },
        position: {
            x: -1000,
            y: -380,
        },
        type: 'technology'
    },
    {
        id: 'xmlLayouts',
        data: { label: 'XML Layouts' },
        position: {
            x: -1000,
            y: 150,
        },
        type: 'technology'
    },
    {
        id: 'swiftUi',
        data: { label: 'SwiftUI' },
        position: {
            x: -530,
            y: -480,
        },
        type: 'technology'
    },
    {
        id: 'xibs',
        data: { label: 'Xibs' },
        position: {
            x: -670,
            y: -480,
        },
        type: 'technology'
    },
    {
        id: 'jetpack',
        data: { label: 'Jetpack Compose' },
        position: {
            x: -1100,
            y: -110,
        },
        type: 'technology'
    },
    {
        id: 'bloc',
        data: { label: 'Bloc' },
        position: {
            x: -1100,
            y: -380,
        },
        type: 'subTechnology'
    },
    {
        id: 'getX',
        data: { label: 'Get X' },
        position: {
            x: -1050,
            y: -465,
        },
        type: 'subTechnology'
    },
]

const cloud = [
    {
        id: 'cloud',
        data: { label: 'Cloud' },
        position: {
            x: -100,
            y: -300,
        },
        type: 'beam'
    },
    {
        id: 'fly',
        data: { label: 'Fly.io' },
        position: {
            x: -300,
            y: -350,
        },
        type: 'technology'
    },
    {
        id: 'netlify',
        data: { label: 'Netlify' },
        position: {
            x: -150,
            y: -500,
        },
        type: 'technology'
    },
    {
        id: 'aws',
        data: { label: 'AWS' },
        position: {
            x: 150,
            y: -350,
        },
        type: 'technology'
    },
    {
        id: 'google',
        data: { label: 'Google' },
        position: {
            x: 30,
            y: -500,
        },
        type: 'technology'
    },
    {
        id: 'firebase',
        data: { label: 'Firebase' },
        position: {
            x: 80,
            y: -585,
        },
        type: 'subTechnology'
    },
]

const others = [
    {
        id: 'others',
        data: { label: 'Others' },
        position: {
            x: 600,
            y: -300,
        },
        type: 'beam'
    },
    {
        id: 'jwt',
        data: { label: 'Jwt' },
        position: {
            x: 300,
            y: -300,
        },
        type: 'technology'
    },
    {
        id: 'oauth',
        data: { label: 'OAuth' },
        position: {
            x: 400,
            y: -430,
        },
        type: 'technology'
    },
    {
        id: 'figma',
        data: { label: 'Figma' },
        position: {
            x: 580,
            y: -520,
        },
        type: 'technology'
    },
    {
        id: 'git',
        data: { label: 'Git' },
        position: {
            x: 780,
            y: -450,
        },
        type: 'technology'
    },
    {
        id: 'kubernetes',
        data: { label: 'Kubernetes' },
        position: {
            x: 880,
            y: -300,
        },
        type: 'technology'
    },
    {
        id: 'docker',
        data: { label: 'Docker' },
        position: {
            x: 860,
            y: -150,
        },
        type: 'technology'
    },
    {
        id: 'redis',
        data: { label: 'Redis' },
        position: {
            x: 530,
            y: -70,
        },
        type: 'technology'
    },
    {
        id: 'jira',
        data: { label: 'Jira' },
        position: {
            x: 800,
            y: 0,
        },
        type: 'technology'
    },
    {
        id: 'database',
        data: { label: 'Database' },
        position: {
            x: 1000,
            y: -200,
        },
        type: 'technology'
    },
    {
        id: 'ui/ux',
        data: { label: 'UI/UX' },
        position: {
            x: 530,
            y: -605,
        },
        type: 'subTechnology'
    },
    {
        id: 'neumorphism',
        data: { label: 'Neumor- phism' },
        position: {
            x: 630,
            y: -605,
        },
        type: 'subTechnology'
    },
    {
        id: 'github',
        data: { label: 'Github' },
        position: {
            x: 880,
            y: -450,
        },
        type: 'subTechnology'
    },
    {
        id: 'gitlab',
        data: { label: 'Gitlab' },
        position: {
            x: 830,
            y: -535,
        },
        type: 'subTechnology'
    },
    {
        id: 'gitea',
        data: { label: 'Gitea' },
        position: {
            x: 930,
            y: -535,
        },
        type: 'subTechnology'
    },
    {
        id: 'bitbucket',
        data: { label: 'Bitbucket' },
        position: {
            x: 980,
            y: -450,
        },
        type: 'subTechnology'
    },
    {
        id: 'oracle',
        data: { label: 'Oracle' },
        position: {
            x: 1100,
            y: -200,
        },
        type: 'subTechnology'
    },
    {
        id: 'mariadb',
        data: { label: 'MariaDB' },
        position: {
            x: 1050,
            y: -115,
        },
        type: 'subTechnology'
    },
    {
        id: 'mysql',
        data: { label: 'MySQL' },
        position: {
            x: 1050,
            y: -285,
        },
        type: 'subTechnology'
    },
    {
        id: 'mongo',
        data: { label: 'MongoDB' },
        position: {
            x: 1150,
            y: -115,
        },
        type: 'subTechnology'
    },
    {
        id: 'postgreSql',
        data: { label: 'PostgreSQL' },
        position: {
            x: 1150,
            y: -285,
        },
        type: 'subTechnology'
    },
    {
        id: 'scrum',
        data: { label: 'Scrum' },
        position: {
            x: 900,
            y: 0,
        },
        type: 'subTechnology'
    },
    {
        id: 'agile',
        data: { label: 'Agile' },
        position: {
            x: 850,
            y: 85,
        },
        type: 'subTechnology'
    },
    {
        id: 'kanban',
        data: { label: 'Kanban' },
        position: {
            x: 950,
            y: 85,
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
    ...mobile,
    ...cloud,
    ...others
];