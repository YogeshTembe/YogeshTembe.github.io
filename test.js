function openwindow(){
    window.open("https://www.google.com",'_blank');
}
function openwindowopch(){
    window?.open?.("https://www.google.com",'_blank');
}
function hreftest(){
    window?.open?.(document?.getElementById("wiki")?.['href'],'_blank');
}
function arraytest(){
    var a={
        src:"test",
        func(a,b){
            console.log("func called - ",a,b);
        }
    }
    console.log("a?.['src'] - ",a?.['src']);
    a?.func?.(3,5);
}
function nestedarraytest(){
    var a={
        src: { href: "test", 
            open(b,c){
                console.log("--open called b,c - ",b,c);
            }
        },  
    };
    console.log("a?.['src']?.['href'] - ",a?.['src']?.['href']);
    a?.['src']?.['open']?.(3,4);
}