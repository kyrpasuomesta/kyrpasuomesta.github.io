
var joku = document.getElementById('jotain');
var btn = document.getElementById('submit_btn')
var teksti_input = document.getElementById('teksti_input'); //se, mihin kirjoitetaan tekstiä
var tekstiboksi = document.getElementById('tekstiboksi');
var nuoli = document.getElementById('nuoli');
var nuoliWidth = nuoli.getBoundingClientRect().width;
var currentUser = "";
var pornoKuva = document.getElementById("pornoKuva");
var mediaqueryChecker = document.getElementById('mediaqueryChecker');
var yla_valikko_button = document.getElementById('yla_valikko_button');
var menu_bar_container = document.getElementsByClassName('menu_bar_container')[0];
var mobileModeOn = false;


var d = new Date();
var ms = Math.round((d.getMilliseconds())*0.01); //saa arvon välillä 0-10
if (ms >= 7) {
	ms -= 4; 
}
//var ms = 2; /*for testing*/

/*KUVIIN LIITTYVÄT ARRAYT*/

var mahdollistenKuvienKootIsotRuudut = [
	/*kuva0*/"0.2em", 
	/*kuva1*/"0.6em", 
	/*kuva2*/"0.4em", 
	/*kuva3*/"0.5em", 
	/*kuva4*/"0.1em", 
	/*kuva5*/"0.1em", 
	/*kuva6*/"0.3em"
];

var mahdollistenKuvienKootMobiili = [
	/*kuva0*/"4px", 
	/*kuva1*/"10px", 
	/*kuva2*/"7px", 
	/*kuva3*/"7px", 
	/*kuva4*/"4px", 
	/*kuva5*/"4px", 
	/*kuva6*/"4px"
];

