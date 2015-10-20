/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init_returnString() {
    console.log("init_returnString has been instantiated");
    this.sw_parent = '';//parent ref
  
    this._const = function() {
        
        
        
        
        
    }

    //public method to prepend to list
    this.sw_append = function (e) {
       
        //build new string and prepend
        $("#" + this.sw_parent).prepend(e + "</br>");
    }



   
};


