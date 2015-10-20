//function getDialog() {
    this.CiscoAclEditor = "";

    this.ConfigCompare = "";

    this.ConfigDownload = "";

    this.ConfigViewer = "";

    this.ConfigUpload = "";

    this.NetworkConfigurator = "";

    this.SFTP = "";

    this.Telnet = "";

    this.TFTP = "";


    $(function () {
        $('button').each(function () {
            $(this).click(function () {
                console.log($(this).attr("id"));
                console.log("this" + $(this).attr("id"))


            })

        });
    });
//}