var mahdollisetKuvat = [
//kuva0
`##+=*+##########%%@%##=-+###%@%#*=+#%%%#%#+---=*+--#@@=  .:**#***+++++##+....#%*  .-=+*+*
##*=*#%*****+#*+***#*%+::*#%@@@@%=+%%%%%###%%##=-:-%@@%**=***%%@%@%%*-+#%:.--##*++::-=**#*
*+*+*==##+*********+:::-=##%##@%%##@@@@%#**%##*:::-@@@@%#=#**%%%%%%%#**#*++*#*#***#+--:+##
%%@%@%#@@@@%%%@@%#-:..=%@@%##%%%%#%%@@@@%#%%#%+:+*-%@@@=-++**#%%%%%%*=:+###%###***+:::.:*#
=#+*%###%%%**%@%+:...+@@@@#*#%%%%#%#%%@@@@%%##+*#*+@@@@%*+===+++++==-...:::::..::-=-----*#
.-+:*+++##**#%#-...:*@@@@%**%%@@%%+###@@@@*--====-::::::::::---=====+++++***+++*+++*##%%%%
:::.=#-+*%*==-:...-*@@@@@@%###%%@%*###%@@@@%++=+=-+*##*#*****++++========---=--=---=++++++
+=+-.#=+*+=::..:--+%@@@@@@%#***#%%**#%%@@@@@@%+==-=========---=-----======-----::-:.  ....
#**=:+*++*-::::-##@@@@@@@@%%%#**++++**##%@@@@@%#**+===+=++=+========--=====----:.. .....::
::......-:::::-+%@%@@@@@@@@%%#*=---------=*%@@##*=+===+========------===--==--============
..... :-::::::===*@@@@@@@@@%*=--:::::-====-=*%#*#*=-=-=--:-::--::=::---:::--::--::-::-:-::
-------::::::-==+@@@@@@@@@%+--:::-=*##*#*=--=#*-##=---------------::------------::--------
=====-:::::::-==#%%@@@@@@%+===+===+###*+-:--=+*=%#=------::::::::::::::--::::::::--------=
:::==:::...::-=+#%@@@@@@%+**#%%#*::---::.::-=++%%+:::::::::::::::::::::::::::::::::::-----
..:=-:::..:::-=--%@@@@@@%*#%%#**+=:.:::-----===#*--:::::::::::::::::::::::::::::::--------
.:-=-:..::::--=--#@@@@@@%##*+=-:=+-..::--=++===**--:::::::::::::::::::::::::::::--------:-
:-==-:.:::::-==:-#@@@@@@%#*+=-:-=++==+*-:=++===#%-::::::::::::::::::::::::::::::::::------
::++++==--:::==-=*@@@@@@@%#**++==+****==+==-==+%%*-:::::::::::::..::-::::::::::::::::::-::
::=****++====+====%@@@@@@@@%*++++**#*+===+=--=++%%+-::::::::::.....::::::::::::::-::::::::
---=****+++++==--+#@@@@@@@@@@%*+++***++*+-:-=+*==#*-:::::.         .::::::::::::::::::::::
::::-****+++++==-=*%@@@@@@@@@@@@#*+++++=-==+***---=.                 .:::::::::::::::--:::
:::::=+***+++++===-+@@@%@@@@@@@@@@#***********=---::..                 .::::::::::::::::::
::::::=+*++++++======%@@@@@@@@@@@%#***++****++-----::-:                :-:::::::::::::::::
:::::::-***++++++=====#@@@@@@@@@%+******+++++=:::----:::.             .--:::::::::::::::::
::::::::=*****++++===----=+++=-===******++++=::::::-::::::           .::--:::::::.::.....:
::::::-::=+***++++==-----         :+*******=:.::::.:::::::.         ..:::--:::::...:::::::
::::::::::-+++++++===----.          ...:......:::.....              ...::---::::::.:::::::
::::.::::---=++*+++====--:            .                    ..:::.....:..::---:::::::::::::
-:::::::----:=++*+++=====-                             .::::::.......:::.::---::::::::::::
:---::::::::::=++++++==++=                   ...:::-=+*+=-::...........::::::-=-::::::::::
----::::::::::-=+++++++*+-               ..:::...::::-----::...........:::::::---:::::::.:
----:::::::::::::=+++++++.             ............::::-=-::....   ...:----:::::--:::::...
---:::::---::::---=++***:           .................:::==:::...   ...::--=--:::---....:::
-:::::-----:::----=--=+-..         ...................:::=-:::........-:-=+=-:.::---::::::
.............::::===+++-::..      ::::.......:.......:::::=-:::......:---=+=--::::---:::::
:::..:....::::------===*=-::    .--:::....::....:::...:::-=*=--::::::::=======-:::---:::..
::.::::.:::.......:::::+==-:....---:=-:...::::==-:-:..:::-=#*+==---::::--===+=-::-----:.:.
:::::...:...   ....::::==-+=-:.:=-=---=-::::::-----:::::-=+=**+++==---==+++=--::---::--...
:::..:::.....  ......:-=--+++=::-=+++-:-=-::--------:---=+*-:+***+++*++=--::::::---::-=:..
::....................=:-=+==++-::-++++-::===---------==+*=:::=***+=--:::::::---------=-.:
:....::.:::..........:-:.=--+=+*+-::-==+==-=*++======+++*+:::----::::::::---=====--====+::
:::::::::::..........--:.:+::+*=++======++=-:=+*+++****+=--:::::::::::--==========++*+=-::
::::::::::..:........:..::+-:+=****+++++++==--:-====-:::::::::::--====++++++++++++=-:.::::
::::::::::::............:::=++++***+**+++===--::::::::---=====+++*********+==::.:::..::::.
.::...:::......  ................-+*******+=========+++++********#######*-....::::::::....
:::::::......................::...-*#**#***********##**********###***##**:............ ...
:::::..........................::::####*************++++++++++******##**+.:::....:.....:::
:::...:.........................:::##*************+++==--::::----==+***+:..............:::
...:.............................:=+======+++****+=-:::::::::------==+-...........:.:..:::
.:...:.:::::.................:::-=====----:::---::::::::::::-----==++-:..:::::..:::.......
.:........................::--==--------::::::::::::---------==+++++-:..:::::..::::....:::

`, //kuva1
`
⠀⠀⠀⣴⣾⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⢿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣉⣩⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣼⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣾⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣾⣿⣿⠉⣿⣿⣿⣿⣿⡄⠀⢀⣠⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠙⣿⣿⣧⣿⣿⣿⣿⣿⡇⢠⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⠿⢿⣿⣿⣿⣿⠿⠙⠻⠿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡟⣩⣝⢿⠀⠀⣠⣶⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣷⡝⣿⣦⣠⣾⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣮⢻⣿⠟⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠻⠿⠻⣿⣿⣿⣿⣦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⠇⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⠇⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠀⠀⠀⢀⣴⣿⣿⣿⣿⣟⣋⣁⣀⣀⠀
⠀⠀⠀⠀⠀⠀⠹⣿⣿⠇⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇


`, //kuva2
`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣹⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣋⣴⣿⣿⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣯⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡏⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⢃⣸⣿⣿⣿⣧⢹⣿⣿⣯⣿⣿⣿⡿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣬⣝⡃⣿⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⠟⣱⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⣿⣷⠸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⢏⣼⣿⣿⣿⣿⣿⣿⡿⢃⢸⣿⣿⣿⣿⣿⣿⡇⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⠇⣿⣿⣿⢃⣾⣿⣿⣿⣿⣿⣿⡟⣡⣿⡆⢻⣿⣿⣿⣿⣿⣧⢸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⠏⣾⣿⣿⣿⣿⣿⣿⠏⣴⣿⣿⣧⠘⣿⣿⣿⣿⣿⣿⡆⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⣴⣿⣿⣿⣿⣿⣿⣿⢠⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⢋⣼⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⡇⢸
⣿⣿⣿⣿⣿⣿⣿⡏⣴⣿⣿⣿⣿⣿⣿⡿⢁⣿⣿⣿⣿⣤⣿⣿⣿⣿⣿⡇⢾⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⡇⢸
⣿⣿⣿⣿⣿⣿⡟⢰⣿⣿⣿⣿⣿⣿⡿⢡⣾⣿⢀⠐⢈⢋⡙⠛⢟⠉⢉⣿⡈⣿⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿⣿⢁⣿
⣿⣿⣿⣿⣿⣿⢡⣿⣿⣿⣿⣿⣿⣿⠃⠚⠛⠛⠛⠛⠛⠛⠛⠿⠿⠿⠿⣿⣷⡘⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⡿⢸⣿
⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⣤⡙⣿⣿⡇⢸⣿⣿⣿⣿⣿⡇⢸⣿
⣿⣿⣿⣿⡟⢰⣿⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⣌⣿⡌⢿⡆⢸⣿⣿⣿⣿⣿⢁⢸⣿
⣿⣿⣿⣿⢡⣿⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⢀⣧⣿⣿⣆⠃⢸⣿⣿⣿⣿⡟⣸⣿⣿
⣿⣿⣿⠏⣼⣿⣿⣿⣿⣿⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⢀⣾⣿⣿⣿⣿⣧⠸⣿⣿⣿⣿⢁⣿⣿⣿
⣿⣿⡟⢰⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⣾⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⡇⣾⣿⣿⣿
⣿⣿⢁⣿⣿⣿⣿⣿⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿⢠⣿⣿⣿⣿
⣿⠋⣬⠁⠌⠿⡿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢸⣼⣿⣿⣿⣿⣿⣿⡇⢸⡿⣸⣿⣿⣿⣿
⠁⣼⣿⣿⣿⣮⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿⣿⣿⣿⣿⣿⣿⣷⢸⡇⣿⣿⣿⣿⣿
⣆⢿⣿⣿⣿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⠁⣿⣿⣿⣿⣿
⣿⡌⢻⣿⣿⣿⣿⣧⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⠀⣿⣿⣿⣿⣿
⣿⣿⠈⢻⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⢰⣿⣿⣿⣿⣿
⣿⡿⢸⡆⠻⣿⣿⣿⣿⠿⣶⣬⣉⡻⢿⣿⣿⣿⣿⣿⡿⠟⣋⣴⣜⠻⣿⣿⣿⣿⣿⣿⣿⣿⡟⣠⠇⠘⣿⣿⣿⣿⣿
⣿⠋⠀⣴⣧⠹⣿⡏⣉⣛⡲⠤⠉⣛⣀⠈⠙⢿⣭⣥⢠⣿⣿⣿⣿⣷⣤⣝⣛⢻⣿⣿⡿⢋⡐⣋⠌⣸⣿⣿⣿⣿⣿
⣿⣿⣶⣿⣿⣧⡙⢷⣄⠩⣛⠛⠶⠶⠆⠐⠒⣶⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⣤⠔⠃⣼⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣮⠻⣶⡙⢿⣿⣿⣷⣶⣾⣿⣿⠇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⡀⠈⡥⢢⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⡉⠈⣸⣿⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⣈⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

`
,//kuva3 
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣶⣤⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⠟⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣬⣉⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣍⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣷⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⡟⢀⣿⣿⣿⣷
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣶⣶⣄⠀⠀⣸⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⡟⠀⠹⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠇⢿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⠁⠀⣀⣈⠻⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⠟⠀⢸⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣷⣜⢿⣿⣿⣧⠀⠀⠀⠀⢀⣀⣈⡙⠛⠛⠋⠁⠀⠀⢸⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣧⣝⣛⣡⣶⣶⣾⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀ ⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⠛⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀ ⠀⠀⠀⢹⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣤⣤⣤⣤⣤⣼⣿⣿⣿⣿⡇⠀⢹⣿⣿⣿⣿⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⣼⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⢀⣿⣿⣿⣤⣤⣄⣀⣀⣀⡀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠻⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀⠈⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

`, //kuva4 
`########################################*****##*******++**++*******+++++++*####################
######################################*#*++*##**++++++++**+*****+++=====+++*###################
###################################*#********+++++++++***#****+++=======+++**##################
###############################***********++++**++******+*+++++++=======+++**##################
##########################**************+++************++++*+++++=======+++***#################
########################**************++++*****#******+++++++*++++=====+++++**#################
######################**************++++***##*******++++++++++++++++++++++++**#################
#####################**#**********+++***##***++++**********+=++***+++++++++**##################
###################***************+**##***++==+++**********+:=***##**++++++**##%%##############
##################****************##*************++*********-:**#%##*++++***###################
#################****++++++++***##*****+++++++++++++++++*****:=#%#**+++++***##%%###############
##############+****+++++++++++*##****++++++++++++++++++++***#::%%%*+++++***####################
############+++***++++++++++++*#**++++******+++++++++++++***#-:%%%#*++++***####################
############+¤+**++++++++++++*#**++++**###%**+++++++++++***##-=%%@#*++++**##%##################
############+++**++++++++++++*#**+++++***##**++++++++++***###-*##%%*++++**#####################
#############+***+++++++++++*##**+++=+++*++++=-====+++****##--###%%#*+++**#####################
###############**+++++++++++*###*+++++++++++++++++++++***##-:*###%%#*++++*#####################
###############++++++++++++*##%#**++++++++++++++++++***##*-:+####@@#*++++**####################
###############*+***+++++**##%%###**++++++++++++++**####+-:=####%@%#*++++**####################
#################********##%%%*##%###***********####%*+--::*####%@%#*++++**####################
##################%%%%%%%%%%#**#####%%%%#######%%#%%+-::::+####%%###*+++++**###################
####################%%%@%%#*********######*#####******#######%%%=##**++++***###################
######################%%##***************+=++++++++***#####%%%%=##***++++***###################
######################%%###************#*++++++++++****###%%%%####**+++++***###################
######################%%%******************++++++++***##%%%%%#####*++++++***###################
#######################%%%*******************+++****##%%%%%%+#####+++++++***###################
########################%%*************************#####%%%+######+++++++*****#################
########################%%%******************+++*****##%%%########++++++**++++*################
#########################%%***************************##%%+######**+======++++*################
##########################%***************************##%%*######+*+=======+++*################
##########################%****************************#%%#######=#+======++++**###############
##########################%%***************************#%%########**+=====++++**##%############
###########################%%*************************##%%%*######=*++=====+++**##%############
############################%%************************#%%%%%#=#####+*++====+++**###############
############################%%*************************%%#%%%%*#####**++====+++**##############
############################%%********************************##*=##=#*+++==+++**##############
#############################%%********************************####*==#*++++++++**#############
#############################%%***********************************###*+#*+++++++**#############
#############################%%%************************************###%#**+++++**#############
@%#############################%%%*****************************+*****###%#**++++***########%###
@%##############################%%%****************************+++****#####**++++****##¤¤¤#####
@%##############################%%%%*******************+*******++++****####%#*+++++**##¤¤¤¤####
@%###############################%%%***************************+++++****####%#*+++++*#%########
@%################################%%%**************************++++++****####%#*++++*##########
@%#################################%%%**************************+++++****#####%*+++++*#########
@%#################################%%%%******************++++++***********####%#**++**#########
@%##################################%%%**************************+++++****####%%#*****#########
@%##################################%%%*************************++=+++*****###%%%#******##%####
@###################################%%%************************+*++++******#++#%%#********#####
%###################################%%%*********++++++++++*****+++++++****###%%**++=++++++***+*
####################################%%%#*******+++++++++++*****++++++*****###%%#*=:=**+=++=++==
`, //kuva5
`                                   #.=+++====--==+-+                                     
                                   #                =#                                    
                                  +-                :%                                    
                                 ++                -+*==:                                 
                        .       =#=-=------=--:.--:.    =*                                
                      -#=++++===%#*=-::::::--*@-   .::   =+                               
                      -*                     -+ =*@@@*:.  .+                              
                       +=                   -=+@@@@@@=      *.                            
                        -+-              .-*#@@@@@@@@@#-    .#                            
                           :=*###+=======@@@@@@@@@@@@@@@%=::-%=                           
                             +@@@*#*-  .+@@@@@@@@@@@@@@@@@%**@-                           
                             -#@@*+#+= ..=+@@@@@@@@@@@@@@@@%+.                            
                              #@@-         :%@@*@@@@@@@@@@@-                              
                              #@@%.  :::-   :=%+:@@@@@@@@@@=                              
                              =%@@@- +***=   .:*#:%@@@@@@@@%:                             
                               +@@@@*+%%%#-  .=+-#%@@@@@@@@@@+                            
                               .=*@@@@.    :*@##@@@@@@@@@@@@@@+                           
                                .#@@@@@##%@%*+*##%@%###@@@@@@@@.                          
                                +%@@@@@@%=           :+#@@@@@@@=                          
                               +%@@@@@@*              +-%@@@@@@#                          
                              .@@@@@@@#              -- =#@@@@@@*                         
                             :*@@@@@@@.              *-:::%@@@@@@#:                       
                            ::@@@@@*-*              ##--:  %@@@@@@@.                      
                            .+@@@@@:#:            +%#==:   *@@@@@@@%.                     
                           :-@@@@@#-%            :@%#=. . .#@@@@@@@@@-                    
                            =@@@@= *.            %%=:--.  :+%@@@@@@@@%                    
                            =%@@- -=            #*==:      :%@@@@@@@@#                    
                            +@@* =#            #*==:..    .+%@@@@@@@@%                    
                           .+%@=:#:           ##--:.    .-:..@@@@@@@@@+                   
                           =#@@@*=          .%*==--=--::::::+%@@@@@@@@+                   
                          -%@@@@#          .%%*+#+==::.:-----=*@@@@@@@*                   
                         =@@@@@@=.        :@%#+: :-=-:::::::++%@@@@@@@%:                  
                         @#@@%@*.        :@*-.-+##*==-------+%%@@@@@@@@.:                 
                         -+#@+           #: =%@#+-  .+=-----==+*%%@@@@@*-                 
                          *#.        :  #:.%@%*.     ==.    ::  -#++#@@@%-                
                        .#+           +@* %@%#%=::  ..=-   ..:+:. =..-+##@%+:             
                       =@-           ##*@*@%--*: ..    :-=::=--+--:.  =*#-##%#-           
                      *#.          .%*  =@%#- -*:         .::=++::..   :+#-+=+%%-         
                    :%=           =@=   =@*#=::#:    --++===--:::---=++=*+%.===%@#.       
                   +#.          =@#.    .@*#+-:=#=+*=-.                 -*%*   .+%@-      
                 -%=          +@#:       *%*%*+*+-                        -@-+++==+@-     
               -#+         -*%=.         =@@%+:                           :@+:     #%     
     :*#*+++++#+.      .=*%+:            +@*                              ==       -@-    
    =@+:             =##=.               .@=                              %.       :@+    
::-%=*.+-        .=*#=.                  :@=                             ++        -@*    
*=##*:* + +=----+@#=-::::..              :@+                            +*         =@-    
+*+=*##+#++*@**+=*--:-.-.:--==-=-:-------=@#                          :#-          %%     
=*++--+*+##*=----+-:::.- :::::.:..:::-:=--@@                     .:=*%=           *@.     
.*=+=-*=-+=---::-=-:.:.: ::::... ....::-::*@:                  :-:..=#=-.        %@+::::.:
 =-++-*-===--:-.-=:..::. ::::... .  .:::..-@+                       .%          =@--::.: #
  :-+-*--==-=-: --:. ::: .::...  .   .... :%@                        @         .@*.-:::: *
   .=-+-::=-.:  :.:. ... .::..        .....:@*                       @         #%-.-:::: +
    --==:.:-    .      .  .:..   .    ..... #@.                     :%        #@=-.:.::: +
     ::-.  :           .   .         ..  .. -@%                     +=      .%@+--...:.: *
       :   :                         :.. .. :=@*                    %      =@%=--=.. : : +

`, //kuva6 
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣠⡀⠄⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⢢⣓⡴⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⢿⣿⣿⣿⣿⡿⣝⣮⢳⣍⠶
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠊⠉⠉⠀⠀⠀⠀⠠⢌⣉⠉⠓⠢⣄⠀⠀⡀⢀⣠⣀⢆⣬⡱⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣾⡿⣼⢯
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠊⡡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⢄⣀⠩⠖⠋⠉⠁⠉⠉⠁⠐⠢⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⣯⣷⢿⣿⣿⣷⣶⣶⣤⣀⠀⠀⠀⠉⢿⣿⣿⣿⣿⣿
⠀⠀⠀⡐⡈⢦⠱⣈⠂⡁⢀⠠⡀⢂⢀⡴⢋⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢄⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠀⠀⠀⠀⣠⣤⣶⣧⣶⣯⣶⣦⣴⣮⠦⠉⣝⣯⣿⣿⣿⣿⣿⣦⣄⠀⠈⠻⢽⣿⣿⣿
⠀⢠⠰⡡⢝⢢⢣⡔⢦⣱⢉⡐⡰⢢⠏⠠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢑⠄⠀⠀⣀⣀⣠⣯⣅⣀⠀⠀⣠⣊⣠⣶⣿⣿⣿⣿⣿⣿⣿⣱⡞⣫⣥⡿⣿⣿⣿⣿⣿⣿⣮⢧⠀⠀⣠⢬⣫⠟
⠈⠄⣒⡽⣎⢯⣳⣹⢦⡛⢦⢱⣱⠃⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢾⡿⢿⣿⣿⣤⣬⣙⡻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣿⣿⣿⣿⣿⣿⡟⢷⣸⠷⠋⠁⠀
⠖⠱⣈⡶⢯⡗⣯⢞⡶⡙⢎⢒⠃⡰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⢻⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠛⣿⣿⣿⣿⣿⡞⡛⠀⠀⠀⠀
⠴⠳⣝⢾⡹⡽⣩⢞⣰⣵⠞⡟⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣌⡹⠿⣿⣿⣿⢋⠩⠾⠟⢻⣷⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀
⡬⠓⡌⢣⣝⡶⣽⢺⡱⣎⣽⡇⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠸⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠙⢄⠀⠀⢰⡟⠿⣿⣿⣾⣿⣿⣿⠀⠀⠀⠀⠀⠄
⢠⡱⢜⡳⢯⡽⣷⡿⣟⣯⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢋⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠱⠀⠉⠻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⢣⠀⠀⢠⣶⠄⣩⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⢡⢓⣬⠷⣯⣟⣷⣿⣿⡻⣭⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⡾⠁⣾⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⢃⠀⠀⠙⡘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢀⣸⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠂
⣛⢾⣼⣻⣿⣿⣟⢿⣻⣷⣷⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠶⣿⡇⢸⣿⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⠂⠀⠀⠁⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠄⠀
⠛⠛⠾⣟⣧⢷⡺⣭⢻⡽⣯⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⢷⣹⢻⢀⢨⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⣰⠀⠀⠀⠀⠀⠀⠀⠀⠄⡘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣉⡸⡀⠀⠀⠀⠀⠀⠁⠀
⢠⠀⠀⢿⣻⣼⢣⡟⣮⢳⣯⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠼⢿⣾⡬⠚⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣷⠋⡀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣷⣀⠀⠀⠀⠀⠁⠀
⣦⣝⢢⣂⢿⣳⣏⢾⡱⣏⠾⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡐⢨⠋⠀⠀⠀⠀⠈⠓⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠖⠛⠉⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⡷⣞⣳⡽⣾⡽⣾⢧⡻⣜⢯⣻⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠑⢹⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⡿⣡⢣⡙⠵⡻⢽⣯⡗⣯⢞⡵⣇⠈⠙⠻⣷⣶⣦⣤⣀⠀⠀⣀⣤⣶⣶⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣧⣄⡰⠤⠀⣀⣤⡤⣾⠋⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡧⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⢳⠰⣇⢮⡱⡙⢎⡷⣿⣎⠿⣜⢿⡀⠀⠀⠈⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⢏⠿⡹⠟⠻⠛⣝⢧⡘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠁⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⢣⠙⡺⢯⡳⢍⠎⣼⣳⢯⣟⡼⣫⢧⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⢃⠱⠈⠂⠁⠀⠀⠀⠀⠈⠙⢟⠦⣄⣀⠀⠀⠀⠀⣀⣤⡒⠾⠛⠃⢦⡀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⣿⡿⠂⠀⠀⠀
⣧⠙⡔⠫⠜⡌⢺⢴⢫⢿⡽⣞⡵⣻⣆⠀⠀⠀⠀⠀⠀⠀⠉⠋⡝⣿⠿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⡀⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠉⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠦⣉⢜⣡⠳⣌⠳⣎⢻⣎⢿⣯⣟⣷⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠁⡿⠀⠈⠛⠿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠓⣌⠞⡴⢫⡜⣳⣮⣗⢾⣯⣿⡿⠿⠟⢧⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠉⠙⠛⠿⠿⢿⣶⣦⣄⣀⣀⣀⣠⣞⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢫⠔⣫⡕⣣⢞⣵⣯⠿⠋⠉⠀⠀⠀⠀⠀⠓⢤⡀⠀⠀⠀⠀⠀⡞⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⢛⣿⣿⣿⣟⡷⢶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢧⢻⣴⢻⣽⡿⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠣⢀⠀⢠⡼⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣯⣟⣿⢳⢮⡵⣩⡛⡖⢦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣎⢷⣺⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢌⣼⠏⠀⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⢯⣟⡻⣽⢻⣮⢵⣣⢝⡹⣒⠦⣍⡹⣙⠶⡤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢮⣳⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡿⠟⠐⠉⠀⠀⠀⠀⠀⢀⠀⠀⠀⣀⣤⣴⣿⣿⣿⣟⣯⣟⡞⣯⢻⡽⣞⠷⣎⡷⣭⢳⣳⣬⡒⣍⠳⢮⣜⡲⣌⢳⣒⢦⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

`]

