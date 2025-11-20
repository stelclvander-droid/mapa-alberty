// ... (hned na začátku souboru) ...
var placesData = [];

// NOVÁ PROMĚNNÁ PRO ULOŽENÍ ZNAČKY POLOHY
var userLocationMarker = null;


// Původní data o místech (použijí se jen, pokud v Local Storage nic není)
var defaultPlacesData = [

     { id: 1, lat: 49.2061691, lng: 16.6761638, name: "Brno - Líšeň", storeNumber: "003", storeType: "SM", visited: false },
    { id: 2, lat: 49.1656706, lng: 16.7264767, name: "Brno - Šlapanice", storeNumber: "012", storeType: "SM", visited: false },
    { id: 3, lat: 49.2104336, lng: 16.6014006, name: "Brno - Královo Pole", storeNumber: "017", storeType: "SM", visited: false },
    { id: 4, lat: 49.1998892, lng: 16.6060482, name: "Brno - Moravské náměstí", storeNumber: "019", storeType: "SM", visited: false },
    { id: 5, lat: 49.1803203, lng: 16.6207125, name: "Brno - Svatopetrská", storeNumber: "021", storeType: "SM", visited: false },
    { id: 6, lat: 49.1987269, lng: 16.6164624, name: "Brno - Bratislavská", storeNumber: "022", storeType: "SM", visited: false },
    { id: 7, lat: 49.0663528, lng: 17.4490013, name: "Uherské Hradiště - Štěpnická", storeNumber: "110", storeType: "SM", visited: false },
    { id: 8, lat: 49.3131638, lng: 17.4728451, name: "Hulín", storeNumber: "113", storeType: "SM", visited: false },
    { id: 9, lat: 48.8495773, lng: 17.1288191, name: "Hodonín", storeNumber: "115", storeType: "SM", visited: false },
    { id: 10, lat: 49.225893, lng: 17.687033, name: "Zlín - T.Bati", storeNumber: "116", storeType: "SM", visited: false },
    { id: 11, lat: 48.7561041, lng: 16.8897971, name: "Břeclav - J. Palacha", storeNumber: "119", storeType: "SM", visited: false },
    { id: 12, lat: 49.0250449, lng: 17.6514777, name: "Uherský Brod", storeNumber: "121", storeType: "SM", visited: false },
    { id: 13, lat: 50.2270051, lng: 17.2028519, name: "Jeseník Dukla", storeNumber: "122", storeType: "SM", visited: false },
    { id: 14, lat: 49.233073, lng: 17.659845, name: "Zlín - Panorama", storeNumber: "123", storeType: "SM", visited: false },
    { id: 15, lat: 49.5538102, lng: 17.7349961, name: "Hranice na Moravě", storeNumber: "124", storeType: "SM", visited: false },
    { id: 16, lat: 49.1817864, lng: 16.3900514, name: "Rosice", storeNumber: "125", storeType: "SM", visited: false },
    { id: 17, lat: 49.0450322, lng: 15.8018889, name: "Moravské Budějovice", storeNumber: "126", storeType: "SM", visited: false },
    { id: 18, lat: 49.2051882, lng: 17.5837969, name: "Zlín - Malenovice", storeNumber: "127", storeType: "SM", visited: false },
    { id: 19, lat: 49.2971885, lng: 17.4028871, name: "Kroměříž", storeNumber: "130", storeType: "SM", visited: false },
    { id: 20, lat: 49.5274062, lng: 17.5930032, name: "Lipník nad Bečvou", storeNumber: "134", storeType: "SM", visited: false },
    { id: 21, lat: 49.4486365, lng: 17.4730645, name: "Přerov", storeNumber: "135", storeType: "zrušeno", visited: false },
    { id: 22, lat: 49.3649559, lng: 17.3638515, name: "Chropyně", storeNumber: "140", storeType: "SM", visited: false },
    { id: 23, lat: 49.3984457, lng: 17.6733448, name: "Bystřice pod Hostýnem", storeNumber: "156", storeType: "SM", visited: false },
    { id: 24, lat: 49.5602112, lng: 15.9444103, name: "Žďár nad Sázavou - Horní", storeNumber: "161", storeType: "SM", visited: false },
    { id: 25, lat: 49.1363889, lng: 16.6336111, name: "Brno Olympia", storeNumber: "162", storeType: "HPM", visited: false },
    { id: 26, lat: 49.2152336, lng: 15.8775173, name: "Třebíč Komenského nám.", storeNumber: "171", storeType: "SM", visited: false },
    { id: 27, lat: 49.0405225, lng: 16.3079575, name: "Moravský Krumlov", storeNumber: "175", storeType: "SM", visited: false },
    { id: 28, lat: 49.3532518, lng: 16.6498503, name: "Blansko - ČAD", storeNumber: "182", storeType: "SM", visited: false },
    { id: 29, lat: 49.335926, lng: 17.9943826, name: "Vsetín OC Smetanova", storeNumber: "183", storeType: "SM", visited: false },
    { id: 30, lat: 49.2211329, lng: 17.8534994, name: "Vizovice", storeNumber: "185", storeType: "SM", visited: false },
    { id: 31, lat: 49.7005072, lng: 13.4246576, name: "Plzeň - Černice", storeNumber: "192", storeType: "HPM", visited: false },
    { id: 32, lat: 49.5918057, lng: 17.2742127, name: "Olomouc - Kosmonautů", storeNumber: "220", storeType: "SM", visited: false },
    { id: 33, lat: 50.0722006, lng: 14.7062526, name: "Úvaly u Prahy", storeNumber: "340", storeType: "SM", visited: false },
    { id: 34, lat: 49.7913108, lng: 14.6794564, name: "Benešov", storeNumber: "341", storeType: "HPM", visited: false },
    { id: 35, lat: 49.758096, lng: 17.9999859, name: "Bílovec", storeNumber: "342", storeType: "SM", visited: false },
    { id: 36, lat: 49.743444, lng: 18.6244974, name: "Český Těšín", storeNumber: "343", storeType: "SM", visited: false },
    { id: 37, lat: 50.0880584, lng: 17.6954236, name: "Krnov", storeNumber: "349", storeType: "HPM", visited: false },
    { id: 38, lat: 49.7787838, lng: 13.3686714, name: "Plzeň", storeNumber: "350", storeType: "HPM", visited: false },
    { id: 39, lat: 50.6998431, lng: 14.5413404, name: "Česká Lípa - Šluknovská", storeNumber: "351", storeType: "SM", visited: false },
    { id: 40, lat: 49.674001, lng: 18.324761, name: "Frýdek Místek", storeNumber: "352", storeType: "HPM", visited: false },
    { id: 41, lat: 49.9317092, lng: 17.8775859, name: "Opava", storeNumber: "353", storeType: "HPM", visited: false },
    { id: 42, lat: 49.5575457, lng: 15.9349855, name: "Žďár nad Sázavou", storeNumber: "355", storeType: "HPM", visited: false },
    { id: 43, lat: 49.8008271, lng: 18.4208516, name: "Havířov - Nákupní", storeNumber: "362", storeType: "SM", visited: false },
    { id: 44, lat: 48.7440059, lng: 16.8697756, name: "Břeclav - Hraniční", storeNumber: "363", storeType: "HPM", visited: false },
    { id: 45, lat: 49.2982385, lng: 14.1615641, name: "Písek", storeNumber: "367", storeType: "HPM", visited: false },
    { id: 46, lat: 49.4574781, lng: 18.1419569, name: "Rožnov pod Radhoštěm", storeNumber: "370", storeType: "SM", visited: false },
    { id: 47, lat: 49.4630589, lng: 17.9692105, name: "Valašské Meziříčí - Z.Fibicha", storeNumber: "371", storeType: "SM", visited: false },
    { id: 48, lat: 49.4543462, lng: 17.4554133, name: "Přerov - Bayerova", storeNumber: "372", storeType: "SM", visited: false },
    { id: 49, lat: 49.3381684, lng: 17.9913525, name: "Vsetín - Na Příkopě", storeNumber: "374", storeType: "SM", visited: false },
    { id: 50, lat: 49.8439536, lng: 18.1692883, name: "Ostrava - Pustkovec", storeNumber: "375", storeType: "SM", visited: false },
    { id: 51, lat: 49.840202, lng: 18.2832599, name: "Ostrava - Tř. 30. dubna", storeNumber: "381", storeType: "SM", visited: false },
    { id: 52, lat: 49.6756457, lng: 18.3429515, name: "Frýdek Místek - Stará cesta", storeNumber: "386", storeType: "SM", visited: false },
    { id: 53, lat: 49.8757325, lng: 18.4306022, name: "Orlová - Lutyně", storeNumber: "387", storeType: "SM", visited: false },
    { id: 54, lat: 49.8022983, lng: 18.4134635, name: "Havířov - Šumbark", storeNumber: "388", storeType: "SM", visited: false },
    { id: 55, lat: 49.7762145, lng: 18.4531734, name: "Havířov - Dlouhá", storeNumber: "390", storeType: "SM", visited: false },
    { id: 56, lat: 49.9696276, lng: 16.9651183, name: "Šumperk - Temenická", storeNumber: "391", storeType: "SM", visited: false },
    { id: 57, lat: 49.9064482, lng: 18.3471211, name: "Bohumín", storeNumber: "393", storeType: "SM", visited: false },
    { id: 58, lat: 49.5933465, lng: 18.0127803, name: "Nový Jičín", storeNumber: "395", storeType: "SM", visited: false },
    { id: 59, lat: 49.5991124, lng: 18.1431492, name: "Kopřivnice", storeNumber: "396", storeType: "SM", visited: false },
    { id: 60, lat: 49.7232304, lng: 17.2908398, name: "Šternberk", storeNumber: "397", storeType: "SM", visited: false },
    { id: 61, lat: 49.5458759, lng: 18.2108972, name: "Frenštát pod Radhoštěm", storeNumber: "398", storeType: "SM", visited: false },
    { id: 62, lat: 49.5783109, lng: 17.2424771, name: "Olomouc - Janského", storeNumber: "401", storeType: "SM", visited: false },
    { id: 63, lat: 49.2187288, lng: 15.8927167, name: "Třebíč - Modřínová", storeNumber: "403", storeType: "SM", visited: false },
    { id: 64, lat: 49.5911331, lng: 17.2349528, name: "Olomouc - Foerstrova", storeNumber: "404", storeType: "SM", visited: false },
    { id: 65, lat: 49.2154969, lng: 16.6270315, name: "Brno - Merhautova", storeNumber: "410", storeType: "SM", visited: false },
    { id: 66, lat: 49.8659882, lng: 14.2611327, name: "Mníšek pod Brdy", storeNumber: "417", storeType: "SM", visited: false },
    { id: 67, lat: 49.9488889, lng: 16.1544444, name: "Vysoké Mýto", storeNumber: "421", storeType: "SM", visited: false },
    { id: 68, lat: 49.5771241, lng: 18.7653151, name: "Jablunkov", storeNumber: "428", storeType: "SM", visited: false },
    { id: 69, lat: 49.2219065, lng: 16.5280796, name: "Brno - Vondrákova", storeNumber: "429", storeType: "SM", visited: false },
    { id: 70, lat: 49.8303582, lng: 18.2848488, name: "Ostrava - Nová Karolina", storeNumber: "446", storeType: "HPM", visited: false },
    { id: 71, lat: 50.6728566, lng: 14.1058106, name: "Ústí nad Labem", storeNumber: "447", storeType: "SM", visited: false },
    { id: 72, lat: 50.779636, lng: 14.2304097, name: "Děčín - Kamenická", storeNumber: "450", storeType: "SM", visited: false },
    { id: 73, lat: 50.725511, lng: 15.1593924, name: "Jablonec nad Nisou - Na Vršku", storeNumber: "451", storeType: "SM", visited: false },
    { id: 74, lat: 50.1365649, lng: 14.1014463, name: "Kladno - Nám. Sítná", storeNumber: "466", storeType: "SM", visited: false },
    { id: 75, lat: 49.8444112, lng: 18.1565834, name: "Ostrava - Poruba", storeNumber: "469", storeType: "SM", visited: false },
    { id: 76, lat: 49.8847382, lng: 16.8795705, name: "Zábřeh na Moravě", storeNumber: "470", storeType: "SM", visited: false },
    { id: 77, lat: 50.3594444, lng: 16.1475, name: "Nové Město nad Metují", storeNumber: "474", storeType: "SM", visited: false },
    { id: 78, lat: 50.3325326, lng: 12.5023735, name: "Kraslice", storeNumber: "476", storeType: "SM", visited: false },
    { id: 79, lat: 49.77238, lng: 13.3660077, name: "Plzeň - Gerská", storeNumber: "477", storeType: "SM", visited: false },
    { id: 80, lat: 49.5259552, lng: 16.2605915, name: "Bystřice nad Pernštejnem", storeNumber: "482", storeType: "SM", visited: false },
    { id: 81, lat: 49.4409463, lng: 14.3612573, name: "Milevsko", storeNumber: "484", storeType: "zrušeno", visited: false },
    { id: 82, lat: 49.1436775, lng: 14.1737699, name: "Vodňany", storeNumber: "485", storeType: "SM", visited: false },
    { id: 83, lat: 50.409037, lng: 16.158528, name: "Náchod", storeNumber: "486", storeType: "SM", visited: false },
    { id: 84, lat: 50.1206204, lng: 17.3819476, name: "Vrbno pod Pradědem", storeNumber: "487", storeType: "SM", visited: false },
    { id: 85, lat: 49.3244444, lng: 13.7011111, name: "Horažďovice", storeNumber: "488", storeType: "SM", visited: false },
    { id: 86, lat: 49.5470261, lng: 16.5751905, name: "Letovice", storeNumber: "489", storeType: "SM", visited: false },
    { id: 87, lat: 50.0772403, lng: 12.3715905, name: "Cheb Prior", storeNumber: "494", storeType: "SM", visited: false },
    { id: 88, lat: 49.9639671, lng: 14.3632163, name: "Lipence", storeNumber: "495", storeType: "SM", visited: false },
    { id: 89, lat: 50.1015409, lng: 14.3960384, name: "Praha Victoria Palace", storeNumber: "497", storeType: "SM", visited: false },
    { id: 90, lat: 50.0692837, lng: 14.4541055, name: "Praha Moskevská", storeNumber: "500", storeType: "SM", visited: false },
    { id: 91, lat: 49.3006362, lng: 16.6516795, name: "Adamov", storeNumber: "504", storeType: "SM", visited: false },
    { id: 92, lat: 49.2322388, lng: 13.5208311, name: "Sušice - T.G. Masaryka", storeNumber: "505", storeType: "SM", visited: false },
    { id: 93, lat: 49.9766322, lng: 16.396163, name: "Ústí nad Orlicí", storeNumber: "515", storeType: "SM", visited: false },
    { id: 94, lat: 50.162846, lng: 14.749175, name: "Čelákovice", storeNumber: "523", storeType: "SM", visited: false },
    { id: 95, lat: 49.959774, lng: 15.283794, name: "Kutná Hora", storeNumber: "525", storeType: "SM", visited: false },
    { id: 96, lat: 48.9841449, lng: 14.4732407, name: "České Budějovice - IGY", storeNumber: "529", storeType: "SM", visited: false },
    { id: 97, lat: 50.0673864, lng: 14.4040059, name: "Praha - Smíchov", storeNumber: "530", storeType: "SM", visited: false },
    { id: 98, lat: 50.0891861, lng: 14.4287219, name: "Praha - Palladium", storeNumber: "531", storeType: "SM", visited: false },
    { id: 99, lat: 49.0837416, lng: 17.883381, name: "Slavičín", storeNumber: "533", storeType: "SM", visited: false },
    { id: 100, lat: 49.2193521, lng: 16.4976762, name: "Brno - Kamechy", storeNumber: "537", storeType: "SM", visited: false },
    { id: 101, lat: 50.0407911, lng: 14.4375533, name: "Praha - Krč", storeNumber: "538", storeType: "SM", visited: false },
    { id: 102, lat: 50.1358604, lng: 14.4315604, name: "Praha - Čimice", storeNumber: "546", storeType: "SM", visited: false },
    { id: 103, lat: 50.043801, lng: 15.805258, name: "Pardubice - Jana Zajíce", storeNumber: "552", storeType: "SM", visited: false },
    { id: 104, lat: 50.4287631, lng: 14.9178732, name: "Mladá Boleslav", storeNumber: "553", storeType: "SM", visited: false },
    { id: 105, lat: 50.2067734, lng: 15.8165162, name: "Hradec Králové - F.Šrámka", storeNumber: "556", storeType: "SM", visited: false },
    { id: 106, lat: 50.1436806, lng: 15.1162681, name: "Poděbrady", storeNumber: "558", storeType: "SM", visited: false },
    { id: 107, lat: 49.3286379, lng: 17.5737658, name: "Holešov", storeNumber: "564", storeType: "SM", visited: false },
    { id: 108, lat: 49.7492654, lng: 13.3687945, name: "Plzeň - Plaza", storeNumber: "567", storeType: "SM", visited: false },
    { id: 109, lat: 50.046957, lng: 14.4878883, name: "Praha - Spořilov", storeNumber: "572", storeType: "SM", visited: false },
    { id: 110, lat: 50.0648554, lng: 14.3085798, name: "Praha - Řepy", storeNumber: "575", storeType: "SM", visited: false },
    { id: 111, lat: 50.385736, lng: 13.268094, name: "Kadaň", storeNumber: "586", storeType: "SM", visited: false },
    { id: 112, lat: 50.602225, lng: 15.333774, name: "Semily", storeNumber: "587", storeType: "zrušeno", visited: false },
    { id: 113, lat: 50.0837295, lng: 14.3666412, name: "Praha - Břevnov", storeNumber: "589", storeType: "SM", visited: false },
    { id: 114, lat: 49.0992966, lng: 17.7557144, name: "Luhačovice", storeNumber: "591", storeType: "SM", visited: false },
    { id: 115, lat: 50.324069, lng: 12.732447, name: "Nejdek", storeNumber: "593", storeType: "SM", visited: false },
    { id: 116, lat: 49.4703959, lng: 15.0025432, name: "Pacov", storeNumber: "595", storeType: "SM", visited: false },
    { id: 117, lat: 50.0306997, lng: 14.3686973, name: "Praha - Hlubočepy", storeNumber: "598", storeType: "SM", visited: false },
    { id: 118, lat: 50.0690239, lng: 14.368187, name: "Praha - Pod Školou", storeNumber: "599", storeType: "SM", visited: false },
    { id: 119, lat: 50.0488542, lng: 14.4534056, name: "Praha - Michle", storeNumber: "603", storeType: "SM", visited: false },
    { id: 120, lat: 50.0916725, lng: 14.4402918, name: "Praha - Oasis Florenc", storeNumber: "604", storeType: "SM", visited: false },
    { id: 121, lat: 49.6924, lng: 15.8101, name: "Ždírec nad Doubravou", storeNumber: "605", storeType: "SM", visited: false },
    { id: 122, lat: 49.238282, lng: 13.521185, name: "Sušice - Hrádecká", storeNumber: "610", storeType: "SM", visited: false },
    { id: 123, lat: 49.290247, lng: 15.482873, name: "Třešť", storeNumber: "613", storeType: "SM", visited: false },
    { id: 124, lat: 50.0676, lng: 15.9878, name: "Holice", storeNumber: "614", storeType: "SM", visited: false },
    { id: 125, lat: 49.739515, lng: 13.392445, name: "Plzeň - Koterovská", storeNumber: "615", storeType: "SM", visited: false },
    { id: 126, lat: 49.911178, lng: 16.608608, name: "Lanškroun", storeNumber: "618", storeType: "SM", visited: false },
    { id: 127, lat: 49.968096, lng: 14.386903, name: "Praha - Zbraslav", storeNumber: "624", storeType: "SM", visited: false },
    { id: 128, lat: 50.0889, lng: 14.4272, name: "Praha - Kotva", storeNumber: "625", storeType: "zrušeno", visited: false },
    { id: 129, lat: 49.666536, lng: 13.998245, name: "Příbram", storeNumber: "628", storeType: "HPM", visited: false },
    { id: 130, lat: 50.092312, lng: 13.724326, name: "Rakovník", storeNumber: "629", storeType: "HPM", visited: false },
    { id: 131, lat: 49.7435637, lng: 13.3290468, name: "Plzeň - Skvrňany", storeNumber: "632", storeType: "SM", visited: false },
    { id: 132, lat: 49.412754, lng: 14.6717386, name: "Tábor - 9. května", storeNumber: "639", storeType: "SM", visited: false },
    { id: 133, lat: 49.77135, lng: 17.114898, name: "Uničov", storeNumber: "640", storeType: "SM", visited: false },
    { id: 134, lat: 48.9709669, lng: 14.5041801, name: "České Budějovice - Suché Vrbné", storeNumber: "642", storeType: "SM", visited: false },
    { id: 135, lat: 49.6765003, lng: 14.0007602, name: "Příbram - Školní", storeNumber: "645", storeType: "SM", visited: false },
    { id: 136, lat: 50.134471, lng: 14.129083, name: "Kladno - Obránců Míru", storeNumber: "646", storeType: "SM", visited: false },
    { id: 137, lat: 50.7524484, lng: 15.0707925, name: "Liberec - Rochlická", storeNumber: "651", storeType: "SM", visited: false },
    { id: 138, lat: 49.5929653, lng: 17.2491065, name: "Olomouc - Tř. Svobody", storeNumber: "667", storeType: "SM", visited: false },
    { id: 139, lat: 49.9488449, lng: 15.8102378, name: "Chrudim", storeNumber: "670", storeType: "HPM", visited: false },
    { id: 140, lat: 48.8520417, lng: 17.1159596, name: "Hodonín", storeNumber: "673", storeType: "HPM", visited: false },
    { id: 141, lat: 49.0510235, lng: 17.4649888, name: "Kunovice", storeNumber: "675", storeType: "HPM", visited: false },
    { id: 142, lat: 49.3325, lng: 18.0044444, name: "Vsetín", storeNumber: "676", storeType: "HPM", visited: false },
    { id: 143, lat: 49.4458095, lng: 17.4506942, name: "Přerov - Denisova", storeNumber: "678", storeType: "HPM", visited: false },
    { id: 144, lat: 50.0344061, lng: 15.7528559, name: "Pardubice", storeNumber: "679", storeType: "HPM", visited: false },
    { id: 145, lat: 49.2947298, lng: 17.4004343, name: "Kroměříž", storeNumber: "682", storeType: "HPM", visited: false },
    { id: 146, lat: 49.8570509, lng: 18.5301942, name: "Karviná", storeNumber: "686", storeType: "HPM", visited: false },
    { id: 147, lat: 49.9508902, lng: 14.0421173, name: "Beroun", storeNumber: "691", storeType: "HPM", visited: false },
    { id: 148, lat: 50.909974, lng: 14.622148, name: "Varnsdorf", storeNumber: "694", storeType: "HPM", visited: false },
    { id: 149, lat: 50.5007965, lng: 13.6392903, name: "Most", storeNumber: "695", storeType: "HPM", visited: false },
    { id: 150, lat: 49.2257922, lng: 16.5304548, name: "Brno - OC Javor", storeNumber: "710", storeType: "SM", visited: false },
    { id: 151, lat: 49.1874803, lng: 16.6429028, name: "Brno - Černovice", storeNumber: "712", storeType: "SM", visited: false },
    { id: 152, lat: 49.2281106, lng: 16.5925628, name: "Brno - Kosmova", storeNumber: "714", storeType: "SM", visited: false },
    { id: 153, lat: 49.1968726, lng: 16.5333479, name: "Brno - Kohoutovice", storeNumber: "715", storeType: "SM", visited: false },
    { id: 154, lat: 49.2020159, lng: 16.6000718, name: "Brno - Veveří", storeNumber: "718", storeType: "SM", visited: false },
    { id: 155, lat: 49.5242278, lng: 16.2596455, name: "Bystřice nad Pernštejnem", storeNumber: "720", storeType: "SM", visited: false },
    { id: 156, lat: 49.5932265, lng: 18.3578361, name: "Frýdlant nad Ostravicí", storeNumber: "724", storeType: "SM", visited: false },
    { id: 157, lat: 50.1854199, lng: 15.8468733, name: "Hradec Králové - Dukla", storeNumber: "725", storeType: "SM", visited: false },
    { id: 158, lat: 50.8529629, lng: 14.857438, name: "Hrádek nad Nisou", storeNumber: "726", storeType: "SM", visited: false },
    { id: 159, lat: 49.96609, lng: 14.5178338, name: "Jesenice - Budějovická", storeNumber: "728", storeType: "SM", visited: false },
    { id: 160, lat: 49.9826863, lng: 14.4966555, name: "Vestec", storeNumber: "729", storeType: "HPM", visited: false },
    { id: 161, lat: 49.4135695, lng: 15.5924706, name: "Jihlava - Kollárova", storeNumber: "731", storeType: "SM", visited: false },
    { id: 162, lat: 49.395672, lng: 15.590856, name: "Jihlava - Masarykovo nám.", storeNumber: "732", storeType: "SM", visited: false },
    { id: 163, lat: 49.2457506, lng: 15.7682572, name: "Okříšky", storeNumber: "735", storeType: "SM", visited: false },
    { id: 164, lat: 49.9406526, lng: 17.9116182, name: "Opava - Holasická", storeNumber: "736", storeType: "SM", visited: false },
    { id: 165, lat: 49.7670977, lng: 13.3725037, name: "Plzeň - Lidická", storeNumber: "739", storeType: "SM", visited: false },
    { id: 166, lat: 50.0824941, lng: 14.4265938, name: "Praha - Dům potravin", storeNumber: "743", storeType: "SM", visited: false },
    { id: 167, lat: 50.0313809, lng: 14.529376, name: "Praha - Háje", storeNumber: "744", storeType: "SM", visited: false },
    { id: 168, lat: 50.1123352, lng: 14.6175087, name: "Praha - Trio", storeNumber: "745", storeType: "SM", visited: false },
    { id: 169, lat: 50.0050999, lng: 14.4054409, name: "Praha - Vltava", storeNumber: "755", storeType: "SM", visited: false },
    { id: 170, lat: 50.077301, lng: 14.4539268, name: "Praha - Vinohrady", storeNumber: "767", storeType: "SM", visited: false },
    { id: 171, lat: 50.078494, lng: 14.453308, name: "Praha - Bezovka", storeNumber: "769", storeType: "SM", visited: false },
    { id: 172, lat: 49.271373, lng: 16.993683, name: "Vyškov - Na Hraničkách", storeNumber: "774", storeType: "SM", visited: false },
    { id: 173, lat: 50.046396, lng: 15.748366, name: "Pardubice - Poděbradská", storeNumber: "803", storeType: "HPM", visited: false },
    { id: 174, lat: 49.691771, lng: 18.349171, name: "Frýdek Místek - Hlavní", storeNumber: "804", storeType: "HPM", visited: false },
    { id: 175, lat: 50.424364, lng: 14.921820, name: "Mladá Boleslav - Jičínská", storeNumber: "806", storeType: "HPM", visited: false },
    { id: 176, lat: 49.213329, lng: 17.643666, name: "Zlín - Prštné", storeNumber: "807", storeType: "HPM", visited: false },
    { id: 177, lat: 49.789212, lng: 18.252084, name: "Ostrava - Dubina", storeNumber: "808", storeType: "HPM", visited: false },
    { id: 178, lat: 50.640201, lng: 13.840748, name: "Teplice", storeNumber: "810", storeType: "HPM", visited: false },
    { id: 179, lat: 50.072236, lng: 14.542289, name: "Praha - Štěrboholy", storeNumber: "812", storeType: "zrušeno", visited: false },
    { id: 180, lat: 49.198357, lng: 16.621255, name: "Brno - Cejl PRODEJNA", storeNumber: "814-A", storeType: "HPM", visited: false },
    { id: 181, lat: 49.200413, lng: 16.6279023, name: "Brno - Cejl SKLADY", storeNumber: "814-B", storeType: "HPM", visited: false },
    { id: 182, lat: 48.8461692, lng: 16.0660108, name: "Znojmo", storeNumber: "818", storeType: "HPM", visited: false },
    { id: 183, lat: 50.2268558, lng: 12.8409924, name: "Karlovy Vary - Varyáda", storeNumber: "820", storeType: "HPM", visited: false },
    { id: 184, lat: 50.5262719, lng: 14.138725, name: "Litoměřice", storeNumber: "822", storeType: "HPM", visited: false },
    { id: 185, lat: 49.2026903, lng: 15.8852569, name: "Třebíč", storeNumber: "823", storeType: "HPM", visited: false },
    { id: 186, lat: 50.6988334, lng: 14.5429801, name: "Česká Lípa", storeNumber: "824", storeType: "HPM", visited: false },
    { id: 187, lat: 49.8286225, lng: 18.1874178, name: "Ostrava - Poruba", storeNumber: "826", storeType: "HPM", visited: false },
    { id: 188, lat: 50.0507658, lng: 14.4373456, name: "Praha Pankrác - Arkády", storeNumber: "829", storeType: "HPM", visited: false },
    { id: 189, lat: 50.4363623, lng: 14.9099402, name: "Mladá Boleslav", storeNumber: "832", storeType: "HPM", visited: false },
    { id: 190, lat: 50.1040728, lng: 14.4894899, name: "Praha - Harfa", storeNumber: "833", storeType: "HPM", visited: false },
    { id: 191, lat: 49.5864602, lng: 17.2589224, name: "Olomouc - Šantovka", storeNumber: "834", storeType: "HPM", visited: false },
    { id: 192, lat: 49.2236525, lng: 15.8858653, name: "Třebíč - Kpt. Jaroše", storeNumber: "851", storeType: "SM", visited: false },
    { id: 193, lat: 50.6881066, lng: 14.5475969, name: "Česká Lípa - Bardějovská", storeNumber: "853", storeType: "SM", visited: false },
    { id: 194, lat: 49.9414015, lng: 17.9002924, name: "Opava - Breda", storeNumber: "855", storeType: "SM", visited: false },
    { id: 195, lat: 50.0868197, lng: 14.5637951, name: "Praha - Jahodnice", storeNumber: "856", storeType: "SM", visited: false },
    { id: 196, lat: 49.9980655, lng: 14.6584171, name: "Říčany - OC Lihovar", storeNumber: "857", storeType: "SM", visited: false },
    { id: 197, lat: 49.1917611, lng: 16.6127087, name: "Brno - Nádražní", storeNumber: "858", storeType: "SM", visited: false },
    { id: 198, lat: 50.1385055, lng: 14.5082976, name: "Praha - Letňany", storeNumber: "860", storeType: "SM", visited: false },
    { id: 199, lat: 49.4079101, lng: 15.5799638, name: "Jihlava", storeNumber: "152", storeType: "HPM", visited: false },
    { id: 200, lat: 50.03134, lng: 14.4896229, name: "Praha - Chodov", storeNumber: "198", storeType: "HPM", visited: false },
    { id: 201, lat: 49.2570013, lng: 13.9155589, name: "Strakonice", storeNumber: "335", storeType: "HPM", visited: false },
    { id: 202, lat: 49.1438867, lng: 15.0226414, name: "Jindřichův Hradec", storeNumber: "354", storeType: "HPM", visited: false },
    { id: 203, lat: 50.5627008, lng: 15.896769, name: "Trutnov", storeNumber: "359", storeType: "HPM", visited: false },
    { id: 204, lat: 49.8958074, lng: 18.1954384, name: "Hlučín", storeNumber: "462", storeType: "SM", visited: false },
    { id: 205, lat: 49.556956, lng: 17.7499057, name: "Hranice na Moravě", storeNumber: "685", storeType: "HPM", visited: false },
    { id: 206, lat: 50.1267205, lng: 14.4132025, name: "Praha - Trója", storeNumber: "761", storeType: "SM", visited: false },
    { id: 207, lat: 50.7357271, lng: 15.1609322, name: "Jablonec nad Nisou", storeNumber: "831", storeType: "HPM", visited: false },
    { id: 208, lat: 49.5998679, lng: 18.012615, name: "Nový Jičín", storeNumber: "395", storeType: "HPM", visited: false }
];

