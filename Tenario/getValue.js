


function getValue() {
    /*
     * Get Output From Putty
     */
    var jsonStringHead = '{ "putty":[',
            jsonString = "",
            jsonStringFooter = '] }',
            answer = "",
            Nanswer = "";
    function getSpecificValue() {





        //Get all fields and radio buttons values
        var puttyRadioCount = $('#puttyInterface').find("input:radio[name]:checked").length;
        var currRadio = 0;
        var stopLoop = false;
        $("input:radio").each(function (e) {
            // console.log(puttyRadioCount); 

            var name1 = $(this).attr("name");
            var value = $(this).attr("value");
            var id1 = $(this).attr('id');
            //var name = $(this).attr("name");
            if ($("input:radio:checked"))
            {
                // if ($(this).is(':checked'))

                //  {

                answer += '{"' + id1 + '":"' + value + '"}';
                if (currRadio <= puttyRadioCount) {
                    currRadio++;
                    answer += ',';

                    //     }


                }




                if (!stopLoop) {



                    getTextFields();
                    stopLoop = true;

                }

            }

        });
        //  var newAnswer = answer.replace(","," ")
        console.log("THis Is My " + answer);
        Nanswer = jsonStringHead + answer + jsonStringFooter;








        function getTextFields() {

            var puttyRadioCount = 0
                    , currRadio = 0;

            if ($('#puttyInterface').find("input[type=text]").val().length > 0) {
                puttyRadioCount = $('#puttyInterface').find("input[type=text]").length;
            }


            //Get all text Fields
            $.each($('input[type=text]'), function (e) {
                var name1 = $(this).attr('name'),
                        value1 = $(this).attr('value')
                var id12 = $(this).attr('id');







                currRadio++;




                if (currRadio < puttyRadioCount - 1) {
                    answer += ",";
                    answer += '{"' + id12 + '":"' + value1 + '"}';

                }





            })


        }

    }

    //Public Method
    this.jsonReturn = function () {
        //return getValues
        getSpecificValue();
        console.log(Nanswer);
        var returnAnswer = Nanswer;
        Nanswer = "";
        return returnAnswer;

    };




}





var getValue = new getValue();

$("body").on('click', '#puttyInterface', function () {


    var command = getValue.jsonReturn();







    if (command) {


    }


});







    