export const throttle = (method,duration)=>{
    let  begin=new Date();
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