// TOTO VLOŽTE HNED POD VÁŠ SEZNAM defaultPlacesData
// UJISTĚTE SE, ŽE JSTE VŠECHEN OSTATNÍ KÓD SMAZAL

var placesData = [];
var userLocationMarker = null; // Pro GPS značku

// OBJEKT SE SOUŘADNICEMI PRO MĚSTA
const cityCoordinates = {
    praha: { lat: 50.0755, lng: 14.4378 },
    brno: { lat: 49.1951, lng: 16.6068 }
};

// Kontrola, jestli existují uložená data, a jejich načtení
var storedData = localStorage.getItem('mapPlaces');
if (storedData) {
    placesData = JSON.parse(storedData);
    console.log("Data načtena z Local Storage.");
} else {
    placesData = defaultPlacesData;
    console.log("Použita výchozí data.");
}


// Funkce pro uložení dat
function savePlacesData() {
    localStorage.setItem('mapPlaces', JSON.stringify(placesData));
    console.log("Data uložena do Local Storage.");
}


// Inicializace mapy
var mymap = L.map('mapid').setView([49.75, 15.5], 7); 

// Přidání dlaždic
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Vytvoření proměnné pro skupinu markerů
var markerGroup = L.layerGroup().addTo(mymap); 


// Funkce pro vytvoření ikon (Emoji verze)
function createMarkerIcon(place) {
    let iconHtml = '';

    if (place.visited) {
        iconHtml = '✅';
    } else {
        if (place.storeType === 'HPM') {
            iconHtml = '🔴'; // Červený kruh
        } else if (place.storeType === 'SM') {
            iconHtml = '🔵'; // Modrý kruh
        } else if (place.storeType === 'zrušeno' || place.storeType === 'sklad') {
            iconHtml = '❌'; // Černý kruh
        } else {
            iconHtml = '📍'; // Výchozí
        }
    }
    
    return L.divIcon({
        className: 'custom-icon', 
        html: `<div style="font-size: 24px;">${iconHtml}</div>`,
        iconSize: [30, 30]
    });
}

