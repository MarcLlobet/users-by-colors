export const getHostAppData = async () => {
    const jsonHostAppData = await fetch('/host-app-data')
    const hostAppData = await jsonHostAppData.json()
    return hostAppData
}
