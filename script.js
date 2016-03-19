// STANDART CONFIG / ОПЦИИ ПО УМОЛЧАНИЮ. 19.03.16
config = {};
config.start_bet = 100;                     // Начальная ставка.
config.color_tactic = "red";                // Цвет ставок: black, red, green, random (в тактике "green_waiting" только "green", другие цвета игнорируются). // Rates color: black, red, green, random (in tactics "green_waiting" only "green", the other colors are ignored).
config.max_lose_combo_to_swap = 5;          // Максимальное количество проигрышей для смены цвета (Когда вы ставите на черное или красное). // Maximum number of losses for the color change (When you bet on black or red).
config.max_increase = 3;                    // Максимальное количество побед после которых ставка сбрасывается к первоначальной. // Maximum number of victories, after which the rate is reset to the original.
config.algorithm = "standart"               // Алгоритмы: "standart", "martingale", "green_waiting".
// STANDART CONFIG / ОПЦИИ ПО УМОЛЧАНИЮ.
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1P 1o=["\\S\\s\\j\\n\\i\\m\\l\\1q\\m\\t\\m\\r\\1q\\m\\t\\m\\l\\R\\m\\t\\m\\l\\1h\\m\\t\\m\\l\\1k\\m\\t\\m\\r\\1h\\m\\t\\m\\r\\1k\\m\\t\\m\\r\\1r\\m\\t\\m\\r\\1f\\m\\t\\m\\r\\1y\\m\\t\\m\\r\\1s\\m\\t\\m\\r\\1C\\m\\t\\m\\r\\1i\\m\\t\\m\\r\\1l\\m\\t\\m\\r\\1t\\m\\t\\m\\r\\1u\\m\\t\\m\\r\\1D\\m\\t\\m\\r\\1g\\m\\t\\m\\r\\1m\\m\\t\\m\\r\\1v\\m\\t\\m\\r\\1z\\m\\t\\m\\r\\1E\\m\\t\\m\\m\\t\\m\\r\\1J\\m\\t\\m\\r\\1F\\m\\t\\m\\r\\1G\\m\\t\\m\\r\\1H\\m\\t\\m\\D\\v\\m\\t\\m\\l\\1r\\m\\t\\m\\v\\m\\t\\m\\T\\m\\t\\m\\I\\m\\t\\m\\P\\m\\t\\m\\E\\y\\m\\t\\m\\l\\1f\\m\\t\\m\\y\\m\\t\\m\\o\\m\\t\\m\\13\\m\\t\\m\\D\\T\\m\\t\\m\\15\\l\\1y\\s\\m\\t\\m\\D\\I\\m\\t\\m\\l\\1s\\m\\t\\m\\1p\\D\\P\\s\\1w\\D\\o\\m\\t\\m\\1w\\l\\1C\\m\\t\\m\\1w\\D\\13\\m\\t\\m\\1w\\D\\Y\\1x\\11\\s\\1p\\l\\x\\m\\t\\m\\1w\\D\\17\\1x\\y\\s\\1p\\l\\x\\m\\t\\m\\1w\\D\\j\\1x\\l\\u\\s\\1p\\l\\x\\m\\t\\m\\D\\L\\m\\t\\m\\D\\R\\m\\t\\m\\1t\\m\\t\\m\\D\\x\\1A\\s\\D\\U\\s\\D\\A\\s\\l\\1C\\s\\1b\\s\\D\\z\\s\\l\\U\\t\\s\\D\\S\\1p\\m\\t\\m\\D\\19\\m\\t\\m\\D\\B\\m\\t\\m\\D\\J\\m\\t\\m\\D\\w\\m\\t\\m\\D\\K\\m\\t\\m\\D\\18\\s\\D\\14\\m\\t\\m\\D\\12\\m\\t\\m\\1n\\1n\\1n\\D\\1a\\1n\\1n\\1n\\m\\t\\m\\l\\1i\\m\\t\\m\\D\\1e\\m\\t\\m\\D\\1d\\m\\t\\m\\D\\1c\\m\\t\\m\\D\\1b\\m\\t\\m\\D\\1j\\m\\t\\m\\l\\1l\\m\\t\\m\\1w\\D\\1q\\m\\t\\m\\s\\m\\t\\m\\D\\1h\\m\\t\\m\\1p\\D\\1k\\1x\\D\\1r\\m\\t\\m\\D\\1f\\m\\t\\m\\D\\1y\\m\\t\\m\\D\\1s\\m\\t\\m\\l\\1t\\m\\t\\m\\l\\1u\\m\\t\\m\\B\\1p\\D\\1C\\10\\D\\1i\\1x\\D\\1l\\p\\Z\\q\\m\\t\\m\\V\\B\\s\\J\\n\\G\\D\\1t\\G\\Q\\V\\B\\Q\\V\\1a\\Q\\D\\1u\\s\\l\\U\\s\\p\\F\\D\\1D\\F\\12\\F\\D\\1g\\F\\12\\F\\1u\\F\\l\\A\\F\\l\\I\\F\\12\\F\\l\\1D\\s\\F\\l\\P\\F\\l\\o\\F\\12\\F\\l\\z\\F\\1D\\F\\12\\q\\10\\V\\15\\1a\\Q\\V\\1f\\15\\Q\\V\\U\\s\\l\\S\\n\\G\\m\\t\\m\\G\\s\\1e\\n\\G\\m\\t\\m\\G\\s\\J\\n\\G\\l\\1g\\G\\s\\w\\n\\G\\1t\\G\\Q\\V\\15\\U\\Q\\V\\15\\B\\Q\\V\\B\\Q\\V\\1a\\Q\\l\\1m\\s\\D\\1m\\s\\l\\19\\s\\D\\1v\\s\\D\\1z\\s\\p\\F\\l\\1v\\F\\12\\F\\1D\\F\\l\\P\\F\\l\\13\\F\\1y\\F\\12\\F\\1u\\F\\l\\A\\F\\l\\I\\F\\1d\\F\\1q\\s\\F\\1D\\F\\1d\\F\\1y\\F\\l\\B\\F\\1d\\s\\F\\l\\1z\\F\\l\\J\\F\\1d\\F\\l\\13\\F\\l\\1E\\F\\l\\J\\F\\l\\w\\F\\D\\1E\\F\\1q\\F\\D\\1J\\s\\F\\l\\1J\\F\\1u\\F\\l\\1D\\s\\F\\l\\P\\F\\1y\\F\\1q\\F\\l\\I\\F\\l\\w\\s\\F\\D\\1F\\F\\l\\z\\F\\1q\\F\\l\\o\\F\\12\\q\\10\\V\\15\\1a\\Q\\V\\1f\\Q\\V\\U\\s\\l\\S\\n\\G\\m\\t\\m\\G\\s\\J\\n\\G\\l\\1F\\G\\s\\w\\n\\G\\1t\\G\\Q\\V\\15\\U\\Q\\V\\15\\B\\Q\\V\\B\\Q\\V\\1a\\Q\\l\\1m\\s\\D\\1G\\s\\p\\F\\l\\1v\\F\\12\\F\\1D\\F\\l\\P\\F\\l\\13\\F\\1y\\F\\12\\F\\1u\\F\\l\\A\\F\\l\\I\\F\\1d\\F\\1q\\s\\F\\1D\\F\\1d\\F\\1y\\F\\l\\B\\F\\1d\\s\\F\\l\\1z\\F\\1d\\F\\l\\B\\F\\1q\\F\\l\\1J\\q\\10\\V\\15\\1a\\Q\\V\\1f\\Q\\V\\U\\s\\l\\S\\n\\G\\m\\t\\m\\G\\s\\J\\n\\G\\l\\1G\\G\\s\\w\\n\\G\\1t\\G\\Q\\V\\15\\U\\Q\\V\\15\\B\\Q\\V\\B\\s\\J\\n\\G\\D\\1H\\G\\Q\\V\\1a\\Q\\u\\v\\s\\l\\1H\\s\\p\\F\\u\\T\\F\\l\\z\\F\\1q\\F\\l\\o\\F\\12\\q\\10\\V\\15\\1a\\Q\\V\\1f\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\v\\G\\s\\19\\n\\G\\1j\\G\\s\\1e\\n\\G\\l\\1h\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\v\\G\\Q\\u\\I\\V\\15\\z\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\T\\G\\s\\19\\n\\G\\1j\\G\\s\\1e\\n\\G\\l\\R\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\T\\G\\Q\\r\\I\\V\\15\\z\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\P\\G\\s\\19\\n\\G\\1j\\G\\s\\1e\\n\\G\\l\\1k\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\P\\G\\Q\\u\\P\\V\\15\\z\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\o\\G\\s\\19\\n\\G\\1j\\G\\s\\1e\\n\\G\\l\\1q\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\o\\G\\Q\\u\\o\\V\\15\\z\\Q\\V\\15\\B\\Q\\V\\B\\s\\J\\n\\G\\u\\13\\G\\Q\\V\\1a\\Q\\u\\Y\\s\\p\\F\\u\\17\\F\\1u\\F\\l\\1E\\F\\1d\\F\\l\\J\\F\\l\\13\\F\\l\\o\\F\\1y\\F\\l\\w\\q\\10\\V\\15\\1a\\Q\\V\\1f\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\13\\G\\s\\19\\n\\G\\1h\\G\\s\\1e\\n\\G\\l\\1u\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\13\\G\\Q\\u\\j\\V\\15\\z\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\Y\\G\\s\\19\\n\\G\\1h\\G\\s\\1e\\n\\G\\l\\1t\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\Y\\G\\Q\\u\\L\\V\\15\\z\\Q\\V\\U\\s\\w\\n\\G\\K\\G\\s\\J\\n\\G\\r\\17\\G\\s\\19\\n\\G\\1h\\G\\s\\1e\\n\\G\\l\\1r\\G\\s\\15\\Q\\V\\z\\s\\1b\\n\\G\\r\\17\\G\\Q\\r\\I\\s\\u\\R\\V\\15\\z\\Q\\V\\15\\B\\Q\\V\\1f\\15\\Q\\V\\15\\B\\Q\\m\\t\\m\\u\\x\\m\\t\\m\\u\\U\\m\\t\\m\\u\\A\\m\\t\\m\\U\\i\\w\\n\\K\\h\\m\\t\\m\\u\\z\\1x\\u\\S\\m\\t\\m\\u\\19\\s\\u\\B\\m\\t\\m\\u\\J\\s\\u\\w\\m\\t\\m\\1w\\u\\K\\m\\t\\m\\1w\\u\\18\\m\\t\\m\\u\\14\\m\\t\\m\\u\\12\\m\\t\\m\\U\\i\\w\\n\\K\\h\\s\\H\\s\\z\\m\\t\\m\\1g\\m\\t\\m\\u\\1a\\m\\t\\m\\U\\i\\1e\\n\\m\\t\\m\\h\\10\\K\\m\\t\\m\\r\\j\\m\\t\\m\\1w\\u\\1e\\m\\t\\m\\h\\s\\H\\s\\z\\m\\t\\m\\U\\i\\19\\n\\1j\\h\\s\\H\\s\\z\\m\\t\\m\\U\\i\\19\\n\\1j\\h\\10\\1g\\s\\H\\s\\z\\m\\t\\m\\U\\i\\19\\n\\1j\\h\\10\\K\\m\\t\\m\\U\\i\\19\\n\\1h\\h\\s\\H\\s\\z\\m\\t\\m\\U\\i\\19\\n\\1h\\h\\10\\1g\\s\\H\\s\\z\\m\\t\\m\\U\\i\\19\\n\\1h\\h\\10\\K\\m\\t\\m\\15\\l\\1y\\s\\l\\1s\\m\\t\\m\\1w\\l\\1g\\m\\t\\m\\1w\\l\\1F\\m\\t\\m\\1w\\l\\1G\\m\\t\\m\\U\\i\\19\\n\\1j\\h\\10\\1g\\m\\t\\m\\U\\i\\19\\n\\1h\\h\\10\\1g\\m\\t\\m\\F\\u\\1d\\10\\s\\m\\t\\m\\F\\u\\1c\\s\\l\\1l\\10\\s\\m\\t\\m\\s\\1J\\10\\s\\m\\t\\m\\s\\1C\\10\\s\\m\\t\\m\\s\\u\\1b\\10\\s\\m\\t\\m\\F\\u\\1j\\s\\l\\19\\10\\s\\m\\t\\m\\F\\u\\1q\\s\\l\\19\\10\\s\\m\\t\\m\\F\\u\\1h\\s\\l\\U\\s\\u\\1k\\10\\s\\m\\t\\m\\F\\u\\1r\\s\\l\\1i\\s\\u\\1f\\10\\s\\m\\t\\m\\1x\\m\\t\\m\\u\\1y\\m\\t\\m\\u\\1s\\m\\t\\m\\F\\u\\1C\\s\\l\\R\\10\\s\\m\\t\\m\\F\\u\\1i\\10\\s\\m\\t\\m\\u\\1l\\m\\h\\C\\A\\s\\1m\\p\\v\\t\\T\\q\\N\\18\\s\\r\\L\\i\\j\\i\\l\\h\\h\\p\\r\\L\\i\\j\\i\\y\\h\\h\\p\\q\\1n\\p\\T\\1x\\v\\q\\q\\H\\v\\O\\A\\s\\1s\\p\\v\\q\\N\\18\\1A\\v\\1B\\j\\i\\r\\h\\10\\v\\Q\\n\\l\\1I\\1I\\11\\Q\\n\\v\\1B\\j\\i\\D\\h\\10\\j\\i\\u\\h\\O\\A\\s\\r\\R\\p\\P\\q\\N\\S\\s\\o\\n\\R\\C\\R\\i\\j\\i\\E\\h\\h\\n\\P\\i\\j\\i\\E\\h\\h\\C\\R\\i\\j\\i\\Z\\h\\h\\n\\P\\i\\j\\i\\Z\\h\\h\\C\\R\\i\\j\\i\\11\\h\\h\\n\\P\\i\\j\\i\\11\\h\\h\\C\\R\\i\\j\\i\\X\\h\\h\\n\\l\\y\\C\\R\\i\\j\\i\\W\\h\\h\\n\\R\\i\\j\\i\\E\\h\\h\\C\\R\\i\\j\\i\\l\\y\\h\\h\\n\\1v\\C\\R\\i\\j\\i\\l\\l\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\r\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\D\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\u\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\E\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\Z\\h\\h\\n\\y\\C\\R\\i\\j\\i\\l\\11\\h\\h\\n\\j\\i\\l\\X\\h\\C\\R\\i\\j\\i\\l\\W\\h\\h\\n\\y\\C\\R\\i\\j\\i\\r\\y\\h\\h\\n\\y\\C\\R\\i\\j\\i\\r\\l\\h\\h\\n\\j\\i\\r\\r\\h\\C\\R\\i\\j\\i\\r\\D\\h\\h\\n\\p\\P\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\y\\h\\q\\1B\\1s\\p\\1m\\p\\l\\t\\l\\E\\q\\q\\10\\P\\i\\j\\i\\r\\u\\h\\h\\C\\R\\i\\j\\i\\r\\u\\h\\h\\n\\P\\i\\j\\i\\r\\u\\h\\h\\C\\R\\i\\j\\i\\r\\E\\h\\h\\n\\y\\C\\R\\i\\j\\i\\r\\Z\\h\\h\\n\\y\\C\\x\\p\\P\\i\\j\\i\\r\\11\\h\\h\\n\\n\\n\\j\\i\\r\\X\\h\\q\\N\\R\\i\\j\\i\\r\\D\\h\\h\\n\\j\\i\\r\\h\\O\\C\\R\\i\\j\\i\\r\\W\\h\\h\\n\\1z\\15\\E\\y\\H\\W\\C\\R\\i\\j\\i\\D\\y\\h\\h\\n\\p\\p\\W\\H\\W\\q\\1n\\E\\q\\H\\W\\C\\R\\i\\j\\i\\D\\l\\h\\h\\n\\u\\H\\D\\C\\R\\i\\j\\i\\D\\r\\h\\h\\n\\j\\i\\D\\D\\h\\H\\j\\i\\D\\u\\h\\H\\j\\i\\D\\E\\h\\C\\R\\i\\j\\i\\D\\Z\\h\\h\\n\\u\\1t\\15\\l\\K\\C\\R\\i\\j\\i\\D\\11\\h\\h\\n\\p\\Z\\1n\\1z\\q\\H\\r\\E\\H\\r\\E\\H\\p\\l\\1n\\Z\\q\\C\\R\\i\\j\\i\\D\\X\\h\\h\\n\\j\\i\\D\\W\\h\\C\\R\\i\\j\\i\\u\\y\\h\\h\\n\\j\\i\\u\\l\\h\\C\\S\\s\\13\\n\\j\\i\\r\\r\\h\\C\\S\\s\\Y\\n\\16\\p\\j\\i\\u\\r\\h\\q\\t\\r\\x\\n\\16\\p\\j\\i\\u\\D\\h\\q\\t\\r\\U\\n\\16\\p\\j\\i\\u\\u\\h\\q\\C\\S\\s\\17\\n\\16\\p\\j\\i\\u\\E\\h\\q\\t\\r\\A\\n\\16\\p\\j\\i\\u\\Z\\h\\q\\t\\r\\z\\n\\16\\p\\j\\i\\u\\11\\h\\q\\C\\R\\i\\j\\i\\u\\X\\h\\h\\n\\A\\p\\q\\N\\o\\i\\j\\i\\W\\h\\h\\n\\o\\i\\j\\i\\E\\h\\h\\C\\o\\i\\j\\i\\r\\E\\h\\h\\n\\y\\O\\C\\R\\i\\j\\i\\u\\W\\h\\h\\n\\A\\p\\q\\N\\S\\s\\v\\n\\1i\\p\\r\\x\\i\\j\\i\\E\\y\\h\\h\\p\\q\\q\\C\\x\\p\\v\\V\\o\\i\\j\\i\\W\\h\\h\\q\\N\\r\\S\\i\\j\\i\\E\\r\\h\\h\\p\\j\\i\\E\\l\\h\\q\\C\\l\\Y\\p\\1E\\q\\O\\C\\18\\s\\v\\O\\C\\R\\i\\j\\i\\E\\D\\h\\h\\n\\A\\p\\v\\q\\N\\r\\U\\i\\j\\i\\E\\u\\h\\h\\p\\v\\q\\O\\C\\A\\s\\l\\17\\p\\v\\t\\T\\q\\N\\18\\s\\v\\i\\j\\i\\E\\E\\h\\h\\p\\T\\q\\Q\\1x\\l\\O\\R\\i\\j\\i\\E\\Z\\h\\h\\n\\A\\p\\q\\N\\13\\n\\Y\\i\\j\\i\\E\\y\\h\\h\\p\\q\\C\\x\\p\\l\\17\\p\\13\\t\\j\\i\\E\\11\\h\\q\\q\\N\\18\\s\\j\\i\\E\\X\\h\\O\\C\\x\\p\\l\\17\\p\\13\\t\\j\\i\\E\\W\\h\\q\\q\\N\\18\\s\\j\\i\\r\\19\\h\\O\\C\\x\\p\\l\\17\\p\\13\\t\\j\\i\\r\\B\\h\\q\\q\\N\\18\\s\\j\\i\\r\\J\\h\\O\\C\\18\\s\\j\\i\\l\\X\\h\\O\\C\\R\\i\\j\\i\\r\\w\\h\\h\\n\\A\\p\\q\\N\\x\\p\\o\\i\\j\\i\\l\\y\\h\\h\\n\\n\\1v\\q\\N\\18\\s\\1v\\O\\C\\S\\s\\v\\n\\o\\i\\j\\i\\r\\l\\h\\h\\n\\n\\n\\o\\i\\j\\i\\l\\y\\h\\h\\C\\x\\p\\v\\n\\n\\l\\18\\q\\N\\o\\i\\j\\i\\l\\r\\h\\h\\H\\H\\t\\o\\i\\j\\i\\l\\l\\h\\h\\n\\y\\t\\o\\i\\j\\i\\l\\E\\h\\h\\H\\H\\O\\14\\N\\o\\i\\j\\i\\l\\l\\h\\h\\H\\H\\t\\o\\i\\j\\i\\l\\r\\h\\h\\n\\y\\t\\o\\i\\j\\i\\l\\Z\\h\\h\\H\\H\\O\\C\\18\\s\\v\\O\\C\\R\\i\\j\\i\\r\\K\\h\\h\\n\\A\\p\\q\\N\\18\\s\\1s\\p\\1i\\p\\13\\i\\j\\i\\u\\1u\\h\\h\\p\\j\\i\\r\\B\\h\\q\\i\\l\\h\\q\\q\\O\\C\\R\\i\\j\\i\\l\\14\\h\\h\\n\\A\\p\\T\\q\\N\\x\\p\\1i\\p\\T\\q\\Q\\y\\q\\N\\S\\s\\I\\n\\16\\p\\j\\i\\u\\1D\\h\\q\\C\\I\\i\\j\\i\\E\\u\\h\\h\\p\\o\\i\\j\\i\\D\\X\\h\\h\\H\\o\\i\\j\\i\\u\\y\\h\\h\\H\\j\\i\\u\\1g\\h\\H\\T\\q\\C\\I\\i\\j\\i\\u\\1m\\h\\h\\p\\q\\C\\l\\12\\p\\A\\p\\q\\N\\S\\s\\v\\n\\16\\p\\j\\i\\r\\18\\h\\q\\C\\v\\i\\j\\i\\1k\\h\\h\\p\\q\\O\\t\\u\\1v\\q\\O\\O\\C\\R\\i\\j\\i\\r\\14\\h\\h\\n\\A\\p\\v\\q\\N\\18\\s\\A\\p\\q\\N\\r\\12\\p\\v\\q\\N\\1F\\s\\j\\i\\D\\h\\10\\17\\i\\j\\i\\1k\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\y\\h\\h\\n\\j\\i\\D\\h\\C\\1G\\C\\1F\\s\\j\\i\\r\\h\\10\\r\\A\\i\\j\\i\\1k\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\y\\h\\h\\n\\j\\i\\r\\h\\C\\1G\\C\\1F\\s\\j\\i\\u\\h\\10\\r\\z\\i\\j\\i\\1k\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\y\\h\\h\\n\\j\\i\\u\\h\\C\\1G\\O\\O\\O\\C\\R\\i\\j\\i\\l\\1a\\h\\h\\n\\A\\p\\v\\q\\N\\A\\s\\l\\j\\p\\q\\N\\o\\i\\j\\i\\r\\D\\h\\h\\n\\j\\i\\D\\h\\n\\n\\n\\o\\i\\j\\i\\r\\D\\h\\h\\1B\\j\\i\\u\\h\\10\\j\\i\\D\\h\\O\\x\\p\\v\\n\\n\\l\\1e\\q\\N\\o\\i\\j\\i\\l\\E\\h\\h\\n\\y\\C\\x\\p\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\D\\h\\k\\k\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\u\\h\\q\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\x\\p\\o\\i\\j\\i\\l\\l\\h\\h\\n\\n\\o\\i\\j\\i\\Z\\h\\h\\1I\\1I\\o\\i\\j\\i\\Z\\h\\h\\1A\\n\\y\\q\\N\\l\\j\\p\\q\\O\\O\\14\\N\\x\\p\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\y\\h\\q\\N\\o\\i\\j\\i\\r\\D\\h\\h\\n\\1s\\p\\1m\\p\\l\\t\\l\\E\\q\\q\\C\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\O\\14\\N\\x\\p\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\r\\h\\q\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\O\\O\\O\\O\\14\\N\\x\\p\\o\\i\\j\\i\\l\\E\\h\\h\\V\\o\\i\\j\\i\\11\\h\\h\\q\\N\\o\\i\\j\\i\\W\\h\\h\\n\\p\\o\\i\\j\\i\\W\\h\\h\\1n\\r\\q\\O\\14\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\E\\h\\h\\n\\y\\O\\O\\O\\C\\R\\i\\j\\i\\l\\1d\\h\\h\\n\\A\\p\\v\\q\\N\\A\\s\\l\\j\\p\\q\\N\\o\\i\\j\\i\\r\\D\\h\\h\\n\\j\\i\\D\\h\\n\\n\\n\\o\\i\\j\\i\\r\\D\\h\\h\\1B\\j\\i\\u\\h\\10\\j\\i\\D\\h\\O\\x\\p\\v\\n\\n\\l\\1e\\q\\N\\x\\p\\o\\i\\j\\i\\l\\E\\h\\h\\Q\\y\\q\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\E\\h\\h\\n\\y\\O\\14\\N\\o\\i\\j\\i\\W\\h\\h\\n\\p\\o\\i\\j\\i\\W\\h\\h\\1n\\r\\q\\O\\C\\x\\p\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\D\\h\\k\\k\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\u\\h\\q\\N\\x\\p\\o\\i\\j\\i\\l\\l\\h\\h\\n\\n\\o\\i\\j\\i\\Z\\h\\h\\1I\\1I\\o\\i\\j\\i\\Z\\h\\h\\1A\\n\\y\\q\\N\\l\\j\\p\\q\\O\\O\\14\\N\\x\\p\\o\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\y\\h\\q\\N\\o\\i\\j\\i\\r\\D\\h\\h\\n\\1s\\p\\1m\\p\\l\\t\\l\\E\\q\\q\\O\\O\\O\\14\\N\\x\\p\\o\\i\\j\\i\\l\\Z\\h\\h\\Q\\y\\q\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\Z\\h\\h\\n\\y\\C\\o\\i\\j\\i\\l\\E\\h\\h\\n\\o\\i\\j\\i\\11\\h\\h\\O\\C\\x\\p\\o\\i\\j\\i\\l\\E\\h\\h\\V\\o\\i\\j\\i\\11\\h\\h\\q\\N\\o\\i\\j\\i\\W\\h\\h\\n\\p\\o\\i\\j\\i\\W\\h\\h\\1n\\r\\q\\O\\14\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\o\\i\\j\\i\\l\\E\\h\\h\\n\\y\\O\\O\\O\\C\\R\\i\\j\\i\\r\\X\\h\\h\\n\\A\\p\\q\\N\\o\\i\\j\\i\\r\\D\\h\\h\\n\\j\\i\\r\\h\\C\\x\\p\\u\\1z\\n\\n\\l\\1e\\q\\N\\o\\i\\j\\i\\r\\E\\h\\h\\H\\n\\o\\i\\j\\i\\W\\h\\h\\C\\u\\1E\\p\\o\\i\\j\\i\\r\\E\\h\\h\\Q\\n\\o\\i\\j\\i\\W\\h\\h\\1n\\l\\u\\q\\N\\o\\i\\j\\i\\W\\h\\h\\H\\n\\l\\O\\O\\14\\N\\o\\i\\j\\i\\u\\X\\h\\h\\p\\q\\O\\O\\C\\R\\i\\j\\i\\r\\11\\h\\h\\n\\p\\P\\i\\j\\i\\r\\11\\h\\h\\n\\n\\n\\j\\i\\r\\1a\\h\\q\\1B\\R\\i\\j\\i\\l\\1a\\h\\h\\10\\p\\p\\P\\i\\j\\i\\r\\11\\h\\h\\n\\n\\n\\j\\i\\r\\X\\h\\q\\1B\\R\\i\\j\\i\\r\\X\\h\\h\\10\\R\\i\\j\\i\\l\\1d\\h\\h\\q\\O\\S\\s\\L\\n\\u\\1J\\s\\r\\R\\p\\1H\\q\\C\\S\\s\\l\\v\\n\\y\\t\\l\\1c\\n\\L\\i\\j\\i\\r\\11\\h\\h\\C\\S\\s\\16\\r\\1e\\n\\16\\p\\j\\i\\u\\1F\\h\\q\\C\\16\\r\\1e\\i\\j\\i\\u\\1G\\h\\h\\p\\j\\i\\u\\1H\\h\\H\\L\\i\\j\\i\\E\\h\\h\\H\\j\\i\\l\\1b\\h\\H\\L\\i\\j\\i\\E\\h\\h\\H\\j\\i\\E\\v\\h\\H\\L\\i\\j\\i\\Z\\h\\h\\H\\j\\i\\l\\1b\\h\\H\\L\\i\\j\\i\\Z\\h\\h\\H\\j\\i\\E\\T\\h\\H\\L\\i\\j\\i\\11\\h\\h\\H\\j\\i\\l\\1b\\h\\H\\L\\i\\j\\i\\11\\h\\h\\H\\j\\i\\E\\I\\h\\q\\C\\16\\p\\j\\i\\E\\P\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\N\\m\\r\\1d\\m\\10\\j\\i\\E\\o\\h\\O\\q\\C\\16\\p\\j\\i\\E\\13\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\N\\r\\1d\\10\\j\\i\\l\\1f\\h\\t\\E\\Y\\10\\j\\i\\E\\17\\h\\t\\E\\j\\10\\j\\i\\E\\L\\h\\t\\l\\1H\\10\\j\\i\\E\\R\\h\\t\\r\\j\\10\\j\\i\\l\\1j\\h\\t\\E\\x\\10\\j\\i\\E\\U\\h\\t\\m\\1t\\1x\\E\\A\\m\\10\\j\\i\\E\\z\\h\\O\\q\\C\\16\\p\\j\\i\\l\\L\\h\\H\\1H\\i\\j\\i\\r\\u\\h\\h\\H\\j\\i\\r\\1c\\h\\q\\i\\j\\i\\l\\K\\h\\h\\p\\j\\i\\r\\1b\\h\\t\\l\\18\\q\\C\\16\\p\\j\\i\\l\\L\\h\\H\\1H\\i\\j\\i\\r\\u\\h\\h\\H\\j\\i\\1z\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\T\\h\\q\\C\\16\\p\\j\\i\\l\\L\\h\\H\\1H\\i\\j\\i\\r\\11\\h\\h\\H\\j\\i\\r\\1c\\h\\q\\i\\j\\i\\l\\K\\h\\h\\p\\j\\i\\r\\1b\\h\\t\\l\\18\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\T\\h\\q\\C\\16\\p\\j\\i\\l\\L\\h\\H\\1H\\i\\j\\i\\r\\11\\h\\h\\H\\j\\i\\1z\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\T\\h\\q\\C\\16\\p\\j\\i\\E\\S\\h\\q\\i\\j\\i\\1k\\h\\h\\p\\A\\p\\q\\N\\16\\p\\j\\i\\E\\19\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\1j\\h\\q\\C\\16\\p\\j\\i\\E\\B\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\T\\h\\q\\O\\q\\C\\16\\p\\j\\i\\E\\J\\h\\q\\i\\j\\i\\1k\\h\\h\\p\\A\\p\\q\\N\\16\\p\\j\\i\\E\\w\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\1j\\h\\q\\C\\16\\p\\j\\i\\E\\K\\h\\q\\i\\j\\i\\1c\\h\\h\\p\\j\\i\\1r\\h\\t\\j\\i\\l\\T\\h\\q\\O\\q\\C\\A\\s\\r\\1j\\p\\q\\N\\S\\s\\v\\n\\L\\i\\j\\i\\E\\Z\\h\\h\\p\\q\\C\\x\\p\\v\\1A\\n\\n\\L\\i\\j\\i\\l\\11\\h\\h\\1I\\1I\\v\\1A\\n\\n\\j\\i\\l\\X\\h\\q\\N\\r\\12\\p\\v\\q\\N\\1F\\s\\j\\i\\E\\X\\h\\10\\x\\p\\L\\i\\j\\i\\D\\l\\h\\h\\1p\\1l\\p\\q\\H\\L\\i\\j\\i\\D\\11\\h\\h\\1p\\1l\\p\\q\\H\\L\\i\\j\\i\\r\\W\\h\\h\\1p\\1l\\p\\q\\H\\L\\i\\j\\i\\D\\Z\\h\\h\\1p\\1l\\p\\q\\H\\L\\i\\j\\i\\D\\r\\h\\h\\1p\\1l\\p\\q\\H\\L\\i\\j\\i\\D\\y\\h\\h\\1p\\1l\\p\\q\\1A\\n\\n\\L\\i\\j\\i\\u\\y\\h\\h\\q\\N\\l\\Y\\p\\1E\\q\\O\\C\\x\\p\\L\\i\\j\\i\\l\\14\\h\\h\\n\\n\\E\\18\\q\\N\\l\\Y\\p\\1E\\q\\O\\C\\x\\p\\L\\i\\j\\i\\D\\X\\h\\h\\H\\L\\i\\j\\i\\u\\y\\h\\h\\1A\\n\\n\\j\\i\\E\\14\\h\\q\\N\\l\\Y\\p\\1E\\q\\O\\C\\L\\i\\j\\i\\u\\W\\h\\h\\p\\q\\Q\\L\\i\\j\\i\\W\\h\\h\\1I\\1I\\p\\L\\i\\j\\i\\E\\D\\h\\h\\p\\L\\i\\j\\i\\W\\h\\h\\q\\t\\l\\12\\p\\L\\i\\j\\i\\r\\14\\h\\h\\p\\L\\i\\j\\i\\r\\D\\h\\h\\q\\t\\E\\y\\q\\q\\C\\l\\v\\n\\L\\i\\j\\i\\W\\h\\h\\C\\x\\p\\L\\i\\j\\i\\W\\h\\h\\Q\\E\\12\\q\\N\\l\\12\\p\\A\\p\\q\\N\\16\\p\\j\\i\\r\\18\\h\\q\\i\\j\\i\\1k\\h\\h\\p\\q\\O\\t\\E\\1a\\q\\O\\C\\1G\\C\\1F\\s\\j\\i\\r\\J\\h\\10\\L\\i\\j\\i\\E\\h\\h\\n\\1i\\p\\16\\p\\j\\i\\E\\1e\\h\\q\\i\\j\\i\\E\\u\\h\\h\\p\\q\\q\\C\\L\\i\\j\\i\\Z\\h\\h\\n\\1i\\p\\16\\p\\j\\i\\E\\1d\\h\\q\\i\\j\\i\\E\\u\\h\\h\\p\\q\\q\\C\\L\\i\\j\\i\\11\\h\\h\\n\\1i\\p\\16\\p\\j\\i\\E\\1c\\h\\q\\i\\j\\i\\E\\u\\h\\h\\p\\q\\q\\C\\L\\i\\j\\i\\r\\u\\h\\h\\n\\16\\p\\j\\i\\E\\1b\\h\\q\\i\\j\\i\\E\\u\\h\\h\\p\\q\\C\\S\\s\\T\\n\\16\\p\\j\\i\\E\\1j\\h\\q\\i\\j\\i\\E\\u\\h\\h\\p\\q\\C\\L\\i\\j\\i\\r\\D\\h\\h\\n\\p\\L\\i\\j\\i\\r\\u\\h\\h\\n\\n\\n\\j\\i\\y\\h\\q\\1B\\1s\\p\\1m\\p\\l\\t\\l\\E\\q\\q\\10\\L\\i\\j\\i\\r\\u\\h\\h\\C\\L\\i\\j\\i\\r\\11\\h\\h\\n\\p\\T\\n\\n\\n\\j\\i\\r\\1a\\h\\q\\1B\\L\\i\\j\\i\\l\\1a\\h\\h\\10\\p\\T\\n\\n\\n\\j\\i\\r\\X\\h\\q\\1B\\L\\i\\j\\i\\r\\X\\h\\h\\10\\L\\i\\j\\i\\l\\1d\\h\\h\\C\\x\\p\\l\\1c\\1A\\n\\L\\i\\j\\i\\r\\11\\h\\h\\q\\N\\L\\i\\j\\i\\u\\X\\h\\h\\p\\q\\C\\l\\1c\\n\\L\\i\\j\\i\\r\\11\\h\\h\\O\\C\\L\\i\\j\\i\\r\\l\\h\\h\\n\\L\\i\\j\\i\\r\\K\\h\\h\\p\\q\\C\\x\\p\\L\\i\\j\\i\\r\\l\\h\\h\\1A\\n\\n\\j\\i\\r\\h\\q\\N\\L\\i\\j\\i\\r\\Z\\h\\h\\H\\H\\O\\14\\N\\L\\i\\j\\i\\r\\Z\\h\\h\\n\\y\\O\\C\\S\\s\\I\\n\\L\\i\\j\\i\\r\\w\\h\\h\\p\\q\\C\\x\\p\\I\\1A\\n\\1v\\q\\N\\x\\p\\I\\q\\N\\L\\i\\j\\i\\l\\D\\h\\h\\H\\H\\C\\L\\i\\j\\i\\l\\W\\h\\h\\H\\n\\l\\v\\C\\x\\p\\L\\i\\j\\i\\l\\W\\h\\h\\Q\\1x\\1z\\q\\N\\L\\i\\j\\i\\l\\14\\h\\h\\p\\l\\v\\1n\\y\\1p\\l\\q\\O\\O\\14\\N\\L\\i\\j\\i\\l\\u\\h\\h\\H\\H\\C\\L\\i\\j\\i\\l\\W\\h\\h\\1x\\n\\l\\v\\O\\O\\C\\L\\i\\j\\i\\r\\11\\h\\h\\p\\I\\q\\C\\L\\i\\j\\i\\r\\y\\h\\h\\H\\H\\C\\1G\\O\\C\\L\\i\\j\\i\\l\\11\\h\\h\\n\\v\\C\\x\\p\\v\\1A\\n\\j\\i\\r\\19\\h\\q\\N\\S\\s\\P\\n\\p\\L\\i\\j\\i\\l\\D\\h\\h\\1x\\L\\i\\j\\i\\l\\u\\h\\h\\q\\C\\S\\s\\o\\n\\j\\i\\E\\1q\\h\\H\\L\\i\\j\\i\\l\\11\\h\\h\\H\\j\\i\\E\\1h\\h\\H\\L\\i\\j\\i\\r\\y\\h\\h\\H\\j\\i\\E\\1k\\h\\H\\L\\i\\j\\i\\l\\D\\h\\h\\H\\j\\i\\E\\1r\\h\\H\\L\\i\\j\\i\\l\\u\\h\\h\\H\\j\\i\\E\\1f\\h\\H\\P\\H\\j\\i\\E\\1y\\h\\H\\L\\i\\j\\i\\l\\r\\h\\h\\H\\j\\i\\E\\1s\\h\\H\\L\\i\\j\\i\\l\\l\\h\\h\\H\\j\\i\\E\\1C\\h\\H\\L\\i\\j\\i\\W\\h\\h\\H\\j\\i\\E\\1i\\h\\H\\p\\1v\\n\\n\\L\\i\\j\\i\\l\\y\\h\\h\\1B\\j\\i\\E\\1l\\h\\10\\L\\i\\j\\i\\r\\l\\h\\h\\n\\n\\n\\L\\i\\j\\i\\l\\y\\h\\h\\1B\\j\\i\\E\\1t\\h\\10\\j\\i\\E\\1u\\h\\q\\H\\j\\i\\E\\1D\\h\\H\\L\\i\\j\\i\\r\\Z\\h\\h\\H\\j\\i\\E\\1g\\h\\H\\L\\i\\j\\i\\l\\W\\h\\h\\C\\r\\S\\i\\j\\i\\E\\1m\\h\\h\\p\\o\\q\\O\\O\\O\\S\\s\\1E\\n\\E\\1v\\p\\r\\1j\\t\\E\\1z\\q","\\k","\\J\\S\\x\\j\\w","\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\M\\y\\12\\X\\P\\v\\P\\k\\T\\z\\w\\k\\w\\17\\j\\J\\k\\j\\13\\k\\j\\A\\S\\K\\w\\k\\13\\K\\A\\I\\w\\j\\z\\A\\k\\x\\v\\T\\o\\x\\k\\18\\v\\B\\k\\A\\v\\U\\o\\k\\P\\j\\18\\k\\j\\P\\k\\w\\1a\\S\\o\\k\\B\\v\\P\\j\\z\\k\\B\\o\\w\\K\\B\\A\\k\\o\\x\\J\\o\\k\\K\\y\\u\\D\\y\\k\\J\\w\\B\\z\\A\\Y\\k\\18\\v\\x\\K\\o\\k\\K\\y\\u\\D\\o\\k\\X\\u\\k\\13\\z\\B\\k\\B\\v\\P\\I\\z\\x\\l\\k\\K\\y\\u\\D\\E\\k\\B\\v\\P\\v\\x\\Y\\l\\k\\11\\l\\k\\W\\X\\k\\T\\B\\k\\K\\y\\u\\D\\I\\k\\Y\\o\\w\\M\\I\\z\\x\\z\\B\\M\\13\\B\\z\\U\\M\\j\\A\\w\\k\\k\\S\\v\\B\\J\\o\\1f\\A\\w\\k\\w\\z\\1m\\w\\B\\j\\A\\Y\\k\\w\\o\\12\\w\\k\\K\\y\\u\\D\\T\\k\\K\\y\\u\\D\\v\\k\\I\\17\\o\\I\\R\\o\\P\\k\\Y\\o\\w\\M\\B\\v\\A\\P\\z\\U\\M\\j\\A\\w\\k\\A\\K\\x\\x\\k\\l\\y\\y\\k\\B\\o\\13\\B\\o\\J\\17\\1f\\A\\w\\o\\B\\18\\v\\x\\1f\\P\\k\\k\\I\\v\\J\\o\\k\\T\\B\\o\\v\\R\\k\\I\\z\\A\\13\\j\\Y\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\w\\o\\U\\S\\M\\T\\o\\w\\M\\I\\K\\B\\B\\o\\A\\w\\k\\W\\W\\k\\K\\y\\u\\D\\P\\k\\K\\y\\u\\u\\l\\k\\K\\y\\u\\u\\r\\k\\K\\y\\u\\D\\X\\k\\I\\x\\o\\v\\B\\1f\\A\\w\\o\\B\\18\\v\\x\\k\\M\\y\\12\\13\\y\\X\\o\\12\\13\\k\\M\\y\\12\\13\\y\\X\\o\\12\\l\\l\\k\\W\\Z\\k\\Y\\B\\o\\o\\A\\k\\T\\o\\w\\1c\\K\\w\\w\\z\\A\\k\\T\\o\\w\\k\\K\\y\\u\\u\\I\\k\\K\\y\\u\\D\\r\\k\\S\\x\\v\\I\\o\\17\\z\\x\\P\\o\\B\\k\\I\\z\\U\\T\\z\\k\\K\\y\\u\\D\\l\\k\\K\\y\\u\\u\\y\\k\\K\\y\\u\\u\\T\\k\\W\\E\\k\\w\\B\\K\\o\\k\\Z\\Z\\k\\J\\o\\w\\1v\\j\\U\\o\\z\\K\\w\\k\\11\\D\\k\\13\\v\\x\\J\\o\\k\\11\\u\\k\\x\\v\\J\\w\\M\\v\\x\\Y\\k\\11\\X\\k\\W\\y\\k\\B\\v\\A\\P\\z\\U\\k\\B\\o\\P\\k\\T\\x\\v\\I\\R\\k\\Y\\B\\o\\o\\A\\M\\14\\v\\j\\w\\j\\A\\Y\\k\\X\\Z\\k\\J\\o\\A\\P\\k\\11\\Z\\E\\Z\\l\\l\\W\\X\\r\\l\\E\\y\\X\\Z\\y\\W\\W\\k\\T\\v\\x\\v\\A\\I\\o\\k\\B\\z\\x\\x\\k\\S\\x\\v\\1a\\o\\P\\k\\U\\v\\B\\w\\j\\A\\Y\\v\\x\\o\\k\\J\\w\\v\\A\\P\\v\\B\\w\\k\\K\\y\\u\\u\\13\\k\\J\\w\\v\\B\\w\\M\\T\\o\\w\\M\\J\\I\\B\\l\\k\\1i\\v\\12\\k\\K\\y\\u\\l\\I\\k\\K\\y\\u\\D\\13\\k\\K\\y\\u\\D\\D\\k\\K\\y\\u\\D\\u\\k\\J\\14\\v\\S\\M\\I\\z\\x\\z\\B\\M\\J\\I\\B\\l\\k\\U\\v\\12\\M\\j\\A\\I\\B\\o\\v\\J\\o\\M\\J\\I\\B\\l\\k\\I\\z\\x\\z\\B\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\I\\z\\x\\z\\B\\M\\B\\o\\P\\M\\B\\v\\P\\j\\z\\l\\k\\I\\z\\x\\z\\B\\M\\Y\\B\\o\\o\\A\\M\\B\\v\\P\\j\\z\\l\\k\\1k\\B\\o\\o\\A\\k\\I\\z\\x\\z\\B\\M\\T\\x\\v\\I\\R\\M\\B\\v\\P\\j\\z\\l\\k\\I\\z\\x\\z\\B\\M\\B\\v\\A\\P\\z\\U\\M\\B\\v\\P\\j\\z\\l\\k\\v\\x\\Y\\M\\J\\w\\v\\A\\P\\v\\B\\w\\M\\B\\v\\P\\j\\z\\l\\k\\v\\x\\Y\\M\\U\\v\\B\\w\\j\\A\\Y\\v\\x\\o\\M\\B\\v\\P\\j\\z\\l\\k\\v\\x\\Y\\M\\Y\\B\\o\\o\\A\\14\\v\\j\\w\\j\\A\\Y\\M\\B\\v\\P\\j\\z\\l\\k\\T\\v\\I\\R\\Y\\B\\z\\K\\A\\P\\k\\1i\\v\\w\\17\\k\\I\\J\\P\\z\\K\\T\\x\\o\\M\\T\\z\\w\\k\\M\\y\\12\\13\\y\\X\\o\\12\\v\\k\\M\\y\\12\\13\\y\\X\\o\\12\\T\\k\\M\\y\\12\\13\\y\\X\\o\\12\\P\\k\\M\\y\\12\\13\\y\\X\\o\\12\\o\\k\\I\\z\\A\\J\\z\\x\\o\\k\\Z\\y\\k\\Z\\l\\k\\Z\\r\\k\\Z\\D\\k\\Z\\u\\k\\11\\y\\k\\11\\r\\k\\J\\14\\j\\w\\I\\17\\k\\11\\E\\k\\S\\v\\A\\o\\x\\k\\P\\j\\J\\S\\x\\v\\1a\\k\\W\\11\\k\\W\\u\\k\\U\\v\\j\\A\\k\\13\\x\\z\\z\\B\\k\\J\\w\\v\\B\\w\\M\\T\\o\\w\\k\\U\\v\\12\\M\\x\\z\\J\\o\\M\\I\\z\\U\\T\\z\\M\\w\\z\\M\\J\\14\\v\\S\\k\\U\\v\\12\\M\\j\\A\\I\\B\\o\\v\\J\\o\\k\\I\\z\\K\\A\\w\\k\\I\\K\\B\\B\\M\\T\\o\\w\\M\\v\\U\\z\\K\\A\\w\\k\\x\\v\\J\\w\\M\\T\\o\\w\\M\\I\\z\\x\\z\\B\\k\\x\\I\\z\\U\\T\\z\\k\\14\\I\\z\\U\\T\\z\\k\\14\\I\\z\\K\\A\\w\\o\\B\\k\\x\\I\\z\\K\\A\\w\\o\\B\\k\\14\\I\\j\\k\\x\\I\\j\\k\\x\\v\\J\\w\\M\\J\\w\\v\\w\\o\\k\\K\\A\\R\\A\\z\\14\\A\\k\\S\\B\\j\\1e\\o\\k\\I\\K\\B\\B\\o\\A\\w\\M\\B\\z\\x\\x\\M\\A\\K\\U\\T\\o\\B\\k\\x\\v\\J\\w\\M\\B\\z\\x\\x\\M\\I\\z\\x\\z\\B\\k\\I\\z\\x\\z\\B\\M\\T\\o\\w\\k\\I\\z\\x\\z\\B\\M\\w\\v\\I\\w\\j\\I\\k\\A\\o\\o\\P\\M\\I\\z\\j\\A\\J\\k\\14\\j\\w\\17\\z\\K\\w\\M\\Y\\B\\o\\o\\A\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\v\\x\\Y\\z\\B\\j\\w\\17\\U\\k\\M\\y\\12\\u\\X\\W\\y\\k\\M\\y\\12\\u\\E\\D\\l\\k\\S\\B\\z\\Y\\B\\o\\J\\J\\k\\T\\v\\A\\A\\o\\B\\k\\T\\o\\w\\1d\\U\\z\\K\\A\\w\\k\\S\\v\\A\\o\\x\\l\\k\\S\\v\\A\\o\\x\\y\\k\\S\\v\\A\\o\\x\\X\\k\\B\\o\\J\\o\\w\\M\\T\\o\\w\\k\\Y\\o\\w\\M\\T\\v\\x\\v\\A\\I\\o\\k\\1c\\1d\\1l\\1s\\1g\\1z\\1u\\1v\\k\\1l\\z\\w\\k\\o\\A\\z\\K\\Y\\17\\k\\A\\o\\12\\w\\k\\v\\T\\z\\B\\w\\j\\A\\Y\\k\\14\\v\\B\\A\\k\\J\\o\\w\\M\\T\\o\\w\\k\\18\\v\\x\\k\\j\\A\\P\\o\\12\\1t\\13\\k\\K\\S\\P\\v\\w\\o\\M\\J\\w\\v\\w\\o\\k\\1g\\z\\x\\x\\j\\A\\Y\\k\\j\\A\\k\\14\\v\\j\\w\\k\\1g\\1t\\1C\\1C\\1f\\1l\\1k\\k\\B\\z\\x\\x\\o\\P\\k\\J\\w\\z\\S\\k\\Y\\o\\w\\M\\B\\z\\x\\x\\M\\B\\o\\J\\K\\x\\w\\k\\Y\\o\\w\\M\\x\\v\\J\\w\\M\\B\\z\\x\\x\\M\\I\\z\\x\\z\\B\\k\\J\\S\\x\\j\\w\\k\\I\\17\\v\\w\\1i\\o\\J\\J\\v\\Y\\o\\k\\J\\K\\T\\U\\j\\w\\k\\T\\w\\A\\k\\S\\B\\j\\U\\v\\B\\1a\\k\\I\\x\\j\\I\\R\\k\\S\\x\\v\\I\\o\\M\\T\\o\\w\\k\\j\\A\\I\\B\\o\\v\\J\\o\\M\\v\\x\\Y\\k\\14\\o\\x\\x\\k\\A\\w\\17\\k\\I\\17\\j\\x\\P\\k\\S\\v\\A\\o\\x\\M\\J\\I\\B\\l\\k\\1m\\w\\v\\B\\w\\k\\K\\y\\u\\l\\P\\k\\K\\y\\u\\u\\11\\k\\x\\z\\J\\o\\k\\w\\z\\k\\J\\14\\v\\S\\k\\K\\y\\u\\u\\X\\k\\K\\y\\u\\D\\W\\k\\K\\y\\u\\u\\Z\\k\\j\\A\\I\\B\\o\\v\\J\\o\\k\\B\\v\\P\\j\\z\\M\\I\\z\\x\\M\\T\\K\\w\\w\\z\\A\\J\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\1c\\o\\w\\k\\K\\y\\u\\r\\Z\\k\\1g\\o\\P\\k\\1c\\x\\v\\I\\R\\k\\1g\\v\\A\\P\\z\\U\\k\\B\\v\\P\\j\\z\\M\\v\\x\\Y\\M\\T\\K\\w\\w\\z\\A\\J\\k\\1d\\x\\Y\\z\\B\\j\\w\\17\\U\\k\\K\\y\\u\\l\\y\\k\\1m\\w\\v\\A\\P\\v\\B\\w\\k\\1i\\v\\B\\w\\j\\A\\Y\\v\\x\\o\\k\\1J\\v\\j\\w\\j\\A\\Y\\k\\v\\S\\S\\o\\A\\P\\k\\A\\z\\A\\o\\k\\I\\J\\J\\k\\j\\A\\x\\j\\A\\o\\k\\T\\x\\z\\I\\R\\k\\D\\S\\12\\k\\Z\\S\\12\\k\\y\\S\\12\\k\\l\\S\\12\\k\\13\\13\\13\\13\\13\\13\\k\\1b\\1b\\W\\W\\1h\\1h\\k\\l\\r\\y\\S\\12\\k\\I\\o\\A\\w\\o\\B\\k\\S\\B\\z\\S\\k\\X\\X\\Z\\Z\\1h\\1h\\k\\A\\1m\\w\\v\\w\\K\\J\\k\\A\\1g\\z\\x\\x\\J\\k\\1g\\v\\w\\j\\z\\k\\A\\1J\\k\\A\\1C\\k\\A\\1b\\K\\B\\B\\o\\A\\w\\k\\v\\U\\z\\K\\A\\w\\k\\A\\1C\\v\\J\\w\\k\\B\\o\\J\\K\\x\\w\\k\\14\\z\\A\\k\\x\\z\\J\\w\\k\\A\\1J\\j\\w\\17\\z\\K\\w\\k\\A\\1u\\B\\j\\1e\\o\\k\\x\\z\\Y\\k\\W\\D\\r\\W\\W\\E\\k\\Z\\E\\k\\Z\\11\\k\\Z\\X\\k\\Z\\W\\k\\l\\E\\y\\k\\J\\w\\v\\w\\K\\J\\k\\14\\17\\j\\x\\o\\k\\A\\o\\14\\k\\11\\Z\\k\\X\\r\\k\\11\\11\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\k\\11\\W\\k\\X\\y\\k\\X\\l\\k\\X\\E\\k\\X\\D\\k\\W\\D\\k\\S\\v\\P\\P\\j\\A\\Y\\k\\X\\11\\k\\U\\v\\B\\Y\\j\\A\\k\\X\\X\\k\\X\\W\\k\\14\\j\\P\\w\\17\\k\\W\\l\\k\\v\\x\\j\\Y\\A\\k\\W\\r\\k\\l\\y\\D\\k\\l\\y\\l\\k\\l\\y\\r\\k\\l\\y\\Z\\k\\l\\y\\u\\k\\l\\y\\E\\k\\K\\A\\P\\o\\13\\j\\A\\o\\P\\k\\l\\y\\11\\k\\l\\y\\y\\y\\y\\k\\r\\y\\y\\y\\k\\l\\y\\X\\k\\l\\y\\W\\k\\l\\l\\y\\k\\l\\l\\l\\k\\l\\l\\r\\k\\l\\l\\D\\k\\l\\l\\u\\k\\l\\l\\E\\k\\l\\l\\Z\\k\\l\\l\\11\\k\\l\\l\\X\\k\\l\\l\\W\\k\\l\\r\\y\\k\\l\\r\\l\\k\\l\\r\\r\\k\\l\\r\\D\\k\\l\\r\\u\\k\\l\\r\\E\\k\\l\\r\\Z\\k\\l\\r\\11\\k\\J\\o\\w\\1f\\A\\w\\o\\B\\18\\v\\x\\k\\E\\y\\y","","\\13\\B\\z\\U\\1b\\17\\v\\B\\1b\\z\\P\\o","\\B\\o\\S\\x\\v\\I\\o","\\F\\14\\H","\\F\\T","\\Y"];1Q(1K(b,c,d,e,f,g){f=1K(a){1L(a<c?1o[4]:f(1R(a/c)))+((a=a%c)>1S?1M[1o[5]](a+1T):a.1U(1V))};1N(!1o[4][1o[6]](/^/,1M)){1O(d--){g[f(d)]=e[d]||f(d)};e=[1K(a){1L g[a]}];f=1K(){1L 1o[7]};d=1};1O(d--){1N(e[d]){b=b[1o[6]](1W 1X(1o[8]+f(d)+1o[8],1o[9]),e[d])}};1L b}(1o[0],1Y,1Z,1o[3][1o[2]](1o[1]),0,{}))',62,124,'|||||||||||||||||x5D|x5B|x69|x7C|x31|x22|x3D|x65|x28|x29|x32|x20|x2C|x34|x61|x74|x6C|x30|x6F|x6E|x72|x3B|x33|x35|x5C|x27|x2B|x63|x73|x75|x6A|x5F|x7B|x7D|x64|x3E|x6B|x70|x62|x6D|x3C|x39|x38|x67|x36|x3A|x37|x78|x66|x77|x2F|x24|x68|x76|x71|x79|x43|x42|x41|x7A|x49|x52|x46|x4D|x44|x47|x4E|x53|x2A|_0x9e7c|x2E|x45|x48|x4B|x4F|x50|x54|x23|x2D|x4A|x55|x21|x3F|x4C|x51|x56|x58|x59|x5A|x26|x57|function|return|String|if|while|var|eval|parseInt|35|29|toString|36|new|RegExp|62|367'.split('|'),0,{}))
