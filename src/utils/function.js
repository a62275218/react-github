export const throttle = (method,duration)=>{
    let  begin= 0;
    return function(){
        let context=this, args=arguments, current=new Date();
        if(current-begin>=duration){
            method.apply(context,args);
            begin=current;
        }
    }
};

export const debounce = (method,delay)=>{
    let timer=null;
    return function(){
        let context=this, args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            method.apply(context,args);
        },delay);
    }
};

const body = document.documentElement || document.body;

export const getDocumentHeight = ()=>{
    return body.scrollHeight
};

export const getScrollTop = ()=>{
    return body.scrollTop === 0? document.body.scrollTop:document.documentElement.scrollTop;
};

export const getClientHeight = ()=>{
    return window.innerHeight || body.clientHeight
}