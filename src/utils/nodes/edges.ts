const connections: string[] = [
    'user->frontend',
    'frontend->frontend_css',
    'frontend->frontend_js',
    'frontend->frontend_ts',
    'frontend->frontend_html',
    'frontend->frontend_java'
]

export const useCustomEdges = () => {

    return connections.map(connection => {
        const points= connection.split('->')

        return {
            type: 'bezier',
            source: points[1],
            target: points[0],
            id: connection,
            style: {stroke: '#fff'},
            animated: true,
        }
    })
}