// Funkce pro aktualizaci počítadla
function updateProgressCounter() {
    const visitedCount = placesData.filter(place => place.visited).length;
    const totalCount = placesData.length;
    const counterElement = document.getElementById('progress-counter');
    
    if (counterElement) {
        counterElement.textContent = `- Navštíveno: ${visitedCount} / ${totalCount}`;
    }
}

// NAHRAĎTE CELOU FUNKCI renderSidebarList TOUTO VERZÍ (S VÝPOČTEM TRASY AUTEM)
function renderSidebarList() {
    
    var listContainer = document.getElementById('sidebar-content');
    if (!listContainer) {
        console.error("Chyba: Kontejner 'sidebar-content' nebyl nalezen!");
        return; 
    }

    listContainer.innerHTML = ''; 

    placesData.forEach(function(place) {
        
        var itemDiv = document.createElement('div');
        itemDiv.className = 'sidebar-item';
        itemDiv.dataset.placeId = place.id; 

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = place.visited;
        checkbox.id = 'chk-' + place.id; 
        checkbox.dataset.placeId = place.id;

        var label = document.createElement('label');
        label.htmlFor = 'chk-' + place.id;
        
        if (place.storeNumber) {
            label.textContent = `(${place.storeNumber}) ${place.name}`;
        } else {
            label.textContent = place.name;
        }

        // PRVKY PRO MĚŘENÍ
        var distanceSpan = document.createElement('span');
        distanceSpan.className = 'distance-result'; 

        var measureButton = document.createElement('button');
        measureButton.className = 'measure-btn';
        measureButton.textContent = '📏'; 
        measureButton.title = 'Změřit cestu autem'; 

        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(label);
        itemDiv.appendChild(distanceSpan); 
        itemDiv.appendChild(measureButton); 
        
        listContainer.appendChild(itemDiv);

        // 1. Kliknutí na CHECKBOX
        checkbox.addEventListener('click', function(e) {
            var clickedId = parseInt(e.target.dataset.placeId);
            var clickedPlace = placesData.find(p => p.id === clickedId);
            
            if (clickedPlace) {
                clickedPlace.visited = e.target.checked;
                savePlacesData();
                updateProgressCounter(); 
                filterList(); 
            }
        });

        // 2. Kliknutí na ŘÁDEK
        itemDiv.addEventListener('click', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') { 
                return; 
            }
            var clickedId = parseInt(this.dataset.placeId); 
            var clickedPlace = placesData.find(p => p.id === clickedId);

            if (clickedPlace) {
                mymap.flyTo([clickedPlace.lat, clickedPlace.lng], 16);
            }
        });
        
        // 3. Kliknutí na TLAČÍTKO MĚŘENÍ (VÝPOČET TRASY PŘES OSRM API)
        measureButton.addEventListener('click', function(e) {
            e.stopPropagation(); 

            var button = this;
            
            // Pokud už je aktivní, jen to vypneme
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                distanceSpan.textContent = ''; 
                return;
            } 

            // --- ZAPÍNÁME MĚŘENÍ ---
            button.classList.add('active'); 
            distanceSpan.textContent = ' (počítám...)'; // Informace pro uživatele

            // 1. Zjistíme start a cíl
            let startPointKey = document.querySelector('input[name="startPoint"]:checked').value;
            let startCoords = cityCoordinates[startPointKey];
            
            // OSRM API vyžaduje pořadí: "Zeměpisná délka, Zeměpisná šířka" (Lng, Lat) !!!
            // To je opačně než Leaflet (Lat, Lng).
            let startString = `${startCoords.lng},${startCoords.lat}`;
            let endString = `${place.lng},${place.lat}`;

            // 2. Sestavíme URL pro API dotaz
            let url = `https://router.project-osrm.org/route/v1/driving/${startString};${endString}?overview=false`;

            // 3. Pošleme dotaz na internet
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
                        // Vzdálenost je v metrech
                        let distanceMeters = data.routes[0].distance;
                        let distanceKm = (distanceMeters / 1000).toFixed(1);
                        
                        // Čas je v sekundách
                        let durationSeconds = data.routes[0].duration;
                        let durationMinutes = Math.round(durationSeconds / 60);
                        let hours = Math.floor(durationMinutes / 60);
                        let minutes = durationMinutes % 60;
                        
                        let timeString = '';
                        if (hours > 0) { timeString = `${hours}h ${minutes}m`; }
                        else { timeString = `${minutes} min`; }

                        distanceSpan.textContent = ` (${distanceKm} km, ${timeString})`;
                    } else {
                        distanceSpan.textContent = ' (chyba trasy)';
                    }
                })
                .catch(error => {
                    console.error('Chyba při výpočtu trasy:', error);
                    distanceSpan.textContent = ' (chyba spojení)';
                });
        });
    }); 
}