pornoKuva.innerHTML = mahdollisetKuvat[ms];
//var nykyinenPornosivu = "pornhub.com";

/*TARVITTAVAT ARRAYT*/

priorityKomentojenMaara = ["empty", "sos", "exit"];
pornoSivujenMaara = ["pornhub.com", "suomiporno.net", "xvideos.com"];
pornoSivujenActiveClass = ["PHsearchActiveClass", "SuomipornosearchActiveClass", "xvideoActiveClass"] //checkkaa, että tämä vastaa ylhäällä olevia

var currentPornWebsite = [""];

function checkScreenWidth() {
	if (window.getComputedStyle(mediaqueryChecker, null).getPropertyValue("width") == "20px") {
		//console.log("viewport on yli 600px");
		pornoKuva.style.fontSize = mahdollistenKuvienKootIsotRuudut[ms];
		pornoKuva.style.textAlign = "initial";
		teksti_input.placeholder = "";
    if (mobileModeOn) {
      mobileModeOn = false;
      console.log("mobiili: " + mobileModeOn);
      priorityKomento("exit");
      if (currentPornWebsite.length > 0) {
        priorityKomento("exit");
      }
    }

	} else if (window.getComputedStyle(mediaqueryChecker, null).getPropertyValue("width") == "1px") {
		//console.log("viewport on alle 600px");
		pornoKuva.style.fontSize = mahdollistenKuvienKootMobiili[ms];
		pornoKuva.style.textAlign = "center";
		//teksti_input.placeholder = "Etsi " + nykyinenPornosivu + ":";
		if (!mobileModeOn) {
			mobileModeOn = true;
			console.log("mobiili: " + mobileModeOn);
      pornoSivustoHakutilaan("pornhub.com", "PHsearchActiveClass");
		}
	}
}


