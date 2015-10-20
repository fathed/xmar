/*
        =~=~=~=~=~=~=~=~=~=~=~= PuTTY log 2015.05.28 14:28:23 =~=~=~=~=~=~=~=~=~=~=~=

DOD MONITORING CONSENT
YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions: 
 -  The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. 
 -  At any time, the USG may inspect and seize data stored on this IS. 
 -  Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose. 
 -  This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy. 
 -  Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. 


User Access Verification

Username: authuser
Password: 

ver. 45BCT_6.0.0.76lab
Built to LAB INC2 45BCT-Template-5-17-2013.xls

POP-7920200-ST2R>en
Password: 
POP-7920200-ST2R#eras
POP-7920200-ST2R#erase st
POP-7920200-ST2R#erase startup-config 
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
POP-7920200-ST2R#reload
Proceed with reload? [confirm]
rebooting...

System Bootstrap, Version 15.1(2r)GC1, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2011 by cisco Systems, Inc.
ROMMON Integrity test 

_______________________________________ 


RSA verification Passed with v1.5 padding

Primary ROM: RSA Signature Verification Passed


c5940 platform with 1048576 Kbytes of main memory

Booting flash:/c5940-adventerprisek9-mz.SPA.151-2.GC2.bin


IOS Image Verify Test 


RSA verification Passed with v1.0 padding

Digitally Signed Release Software 

Self decompressing the image : ####################################################################################################################################################################### [OK]

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, C5940 Software (C5940-ADVENTERPRISEK9-M), Version 15.1(2)GC2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2012 by Cisco Systems, Inc.
Compiled Tue 24-Jan-12 15:16 by prod_rel_team


This product contains cryptographic features and is subject to United
States and local country laws governing import, export, transfer and
use. Delivery of Cisco cryptographic products does not imply
third-party authority to import, export, distribute or use encryption.
Importers, exporters, distributors and users are responsible for
compliance with U.S. and local country laws. By using this product you
agree to comply with applicable laws and regulations. If you are unable
to comply with U.S. and local laws, return this product immediately.

A summary of U.S. laws governing Cisco cryptographic products may be found at:
http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

If you require further assistance please contact us by sending email to
export@cisco.com.

Cisco C5940 (MPC8500) processor (revision 0x100) with 891904K/156672K bytes of memory.
Initializing flashfs...
Processor board ID FTX1530BH1Q

4 Gigabit Ethernet interfaces

flashfs[16]: 31 files, 2 directories
flashfs[16]: 0 orphaned files, 0 orphaned directories
flashfs[16]: Total bytes: 262696960
flashfs[16]: Bytes used: 127432704
flashfs[16]: Bytes available: 135264256
flashfs[16]: flashfs fsck took 2 seconds.
flashfs[16]: Initialization complete.


         --- System Configuration Dialog ---

Would you like to enter the initial configuration dialog? [yes/no]: no
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!By default, the following "voice service voip"         !!
!!sub-command is enabled:                                !!
!!   ip address trusted authenticate                     !!
!!                                                       !!
!!The command enables the ip address authentication      !!
!!on incoming H.323 or SIP trunk calls for toll fraud    !!
!!prevention supports.                                   !!
!!                                                       !!
!!Please use "show ip address trusted list" command      !!
!!to display a list of valid ip addresses for incoming   !!
!!H.323 or SIP trunk calls.                              !!
!!                                                       !!
!!Additional valid ip addresses can be added via the     !!
!!following command line:                                !!
!!  voice service voip                                   !!
!!   ip address trusted list                             !!
!!    ipv4 <ipv4-address> [<ipv4 network-mask>]          !!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


Press RETURN to get started!


*Mar  1 00:00:01.555: %VPN_HW-6-INFO_LOC: Crypto engine: onboard 0  State changed to: Initialized 
*Mar  1 00:00:01.827: %VPN_HW-6-INFO_LOC: Crypto engine: onboard 0  State changed to: Enabled 
*Mar  1 00:00:09.699: %LINEPROTO-5-UPDOWN: Line protocol on Interface VoIP-Null0, changed state to up
*Mar  1 00:00:09.699: %LINK-3-UPDOWN: Interface GigabitEthernet0/0, changed state to up
*Mar  1 00:00:09.699: %LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to up
*Mar  1 00:00:09.699: %LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed state to up
*Mar  1 00:00:09.699: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to up
*Mar  1 00:00:10.699: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up
*Mar  1 00:00:10.699: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to up
*Mar  1 00:00:10.699: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/2, changed state to up
*Mar  1 00:00:10.699: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/3, changed state to up
*Mar  1 00:00:12.595: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to down
*Mar  1 00:00:12.595: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/2, changed state to down
*Mar  1 00:00:13.595: %LINK-3-UPDOWN: Interface GigabitEthernet0/0, changed state to down
*Mar  1 00:00:13.595: %LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed state to down
*Mar  1 00:01:01.363: %LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to administratively down
*Mar  1 00:01:01.383: %LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to administratively down
*Mar  1 00:01:01.399: %LINK-5-CHANGED: Interface GigabitEthernet0/2, changed state to administratively down
*Mar  1 00:01:01.415: %LINK-5-CHANGED: Interface GigabitEthernet0/3, changed state to administratively down
*Mar  1 00:01:02.383: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to down
*Mar  1 00:01:02.415: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/3, changed state to down
*Mar  1 00:01:08.963: %SYS-5-RESTART: System restarted --
Cisco IOS Software, C5940 Software (C5940-ADVENTERPRISEK9-M), Version 15.1(2)GC2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2012 by Cisco Systems, Inc.
Compiled Tue 24-Jan-12 15:16 by prod_rel_team
*Mar  1 00:01:08.963: %SNMP-5-COLDSTART: SNMP agent on host Router is undergoing a cold start
*Mar  1 00:01:09.011: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is OFF
*Mar  1 00:01:09.011: %CRYPTO-6-GDOI_ON_OFF: GDOI is OFF
Router>en
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#int
Router(config)#interface g0/3
Router(config-if)#ip addre
Router(config-if)#ip address 148.15.237.238 255.255.255.240
Router(config-if)#no shut
Router(config-if)#
*Mar  1 00:02:01.363: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to down
*Mar  1 00:02:04.675: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to up
*Mar  1 00:02:05.675: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/3, changed state to up
Router(config-if)#end
Router#
*Mar  1 00:02:16.331: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 00:02:25.643: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/3, changed state to down
*Mar  1 00:02:26.643: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to down
Router#
*Mar  1 00:02:30.179: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to up
*Mar  1 00:02:31.179: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/3, changed state to up
Router#copy tftp flash
Address or name of remote host []? 148.15.237.237
Source filename []? pop-7920200-st2rv1-confg
Destination filename [pop-7920200-st2rv1-confg]? 
%Warning:There is a file already existing with this name 
Do you want to over write? [confirm]y
Accessing tftp://148.15.237.237/pop-7920200-st2rv1-confg...
Loading pop-7920200-st2rv1-confg from 148.15.237.237 (via GigabitEthernet0/3): !
[OK - 74590 bytes]

74590 bytes copied in 0.556 secs (134155 bytes/sec)

Router#show flash
268235K bytes of processor board system flash (AMD S29GL01GP)

Directory of flash:/

    2  -rwx    31848364   Mar 1 1993 00:12:18 +00:00  c5940-adventerprisek9-mz.SPA.151-2.GC2.bin
    3  drwx         384   Mar 1 1993 00:28:46 +00:00  ips
    4  -rwx       74590   Mar 1 1993 00:04:07 +00:00  pop-7920200-st2rv1-confg
   11  -rwx      272934   Mar 7 1993 00:55:02 +00:00  crashinfo_19930307-005502-GMT
   12  -rwx       72530   Mar 1 1993 00:00:44 +00:00  -Mar--1-00-00-44.039-GMT-0
   13  -rwx       72530   Mar 1 1993 00:00:44 +00:00  -Mar--1-00-00-44.043-GMT-0
   14  -rwx       72591   Mar 6 1993 01:47:35 +00:00  -Mar--6-01-47-34.963-GMT-1
   15  -rwx       72530   Mar 1 1993 00:00:44 +00:00  -Mar--1-00-00-44.027-GMT-0
   16  -rwx       72530   Mar 1 1993 00:00:44 +00:00  -Mar--1-00-00-44.095-GMT-0
   17  -rwx       72603   Mar 1 1993 19:09:36 +00:00  -Mar--1-19-09-36.172-GMT-1
   18  -rwx       72530   Mar 1 1993 00:00:44 +00:00  -Mar--1-00-00-43.999-GMT-0
   19  -rwx       72591   Mar 5 1993 05:32:25 +00:00  -Mar--5-05-32-25.192-GMT-0
   20  -rwx       72706   Mar 4 1993 06:23:52 +00:00  -Mar--4-06-23-51.665-GMT-0
   21  -rwx       72694   Mar 3 1993 03:01:10 +00:00  -Mar--3-03-01-09.930-GMT-0
   22  -rwx       72706   Mar 3 1993 22:25:02 +00:00  -Mar--3-22-25-02.241-GMT-0
   23  -rwx       72694   Mar 4 1993 06:46:13 +00:00  -Mar--4-06-46-12.857-GMT-0
 --More--            24  -rwx    42553700   Mar 2 1993 02:02:33 +00:00  c5940-adventerprisek9-mz.SPA.152-3.GC1.bin
   25  -rwx       72706   Mar 2 1993 02:05:46 +00:00  -Mar--2-02-05-46.424-GMT-0
   26  -rwx       73049   Mar 1 1993 22:49:58 +00:00  -Mar--1-22-49-58.301-GMT-0
   27  -rwx       73049   Mar 1 1993 22:50:19 +00:00  -Mar--1-22-50-19.041-GMT-1
   28  -rwx    50347800   Mar 1 1993 06:22:33 +00:00  c5940-adventerprisek9-mz.SPA.154-2.T.bin
   29  -rwx       72998   Mar 1 1993 06:37:22 +00:00  -Mar--1-06-37-21.734-GMT-0
   30  -rwx       73151   Mar 1 1993 00:04:20 +00:00  -Mar--1-00-04-19.994-GMT-0
   31  -rwx       73151   Mar 1 1993 00:06:39 +00:00  -Mar--1-00-06-38.741-GMT-0
   32  -rwx       73151   Mar 1 1993 00:01:27 +00:00  -Mar--1-00-01-27.059-GMT-0
   33  -rwx       73151   Mar 1 1993 00:06:30 +00:00  -Mar--1-00-06-30.493-GMT-0

262696960 bytes total (135264256 bytes free)
Router#copy tftp start
Address or name of remote host [148.15.237.237]? 
Source filename [pop-7920200-st2rv1-confg]? 
Destination filename [startup-config]? 
Accessing tftp://148.15.237.237/pop-7920200-st2rv1-confg...
Loading pop-7920200-st2rv1-confg from 148.15.237.237 (via GigabitEthernet0/3): !
[OK - 74590 bytes]
[OK]
74590 bytes copied in 11.452 secs (6513 bytes/sec)

Router#
*Mar  1 00:05:00.159: %SYS-5-CONFIG_NV_I: Nonvolatile storage configured from tftp://148.15.237.237/pop-7920200-st2rv1-confg by console
Router#reload
Proceed with reload? [confirm]

*Mar  1 00:05:07.815: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload Command.rebooting...

System Bootstrap, Version 15.1(2r)GC1, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2011 by cisco Systems, Inc.
ROMMON Integrity test 

_______________________________________ 


RSA verification Passed with v1.5 padding

Primary ROM: RSA Signature Verification Passed


c5940 platform with 1048576 Kbytes of main memory

Booting flash:c5940-adventerprisek9-mz.SPA.154-2.T.bin


IOS Image Verify Test 


RSA verification Passed with v1.0 padding

Digitally Signed Release Software 

Self decompressing the image : ####################################################################################################################################################################################################################################################################### [OK]

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, C5940 Software (C5940-ADVENTERPRISEK9-M), Version 15.4(2)T, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Wed 26-Mar-14 18:29 by prod_rel_team


This product contains cryptographic features and is subject to United
States and local country laws governing import, export, transfer and
use. Delivery of Cisco cryptographic products does not imply
third-party authority to import, export, distribute or use encryption.
Importers, exporters, distributors and users are responsible for
compliance with U.S. and local country laws. By using this product you
agree to comply with applicable laws and regulations. If you are unable
to comply with U.S. and local laws, return this product immediately.

A summary of U.S. laws governing Cisco cryptographic products may be found at:
http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

If you require further assistance please contact us by sending email to
export@cisco.com.

Cisco C5940 (MPC8500) processor (revision 0x100) with 891904K/156672K bytes of memory.
Initializing flashfs...Installed image archive

Processor board ID FTX1530BH1Q

4 Gigabit Ethernet interfaces

flashfs[20]: 31 files, 2 directories
flashfs[20]: 0 orphaned files, 0 orphaned directories
flashfs[20]: Total bytes: 262696960
flashfs[20]: Bytes used: 127432704
flashfs[20]: Bytes available: 135264256
flashfs[20]: flashfs fsck took 2 seconds.
flashfs[20]: Initialization complete.
 WARNING: Command has been added to the configuration but Type 4 passwords have been deprecated.
 Migrate to a supported password type%No specific protocol or access-group configured in class IA_CMAP_MCAST_OUT for inspection. All packets will be dropped
%No specific protocol or access-group configured in class IA_CMAP_MCAST_OUT for inspection. All packets will be dropped
%No specific protocol or access-group configured in class IA_CMAP_MCAST_IN for inspection. All packets will be dropped
%No specific protocol or access-group configured in class IA_CMAP_MCAST_IN for inspection. All packets will be dropped
NLS timeout set to 1
Control Relationship ID set to 1

NHRP MIB is not enabled: Trap generation suppressed
However, configuration changes effective
NHRP MIB is not enabled: Trap generation suppressed
However, configuration changes effective
NHRP MIB is not enabled: Trap generation suppressed
However, configuration changes effective
NHRP MIB is not enabled: Trap generation suppressed
However, configuration changes effective
 Warning: The CLI will be deprecated soon
 'radius-server host 148.15.237.226 auth-port 1812 acct-port 1813 key 7 050C025E731F1A5C5D'
 Please move to 'radius server <name>' CLI.
 Warning: The CLI will be deprecated soon
 'radius-server host 148.15.236.66 auth-port 1812 acct-port 1813 key 7 0201000A59555B7408'
 Please move to 'radius server <name>' CLI.


Press RETURN to get started!


*Mar  1 00:00:03.887: %PA-3-PA_INIT_FAILED: Performance Agent failed to initialize (Missing Data and APPX License)
*Mar  1 00:00:06.423: %LINK-3-UPDOWN: Interface GigabitEthernet0/0, changed state to up
*Mar  1 00:00:06.423: %LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to up
*Mar  1 00:00:06.427: %LINK-3-UPDOWN: Interface GigabitEthernet0/2, changed state to up
*Mar  1 00:00:06.427: %LINK-3-UPDOWN: Interface GigabitEthernet0/3, changed state to up
DOD MONITORING CONSENT
YOU ARE ACCESSING A U.S. GOVERNMENT (USG) INFORMATION SYSTEM (IS) THAT IS PROVIDED FOR USG-AUTHORIZED USE ONLY. By using this IS (which includes any device attached to this IS), you consent to the following conditions: 
 -  The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations. 
 -  At any time, the USG may inspect and seize data stored on this IS. 
 -  Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG authorized purpose. 
 -  This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy. 
 -  Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details. 


User Access Verification

Username: authuser
Password: 

ver. 45BCT_6.0.0.76lab
Built to LAB INC2 45BCT-Template-5-17-2013.xls

POP-7920200-ST2R>en
Password: 
POP-7920200-ST2R#conf t'
                       ^
% Invalid input detected at '^' marker.

POP-7920200-ST2R#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
POP-7920200-ST2R(config)#cry
POP-7920200-ST2R(config)#crypto k
POP-7920200-ST2R(config)#crypto key g
POP-7920200-ST2R(config)#crypto key generate rsa
The name for the keys will be: POP-7920200-ST2R.45BCT.army.smil.mil
Choose the size of the key modulus in the range of 360 to 4096 for your
  General Purpose Keys. Choosing a key modulus greater than 512 may take
  a few minutes.

How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 0 seconds)

POP-7920200-ST2R(config)#exit
POP-7920200-ST2R#wr
Warning: Attempting to overwrite an NVRAM configuration previously written
by a different version of the system image.
Overwrite the previous NVRAM configuration?[confirm]
Building configuration...
[OK]
POP-7920200-ST2R#exit

































POP-7920200-ST2R con0 is now available





Press RETURN to get started.

*/









