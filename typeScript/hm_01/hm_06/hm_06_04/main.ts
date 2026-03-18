/*
#0b89BkYZwu

– Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
 */
let dirty:string = " dirty string ";
let cleanString:(text:string) => void = (text:string) => {
    console.log(text.trim());
}
cleanString(dirty);