/* MUUT KOMENNOT */

/*
function perkele(x) {
	if (x.classList.contains("red")) {
		x.classList.remove("red");
	} else {
		x.classList.add("red");
	}
};


joku.onclick = function() {perkele(this)};*/	

function returnStringJosEiTyhja(inputti) {
	var inputtiStringiksi = inputti.toString().trim().toLowerCase();
	if (inputtiStringiksi.length != 0) {
		return inputtiStringiksi;
	} else {
		return "";
	};
};

function emptyTekstiBoksi(boksi) {
	boksi.value = "";
}

function loginFunktio() {
	nuoli.style.paddingLeft = nuoliWidth + "px";
}

function createElement(tagi, sisaltoTeksti, paaMaara) {
	var paragraph = document.createElement(tagi);
	paragraph.innerText += sisaltoTeksti;
	paaMaara.appendChild(paragraph);
}

function createLinkElement(sisaltoTeksti, linkki, paaMaara, uudelleValiLehdelle) {
	var linkElement = document.createElement("a");
	linkElement.innerText += sisaltoTeksti;
	linkElement.setAttribute("href", linkki);
	if (uudelleValiLehdelle) {
		linkElement.setAttribute("target", "_blank");
	}
	paaMaara.appendChild(linkElement);
}

function mikaKomento(inputti) {
	// Jos ensimmäinen child (eli toisinsanoen kokmentoVastausTxt[0]) kyseissä arrayssa on:
		// 0: tekstiä
		// 1: funktio, joka tekee jotain
	if (inputti == "info") {
		return [0, "Tämä nettisivu on tarkoitettu itseään myyvien yksityisyrittäjien (eli katuhuorien) löytämistä varten.",
		"Sivu toimii kirjoittamalla komentoja alla olevaan tekstikenttään (syötteeseen).", 
		"", "Tällä nettisivulla voit suodattaa OnlyFans-katuhuoria sijainnin perusteella ja täten löytää lähimmän katuhuoran!",
		"", "Tämän lisäksi voit tyydyttää tarpeesi käyttämällä sivuun integroitua pornosivustojen hakutoimintoa.", 
		"", "Saadaksesi lisää tietoa sivun komennoista, kirjoita syötteeseen 'ls'", "<br>"];
	} else if (inputti == "login") {
		return [1, "LoginFunktio"];
	} else if (inputti == "logout") {
		return [1, "LogoutFunktio"];
	} else if (inputti == "empty") {
		return [1, "emptyFunktio"];
	} else if (inputti == "ls") {
		return [0, "Mahdolliset komennot:", "&nbsp; <u class='komentoKirjoitettuna'>'ls'</u>: lista mahdollisista komennoista", 
		"&nbsp; <u class='komentoKirjoitettuna'>'pornhub'</u>: etsi sivustolta pornhub.com", 
		"&nbsp; <u class='komentoKirjoitettuna'>'suomiporno'</u>: etsi sivustolta suomiporno.net",
		"&nbsp; <u class='komentoKirjoitettuna'>'empty'</u>: poista lista edellisistä komennoista", 
		"&nbsp; <u class='komentoKirjoitettuna'>'exit'</u>: lopeta hakutoiminto", 
		"&nbsp; <u class='komentoKirjoitettuna'>'onlyfans'</u>: mene katuhuorien hakutilaan", "", 
		"Katuhuorien hakutilan komennot:", 
		"&nbsp; <u class='komentoKirjoitettuna'>'jotain'</u>: jonkinlainen toiminto", "<br>"];
	} else if (inputti == "ph" || inputti == "pornhub" || inputti == "pornhub.com") {
		return [1, "searchPH"];
	} else if (inputti == "suomiporno" || inputti == "suomiporno.net") {
		return [1, "searchSuomiporno"];
	} else if (inputti == "xvideos" || inputti == "xvideos.com") {
    return [1, "searchxvideos"];
  } else if (inputti == "sos") {
		return [1, "SOS"]; // deletoi selaimen historian
	}  else {
		return false;
	} 
}