// Funkce pro reset mapy
function resetMap() {
    var opravduResetovat = confirm("Opravdu chcete resetovat celou mapu?\nVeškerý postup (navštívená místa) bude ztracen.");

    if (opravduResetovat) {
        placesData = defaultPlacesData;
        placesData.forEach(function(place) {
            place.visited = false;
        });
        savePlacesData();

        renderSidebarList();
        filterList(); 
        updateProgressCounter();
        
        console.log("Mapa byla KOMPLETNĚ RESETOVÁNA.");
    } else {
        console.log("Reset mapy byl zrušen.");
    }
}

// Funkce pro filtrování seznamu A mapy
function filterList() {
    
    let query = document.getElementById('searchInput').value.toLowerCase();
    let showVisited = document.getElementById('filterVisited').checked;
    let showUnvisited = document.getElementById('filterUnvisited').checked;
    let showHPM = document.getElementById('filterHPM').checked;
    let showSM = document.getElementById('filterSM').checked;
    let showZruseno = document.getElementById('filterZruseno').checked;
    
    // Filtrování SEZNAMU
    let listContainer = document.getElementById('sidebar-content');
    if (listContainer) {
        let items = listContainer.getElementsByClassName('sidebar-item');
        
        Array.from(items).forEach(function(item) {
            let itemId = parseInt(item.dataset.placeId);
            let place = placesData.find(p => p.id === itemId);
            
            if (place) {
                const itemText = (place.name + " " + (place.storeNumber || "")).toLowerCase();
                const textMatch = itemText.includes(query);
                const statusMatch = (place.visited && showVisited) || (!place.visited && showUnvisited);
                
                 let typeMatch = 
                    (place.storeType === 'HPM' && showHPM) ||
                    (place.storeType === 'SM' && showSM) ||
                    ((place.storeType === 'zrušeno' || place.storeType === 'sklad') && showZruseno);
                
                if (textMatch && statusMatch && typeMatch) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    // Překreslíme MAPU
    renderMarkers();
}

// Funkce pro vykreslení bodů na mapě
// NAHRAĎTE CELOU PŮVODNÍ FUNKCI renderMarkers TOUTO VERZÍ
function renderMarkers() {
    
    // 1. Získáme filtry
    let query = document.getElementById('searchInput').value.toLowerCase();
    let showVisited = document.getElementById('filterVisited').checked;
    let showUnvisited = document.getElementById('filterUnvisited').checked;
    let showHPM = document.getElementById('filterHPM').checked;
    let showSM = document.getElementById('filterSM').checked;
    let showZruseno = document.getElementById('filterZruseno').checked;
    
    markerGroup.clearLayers(); 

    placesData.forEach(function(place) {
        
        // --- Filtrační logika ---
        const itemText = (place.name + " " + (place.storeNumber || "")).toLowerCase();
        const textMatch = itemText.includes(query);
        const statusMatch = (place.visited && showVisited) || (!place.visited && showUnvisited);
        
         let typeMatch = 
            (place.storeType === 'HPM' && showHPM) ||
            (place.storeType === 'SM' && showSM) ||
            ((place.storeType === 'zrušeno' || place.storeType === 'sklad') && showZruseno);

        if (!(textMatch && statusMatch && typeMatch)) {
            return; 
        }

        // Vytvoření markeru
        var initialIcon = createMarkerIcon(place);
        var marker = L.marker([place.lat, place.lng], {
            icon: initialIcon,
            placeId: place.id 
        });

        // --- TVORBA POP-UPU A NAVIGACE ---
        
        let nameString = place.name;
        if (place.storeNumber) {
            nameString = `(${place.storeNumber}) ${place.name}`;
        }
        
        let popupContent = `<b>${nameString}</b>`;
        popupContent += `<br>Stav: ${place.visited ? 'Navštíveno ✅' : 'Nenavštíveno 📍'}`;
        
        // TOTO JE TEN OPRAVENÝ ODKAZ
        // Používáme standardní formát "https://www.google.com/maps?q=LAT,LNG"
        let navLink = 'https://www.google.com/maps?q=' + place.lat + ',' + place.lng;
        
        popupContent += '<br><a href="' + navLink + '" target="_blank" style="color: #007bff; font-weight: bold; text-decoration: none; margin-top: 5px; display: inline-block;">Navigovat 🚗</a>';
        
        marker.bindPopup(popupContent);
        marker.bindTooltip(nameString); 
        
        markerGroup.addLayer(marker); 

        // Kliknutí na MARKER
        marker.on('click', function(e) {
            
            var clickedPlace = placesData.find(p => p.id === this.options.placeId);
            if (!clickedPlace) return;
            clickedPlace.visited = !clickedPlace.visited;
            savePlacesData();

            renderSidebarList();
            updateProgressCounter();

            // Změna ikony
            var newIcon = createMarkerIcon(clickedPlace);
            this.setIcon(newIcon);

            // Kontrola filtrů po kliknutí
            let showVisited = document.getElementById('filterVisited').checked;
            let showUnvisited = document.getElementById('filterUnvisited').checked;
            // ... (zbytek proměnných filtrů už máme nahoře, ale pro jistotu je čteme znovu nebo použijeme logiku)
            // Pro jednoduchost zde jen překreslíme ikonu a otevřeme pop-up. 
            // Pokud by měl zmizet, stane se to až při příštím filtru, 
            // nebo můžeme nechat logiku z minula, pokud ji tam chcete.
            
            // Pro navigaci uvnitř kliknutí musíme odkaz sestavit znovu:
            let navLinkClick = 'https://www.google.com/maps?q=' + clickedPlace.lat + ',' + clickedPlace.lng;
            
            let nameStringClick = clickedPlace.name;
            if (clickedPlace.storeNumber) nameStringClick = `(${clickedPlace.storeNumber}) ${clickedPlace.name}`;

            let popupContentClick = `<b>${nameStringClick}</b>`;
            popupContentClick += `<br>Stav: ${clickedPlace.visited ? 'Navštíveno ✅' : 'Nenavštíveno 📍'}`;
            popupContentClick += '<br><a href="' + navLinkClick + '" target="_blank" style="color: #007bff; font-weight: bold; text-decoration: none; margin-top: 5px; display: inline-block;">Navigovat 🚗</a>';
            
            this.bindPopup(popupContentClick).openPopup();
        });
    });
}

// Funkce pro Geolokaci
function findMe() {
    if (!navigator.geolocation) {
        alert("Váš prohlížeč nepodporuje geolokaci.");
        return;
    }
    console.log("Vyžaduji polohu...");

    function success(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(`Poloha nalezena: ${lat}, ${lng}`);

        if (userLocationMarker) {
            mymap.removeLayer(userLocationMarker);
        }

        var blueIcon = L.divIcon({
            className: 'custom-icon',
            html: `<div style="font-size: 24px;">📍</div>`, // Špendlík
            iconSize: [30, 30]
        });

        userLocationMarker = L.marker([lat, lng], { icon: blueIcon }).addTo(mymap);
        userLocationMarker.bindPopup("<b>Tady jsi!</b>").openPopup();
        mymap.flyTo([lat, lng], 16);
    }

    function error() {
        alert("Nelze získat vaši polohu. Ujistěte se, že jste povolili přístup.");
        console.error("Chyba geolokace.");
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

// Funkce pro Třídění
function sortAndRender(sortType) {
    
    if (sortType === 'default') {
        placesData.sort((a, b) => a.id - b.id);
    } 
    else if (sortType === 'name-asc') {
        placesData.sort((a, b) => a.name.localeCompare(b.name));
    } 
    else if (sortType === 'num-asc') {
        placesData.sort((a, b) => {
            const numA = a.storeNumber || '99999';
            const numB = b.storeNumber || '99999';
            return numA.localeCompare(numB, undefined, { numeric: true });
        });
    }
    
    renderSidebarList();
    filterList();
}
// NOVÁ FUNKCE: Export dat (stažení souboru)
function exportData() {
    // 1. Převedeme data na text
    const dataStr = JSON.stringify(placesData);
    
    // 2. Vytvoříme virtuální soubor
    const blob = new Blob([dataStr], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    
    // 3. Vytvoříme odkaz a klikneme na něj
    const a = document.createElement('a');
    a.href = url;
    a.download = "moje_mapa_albert_zaloha.json"; // Název souboru
    document.body.appendChild(a);
    a.click();
    
    // 4. Úklid
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// NOVÁ FUNKCE: Import dat (nahrání souboru)
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            // 1. Přečteme data ze souboru
            const importedData = JSON.parse(e.target.result);
            
            // 2. Jednoduchá kontrola, jestli je to pole
            if (Array.isArray(importedData)) {
                // 3. Přepíšeme naše data
                placesData = importedData;
                savePlacesData(); // Uložíme do prohlížeče
                
                // 4. Vše překreslíme
                renderSidebarList();
                updateProgressCounter();
                filterList(); 
                
                alert("Záloha byla úspěšně nahrána! ✅");
            } else {
                alert("Chyba: Soubor nemá správný formát.");
            }
        } catch (err) {
            console.error(err);
            alert("Chyba při čtení souboru. Je to platný JSON?");
        }
        
        // Vyčistíme input, aby šel stejný soubor nahrát znovu
        event.target.value = ''; 
    };
    
    reader.readAsText(file);
}


// -----------------------------------------------------------------
// SPUŠTĚNÍ A PŘIPOJENÍ VŠECH OVLÁDACÍCH PRVKŮ
// -----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    
    // A. Připojení tlačítka "Najdi mě"
    var findMeBtn = document.getElementById('findMeButton');
    if (findMeBtn) { findMeBtn.addEventListener('click', findMe); }

    // B. Připojení tlačítka Reset
    var tlacitko = document.getElementById('resetButton');
    if (tlacitko) { tlacitko.addEventListener('click', resetMap); }

    // C. Připojení vyhledávacího pole
    var searchInput = document.getElementById('searchInput');
    if (searchInput) { searchInput.addEventListener('keyup', filterList); }
    
    // D. Připojení filtrů STAVU
    var filterVisited = document.getElementById('filterVisited');
    if (filterVisited) { filterVisited.addEventListener('click', filterList); }
    
    var filterUnvisited = document.getElementById('filterUnvisited');
    if (filterUnvisited) { filterUnvisited.addEventListener('click', filterList); }
    
    // E. Připojení filtrů TYPU
    var filterHPM = document.getElementById('filterHPM');
    if (filterHPM) { filterHPM.addEventListener('click', filterList); }
    
    var filterSM = document.getElementById('filterSM');
    if (filterSM) { filterSM.addEventListener('click', filterList); }
    
    var filterZruseno = document.getElementById('filterZruseno');
    if (filterZruseno) { filterZruseno.addEventListener('click', filterList); }

    // F. Připojení tlačítek TŘÍDĚNÍ
    var sortDefault = document.getElementById('sort-default');
    if (sortDefault) { sortDefault.addEventListener('click', () => sortAndRender('default')); }
    
    var sortNameAsc = document.getElementById('sort-name-asc');
    if (sortNameAsc) { sortNameAsc.addEventListener('click', () => sortAndRender('name-asc')); }
    
    var sortNumAsc = document.getElementById('sort-num-asc');
    if (sortNumAsc) { sortNumAsc.addEventListener('click', () => sortAndRender('num-asc')); }


    // G. Prvotní vykreslení až po připojení
    renderSidebarList();
    filterList(); // filterList() zavolá renderMarkers()
    updateProgressCounter();

    // ... (kód pro tlačítko Reset) ...

    // --- NOVÉ: PŘIPOJENÍ IMPORTU A EXPORTU ---
    
    // Export
    var exportBtn = document.getElementById('exportBtn');
    if (exportBtn) { 
        exportBtn.addEventListener('click', exportData); 
    }

    // Import (kliknutí na tlačítko otevře skrytý input)
    var importBtn = document.getElementById('importBtn');
    var importInput = document.getElementById('importInput');
    
    if (importBtn && importInput) {
        // Kliknutí na hezké tlačítko -> klikne na skryté pole pro soubor
        importBtn.addEventListener('click', function() {
            importInput.click();
        });
        // Když uživatel vybere soubor -> spustí se funkce importData
        importInput.addEventListener('change', importData);
    }
    
    // --- KONEC NOVÉ ČÁSTI ---

    // ... (kód pro searchInput a zbytek) ...
});
