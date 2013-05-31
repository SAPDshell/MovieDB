

HANA XSW Engine Example Application

- uses SAP UI5 
- contains HTML/JavaScript
- contains Server Side Javascripting for SAP HANA XS


Usage

After forking please maintain

deployment.json
change hostname, enter URL of your HANA instance

setup service Hook as WebHook URL
http://username:password@dshell.saphana.com:1237/?repo=https://github.com/gituser/helloworld

change username as your HANA user name change password as your HANA password change gituser to your Github user name

example: http://system:manager@dshell.saphana.com:1237/?repo=https://github.com/SAPDshell/helloworld

From then on every commit to your repository triggers deployment to the HANA instance

Error Handling

In case deployment does not seem to work, simply copy and paste WebHook URL into the adressfield of your browser and execute. You should see the error message. For techical reasons the messages cannot be shown in Github