function priorityKomento(inputti) { //pitäisi callata ainoastaan theBigBadFinalOnSubmitin sisällä
			if (inputti == "emptyFunktio" || inputti == "empty") {
				tekstiboksi.innerHTML = "";

			} else if (inputti == "SOS" || inputti == "sos") {
				//window.history.back();
        location.replace("https://www.raamattu.fi/");
			}
			if (teksti_input.className.length > 0 || inputti == "exit") {
				nuoli.style.paddingLeft = "initial";
				teksti_input.className = "";
				nuoli.innerText = ">";
				nuoli.style.fontWeight = "normal";
        if (mobileModeOn) {
          teksti_input.placeholder = "Kirjoita komento";
        }
			}
}

function pornoSivustoHakutilaan(sivusto, sivustoClass) {
  if (!mobileModeOn) {
  	nuoli.style.paddingLeft = nuoliWidth + "px";
  	nuoli.innerText = "Etsi " + sivusto + ": ";
  	nuoli.style.fontWeight = "bold";
  	teksti_input.className = "";
  	teksti_input.classList.add(sivustoClass);
    teksti_input.style.width = "200%";
  } else {
    teksti_input.className = "";
    teksti_input.classList.add(sivustoClass);
    teksti_input.placeholder = "Etsi " + sivusto + ":";
    teksti_input.style.width = "calc(100vw - 3em)";
  }
  currentPornWebsite = [sivusto, sivustoClass];
  console.log("nykyinen sivu: " + currentPornWebsite[0]);
}


