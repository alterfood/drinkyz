export const useCurrentLocale = () => {
    const route = useRoute()

    const pathArray = (route.fullPath as string).split('/')

    if(pathArray.length == 2) {
        return 'fr-fr'
    }

    return pathArray[1]
}