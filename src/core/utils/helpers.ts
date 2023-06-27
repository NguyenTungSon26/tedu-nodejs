// check key obj truyeenf vao neu k co length thi deu la rong
export const isEmptyObject = (obj: object): boolean =>{
    return !Object.keys(obj).length
}