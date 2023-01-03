export const getUserColorsData = async () => {
    const jsonUserColorsData = await fetch('/user-colors-data')
    const userColorsData = await jsonUserColorsData.json()
    return userColorsData
}