function pornonHakuFunktio(inputinPerkele, boksi, linkki) { //pitäisi callata ainoastaan theBigBadFinalOnSubmitin sisällä
	var onnistuuko = true;
	for (var i = 0; i <= priorityKomentojenMaara.length; i++) {
		if (inputinPerkele == priorityKomentojenMaara[i]) {
			onnistuuko = false;
			priorityKomento(inputinPerkele);
		}
	}
	for (var i = 0; i <= pornoSivujenMaara.length; i++) {
		if (inputinPerkele == pornoSivujenMaara[i]) {
			onnistuuko = false;
			pornoSivustoHakutilaan(pornoSivujenMaara[i], pornoSivujenActiveClass[i]);
		}
	}
	if (onnistuuko) {

		createLinkElement("Linkki hakuun '" + inputinPerkele + "'", linkki + inputinPerkele, boksi, true);
		createElement("p", " ", boksi);
		window.open(linkki + inputinPerkele, '_blank').focus();	
	}
}

function theBigBadFinalOnSubmit(boksi, inputti, tyyppi) {
	var inputinPerkele = returnStringJosEiTyhja(inputti.value);
	if (inputinPerkele != "") {
		/*var paragraph = document.createElement("p");
		paragraph.innerText += inputinPerkele;
		boksi.appendChild(paragraph);*/
		if (tyyppi == "normal") {
			createElement("p", inputinPerkele, boksi);

		
			// katso, jos inputti olisi jokin "tunnettu" input. Eli toisin sanoen: syöttikö käyttäjä komennon
			var kokmentoVastausTxt = mikaKomento(inputinPerkele);
			
			if (kokmentoVastausTxt != false) {
				if (kokmentoVastausTxt[0] == 0) {
					var komentoVastausDok = document.createElement("i");
					for (var i = 1; i < kokmentoVastausTxt.length; i++) {
						komentoVastausDok.innerHTML += "<br>" + kokmentoVastausTxt[i]; //printtaa koko vitun rivi
					}
					boksi.appendChild(komentoVastausDok);
				} else if (kokmentoVastausTxt[0] == 1) { 
					if (kokmentoVastausTxt[1] == "LoginFunktio") {
						if (currentUser == "") {
							//loginFunktio();
							nuoli.style.paddingLeft = nuoliWidth + "px";
							nuoli.innerText = "Käyttäjätunnus: ";
							teksti_input.classList.add("loginForm");
							//console.log(teksti_input.classList[0]);
							//palaa sitten tähän, kun log in on complete: nuoli.style.paddingLeft = "initial";
							//console.log("Tähän pitäisi tulla jonkinlainen funktio. Tässä tapauksessa: " + kokmentoVastausTxt[1])
						} else {
							createElement("i", "Olet jo kirjautunut sisään.", boksi);
						}
					} else if (kokmentoVastausTxt[1] == "LogoutFunktio") {
						if (currentUser == "") {
							createElement("i", "Et ole kirjautunut sisään.", boksi);
						} else {
							currentUser = "";
							createElement("b", "Olet kirjautunut ulos.", boksi);

						}
						
					} else if (kokmentoVastausTxt[1] == "emptyFunktio") {
						//tekstiboksi.innerHTML = "";
						priorityKomento(kokmentoVastausTxt[1]);
					} else if (kokmentoVastausTxt[1] == "SOS") {
						//window.history.back()
						priorityKomento(kokmentoVastausTxt[1]);
					} else if (kokmentoVastausTxt[1] == "searchPH") {
						pornoSivustoHakutilaan("pornhub.com", "PHsearchActiveClass");
					} else if (kokmentoVastausTxt[1] == "searchSuomiporno") {
						pornoSivustoHakutilaan("suomiporno.net", "SuomipornosearchActiveClass");
					} else if(kokmentoVastausTxt[1] == "searchxvideos") {
            pornoSivustoHakutilaan("xvideos.com", "xvideoActiveClass");
          }
					
				}
			} 
		} else if (tyyppi == "login") {
			if (inputinPerkele == "admin") {
				console.log("Tervetuloa, admin");
				nuoli.style.paddingLeft = "initial";
				currentUser = "admin";
				teksti_input.classList.remove("loginForm");
				nuoli.innerText = ">";
				createElement("b", "Käyttäjätunnus oikein, tervetuloa " + currentUser + "!" , boksi);
			} else {
				createElement("b", "Väärä Käyttäjätunnus!", boksi);
			}
		} else if (tyyppi == "PHsearchActive") {
			pornonHakuFunktio(inputinPerkele, boksi, "https://www.pornhub.com/video/search?search=");
		} else if (tyyppi == "SuomipornosearchActive") {
			pornonHakuFunktio(inputinPerkele, boksi, "https://www.suomiporno.net/?s=");
		} else if (tyyppi == "xvideoActive") {
      pornonHakuFunktio(inputinPerkele, boksi, "https://www.xvideos.com/?k=");
    }
	}
	emptyTekstiBoksi(inputti);
	inputti.focus();
	window.scrollTo(0, document.body.scrollHeight);
	klikkaaKomentoaKirjoittaaksesi();

};

