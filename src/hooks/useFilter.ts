import {AppsInterface} from "../pages/AppsPage.tsx";

export const useFilter = () => {

    const filterApps = (
        apps: AppsInterface[],
        android: boolean,
        apple: boolean,
        website: boolean,
        server: boolean,
        filterText: string | undefined
    ): AppsInterface[] => {
        const current = new Set<AppsInterface>()

        if (android) {
            apps
                .filter(app => app.type.includes("android"))
                .forEach(app => current.add(app))
        }

        if (apple) {
            apps
                .filter(app => app.type.includes("apple"))
                .forEach(app => current.add(app))
        }

        if (website) {
            apps
                .filter(app => app.type.includes("website"))
                .forEach(app => current.add(app))
        }

        if (server) {
            apps
                .filter(app => app.type.includes("server"))
                .forEach(app => current.add(app))
        }

        return Array.from(current).filter(app => {
            if (filterText && filterText?.length > 0) {
                return app.name.toLowerCase().includes(filterText.toLowerCase())
            }

            return true
        })
    }

    return {
        filterApps
    }
}