const connections: string[] = [
    'user->frontend',
    'user->backend',
    'user->mobile',
    'user->cloud',
    'user->others',

    'frontend->frontend_css',
    'frontend->frontend_js',
    'frontend->frontend_ts',
    'frontend->frontend_html',
    'frontend->frontend_java',

    'frontend_js->react',
    'frontend_ts->react',
    'frontend_css->tailwind',
    'frontend_css->bootstrap',
    'frontend_java->thymeleaf',

    'backend->backend_js',
    'backend->backend_swift',
    'backend->backend_java',

    'backend_js->node',
    'backend_swift->vapor',
    'backend_java->spring',

    'spring->springBoot',
    'spring->springGateway',
    'spring->springSecurity',

    'mobile->mobile_java',
    'mobile->mobile_kotlin',
    'mobile->mobile_swift',
    'mobile->mobile_dart',

    'mobile_dart->flutter',
    'mobile_swift->xibs',
    'mobile_swift->swiftUi',
    'mobile_kotlin->jetpack',
    'mobile_java->xmlLayouts',

    'flutter->getX',
    'flutter->bloc',

    'cloud->fly',
    'cloud->netlify',
    'cloud->google',
    'cloud->aws',

    'google->firebase',

    'others->jwt',
    'others->oauth',
    'others->figma',
    'others->git',
    'others->kubernetes',
    'others->docker',
    'others->redis',
    'others->jira',
    'others->database',

    'figma->ui/ux',
    'figma->neumorphism',

    'git->github',
    'git->gitlab',
    'git->gitea',
    'git->bitbucket',

    'database->mysql',
    'database->postgreSql',
    'database->mongo',
    'database->mariadb',
    'database->oracle',

    'jira->scrum',
    'jira->agile',
    'jira->kanban',
]

export const useCustomEdges = () => {

    return connections.map(connection => {
        const points= connection.split('->')

        return {
            type: 'straight',
            source: points[1],
            target: points[0],
            id: connection,
            style: {stroke: '#fff'},
            animated: true,
        }
    })
}