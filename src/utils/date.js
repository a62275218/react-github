export const convertDate = (date,today) => {
    let out = today? new Date():new Date(date);
    return `${out.getFullYear()}-${out.getMonth() + 1}-${out.getDate()}`
};

export const showTimeDiff = (date)=>{
    let gap = new Date().getTime() - new Date(date).getTime();
    let milli = (gap%(24*3600*1000));
    let leftHours = Math.floor(milli/(3600*1000));
    let leftMinutes = Math.floor((milli%(3600*1000))/(60*1000));
    return leftHours === 0 ?`${leftMinutes} min ago`:`${leftHours} hr ago`;
};