// isInclude function is used for determine whether 
// there is target css file for current html.
// if it does, return true, else return false.

function isInclude(name){
        var js= /js$/i.test(name);
        var es=document.getElementsByTagName(js?'script':'link');
        for(var i=0;i<es.length;i++) 
        if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;
        return false;
    }

function rightHand() {
    if(isInclude("rightHome.css")){
    	document.querySelector("link[href='rightHome.css']").href = "home.css";
    } else if(isInclude("leftHome.css")){
    	document.querySelector("link[href='leftHome.css']").href = "rightHome.css";
    } else if(isInclude("home.css")){
    	document.querySelector("link[href='home.css']").href = "rightHome.css";
    }   
}


function leftHand() {
    if(isInclude("leftHome.css")){
    	document.querySelector("link[href='leftHome.css']").href = "home.css";
    } else if(isInclude("rightHome.css")){
    	document.querySelector("link[href='rightHome.css']").href = "leftHome.css";
    } else if(isInclude("home.css")){
    	document.querySelector("link[href='home.css']").href = "leftHome.css";
    }   
}

function back(){
    document.getElementById('home-browser').history.back();
}