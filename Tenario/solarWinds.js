function solarWind() {
    this.sw_parent = '';//parent ref
  
    

    //public method to prepend to list
    this.sw_append = function (e) {
       
        //build new string and prepend
        $("#" + this.sw_parent).prepend(e);
    }



   
}
;

   
    

