
export const getRandomId = ():string => {
    return Math.floor(Math.random()*0xca0e373ebffff+0x05c5e45240000).toString(36)
}