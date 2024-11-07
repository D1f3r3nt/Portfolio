const connections: string[] = [
    'user->frontend',
    'user->backend',
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