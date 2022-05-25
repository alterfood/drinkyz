export const useCurrentLocale = () => {
    const route = useRoute()
    
    return (route.fullPath as string).substring(1, 6) || 'fr-fr'
}