"use strict";
const FN = {
    setToken: function(data){
        localStorage.setItem('TOKEN',data);
    },
    getToken: function(){
        localStorage.getItem('TOKEN');
    },
    clearToken: function(){
        localStorage.removeItem('TOKEN');
    }
}
