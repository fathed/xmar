/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  function timeAndDate() {


                
                this.time = function()
                {
                    var today = new Date()
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }

                today = mm + '/' + dd + '/' + yyyy;

                var D = new Date();
                var hours = D.getHours();
                var minutes = D.getMinutes();
                var seconds = D.getSeconds();
                var time = hours + ":" + minutes + ":" + seconds;
                console.log(today +" " + time);
                return today + " "+time;
            };
  }