function klikkaaKomentoaKirjoittaaksesi() {
	var komentoKirjoitettuna = document.getElementsByClassName("komentoKirjoitettuna");
	for (var i = 0; i < komentoKirjoitettuna.length; i++) {
		komentoKirjoitettuna[i].onclick = function () {
			kyseinenKomento = this.innerText.replace(/'/g, "");
			teksti_input.value = kyseinenKomento;
			teksti_input.focus();
			enterOnPainettu(); 
		}
	} 
  if (mobileModeOn) {
    if (menu_bar_container.classList.contains("displayBlockImportant")) {
      menu_bar_container.classList.remove("displayBlockImportant");
    } 
  }
}

function enterOnPainettu() {
  if (teksti_input.classList[0] == "loginForm") {
    theBigBadFinalOnSubmit(tekstiboksi, teksti_input, "login");
  } else if (teksti_input.classList[0] == "PHsearchActiveClass") {
    theBigBadFinalOnSubmit(tekstiboksi, teksti_input, "PHsearchActive");
  } else if (teksti_input.classList[0] == "SuomipornosearchActiveClass") {
    theBigBadFinalOnSubmit(tekstiboksi, teksti_input, "SuomipornosearchActive");
  } else if (teksti_input.classList[0] ==  "xvideoActiveClass") {
    theBigBadFinalOnSubmit(tekstiboksi, teksti_input, "xvideoActive");
  } else {
    theBigBadFinalOnSubmit(tekstiboksi, teksti_input, "normal");
  }

}

tekstiboksi.style.paddingLeft = nuoliWidth + "px";

window.onload = function() {
  checkScreenWidth();
}

window.onresize = function() {
  checkScreenWidth();
}

btn.onclick = function(){
	/*tekstiboksi.innerHTML += returnStringJosEiTyhja(teksti_input.value);
	emptyTekstiBoksi(teksti_input);
	teksti_input.focus();*/
	theBigBadFinalOnSubmit(tekstiboksi, teksti_input);
};

klikkaaKomentoaKirjoittaaksesi();

/*
teksti_input.addEventListener("keydown", function(e){
	if (e.code === "Enter") {
		enterOnPainettu();
	}
});
*/

//Kokeilua. Loppujen lopuksi tarkoitus on pitää yksi ainoa formi, jokka toimii painamalla enteriä. Eli otetaan mobile_form käyttöönn ympäri sivuston

				/*var juttu = document.getElementById('juttu');
				function thisFunc() {
					juttu.innerText += "moi ";
				};*/

				var form = document.getElementById('mobile_form');
				form.addEventListener('submit', function(event){
					event.preventDefault();
					enterOnPainettu();
				});

console.log("MITÄ VITTUQ");




yla_valikko_button.onclick = function() {
	console.log("Button pressed")
	if (menu_bar_container.classList.contains("displayBlockImportant")) {
		menu_bar_container.classList.remove("displayBlockImportant");
	} else {
		menu_bar_container.classList.add("displayBlockImportant");
	}
}