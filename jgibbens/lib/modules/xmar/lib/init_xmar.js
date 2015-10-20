function init_xmar() {
    console.log('init_xmar.js loaded successfully.');

    var td = Tempus_timeAndDate,
            xmarPutty = {},
            xmarPuttyDialog = {},
            xmarCMDDialog = {},
            xmarSWDialog = {},
            xmarCmd = {},
            currArray = 0,
            loggedIn = false, //has the correct login been entered?
            passwordIn = false, //has the correct password been entered?
            //  commandCount = 44,
            xmarPuttyResponses = ["DOD MONITORING CONSENT&lt;/br&gt; YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions:&lt;/br&gt; - The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. &lt;/br&gt; - At any time, the USG may inspect and seize data stored on this IS.&lt;/br&gt; - Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose.&lt;/br&gt; - This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.&lt;/br&gt; - Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; User Access Verification &lt;/br&gt; &lt;/br&gt; Username:", "&lt;/br&gt; Password:", "&lt;/br&gt; &lt;/br&gt; ver. 45BCT_6.0.0.76lab&lt;/br&gt; Built to LAB INC2 45BCT-Template-5-17-2013.xls &lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; Password:", "&lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.77, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms&lt;/br&gt; POP-7920200-XMAR#ping 10.52.66.77 8&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.78, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms&gt;/br; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.77, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms&lt;/br&gt; POP-7920200-XMAR#ping 10.52.66.77 8&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.78, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms&gt","&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.77, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms&lt;/br&gt; POP-7920200-XMAR#ping 10.52.66.77 8&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.78, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms&gt;/br; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.77, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms&lt;/br&gt; POP-7920200-XMAR#ping 10.52.66.77 8&lt;/br&gt; Type escape sequence to abort.&lt;/br&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.78, timeout is 2 seconds:&lt;/br&gt; !!!!!&lt;/br&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms&gt"  ,"&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; POP-7920200-XMAR#&lt;/br&gt; POP-7920200-XMAR#copy startup-config &lt;/br&gt; Address or name of remote host &lt;/br&gt; Destination filename [pop-7920200-xmar-confg]?&gt;", "&lt;/br&gt; &lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; POP-7920200-XMAR#erase str &lt;/br&gt; POP-7920200-XMAR#erase startup-config &lt;/br&gt; Erasing the nvram filesystem will remove all configuration files! Continue? [confirm] [OK]&gt", "&lt;/br&gt; Erase of nvram: complete&lt;/br&gt; POP-7920200-XMAR&gt;", "&lt;/br&gt; Proceed with reload? [confirm] &lt;/br&gt; &lt;/br&gt; System Bootstrap, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 2008 by cisco Systems, Inc. &lt;/br&gt; C3200 platform with 131072 Kbytes of main memory&gt;", "&lt;/br&gt; Booting flash:/c3250-adventerprisek9-mz.124-24.GC1 &lt;/br&gt; Self decompressing the image : ################################################################################### [OK]&gt;", "&lt;/br&gt; &lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp;&amp;nbsp;Restricted Rights Legend&lt;/br&gt; &lt;/br&gt; Use, duplication, or disclosure by the Government is&lt;/br&gt; subject to restrictions as set forth in subparagraph&lt;/br&gt; (c) of the Commercial Computer Software - Restricted&lt;/br&gt; Rights clause at FAR sec. 52.227-19 and subparagraph&lt;/br&gt; (c) (1) (ii) of the Rights in Technical Data and Computer&lt;/br&gt; Software clause at DFARS sec. 252.227-7013.&lt;/br&gt; &lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; cisco Systems, Inc.&lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; 170 West Tasman Drive&lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; San Jose, California 95134-1706&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;/br&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team&gt;", ";/br&gt;/br&gt; *Mar 1 00:00:04.367: %MIC-7-ADD_SERIAL_NUM: Added serial number in position 0&lt;/br&gt; *Mar 1 00:00:04.367: %MIC-7-AUTHENTICATE_PASS: Device ID #17 authenticated&lt;/br&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/0, changed state to down&lt;/br&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/1, changed state to down&lt;/br&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/2, changed state to down&lt;/br&gt; *Mar 1 00:00:05.671:&lt;/br&gt; Router&gt;%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/3, changed state to down&lt;/br&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to down&lt;/br&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to down&lt;/br&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to down&lt;/br&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to down&lt;/br&gt; *Mar 1 00:00:43.919: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down&lt;/br&gt; *Mar 1 00:02:40.863: %LINK-5-CHANGED: Interface FastEthernet0/0, changed state to administratively down&lt;/br&gt; *Mar 1 00:02:41.863: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to down&lt;/br&gt; *Mar 1 00:02:42.551: %LINK-5-CHANGED: Interface Vlan1, changed state to administratively down&lt;/br&gt; *Mar 1 00:02:50.095: %SYS-5-RESTART: System restarted --&lt;/br&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;/br&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team&lt;/br&gt; *Mar 1 00:02:50.099: %SNMP-5-COLDSTART: SNMP agent on host Router is undergoing a cold start&lt;/br&gt; *Mar 1 00:02:50.203: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is OFF&lt;/br&gt; *Mar 1 00:02:50.203: %CRYPTO-6-GDOI_ON_OFF: GDOI is OFF&lt;/br&gt; *Mar 1 00:02:51.323: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to up&lt;/br&gt; *Mar 1 00:02:51.323: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to up&lt;/br&gt; *Mar 1 00:02:51.327: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to up&lt;br&gt; *Mar 1 00:02:51.327: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to up; *Mar 1 00:02:52.323: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/2, changed state to up&lt;/br&gt; *Mar 1 00:02:52.327: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/1, changed state to up&lt;/br&gt; *Mar 1 00:02:52.327: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/0, changed state to up&gt;", "Router&gt;&; Router; Enter configuration commands, one per line. End with CNTL/Z.&lt&gt; Router(config)&lt;/br&gt; Router(config)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router#&lt;/br&gt; *Mar 1 00:03:33.863: %SYS-5-CONFIG_I: Configured from console by console&lt;/br&gt; *Mar 1 00:03:34.135: %LINK-3-UPDOWN: Interface Vlan1, changed state to up&lt;/br&gt; *Mar 1 00:03:35.135: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up&gt; Router&gt;", "Router;&gt; Enter configuration commands, one per line. End with CNTL/Z.&lt;/br&gt; Router(config)&lt;/br&gt; Router(config)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router(config-if)&lt;/br&gt; Router#&lt;/br&gt; *Mar 1 00:03:33.863: %SYS-5-CONFIG_I: Configured from console by console&lt;/br&gt; *Mar 1 00:03:34.135: %LINK-3-UPDOWN: Interface Vlan1, changed state to up&lt;&gt; *Mar 1 00:03:35.135: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up&lt;/br&gt; Router&gt; Address or name of remote host []?&lt;/br&gt; Source filename []?&lt;/br&gt; Destination filename [pop-7920200-xmar-confg.txt]?&lt;/br&gt; %Warning:There is a file already existing with this name&lt;/br&gt; Do you want to over write? [confirm]&lt;/br&gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;/br&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;/br&gt; [OK - 12447 bytes]&lt;/br&gt; 12447 bytes copied in 0.196 secs (63505 bytes/sec)&lt;/br&gt; Router&lt;/br&gt; Address or name of remote host [10.0.0.1]? &lt;/br&gt; Source filename [pop-7920200-xmar-confg.txt]?&lt;/br&gt; Destination filename [startup-config]? &gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;/br&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;/br&gt; [OK - 12447 bytes]&lt;/br&gt; [OK]&gt;", "&lt&gt; 12447 bytes copied in 0.196 secs (63505 bytes/sec)&lt&gt; Router#copy tftp start&lt&gt; Address or name of remote host [10.0.0.1]?&lt;/br&gt; Source filename [pop-7920200-xmar-confg.txt]? &lt&gt; Destination filename [startup-config]? &lt&gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;/br&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;/br&gt; [OK - 12447 bytes]&lt;/br&gt; [OK] 12447 bytes copied in 10.528 secs (1182 bytes/sec)Router&gt;", "*Mar 1 00:04:50.911: %SYS-5-CONFIG_NV_I: Nonvolatile storage configured from tftp://10.0.0.1/pop-7920200-xmar-confg.txt by console Router; Proceed with reload? [confirm]&lt;&gt; *Mar 1 00:04:56.187: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload Command.&yuml;&lt;/br&gt; System Bootstrap, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 2008 by cisco Systems, Inc.&lt;/br&gt; C3200 platform with 131072 Kbytes of main memory&lt&gt; Booting flash:c3250-adventerprisek9-mz.124-24.GC5&lt;/br&gt; Error opening: flash:c3250-adventerprisek9-mz.124-24.GC5&lt;/br&gt; &lt;/br&gt; System Bootstrap111111111, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 2008 by cisco Systems, Inc.&lt;/br&gt; &lt;/br&gt; C3200 platform with 131072 Kbytes of main memory&gt", "Booting flash:/c3250-adventerprisek9-mz.124-24.GC1 Self decompressing the image : ################################################################################### [OK]&gt;", "&lt;/br&gt; &lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp;&amp;nbsp;Restricted Rights Legend&lt;/br&gt; &lt;/br&gt; Use, duplication, or disclosure by the Government is&lt;/br&gt; subject to restrictions as set forth in subparagraph&lt;/br&gt; (c) of the Commercial Computer Software - Restricted&lt;/br&gt; Rights clause at FAR sec. 52.227-19 and subparagraph&lt;/br&gt; (c) (1) (ii) of the Rights in Technical Data and Computer&lt;/br&gt; Software clause at DFARS sec. 252.227-7013.&lt;/br&gt; &lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; cisco Systems, Inc.&lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; 170 West Tasman Drive&lt;/br&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; San Jose, California 95134-1706&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;/br&gt; Technical Support: http://www.cisco.com/techsupport&lt;/br&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;/br&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team&lt;/br&gt; &lt;/br&gt; &lt;/br&gt;&gt", "Initializing flashfs...&lt;/br&gt; flashfs[7]: 8 files, 1 directories&lt;/br&gt; flashfs[7]: 0 orphaned files, 0 orphaned directories&lt;/br&gt; flashfs[7]: Total bytes: 31739904&lt;/br&gt; flashfs[7]: Bytes used: 20584448&lt;/br&gt; flashfs[7]: Bytes available: 11155456;&gt; flashfs[7]: flashfs fsck took 5 seconds.&lt;/br&gt; flashfs[7]: Initialization complete. &lt;/br&gt;&lt;/br&gt; &lt;/br&gt;&gt", "This product contains cryptographic features and is subject to United&lt;/br&gt; States and local country laws governing import, export, transfer and&lt;/br&gt; use. Delivery of Cisco cryptographic products does not imply&lt;/br&gt; third-party authority to import, export, distribute or use encryption.&lt;/br&gt; Importers, exporters, distributors and users are responsible for&lt;/br&gt; compliance with U.S. and local country laws. By using this product you&lt;/br&gt; agree to comply with applicable laws and regulations. If you are unable&lt;/br&gt; to comply with U.S. and local laws, return this product immediately.&lt;/br&gt; A summary of U.S. laws governing Cisco cryptographic products may be found at:&lt;/br&gt; http://www.cisco.com/wwl/export/crypto/tool/stqrg.html&lt;/br&gt; If you require further assistance please contact us by sending email to&lt;/br&gt; export@cisco.com.&gt", "&lt;/br&gt; Cisco 3250 (MPC8250) processor (revision 0x400) with 98304K/32768K bytes of memory.&lt;/br&gt; Processor board ID FHH144500CW&lt;/br&gt; MPC8250 CPU Rev: Part Number 0x0, Mask Number 0x64&lt;/br&gt; 5 FastEthernet interfaces&lt;/br&gt; 128K bytes of non-volatile configuration memory.&lt;/br&gt; 32768K bytes of processor board System flash (Intel 28F128J3A)&gt", "&lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; Press RETURN to get started!&gt;", "&lt;/br&gt; &lt;/br&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to down&lt;/br&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to down&lt;/br&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to down&lt;/br&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to down&lt;/br&gt; *Mar 1 00:00:47.751 GMT: %LINK-3-UPDOWN: Interface FastEthernet0/0, changed state to up&lt;/br&gt; *Mar 1 00:00:48.744 GMT: %LINK-3-UPDOWN: Interface Virtual-Access1&lt;/br&gt; DOD MONITORING CONSENT&lt;/br&gt; YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions: &lt;/br&gt; - The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. &lt;/br&gt; - At any time, the USG may inspect and seize data stored on this IS.&lt;/br&gt; - Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose. &lt;/br&gt; - This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy. &lt;/br&gt; - Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. &lt;/br&gt; &lt;/br&gt; &lt;/br&gt; User Access Verification &lt;/br&gt;&lt;/br&gt; Username: , changed state to up&lt;/br&gt; *Mar 1 00:00:49.652 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to up&lt;/br&gt; *Mar 1 00:00:49.652 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to up&gt;&lt;/br&gt; *Mar 1 00:00:49.656 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to up&lt;/br&gt; Username:", "&lt;/br&gt; Password:", "ver. 45BCT_6.0.0.76lab&lt;/br&gt; Built to LAB INC2 45BCT-Template-5-17-2013.xls&lt;/br&gt; &lt;/br&gt;&lt;/br&gt; POP-7920200-XMAR&gt;&lt;/br&gt", "Password: &lt;/br&gt;", "POP-7920200-XMAR&gt;&lt;/br&gt"," Password:&gt;&lt;/br&gt", "POP-7920200-XMAR&lt/br&gt; Enter configuration commands, one per line. End with CNTL/Z.&lt;/br&gt;"," POP-7920200-XMAR(config)&gt;&lt;/br&gt;"," POP-7920200-XMAR(config)&gt&lt;/br&gt;"," POP-7920200-XMAR(config)&gt&lt;/br&gt;"," The name for the keys will be: POP-7920200-XMAR.45BCT.ds.army.mil&lt;/br&gt; Choose the size of the key modulus in the range of 360 to 2048 for your&lt;/br&gt; General Purpose Keys. Choosing a key modulus greater than 512 may take&lt;/br&gt; a few minutes.&lt;/br&gt; &lt;/br&gt; How many bits in the modulus [512]:", "&lt;/br&gt; % Generating 1024 bit RSA keys, keys will be non-exportable...[OK]&lt;/br&gt; &lt;/br&gt;"," POP-7920200-XMAR(config)&gt;&lt;/br&gt", "POP-7920200-XMAR(config)&gt&lt;/br&gt; POP-7920200-XMAR&gt;&lt;/br&gt; Building configuration...&lt;/br&gt; [OK]&gt&lt;/br&gt", "POP-7920200-XMAR&gt;&lt;/br&gt", "&lt;/br&gt; &lt;/br&gt; 32768K bytes of processor board System flash (Intel 28F128J3A);/br&gt;/br&gt; Directory of flash:/&lt;/br&gt; &lt;/br&gt; &amp;nbsp; 2 -rwx &amp;nbsp;&amp;nbsp; 20514232 &amp;nbsp; Mar 1 2002 00:06:29 +00:00&amp; &amp;nbsp; c3250-adventerprisek9-mz.124-24.GC1&lt;/br&gt; &amp;nbsp; 3 -rwx &amp;nbsp;&amp;nbsp; 780 &amp;nbsp; Mar 1 2002 00:00:47 +00:00 &amp;nbsp; vlan.dat&lt;/br&gt; &amp;nbsp; 4 -rwx &amp;nbsp;&amp;nbsp; 3603 &amp;nbsp; Mar 1 2002 00:02:55 +00:00 &amp;nbsp; OSPF_default_config_no_ip_addresses.txt&lt;/br&gt; &amp;nbsp; 5 -rwx &amp;nbsp;&amp;nbsp; 4283 &amp;nbsp; Mar 1 2002 00:03:58 +00:00 &amp;nbsp; pop-XMAR-PAT-03-22-2011.txt&lt;/br&gt; &amp;nbsp; 6 -rwx &amp;nbsp;&amp;nbsp; 10041 &amp;nbsp; Mar 7 2013 14:39:08 +00:00 &amp;nbsp; POP-7920200-XMAR-v69.txt&lt;/br&gt; &amp;nbsp; 7 -rwx &amp;nbsp;&amp;nbsp; 13996 &amp;nbsp; Mar 10 2015 13:42:24 +00:00 &amp;nbsp; POP-7920200-XMAR-10Mar2015&lt;/br&gt; &amp;nbsp; 8 -rwx &amp;nbsp;&amp;nbsp; 12693 &amp;nbsp; Mar 1 2002 00:07:49 +00:00 &amp;nbsp; pop-7920200-xmar-confgv1.txt&lt;/br&gt; &amp;nbsp; 9 -rwx &amp;nbsp;&amp;nbsp; 12447 &amp;nbsp; Mar 1 2002 00:04:27 +00:00 &amp;nbsp; pop-7920200-xmar-confg.txt&lt;/br&gt; 31739904 bytes total (11155456 bytes free)&lt;/br&gt"];
         //  xmarPuttyResponses = ["DOD MONITORING CONSENT&lt;&nbsp;&gt; YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions:&lt;&nbsp;&gt; - The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. &lt;&nbsp;&gt; - At any time, the USG may inspect and seize data stored on this IS.&lt;&nbsp;&gt; - Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose.&lt;&nbsp;&gt; - This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.&lt;&nbsp;&gt; - Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; User Access Verification &lt;&nbsp;&gt; &lt;&nbsp;&gt; Username:", "&lt;&nbsp;&gt; Password:", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; ver. 45BCT_6.0.0.76lab&lt;&nbsp;&gt; Built to LAB INC2 45BCT-Template-5-17-2013.xls &lt;&nbsp;&gt; POP-7920200-XMAR&gt;", "&lt;&nbsp;&gt; Password:", "&lt;&nbsp;&gt; POP-7920200-XMAR", "&lt;&nbsp;&gt; Type escape sequence to abort.&lt;&nbsp;&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.77, timeout is 2 seconds:&lt;&nbsp;&gt; !!!!!&lt;&nbsp;&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms&lt;&nbsp;&gt; POP-7920200-XMAR#ping 10.52.66.77 8&lt;&nbsp;&gt; Type escape sequence to abort.&lt;&nbsp;&gt; Sending 5, 100-byte ICMP Echos to 10.52.66.78, timeout is 2 seconds:&lt;&nbsp;&gt; !!!!!&lt;&nbsp;&gt; Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/1 ms&lt;&nbsp;&gt; &lt;&nbsp;&gt", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR", "&lt;&nbsp;&gt; POP-7920200-XMAR", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR#&lt;&nbsp;&gt; POP-7920200-XMAR#copy startup-config &lt;&nbsp;&gt; Address or name of remote host &lt;&nbsp;&gt; Destination filename [pop-7920200-xmar-confg]? &lt;", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR#", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR#erase str &lt;&nbsp;&gt; POP-7920200-XMAR#erase startup-config &lt;&nbsp;&gt; Erasing the nvram filesystem will remove all configuration files! Continue? [confirm] [OK]", "&lt;&nbsp;&gt; Erase of nvram: complete&lt;&nbsp;&gt; POP-7920200-XMAR", "&lt;&nbsp;&gt; Proceed with reload? [confirm] &lt;&nbsp;&gt; &lt;&nbsp;&gt; System Bootstrap, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 2008 by cisco Systems, Inc. &lt;&nbsp;&gt; C3200 platform with 131072 Kbytes of main memory", "&lt;&nbsp;&gt; Booting flash:/c3250-adventerprisek9-mz.124-24.GC1 &lt;&nbsp;&gt; Self decompressing the image : ################################################################################### [OK]", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp;&amp;nbsp;Restricted Rights Legend&lt;&nbsp;&gt; &lt;&nbsp;&gt; Use, duplication, or disclosure by the Government is&lt;&nbsp;&gt; subject to restrictions as set forth in subparagraph&lt;&nbsp;&gt; (c) of the Commercial Computer Software - Restricted&lt;&nbsp;&gt; Rights clause at FAR sec. 52.227-19 and subparagraph&lt;&nbsp;&gt; (c) (1) (ii) of the Rights in Technical Data and Computer&lt;&nbsp;&gt; Software clause at DFARS sec. 252.227-7013.&lt;&nbsp;&gt; &lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; cisco Systems, Inc.&lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; 170 West Tasman Drive&lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; San Jose, California 95134-1706&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;&nbsp;&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; *Mar 1 00:00:04.367: %MIC-7-ADD_SERIAL_NUM: Added serial number in position 0&lt;&nbsp;&gt; *Mar 1 00:00:04.367: %MIC-7-AUTHENTICATE_PASS: Device ID #17 authenticated&lt;&nbsp;&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/0, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/1, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:05.671: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/2, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:05.671:&lt;&nbsp;&gt; Router&gt;%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/3, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.543: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:43.919: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down&lt;&nbsp;&gt; *Mar 1 00:02:40.863: %LINK-5-CHANGED: Interface FastEthernet0/0, changed state to administratively down&lt;&nbsp;&gt; *Mar 1 00:02:41.863: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to down&lt;&nbsp;&gt; *Mar 1 00:02:42.551: %LINK-5-CHANGED: Interface Vlan1, changed state to administratively down&lt;&nbsp;&gt; *Mar 1 00:02:50.095: %SYS-5-RESTART: System restarted --&lt;&nbsp;&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;&nbsp;&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team&lt;&nbsp;&gt; *Mar 1 00:02:50.099: %SNMP-5-COLDSTART: SNMP agent on host Router is undergoing a cold start&lt;&nbsp;&gt; *Mar 1 00:02:50.203: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is OFF&lt;&nbsp;&gt; *Mar 1 00:02:50.203: %CRYPTO-6-GDOI_ON_OFF: GDOI is OFF&lt;&nbsp;&gt; *Mar 1 00:02:51.323: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to up&lt;&nbsp;&gt; *Mar 1 00:02:51.323: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to up&lt;&nbsp;&gt; *Mar 1 00:02:51.327: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to up&lt;br&gt; *Mar 1 00:02:51.327: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to up; *Mar 1 00:02:52.323: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/2, changed state to up&lt;&nbsp;&gt; *Mar 1 00:02:52.327: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/1, changed state to up&lt;&nbsp;&gt; *Mar 1 00:02:52.327: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet2/0, changed state to up&lt;", "Router&gt;&; Router; Enter configuration commands, one per line. End with CNTL/Z.&lt&gt; Router(config)&lt;&nbsp;&gt; Router(config)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router#&lt;&nbsp;&gt; *Mar 1 00:03:33.863: %SYS-5-CONFIG_I: Configured from console by console&lt;&nbsp;&gt; *Mar 1 00:03:34.135: %LINK-3-UPDOWN: Interface Vlan1, changed state to up&lt;&nbsp;&gt; *Mar 1 00:03:35.135: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up&lt;&nbsp;&gt; Router&gt;", "RTENARIOouter;&gt; Enter configuration commands, one per line. End with CNTL/Z.&lt;&nbsp;&gt; Router(config)&lt;&nbsp;&gt; Router(config)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router(config-if)&lt;&nbsp;&gt; Router#&lt;&nbsp;&gt; *Mar 1 00:03:33.863: %SYS-5-CONFIG_I: Configured from console by console&lt;&nbsp;&gt; *Mar 1 00:03:34.135: %LINK-3-UPDOWN: Interface Vlan1, changed state to up&lt;&gt; *Mar 1 00:03:35.135: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up&lt;&nbsp;&gt; Router#&gt; Address or name of remote host []?&lt;&nbsp;&gt; Source filename []?&lt;&nbsp;&gt; Destination filename [pop-7920200-xmar-confg.txt]?&lt;&nbsp;&gt; %Warning:There is a file already existing with this name&lt;&nbsp;&gt; Do you want to over write? [confirm]&lt;&nbsp;&gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;&nbsp;&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;&nbsp;&gt; [OK - 12447 bytes]&lt;&nbsp;&gt; 12447 bytes copied in 0.196 secs (63505 bytes/sec)&lt;&nbsp;&gt; Router&lt;&nbsp;&gt; Address or name of remote host [10.0.0.1]? &lt;&nbsp;&gt; Source filename [pop-7920200-xmar-confg.txt]?&lt;&nbsp;&gt; Destination filename [startup-config]? &gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;&nbsp;&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;&nbsp;&gt; [OK - 12447 bytes]&lt;&nbsp;&gt; [OK]&gt;", "&lt&gt; 12447 bytes copied in 0.196 secs (63505 bytes/sec)&lt&gt; Router#copy tftp start&lt&gt; Address or name of remote host [10.0.0.1]?&lt;&nbsp;&gt; Source filename [pop-7920200-xmar-confg.txt]? &lt&gt; Destination filename [startup-config]? &lt&gt; Accessing tftp://10.0.0.1/pop-7920200-xmar-confg.txt...&lt;&nbsp;&gt; Loading pop-7920200-xmar-confg.txt from 10.0.0.1 (via Vlan1): !&lt;&nbsp;&gt; [OK - 12447 bytes]&lt;&nbsp;&gt; [OK]&lt;&nbsp;&gt; 12447 bytes copied in 10.528 secs (1182 bytes/sec)&lt;&nbsp;&gt; Router&gt;", "*Mar 1 00:04:50.911: %SYS-5-CONFIG_NV_I: Nonvolatile storage configured from tftp://10.0.0.1/pop-7920200-xmar-confg.txt by console Router&lt;&nbsp;&gt; Proceed with reload? [confirm]&lt;&nbsp;&gt;&lt;&nbsp;&gt; *Mar 1 00:04:56.187: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload Command.&yuml;&lt;&nbsp;&gt; System Bootstrap, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 2008 by cisco Systems, Inc.&lt;&nbsp;&gt; C3200 platform with 131072 Kbytes of main memory&lt;&nbsp;&gt; Booting flash:c3250-adventerprisek9-mz.124-24.GC5&lt;&nbsp;&gt; Error opening: flash:c3250-adventerprisek9-mz.124-24.GC5&lt;&nbsp;&gt; &lt;&nbsp;&gt; System Bootstrap, Version 12.4(15r)T1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 2008 by cisco Systems, Inc.&lt;&nbsp;&gt; &lt;&nbsp;&gt; C3200 platform with 131072 Kbytes of main memory&gt", "Booting flash:/c3250-adventerprisek9-mz.124-24.GC1 Self decompressing the image : ################################################################################### [OK]", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp;&amp;nbsp;Restricted Rights Legend&lt;&nbsp;&gt; &lt;&nbsp;&gt; Use, duplication, or disclosure by the Government is&lt;&nbsp;&gt; subject to restrictions as set forth in subparagraph&lt;&nbsp;&gt; (c) of the Commercial Computer Software - Restricted&lt;&nbsp;&gt; Rights clause at FAR sec. 52.227-19 and subparagraph&lt;&nbsp;&gt; (c) (1) (ii) of the Rights in Technical Data and Computer&lt;&nbsp;&gt; Software clause at DFARS sec. 252.227-7013.&lt;&nbsp;&gt; &lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; cisco Systems, Inc.&lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; 170 West Tasman Drive&lt;&nbsp;&gt; &amp;nbsp;&amp;nbsp; &amp;nbsp; San Jose, California 95134-1706&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; Cisco IOS Software, 3200 Software (C3250-ADVENTERPRISEK9-M), Version 12.4(24)GC1, RELEASE SOFTWARE (fc1)&lt;&nbsp;&gt; Technical Support: http://www.cisco.com/techsupport&lt;&nbsp;&gt; Copyright (c) 1986-2009 by Cisco Systems, Inc.&lt;&nbsp;&gt; Compiled Sat 08-Aug-09 02:57 by prod_rel_team&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt&gt", "Initializing flashfs...&lt;&nbsp;&gt; flashfs[7]: 8 files, 1 directories&lt;&nbsp;&gt; flashfs[7]: 0 orphaned files, 0 orphaned directories&lt;&nbsp;&gt; flashfs[7]: Total bytes: 31739904&lt;&nbsp;&gt; flashfs[7]: Bytes used: 20584448&lt;&nbsp;&gt; flashfs[7]: Bytes available: 11155456&lt;&nbsp;&gt; flashfs[7]: flashfs fsck took 5 seconds.&lt;&nbsp;&gt; flashfs[7]: Initialization complete. &lt;&nbsp;&gt;&lt;&nbsp;&gt; &lt;&nbsp;&gt;&lt&gt", "This product contains cryptographic features and is subject to United&lt;&nbsp;&gt; States and local country laws governing import, export, transfer and&lt;&nbsp;&gt; use. Delivery of Cisco cryptographic products does not imply&lt;&nbsp;&gt; third-party authority to import, export, distribute or use encryption.&lt;&nbsp;&gt; Importers, exporters, distributors and users are responsible for&lt;&nbsp;&gt; compliance with U.S. and local country laws. By using this product you&lt;&nbsp;&gt; agree to comply with applicable laws and regulations. If you are unable&lt;&nbsp;&gt; to comply with U.S. and local laws, return this product immediately.&lt;&nbsp;&gt; A summary of U.S. laws governing Cisco cryptographic products may be found at:&lt;&nbsp;&gt; http://www.cisco.com/wwl/export/crypto/tool/stqrg.html&lt;&nbsp;&gt; If you require further assistance please contact us by sending email to&lt;&nbsp;&gt; export@cisco.com.&lt&gt", "&lt;&nbsp;&gt; Cisco 3250 (MPC8250) processor (revision 0x400) with 98304K/32768K bytes of memory.&lt;&nbsp;&gt; Processor board ID FHH144500CW&lt;&nbsp;&gt; MPC8250 CPU Rev: Part Number 0x0, Mask Number 0x64&lt;&nbsp;&gt; 5 FastEthernet interfaces&lt;&nbsp;&gt; 128K bytes of non-volatile configuration memory.&lt;&nbsp;&gt; 32768K bytes of processor board System flash (Intel 28F128J3A)&lt&gt", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; Press RETURN to get started!", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:06.563: %LINK-3-UPDOWN: Interface FastEthernet2/3, changed state to down&lt;&nbsp;&gt; *Mar 1 00:00:47.751 GMT: %LINK-3-UPDOWN: Interface FastEthernet0/0, changed state to up&lt;&nbsp;&gt; *Mar 1 00:00:48.744 GMT: %LINK-3-UPDOWN: Interface Virtual-Access1&lt;&nbsp;&gt; DOD MONITORING CONSENT&lt;&nbsp;&gt; YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions: &lt;&nbsp;&gt; - The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. &lt;&nbsp;&gt; - At any time, the USG may inspect and seize data stored on this IS.&lt;&nbsp;&gt; - Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose. &lt;&nbsp;&gt; - This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy. &lt;&nbsp;&gt; - Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. &lt;&nbsp;&gt; &lt;&nbsp;&gt; &lt;&nbsp;&gt; User Access Verification &lt;&nbsp;&gt;&lt;&nbsp;&gt; Username: , changed state to up&lt;&nbsp;&gt; *Mar 1 00:00:49.652 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/2, changed state to up&lt;&nbsp;&gt; *Mar 1 00:00:49.652 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/1, changed state to up&gt;&lt;&nbsp;&gt; *Mar 1 00:00:49.656 GMT: %LINK-3-UPDOWN: Interface FastEthernet2/0, changed state to up&lt;&nbsp;&gt; Username:", "&lt;&nbsp;&gt; Password:", "ver. 45BCT_6.0.0.76lab&lt;&nbsp;&gt; Built to LAB INC2 45BCT-Template-5-17-2013.xls&lt;&nbsp;&gt; &lt;&nbsp;&gt;&lt;&nbsp;&gt; POP-7920200-XMAR&gt;&lt;&nbsp;&gt; Password:", "Password: &lt;&nbsp;&gt; % Access denied&lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR&gt;&lt&gt; Password: &lt&gt", "&lt;&nbsp;&gt; POP-7920200-XMAR#conf t&lt;&nbsp;&gt; Enter configuration commands, one per line. End with CNTL/Z.&lt;&nbsp;&gt; POP-7920200-XMAR(config)#cr&lt;&nbsp;&gt; POP-7920200-XMAR(config)#crypto key gen&lt;&nbsp;&gt; POP-7920200-XMAR(config)#crypto key generate rsa&lt;&nbsp;&gt; The name for the keys will be: POP-7920200-XMAR.45BCT.ds.army.mil&lt;&nbsp;&gt; Choose the size of the key modulus in the range of 360 to 2048 for your&lt;&nbsp;&gt; General Purpose Keys. Choosing a key modulus greater than 512 may take&lt;&nbsp;&gt; a few minutes.&lt;&nbsp;&gt; &lt;&nbsp;&gt; How many bits in the modulus [512]:", "&lt;&nbsp;&gt; % Generating 1024 bit RSA keys, keys will be non-exportable...[OK]&lt;&nbsp;&gt; &lt;&nbsp;&gt; POP-7920200-XMAR(config)#wr&lt&gt", "POP-7920200-XMAR(config)#exit&lt;&nbsp;&gt; POP-7920200-XMAR#wr&lt;&nbsp;&gt; Building configuration...&lt;&nbsp;&gt; [OK] &lt&gt", "POP-7920200-XMAR&lt;&nbsp;&gtshow flash;", "&lt;&nbsp;&gt; &lt;&nbsp;&gt; 32768K bytes of processor board System flash (Intel 28F128J3A)&lt;&nbsp;&gt; &lt;&nbsp;&gt; Directory of flash:/&lt;&nbsp;&gt; &lt;&nbsp;&gt; &amp;nbsp; 2 -rwx &amp;nbsp;&amp;nbsp; 20514232 &amp;nbsp; Mar 1 2002 00:06:29 +00:00&amp; &amp;nbsp; c3250-adventerprisek9-mz.124-24.GC1&lt;&nbsp;&gt; &amp;nbsp; 3 -rwx &amp;nbsp;&amp;nbsp; 780 &amp;nbsp; Mar 1 2002 00:00:47 +00:00 &amp;nbsp; vlan.dat&lt;&nbsp;&gt; &amp;nbsp; 4 -rwx &amp;nbsp;&amp;nbsp; 3603 &amp;nbsp; Mar 1 2002 00:02:55 +00:00 &amp;nbsp; OSPF_default_config_no_ip_addresses.txt&lt;&nbsp;&gt; &amp;nbsp; 5 -rwx &amp;nbsp;&amp;nbsp; 4283 &amp;nbsp; Mar 1 2002 00:03:58 +00:00 &amp;nbsp; pop-XMAR-PAT-03-22-2011.txt&lt;&nbsp;&gt; &amp;nbsp; 6 -rwx &amp;nbsp;&amp;nbsp; 10041 &amp;nbsp; Mar 7 2013 14:39:08 +00:00 &amp;nbsp; POP-7920200-XMAR-v69.txt&lt;&nbsp;&gt; &amp;nbsp; 7 -rwx &amp;nbsp;&amp;nbsp; 13996 &amp;nbsp; Mar 10 2015 13:42:24 +00:00 &amp;nbsp; POP-7920200-XMAR-10Mar2015&lt;&nbsp;&gt; &amp;nbsp; 8 -rwx &amp;nbsp;&amp;nbsp; 12693 &amp;nbsp; Mar 1 2002 00:07:49 +00:00 &amp;nbsp; pop-7920200-xmar-confgv1.txt&lt;&nbsp;&gt; &amp;nbsp; 9 -rwx &amp;nbsp;&amp;nbsp; 12447 &amp;nbsp; Mar 1 2002 00:04:27 +00:00 &amp;nbsp; pop-7920200-xmar-confg.txt&lt;&nbsp;&gt; 31739904 bytes total (11155456 bytes free)&lt;&nbsp;&gt"];

    /*
     * Loading the putty asset
     */

    $.getScript('lib/assets/putty/init_putty.js').success(function () {
    }).fail(function () {
        console.log('Failed to load init_putty.js in the xmar init_xmar.js');
    }).success(function () {
        xmarPutty = new init_putty();
        loadChrome();
    });
/*
    function loadCursorTool() {
        $.getScript('lib/js/cursorManager.js').success(function () {
        }).fail(function () {
            console.log('Failed to load cursorManager.js in the xmar init_xmar.js');
        }).success(function () {
            loadTerminalRefresh();
        });
    }

    function loadTerminalRefresh() {
        $.getScript('lib/js/TerminalRefreshCursor.js').success(function () {
        }).fail(function () {
            console.log('Failed to load TerminalRefreshCursor.js in the xmar init_xmar.js');
        }).success(function () {
            loadDialog();
        });
    }

    function loadDialog() {
        $.getScript('lib/assets/dialog/init_dialog.js').success(function () {
        }).fail(function () {
            console.log('Failed to load init_dialog.js in the xmar init_xmar.js');
        }).success(function () {
            loadChrome();
        });
    }
*/
    /*
     * making the new dialog box work like a cmd terminal
     */
    function loadChrome() {
        $.getScript('lib/assets/cmd/init_cmd.js').success(function () {
        }).fail(function () {
            console.log('Failed to load init_cmd.js in the xmar init_xmar.js');
        }).success(function () {
            init();
        });
    }

    function init() {
        
        
        
        
        
        
        
        //solarwinds dialog
        xmarSWDialog = new init_dialog();
        xmarSWDialog.obj = 'body';
        xmarSWDialog.dialogID = 'xmarSW';
        xmarSWDialog.dialogTitle = 'Solarwinds';
        xmarSWDialog.dialogLeftIcon = '';
        xmarSWDialog.dialogRightBtns = ['close', 'max', 'min'];
       // xmarSWDialog.dialogCenter = xmarPutty.putty_inner;
        xmarSWDialog.dialogBodyHeader = '';
        xmarSWDialog.dialogFooter = '';
        xmarSWDialog.dialogWidth = 500;
        xmarSWDialog.dialogHeight = 200;
        xmarSWDialog.dialogBGColor = '#000000';
        xmarSWDialog.dialogFontColor = "#ffffff";
        xmarSWDialog.dialogFont = "console";
        xmarSWDialog.dialog_output();
        
        Tempus_returnString.sw_parent = 'dialogContent_xmarSW';
       
        
        
        
        
        //cmd dialog
        xmarCMDDialog = new init_dialog();
        xmarCMDDialog.obj = 'body';
        xmarCMDDialog.dialogID = 'xmarCMD';
        xmarCMDDialog.dialogTitle = 'PuTTY';
        xmarCMDDialog.dialogLeftIcon = '';
        xmarCMDDialog.dialogRightBtns = ['close', 'max', 'min'];
        xmarCMDDialog.dialogCenter = xmarPutty.putty_inner;
        xmarCMDDialog.dialogBodyHeader = '';
        xmarCMDDialog.dialogFooter = '';
        xmarCMDDialog.dialogWidth = 500;
        xmarCMDDialog.dialogHeight = 200;
        xmarCMDDialog.dialogBGColor = '#000000';
        xmarCMDDialog.dialogFontColor = "#ffffff";
        xmarCMDDialog.dialogFont = "console";
        xmarCMDDialog.dialog_output();
        //putty
        xmarPuttyDialog = new init_dialog();
        xmarPuttyDialog.obj = 'body';
        xmarPuttyDialog.dialogID = 'xmarPUTTY';
        xmarPuttyDialog.dialogTitle = 'PuTTY';
        xmarPuttyDialog.dialogLeftIcon = '';
        xmarPuttyDialog.dialogRightBtns = ['close', 'max', 'min'];
        xmarPuttyDialog.dialogCenter = xmarPutty.putty_inner;
        xmarPuttyDialog.dialogBodyHeader = '';
        xmarPuttyDialog.dialogFooter = 'Built by MM';
        xmarPuttyDialog.dialogWidth = 430;
        xmarPuttyDialog.dialogHeight = 300;
        xmarPuttyDialog.dialogBGColor = '#ffffff';
        xmarPuttyDialog.dialogFontColor = "#000000";
        xmarPuttyDialog.dialogFontColor = "#000000";

        //console
        xmarPuttyDialog.dialog_output();



        //cmd
        xmarCmd = new init_cmd();
        // xmarCmd.promptString = xmarPuttyResponses[0];

        xmarCmd.parent = 'dialogContent_xmarCMD';
        $("#dialogContent_xmarCMD").attr('contentEditable', true);//it has to be contenteditable for us to type anything
        xmarCmd._const();
        xmarCmd.buildPormpt(xmarPuttyResponses[0], 'dialogContent_xmarCMD');
        sortingDialogBoxes(['#xmarCMD', '#xmarPUTTY']);//sorting for this module
        itemControls();
        getCMDReturn();
    }

    function itemControls() {
        $("#xmarPUTTY").css('z-index', '0');//ensure that all of the putty dialog is at the 0 index so it doesn't appear on top of the cmd terminal window
        xmarPutty.buildPutty("#xmarCMD");//force the styling and add a reference to the cmd window
        $("#xmarCMD").hide();//start off with a hidden cmd terminal window
    }


    function getCMDReturn() {
        $("#xmarCMD").keydown(function (e) {
            var kC = e.keyCode;
            //Enter Key
            if (kC == 13)
            {
               
                resolveCMDReturn(xmarCmd.cmdReturn());
                e.preventDefault();
            }
        });
    }


    function resolveCMDReturn(e) {

        $.each(e.cmd, function (index, jump) {
            if (jump.val1 != '' && jump.val1 != null)
            {
                resolveCommands_CMD(jump.val2);
            }
            else if (jump.equal != '' && jump.equal != null)
            {
                resolveCommands_CMD(jump.equal);
            }
            else {
                resolveCommands_CMD(jump);
            }
        });
    }







    /*
     * for entries that use the = operator
     */
    function resolveCommands_CMD(e) {
        var cmd = e.toLowerCase();
 
         Tempus_returnString.sw_append(td.minute+' '+td.day()+' '+td.month_txt()+' : '+cmd);
        /*
         * reference to the solarwinds object
         * format the string here from data entered/returned
         * pass to solarwinds
         * solarWindsRef.sw_append('<div>ass hat. man if i were any better at this it would be sinful</div>');
         */

        if (!loggedIn && cmd == 'root') {
            /*
             * looking for the correct loging command 
             */
            currArray++;
            loggedIn = true;
            //temp password
        } else if (loggedIn && !passwordIn && cmd == 'asshat') {
            /*
             * if the correct login has been entered has the correct pasword been entered?
             */
            currArray++;
            passwordIn = true;
        } else if (loggedIn && passwordIn) {
            /*
             * bot the correct password and login was entered and stored so
             * we are ready to proceed
             */

            if (cmd == 'en') {
                switch (currArray) {
                    case 2:
                        currArray++;
                        break;
                    case 14:
                        currArray++;
                        break;
                    case 32:
                        currArray++;
                        break;
                    case 34:
                        currArray++;
                        break;
                    case 36:
                        currArray++;
                        break;
                }

            }

            else if (cmd == "password1") {
                switch (currArray) {
                    case 3:
                        currArray++;
                        break;
                    case 31:
                        currArray++;
                        break;
                    case 33:
                        currArray++;
                        break;
                    case 35:
                        currArray++;
                        break;
                    case 37:
                        currArray++;
                        break;
                }
            }

            else if (cmd == "ping") {
                switch (currArray) {
                    case 4:
                        currArray++;
                        break;
                    case 5:
                        currArray++;
                        break;
                    case 44:
                        currArray++;
                        break;
                }
            }

            else if (cmd == "copy st" && currArray == 6) {
                currArray++;
            }
            else if (cmd == "copy startup-config tftp" && currArray == 7) {
                currArray++;
            }
            //temp command
            else if (currArray == 8 && cmd == "j gibbens") {

                currArray++;
            }
            else if (cmd == "erase starup-config" && currArray == 9) {
                currArray++;
            }
            else if (cmd == "reload" && currArray == 10) {
                currArray++;
            }
            else if (cmd == "y" && currArray == 11) {
                currArray++;
            }
            else if (cmd == "ip address" && currArray == 12) {
                currArray++;
            }
            else if (currArray == 13) {
                currArray++;
            }

            else if (cmd == "#conf t" && currArray == 15) {
                currArray++;
            }
            else if (cmd == "#int" && currArray == 16) {
                console.log(currArray);
                currArray++;
            }
            else if (cmd == "#interface vlan1" && currArray == 17) {
                currArray++;
            }
            else if (cmd == "ip address" && currArray == 18) {
                currArray++;
            }
            else if (cmd == "no shut" && currArray == 19) {
                currArray++;
            }
            else if (cmd == "end" && currArray == 20) {
                currArray++;
            }
            else if (cmd == "copy tftp flash" && currArray == 21) {
                currArray++;
            }
            else if (cmd == "reload command" && currArray == 22) {
                currArray++;
            }
            else if (cmd == "filename" && currArray == 23) {
                currArray++;
            }
            else if (cmd == "y" && currArray == 24) {
                currArray++;
            }
            else if (cmd == "copy tftp start" && currArray == 25) {
                currArray++;
            }
            //root
            else if (cmd == "root" && currArray == 26) {
                currArray++;
            }
            //paswordr
            else if (cmd == "passwordxmar" && currArray == 27) {
                currArray++;
            }
            //temp password
            else if (cmd == "passwordxmar" && currArray == 28) {
                currArray++;
            }else if (cmd == "password" && currArray == 29) {
                currArray++;
            }

            else if (cmd == "password" && currArray == 30) {
                currArray++;
            }
            else if (cmd == "root" && currArray == 31) {
                currArray++;
            }
            else if (cmd == "config t" && currArray == 38) {
                currArray++;
            }
            /*
            else if (cmd == "cr" && currArray == 39) {
                currArray++;
            }
            else if (cmd == "crypto key gen" && currArray == 40) {
                currArray++;
            }
            else if (cmd == "crypto key generator rsa" && currArray == 41) {
                currArray++;
            }
            else if (cmd == "1024" && currArray == 42) {
                currArray++;
            }

            else if (cmd == "wr" && currArray == 43) {
                currArray++;
            }
            else if (cmd == "show flash" && currArray == 44) {
                currArray++;
            }*/
            else {
                xmarCmd.updateError(errorsCMD(), 'dialogContent_xmarCMD');
            }
           
           // console.log(cmd);
          //  console.log(currArray);
        }

        inc();
    }

    function errorsCMD() {
        var msg = '';
        switch (currArray) {
            case 0:
                msg = 'You messed up';
                break;
        }
        return msg;
    }



    function inc() {
        xmarCmd.buildPormpt(xmarPuttyResponses[currArray], 'dialogContent_xmarCMD');
    }






}

init_xmar();//auto instantiate this object