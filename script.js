// --- DATA O MÍSTECH (S ADRESAMI) ---
var placesData = [];
var userLocationMarker = null; 
const cityCoordinates = { praha: { lat: 50.0755, lng: 14.4378 }, brno: { lat: 49.1951, lng: 16.6068 } };

var defaultPlacesData = [
    { id: 1, lat: 49.2061691, lng: 16.6761638, name: "Brno - Líšeň", storeNumber: "003", storeType: "SM", address: "Masarova 2428/9, 628 00 Brno", visited: false },
    { id: 2, lat: 49.1656706, lng: 16.7264767, name: "Brno - Šlapanice", storeNumber: "012", storeType: "SM", address: "Nádražní 1156/9, 664 51 Šlapanice", visited: false },
    { id: 3, lat: 49.2104336, lng: 16.6014006, name: "Brno - Královo Pole", storeNumber: "017", storeType: "SM", address: "Hrnčířská 573/6, 602 00 Brno", visited: false },
    { id: 4, lat: 49.1998892, lng: 16.6060482, name: "Brno - Moravské náměstí", storeNumber: "019", storeType: "SM", address: "Moravské náměstí 754/13, 602 00 Brno", visited: false },
    { id: 5, lat: 49.1803203, lng: 16.6207125, name: "Brno - Svatopetrská", storeNumber: "021", storeType: "SM", address: "Svatopetrská 7, 617 00 Brno", visited: false },
    { id: 6, lat: 49.1987269, lng: 16.6164624, name: "Brno - Bratislavská", storeNumber: "022", storeType: "SM", address: "Bratislavská 16, 602 00 Brno", visited: false },
    { id: 7, lat: 49.0663528, lng: 17.4490013, name: "Uherské Hradiště - Štěpnická", storeNumber: "110", storeType: "SM", address: "Štěpnická 1156, 686 01 Uherské Hradiště", visited: false },
    { id: 8, lat: 49.3131638, lng: 17.4728451, name: "Hulín", storeNumber: "113", storeType: "SM", address: "Záhlinická 1059, 768 24 Hulín", visited: false },
    { id: 9, lat: 48.8495773, lng: 17.1288191, name: "Hodonín", storeNumber: "115", storeType: "SM", address: "Masarykovo Nám. 257/16, 695 85 Hodonín", visited: false },
    { id: 10, lat: 49.225893, lng: 17.687033, name: "Zlín - T.Bati", storeNumber: "116", storeType: "SM", address: "Tř. Tomáše Bati 4074, 760 01 Zlín", visited: false },
    { id: 11, lat: 48.7561041, lng: 16.8897971, name: "Břeclav - J. Palacha", storeNumber: "119", storeType: "SM", address: "J. Palacha 3197, 690 02 Břeclav", visited: false },
    { id: 12, lat: 49.0250449, lng: 17.6514777, name: "Uherský Brod", storeNumber: "121", storeType: "SM", address: "Pořádí 2283, 688 01 Uherský Brod", visited: false },
    { id: 13, lat: 50.2270051, lng: 17.2028519, name: "Jeseník Dukla", storeNumber: "122", storeType: "SM", address: "Dukelská 717/2, 790 01 Jeseník", visited: false },
    { id: 14, lat: 49.233073, lng: 17.659845, name: "Zlín - Panorama", storeNumber: "123", storeType: "SM", address: "Okružní 4701, 760 01 Zlín", visited: false },
    { id: 15, lat: 49.5538102, lng: 17.7349961, name: "Hranice na Moravě", storeNumber: "124", storeType: "SM", address: "Tř. 1. máje 1729, 753 01 Hranice na Moravě", visited: false },
    { id: 16, lat: 49.1817864, lng: 16.3900514, name: "Rosice", storeNumber: "125", storeType: "SM", address: "Palackého nám. 30, 665 01 Rosice", visited: false },
    { id: 17, lat: 49.0450322, lng: 15.8018889, name: "Moravské Budějovice", storeNumber: "126", storeType: "SM", address: "Okružní 1779, 676 02 Moravské Budějovice", visited: false },
    { id: 18, lat: 49.2051882, lng: 17.5837969, name: "Zlín - Malenovice", storeNumber: "127", storeType: "SM", address: "Tř. Svobody 836, 763 02 Zlín Malenovice", visited: false },
    { id: 19, lat: 49.2971885, lng: 17.4028871, name: "Kroměříž", storeNumber: "130", storeType: "SM", address: "Oskol 3711/26, 767 01 Kroměříž", visited: false },
    { id: 20, lat: 49.5274062, lng: 17.5930032, name: "Lipník nad Bečvou", storeNumber: "134", storeType: "SM", address: "Hranická 1764, 751 31 Lipník nad Bečvou", visited: false },
    { id: 21, lat: 49.4486365, lng: 17.4730645, name: "Přerov", storeNumber: "135", storeType: "zrušeno", address: "Želatovská 3564/42, 750 02 Přerov", visited: false },
    { id: 22, lat: 49.3649559, lng: 17.3638515, name: "Chropyně", storeNumber: "140", storeType: "SM", address: "Moravská 725, 768 11 Chropyně", visited: false },
    { id: 23, lat: 49.3984457, lng: 17.6733448, name: "Bystřice pod Hostýnem", storeNumber: "156", storeType: "SM", address: "6. května 47, 768 61 Bystřice pod Hostýnem", visited: false },
    { id: 24, lat: 49.5602112, lng: 15.9444103, name: "Žďár nad Sázavou - Horní", storeNumber: "161", storeType: "SM", address: "Horní 2233/6, 591 00 Žďár nad Sázavou", visited: false },
    { id: 25, lat: 49.1363889, lng: 16.6336111, name: "Brno Olympia", storeNumber: "162", storeType: "HPM", address: "U dálnice 744, 664 42 Brno - Modřice", visited: false },
    { id: 26, lat: 49.2152336, lng: 15.8775173, name: "Třebíč Komenského nám.", storeNumber: "171", storeType: "SM", address: "Komenského náměstí 155, 674 01 Třebíč", visited: false },
    { id: 27, lat: 49.0405225, lng: 16.3079575, name: "Moravský Krumlov", storeNumber: "175", storeType: "SM", address: "Znojemská 379, 672 01 Moravský Krumlov", visited: false },
    { id: 28, lat: 49.3532518, lng: 16.6498503, name: "Blansko - ČAD", storeNumber: "182", storeType: "SM", address: "Nádražní 2318/4, 678 01 Blansko", visited: false },
    { id: 29, lat: 49.335926, lng: 17.9943826, name: "Vsetín OC Smetanova", storeNumber: "183", storeType: "SM", address: "Smetanova 2360, 755 01 Vsetín", visited: false },
    { id: 30, lat: 49.2211329, lng: 17.8534994, name: "Vizovice", storeNumber: "185", storeType: "SM", address: "Masarykovo nám. 1069, 763 12 Vizovice", visited: false },
    { id: 31, lat: 49.7005072, lng: 13.4246576, name: "Plzeň - Černice", storeNumber: "192", storeType: "HPM", address: "Písecká 972/1, 326 00 Plzeň", visited: false },
    { id: 32, lat: 49.5918057, lng: 17.2742127, name: "Olomouc - Kosmonautů", storeNumber: "220", storeType: "SM", address: "Tř. Kosmonautů 113/27, 779 00 Olomouc", visited: false },
    { id: 33, lat: 50.0722006, lng: 14.7062526, name: "Úvaly u Prahy", storeNumber: "340", storeType: "SM", address: "Pražská, 250 82 Úvaly u Prahy", visited: false },
    { id: 34, lat: 49.7913108, lng: 14.6794564, name: "Benešov", storeNumber: "341", storeType: "HPM", address: "Červené Vršky 2248, 256 01 Benešov", visited: false },
    { id: 35, lat: 49.758096, lng: 17.9999859, name: "Bílovec", storeNumber: "342", storeType: "SM", address: "ul. Opavská, 743 01 Bílovec", visited: false },
    { id: 36, lat: 49.743444, lng: 18.6244974, name: "Český Těšín", storeNumber: "343", storeType: "SM", address: "Havlíčkova 210, 737 01 Český Těšín", visited: false },
    { id: 37, lat: 50.0880584, lng: 17.6954236, name: "Krnov", storeNumber: "349", storeType: "HPM", address: "Revoluční 2312/27, 794 01 Krnov", visited: false },
    { id: 38, lat: 49.7787838, lng: 13.3686714, name: "Plzeň", storeNumber: "350", storeType: "HPM", address: "Gerská 2030/23, 323 00 Plzeň", visited: false },
    { id: 39, lat: 50.6998431, lng: 14.5413404, name: "Česká Lípa - Šluknovská", storeNumber: "351", storeType: "SM", address: "Šluknovská 3080, 470 01 Česká Lípa", visited: false },
    { id: 40, lat: 49.674001, lng: 18.324761, name: "Frýdek Místek", storeNumber: "352", storeType: "HPM", address: "17. listopadu 2262, 738 02 Frýdek Místek", visited: false },
    { id: 41, lat: 49.9317092, lng: 17.8775859, name: "Opava", storeNumber: "353", storeType: "HPM", address: "Olomoucká 2844/115, 746 01 Opava", visited: false },
    { id: 42, lat: 49.5575457, lng: 15.9349855, name: "Žďár nad Sázavou", storeNumber: "355", storeType: "HPM", address: "Strojírenská 2244/34, 591 01 Žďár nad Sázavou", visited: false },
    { id: 43, lat: 49.8008271, lng: 18.4208516, name: "Havířov - Nákupní", storeNumber: "362", storeType: "SM", address: "Nákupní 424/4, 736 01 Havířov", visited: false },
    { id: 44, lat: 48.7440059, lng: 16.8697756, name: "Břeclav - Hraniční", storeNumber: "363", storeType: "HPM", address: "Hraniční 1257, 691 41 Břeclav", visited: false },
    { id: 45, lat: 49.2982385, lng: 14.1615641, name: "Písek", storeNumber: "367", storeType: "HPM", address: "U Hřebčince 2510, 397 01 Písek", visited: false },
    { id: 46, lat: 49.4574781, lng: 18.1419569, name: "Rožnov pod Radhoštěm", storeNumber: "370", storeType: "SM", address: "Masarykovo nám. 45, 756 61 Rožnov p. Radhoštěm", visited: false },
    { id: 47, lat: 49.4630589, lng: 17.9692105, name: "Valašské Meziříčí - Z.Fibicha", storeNumber: "371", storeType: "SM", address: "Zdeňka Fibicha 56, 757 01 Valašské Meziříčí", visited: false },
    { id: 48, lat: 49.4543462, lng: 17.4554133, name: "Přerov - Bayerova", storeNumber: "372", storeType: "SM", address: "Bayerova 646/3, 750 02 Přerov", visited: false },
    { id: 49, lat: 49.3381684, lng: 17.9913525, name: "Vsetín - Na Příkopě", storeNumber: "374", storeType: "SM", address: "Na Příkopě 814, 755 01 Vsetín", visited: false },
    { id: 50, lat: 49.8439536, lng: 18.1692883, name: "Ostrava - Pustkovec", storeNumber: "375", storeType: "SM", address: "Nám. Václava Vacka 6043/23, 708 00 Ostrava Pustkovec", visited: false },
    { id: 51, lat: 49.840202, lng: 18.2832599, name: "Ostrava - Tř. 30. dubna", storeNumber: "381", storeType: "SM", address: "Tř. 30. dubna 2976/3a, 702 00 Ostrava", visited: false },
    { id: 52, lat: 49.6756457, lng: 18.3429515, name: "Frýdek Místek - Stará cesta", storeNumber: "386", storeType: "SM", address: "Stará cesta 91, 738 02 Frýdek Místek", visited: false },
    { id: 53, lat: 49.8757325, lng: 18.4306022, name: "Orlová - Lutyně", storeNumber: "387", storeType: "SM", address: "Masarykova třída 944, 735 14 Orlová", visited: false },
    { id: 54, lat: 49.8022983, lng: 18.4134635, name: "Havířov - Šumbark", storeNumber: "388", storeType: "SM", address: "Generála Svobody 268/17, 736 01 Havířov", visited: false },
    { id: 55, lat: 49.7762145, lng: 18.4531734, name: "Havířov - Dlouhá", storeNumber: "390", storeType: "SM", address: "Dlouhá třída 1161/97, 736 01 Havířov", visited: false },
    { id: 56, lat: 49.9696276, lng: 16.9651183, name: "Šumperk - Temenická", storeNumber: "391", storeType: "SM", address: "Temenická 2860/42, 787 01 Šumperk", visited: false },
    { id: 57, lat: 49.9064482, lng: 18.3471211, name: "Bohumín", storeNumber: "393", storeType: "SM", address: "Čs. Armády 499, 735 81 Bohumín", visited: false },
    { id: 58, lat: 49.5933465, lng: 18.0127803, name: "Nový Jičín", storeNumber: "395", storeType: "SM", address: "Gen. Hlaďo 1849/25, 741 01 Nový Jičín", visited: false },
    { id: 59, lat: 49.5991124, lng: 18.1431492, name: "Kopřivnice", storeNumber: "396", storeType: "SM", address: "Záhumenní 351/3b, 742 21 Kopřivnice", visited: false },
    { id: 60, lat: 49.7232304, lng: 17.2908398, name: "Šternberk", storeNumber: "397", storeType: "SM", address: "Nádražní 2356/21, 785 01 Šternberk", visited: false },
    { id: 61, lat: 49.5458759, lng: 18.2108972, name: "Frenštát pod Radhoštěm", storeNumber: "398", storeType: "SM", address: "Rožnovská 340, 744 01 Frenštát pod Radhoštěm", visited: false },
    { id: 62, lat: 49.5783109, lng: 17.2424771, name: "Olomouc - Janského", storeNumber: "401", storeType: "SM", address: "Janského 459/22, 779 00 Olomouc", visited: false },
    { id: 63, lat: 49.2187288, lng: 15.8927167, name: "Třebíč - Modřínová", storeNumber: "403", storeType: "SM", address: "Modřínová 694, 674 01 Třebíč", visited: false },
    { id: 64, lat: 49.5911331, lng: 17.2349528, name: "Olomouc - Foerstrova", storeNumber: "404", storeType: "SM", address: "Foerstrova 716/19, 779 00 Olomouc", visited: false },
    { id: 65, lat: 49.2154969, lng: 16.6270315, name: "Brno - Merhautova", storeNumber: "410", storeType: "SM", address: "Merhautova 1065/214, 613 00 Brno", visited: false },
    { id: 66, lat: 49.8659882, lng: 14.2611327, name: "Mníšek pod Brdy", storeNumber: "417", storeType: "SM", address: "Nám. F.X. Svobody 32, 252 10 Mníšek pod Brdy", visited: false },
    { id: 67, lat: 49.9488889, lng: 16.1544444, name: "Vysoké Mýto", storeNumber: "421", storeType: "SM", address: "Žižkova 803, 566 01 Vysoké Mýto", visited: false },
    { id: 68, lat: 49.5771241, lng: 18.7653151, name: "Jablunkov", storeNumber: "428", storeType: "SM", address: "Nádražní 40, 739 91 Jablunkov", visited: false },
    { id: 69, lat: 49.2219065, lng: 16.5280796, name: "Brno - Vondrákova", storeNumber: "429", storeType: "SM", address: "Vondrákova 825/13, 635 00 Brno", visited: false },
    { id: 70, lat: 49.8303582, lng: 18.2848488, name: "Ostrava - Nová Karolina", storeNumber: "446", storeType: "HPM", address: "Jantarová 3344/4, 702 00 Ostrava", visited: false },
    { id: 71, lat: 50.6728566, lng: 14.1058106, name: "Ústí nad Labem", storeNumber: "447", storeType: "SM", address: "Seifertova 570, 403 31 Ústí nad Labem", visited: false },
    { id: 72, lat: 50.779636, lng: 14.2304097, name: "Děčín - Kamenická", storeNumber: "450", storeType: "SM", address: "Kamenická 232, 405 02, Děčín", visited: false },
    { id: 73, lat: 50.725511, lng: 15.1593924, name: "Jablonec nad Nisou - Na Vršku", storeNumber: "451", storeType: "SM", address: "Na Vršku 4202/6, 466 02 Jablonec nad Nisou", visited: false },
    { id: 74, lat: 50.1365649, lng: 14.1014463, name: "Kladno - Nám. Sítná", storeNumber: "466", storeType: "SM", address: "Nám. Sítná 3106, 272 01 Kladno", visited: false },
    { id: 75, lat: 49.8444112, lng: 18.1565834, name: "Ostrava - Poruba", storeNumber: "469", storeType: "SM", address: "Ludvíka Podéště 1969/23, 708 00 Ostrava Poruba", visited: false },
    { id: 76, lat: 49.8847382, lng: 16.8795705, name: "Zábřeh na Moravě", storeNumber: "470", storeType: "SM", address: "Severovýchod 475/5, 789 01 Zábřeh na Moravě", visited: false },
    { id: 77, lat: 50.3594444, lng: 16.1475, name: "Nové Město nad Metují", storeNumber: "474", storeType: "SM", address: "T.G.Masaryka 2001, 549 01 Nové Město nad Metují", visited: false },
    { id: 78, lat: 50.3325326, lng: 12.5023735, name: "Kraslice", storeNumber: "476", storeType: "SM", address: "Svatopluka Čecha 1913, 358 01 Kraslice", visited: false },
    { id: 79, lat: 49.77238, lng: 13.3660077, name: "Plzeň - Gerská", storeNumber: "477", storeType: "SM", address: "Gerská 2004/2, 323 00 Plzeň", visited: false },
    { id: 80, lat: 49.5259552, lng: 16.2605915, name: "Bystřice nad Pernštejnem", storeNumber: "482", storeType: "SM", address: "Zahradní 164, 593 01 Bystřice nad Pernštejnem", visited: false },
    { id: 81, lat: 49.4409463, lng: 14.3612573, name: "Milevsko", storeNumber: "484", storeType: "zrušeno", address: "Písecké předměstí 1393, 399 01 Milevsko", visited: false },
    { id: 82, lat: 49.1436775, lng: 14.1737699, name: "Vodňany", storeNumber: "485", storeType: "SM", address: "Nádražní 1215, 389 01 Vodňany", visited: false },
    { id: 83, lat: 50.409037, lng: 16.158528, name: "Náchod", storeNumber: "486", storeType: "SM", address: "Bratří Čapků 1764, 547 01 Náchod", visited: false },
    { id: 84, lat: 50.1206204, lng: 17.3819476, name: "Vrbno pod Pradědem", storeNumber: "487", storeType: "SM", address: "Jesenická 575/1, 793 26 Vrbno pod Pradědem", visited: false },
    { id: 85, lat: 49.3244444, lng: 13.7011111, name: "Horažďovice", storeNumber: "488", storeType: "SM", address: "Plzeňská 263, 341 01 Horažďovice", visited: false },
    { id: 86, lat: 49.5470261, lng: 16.5751905, name: "Letovice", storeNumber: "489", storeType: "SM", address: "Českobratrská 150/2, 679 61 Letovice", visited: false },
    { id: 87, lat: 50.0772403, lng: 12.3715905, name: "Cheb Prior", storeNumber: "494", storeType: "SM", address: "ul. Svobody 2094, 352 02 Cheb", visited: false },
    { id: 88, lat: 49.9639671, lng: 14.3632163, name: "Lipence", storeNumber: "495", storeType: "SM", address: "Josefa Houdka 900, 155 31 Praha - Lipence", visited: false },
    { id: 89, lat: 50.1015409, lng: 14.3960384, name: "Praha Victoria Palace", storeNumber: "497", storeType: "SM", address: "Vítězné náměstí 1145/8, 160 00 Praha 6", visited: false },
    { id: 90, lat: 50.0692837, lng: 14.4541055, name: "Praha Moskevská", storeNumber: "500", storeType: "SM", address: "Moskevská 369, 101 00 Praha - Vršovice", visited: false },
    { id: 91, lat: 49.3006362, lng: 16.6516795, name: "Adamov", storeNumber: "504", storeType: "SM", address: "Nádražní 42, 679 04 Adamov", visited: false },
    { id: 92, lat: 49.2322388, lng: 13.5208311, name: "Sušice - T.G. Masaryka", storeNumber: "505", storeType: "SM", address: "T.G. Masaryka 23, 342 01 Sušice", visited: false },
    { id: 93, lat: 49.9766322, lng: 16.396163, name: "Ústí nad Orlicí", storeNumber: "515", storeType: "SM", address: "Lochmanova 1440, 562 01 Ústí nad Orlicí", visited: false },
    { id: 94, lat: 50.162846, lng: 14.749175, name: "Čelákovice", storeNumber: "523", storeType: "SM", address: "Stankovského 1649, 250 88 Čelákovice", visited: false },
    { id: 95, lat: 49.959774, lng: 15.283794, name: "Kutná Hora", storeNumber: "525", storeType: "SM", address: "Masarykova 187, 284 01 Kutná Hora", visited: false },
    { id: 96, lat: 48.9841449, lng: 14.4732407, name: "České Budějovice - IGY", storeNumber: "529", storeType: "SM", address: "Pekárenská 1247/24, 370 04 České Budějovice", visited: false },
    { id: 97, lat: 50.0673864, lng: 14.4040059, name: "Praha - Smíchov", storeNumber: "530", storeType: "SM", address: "Vackové 3410/1, 150 00 Praha 5", visited: false },
    { id: 98, lat: 50.0891861, lng: 14.4287219, name: "Praha - Palladium", storeNumber: "531", storeType: "SM", address: "Nám. Republiky 1078/1, 110 00 Praha 1", visited: false },
    { id: 99, lat: 49.0837416, lng: 17.883381, name: "Slavičín", storeNumber: "533", storeType: "SM", address: "Osvobození 54, 763 21 Slavičín", visited: false },
    { id: 100, lat: 49.2193521, lng: 16.4976762, name: "Brno - Kamechy", storeNumber: "537", storeType: "SM", address: "Říčanská 1387/30, 641 00 Brno", visited: false },
    { id: 101, lat: 50.0407911, lng: 14.4375533, name: "Praha - Krč", storeNumber: "538", storeType: "SM", address: "Vikova 1302/2, 140 00 Praha 4", visited: false },
    { id: 102, lat: 50.1358604, lng: 14.4315604, name: "Praha - Čimice", storeNumber: "546", storeType: "SM", address: "K Ládví 344/4, 180 09 Praha 8, Čimice", visited: false },
    { id: 103, lat: 50.043801, lng: 15.805258, name: "Pardubice - Jana Zajíce", storeNumber: "552", storeType: "SM", address: "Jana Zajíce 717, 530 03 Pardubice", visited: false },
    { id: 104, lat: 50.4287631, lng: 14.9178732, name: "Mladá Boleslav", storeNumber: "553", storeType: "SM", address: "Jana Palacha 1229, 293 01 Mladá Boleslav", visited: false },
    { id: 105, lat: 50.2067734, lng: 15.8165162, name: "Hradec Králové - F.Šrámka", storeNumber: "556", storeType: "SM", address: "Fráni Šrámka 1512/1. 500 02 Hradec Králové", visited: false },
    { id: 106, lat: 50.1436806, lng: 15.1162681, name: "Poděbrady", storeNumber: "558", storeType: "SM", address: "Na Valech 54, 290 01 Poděbrady", visited: false },
    { id: 107, lat: 49.3286379, lng: 17.5737658, name: "Holešov", storeNumber: "564", storeType: "SM", address: "Tovární 511, 769 01 Holešov", visited: false },
    { id: 108, lat: 49.7492654, lng: 13.3687945, name: "Plzeň - Plaza", storeNumber: "567", storeType: "SM", address: "Radčická 2861/2, 301 00 Plzeň", visited: false },
    { id: 109, lat: 50.046957, lng: 14.4878883, name: "Praha - Spořilov", storeNumber: "572", storeType: "SM", address: "Hlavní 2459/108, 140 00 Praha 4, Spořilov", visited: false },
    { id: 110, lat: 50.0648554, lng: 14.3085798, name: "Praha - Řepy", storeNumber: "575", storeType: "SM", address: "Makovského 1349/2a, 163 00 Praha 6, Řepy", visited: false },
    { id: 111, lat: 50.385736, lng: 13.268094, name: "Kadaň", storeNumber: "586", storeType: "SM", address: "Na Průtahu 1856, 432 01 Kadaň", visited: false },
    { id: 112, lat: 50.602225, lng: 15.333774, name: "Semily", storeNumber: "587", storeType: "zrušeno", address: "Riegrovo nám. 59, 513 01 Semily", visited: false },
    { id: 113, lat: 50.0837295, lng: 14.3666412, name: "Praha - Břevnov", storeNumber: "589", storeType: "SM", address: "8. listopadu 228/1a, 169 00 Praha 6, Břevnov", visited: false },
    { id: 114, lat: 49.0992966, lng: 17.7557144, name: "Luhačovice", storeNumber: "591", storeType: "SM", address: "Masarykova 200, 763 26 Luhačovice", visited: false },
    { id: 115, lat: 50.324069, lng: 12.732447, name: "Nejdek", storeNumber: "593", storeType: "SM", address: "Nám. Karla IV. 1245, 362 21 Nejdek", visited: false },
    { id: 116, lat: 49.4703959, lng: 15.0025432, name: "Pacov", storeNumber: "595", storeType: "SM", address: "Žižkova 894, 395 01 Pacov", visited: false },
    { id: 117, lat: 50.0306997, lng: 14.3686973, name: "Praha - Hlubočepy", storeNumber: "598", storeType: "SM", address: "Trnkovo náměstí 1112/2, 152 00 Praha 5, Hlubočepy", visited: false },
    { id: 118, lat: 50.0690239, lng: 14.368187, name: "Praha - Pod Školou", storeNumber: "599", storeType: "SM", address: "Pod Školou 960/6a, 150 00 Praha 5, Košíře", visited: false },
    { id: 119, lat: 50.0488542, lng: 14.4534056, name: "Praha - Michle", storeNumber: "603", storeType: "SM", address: "Želetavská 1525/1, 140 00 Praha 4, Michle", visited: false },
    { id: 120, lat: 50.0916725, lng: 14.4402918, name: "Praha - Oasis Florenc", storeNumber: "604", storeType: "SM", address: "Sokolovská 394/17, 186 00 Praha 8, Karlín", visited: false },
    { id: 121, lat: 49.6924, lng: 15.8101, name: "Ždírec nad Doubravou", storeNumber: "605", storeType: "SM", address: "Nad řekou 618, 582 63 Ždírec nad Doubravou", visited: false },
    { id: 122, lat: 49.238282, lng: 13.521185, name: "Sušice - Hrádecká", storeNumber: "610", storeType: "SM", address: "Hrádecká 31, 342 01 Sušice", visited: false },
    { id: 123, lat: 49.290247, lng: 15.482873, name: "Třešť", storeNumber: "613", storeType: "SM", address: "Revoluční 6/1206, 589 01 Třešť", visited: false },
    { id: 124, lat: 50.0676, lng: 15.9878, name: "Holice", storeNumber: "614", storeType: "SM", address: "Nám. TGM 153, 534 01 Holice", visited: false },
    { id: 125, lat: 49.739515, lng: 13.392445, name: "Plzeň - Koterovská", storeNumber: "615", storeType: "SM", address: "Koterovská 2390/47, 326 00 Plzeň", visited: false },
    { id: 126, lat: 49.911178, lng: 16.608608, name: "Lanškroun", storeNumber: "618", storeType: "SM", address: "T. G. Masaryka 167, 563 01 Lanškroun", visited: false },
    { id: 127, lat: 49.968096, lng: 14.386903, name: "Praha - Zbraslav", storeNumber: "624", storeType: "SM", address: "Elišky Přemyslovny 1269, 156 00 Praha 5 Zbraslav", visited: false },
    { id: 128, lat: 50.0889, lng: 14.4272, name: "Praha - Kotva", storeNumber: "625", storeType: "zrušeno", address: "Nám. Republiky 656/8, 110 00 Praha 1", visited: false },
    { id: 129, lat: 49.666536, lng: 13.998245, name: "Příbram", storeNumber: "628", storeType: "HPM", address: "Brodská 496, 261 01 Příbram", visited: false },
    { id: 130, lat: 50.092312, lng: 13.724326, name: "Rakovník", storeNumber: "629", storeType: "HPM", address: "Plzeňská 2572/2, 269 02 Rakovník", visited: false },
    { id: 131, lat: 49.7435637, lng: 13.3290468, name: "Plzeň - Skvrňany", storeNumber: "632", storeType: "SM", address: "Karla Steinera 910/7, 318 09 Plzeň", visited: false },
    { id: 132, lat: 49.412754, lng: 14.6717386, name: "Tábor - 9. května", storeNumber: "639", storeType: "SM", address: "9. května 2886, 390 02 Tábor", visited: false },
    { id: 133, lat: 49.77135, lng: 17.114898, name: "Uničov", storeNumber: "640", storeType: "SM", address: "Dukelská 1157, 783 91 Uničov", visited: false },
    { id: 134, lat: 48.9709669, lng: 14.5041801, name: "České Budějovice - Suché Vrbné", storeNumber: "642", storeType: "SM", address: "Suchovrbenské nám. 708/2, 370 06 České Budějovice", visited: false },
    { id: 135, lat: 49.6765003, lng: 14.0007602, name: "Příbram - Školní", storeNumber: "645", storeType: "SM", address: "Školní, 261 01 Příbram", visited: false },
    { id: 136, lat: 50.134471, lng: 14.129083, name: "Kladno - Obránců Míru", storeNumber: "646", storeType: "SM", address: "Obránců Míru 2427, 272 01 Kladno", visited: false },
    { id: 137, lat: 50.7524484, lng: 15.0707925, name: "Liberec - Rochlická", storeNumber: "651", storeType: "SM", address: "Dobiášova 1008, 460 01 Liberec", visited: false },
    { id: 138, lat: 49.5929653, lng: 17.2491065, name: "Olomouc - Tř. Svobody", storeNumber: "667", storeType: "SM", address: "Tř. Svobody 956/31, 779 00 Olomouc", visited: false },
    { id: 139, lat: 49.9488449, lng: 15.8102378, name: "Chrudim", storeNumber: "670", storeType: "HPM", address: "Slovenského národního povstání 1060, 537 05 Chrudim", visited: false },
    { id: 140, lat: 48.8520417, lng: 17.1159596, name: "Hodonín", storeNumber: "673", storeType: "HPM", address: "Velkomoravská 1652/18, 695 01 Hodonín", visited: false },
    { id: 141, lat: 49.0510235, lng: 17.4649888, name: "Kunovice", storeNumber: "675", storeType: "HPM", address: "Třída Vítězství 841, 686 04 Kunovice", visited: false },
    { id: 142, lat: 49.3325, lng: 18.0044444, name: "Vsetín", storeNumber: "676", storeType: "HPM", address: "Gen. Klapálka 300, 755 01 Vsetín", visited: false },
    { id: 143, lat: 49.4458095, lng: 17.4506942, name: "Přerov - Denisova", storeNumber: "678", storeType: "HPM", address: "Denisova 2907/11, 751 02 Přerov", visited: false },
    { id: 144, lat: 50.0344061, lng: 15.7528559, name: "Pardubice", storeNumber: "679", storeType: "HPM", address: "Palackého třída 2748, 530 02 Pardubice", visited: false },
    { id: 145, lat: 49.2947298, lng: 17.4004343, name: "Kroměříž", storeNumber: "682", storeType: "HPM", address: "Kotojedská 545/17, 767 01 Kroměříž", visited: false },
    { id: 146, lat: 49.8570509, lng: 18.5301942, name: "Karviná", storeNumber: "686", storeType: "HPM", address: "Nádražní 4A/1939, 735 06 Karviná", visited: false },
    { id: 147, lat: 49.9508902, lng: 14.0421173, name: "Beroun", storeNumber: "691", storeType: "HPM", address: "Plzeňská 396, 267 01 Králův Dvůr", visited: false },
    { id: 148, lat: 50.909974, lng: 14.622148, name: "Varnsdorf", storeNumber: "694", storeType: "HPM", address: "Národní 3314, 407 47 Varnsdorf", visited: false },
    { id: 149, lat: 50.5007965, lng: 13.6392903, name: "Most", storeNumber: "695", storeType: "HPM", address: "Radniční 3400, 434 01 Most", visited: false },
    { id: 150, lat: 49.2257922, lng: 16.5304548, name: "Brno - OC Javor", storeNumber: "710", storeType: "SM", address: "Nám. 28. dubna 1069/2, 635 00 Brno", visited: false },
    { id: 151, lat: 49.1874803, lng: 16.6429028, name: "Brno - Černovice", storeNumber: "712", storeType: "SM", address: "Cornovova 2, 618 00 Brno", visited: false },
    { id: 152, lat: 49.2281106, lng: 16.5925628, name: "Brno - Kosmova", storeNumber: "714", storeType: "SM", address: "Kosmova 259/1, 612 00 Brno", visited: false },
    { id: 153, lat: 49.1968726, lng: 16.5333479, name: "Brno - Kohoutovice", storeNumber: "715", storeType: "SM", address: "Libušina třída 581/6, 623 00 Brno", visited: false },
    { id: 154, lat: 49.2020159, lng: 16.6000718, name: "Brno - Veveří", storeNumber: "718", storeType: "SM", address: "Veveří 287/40, 602 00 Brno", visited: false },
    { id: 155, lat: 49.5242278, lng: 16.2596455, name: "Bystřice nad Pernštejnem", storeNumber: "720", storeType: "SM", address: "Masarykovo náměstí 8, 593 01 Bystřice nad Pernštejnem", visited: false },
    { id: 156, lat: 49.5932265, lng: 18.3578361, name: "Frýdlant nad Ostravicí", storeNumber: "724", storeType: "SM", address: "Hlavní 1485, 739 11 Frýdlant nad Ostravicí", visited: false },
    { id: 157, lat: 50.1854199, lng: 15.8468733, name: "Hradec Králové - Dukla", storeNumber: "725", storeType: "SM", address: "Milady Horákové 327/51, 500 06 Hradec Králové", visited: false },
    { id: 158, lat: 50.8529629, lng: 14.857438, name: "Hrádek nad Nisou", storeNumber: "726", storeType: "SM", address: "Liberecká 642, 463 34 Hrádek nad Nisou", visited: false },
    { id: 159, lat: 49.96609, lng: 14.5178338, name: "Jesenice - Budějovická", storeNumber: "728", storeType: "SM", address: "Budějovická 371, 252 42 Jesenice i Prahy", visited: false },
    { id: 160, lat: 49.9826863, lng: 14.4966555, name: "Vestec", storeNumber: "729", storeType: "HPM", address: "Vídeňská 178, 252 42 Vestec", visited: false },
    { id: 161, lat: 49.4135695, lng: 15.5924706, name: "Jihlava - Kollárova", storeNumber: "731", storeType: "SM", address: "Kollárova 2762/17, 586 01 Jihlava", visited: false },
    { id: 162, lat: 49.395672, lng: 15.590856, name: "Jihlava - Masarykovo nám.", storeNumber: "732", storeType: "SM", address: "Masarykovo náměstí 68, 586 01 Jihlava", visited: false },
    { id: 163, lat: 49.2457506, lng: 15.7682572, name: "Okříšky", storeNumber: "735", storeType: "SM", address: "Boženy Němcové 438, 675 21 Okříšky", visited: false },
    { id: 164, lat: 49.9406526, lng: 17.9116182, name: "Opava - Holasická", storeNumber: "736", storeType: "SM", address: "Holasická 1154/2, 747 05 Opava", visited: false },
    { id: 165, lat: 49.7670977, lng: 13.3725037, name: "Plzeň - Lidická", storeNumber: "739", storeType: "SM", address: "Lidická 854/35, 323 00 Plzeň", visited: false },
    { id: 166, lat: 50.0824941, lng: 14.4265938, name: "Praha - Dům potravin", storeNumber: "743", storeType: "SM", address: "Václavské nám. 812/59, 110 00 Praha1", visited: false },
    { id: 167, lat: 50.0313809, lng: 14.529376, name: "Praha - Háje", storeNumber: "744", storeType: "SM", address: "Arkalycká 757/6, 141 00 Praha 4", visited: false },
    { id: 168, lat: 50.1123352, lng: 14.6175087, name: "Praha - Trio", storeNumber: "745", storeType: "SM", address: "Chodovická 2311/30, 193 00 Praha 9", visited: false },
    { id: 169, lat: 50.0050999, lng: 14.4054409, name: "Praha - Vltava", storeNumber: "755", storeType: "SM", address: "Obchodní nám. 1590/4, 143 00 Praha 4", visited: false },
    { id: 170, lat: 50.077301, lng: 14.4539268, name: "Praha - Vinohrady", storeNumber: "767", storeType: "SM", address: "Vinohradská 89/90, 130 00 Praha 3", visited: false },
    { id: 171, lat: 50.078494, lng: 14.453308, name: "Praha - Bezovka", storeNumber: "769", storeType: "SM", address: "Ondříčkova 580/39, 130 00 Praha 3", visited: false },
    { id: 172, lat: 49.281700340775956, lng: 16.98614511616937, name: "Vyškov - Na Hraničkách", storeNumber: "774", storeType: "SM", address: "Na Hraničkách 589/34, 682 01 Vyškov", visited: false },
    { id: 173, lat: 50.046396, lng: 15.748366, name: "Pardubice - Poděbradská", storeNumber: "803", storeType: "HPM", address: "Poděbradská 297, 530 09 Pardubice", visited: false },
    { id: 174, lat: 49.678039971984376, lng: 18.36890191853224, name: "Frýdek Místek - Hlavní", storeNumber: "804", storeType: "HPM", address: "Hlavní třída 3274, 738 01 Frýdek Místek", visited: false },
    { id: 175, lat: 50.424364, lng: 14.921820, name: "Mladá Boleslav - Jičínská", storeNumber: "806", storeType: "HPM", address: "Jičínská 1349, 293 01 Mladá Boleslav", visited: false },
    { id: 176, lat: 49.220634694195766, lng: 17.6411129676269, name: "Zlín - Prštné", storeNumber: "807", storeType: "HPM", address: "Přímá 671, 760 01 Zlín", visited: false },
    { id: 177, lat: 49.789212, lng: 18.252084, name: "Ostrava - Dubina", storeNumber: "808", storeType: "HPM", address: "Horní 283/87, 700 30 Ostrava", visited: false },
    { id: 178, lat: 50.640201, lng: 13.840748, name: "Teplice", storeNumber: "810", storeType: "HPM", address: "Nákladní 3201, 415 01 Teplice", visited: false },
    { id: 179, lat: 50.072236, lng: 14.542289, name: "Praha - Štěrboholy", storeNumber: "812", storeType: "zrušeno", address: "Nákupní 389/1, 102 00 Praha Štěrboholy", visited: false },
    { id: 180, lat: 49.199965933378486, lng: 16.62815951697964, name: "Brno - Cejl PRODEJNA", storeNumber: "814-A", storeType: "HPM", address: "Tkalcovská 869/1, 602 00 Brno", visited: false },
    { id: 181, lat: 49.200413, lng: 16.6279023, name: "Brno - Cejl SKLADY", storeNumber: "814-B", storeType: "HPM", address: "Tkalcovská 869/1, 602 00 Brno", visited: false },
    { id: 182, lat: 48.8461692, lng: 16.0660108, name: "Znojmo Brněnská", storeNumber: "818", storeType: "HPM", address: "Brněnská 2937/21, 669 02 Znojmo", visited: false },
    { id: 183, lat: 50.2268558, lng: 12.8409924, name: "Karlovy Vary - Varyáda", storeNumber: "820", storeType: "HPM", address: "Kapitána Jaroše 375/31, 360 06 Karlovy Vary", visited: false },
    { id: 184, lat: 50.5262719, lng: 14.138725, name: "Litoměřice", storeNumber: "822", storeType: "HPM", address: "Želetická 2210/19, 412 01 Litoměřice", visited: false },
    { id: 185, lat: 49.2026903, lng: 15.8852569, name: "Třebíč", storeNumber: "823", storeType: "HPM", address: "Znojemská 1383, 674 01 Třebíč", visited: false },
    { id: 186, lat: 50.6988334, lng: 14.5429801, name: "Česká Lípa", storeNumber: "824", storeType: "HPM", address: "Borská 3215, 470 01 Česká Lípa", visited: false },
    { id: 187, lat: 49.8286225, lng: 18.1874178, name: "Ostrava - Poruba", storeNumber: "826", storeType: "HPM", address: "Opavská 6201/1A, 708 00 Ostrava Poruba", visited: false },
    { id: 188, lat: 50.0507658, lng: 14.4373456, name: "Praha Pankrác - Arkády", storeNumber: "829", storeType: "HPM", address: "Na Pankráci 86, 140 00 Praha 4", visited: false },
    { id: 189, lat: 50.4363623, lng: 14.9099402, name: "Mladá Boleslav", storeNumber: "832", storeType: "HPM", address: "Na Radouči 1236, 293 01 Mladá Boleslav", visited: false },
    { id: 190, lat: 50.1040728, lng: 14.4894899, name: "Praha - Harfa", storeNumber: "833", storeType: "HPM", address: "Českomoravská 2420/15a, 190 93 Praha", visited: false },
    { id: 191, lat: 49.5864602, lng: 17.2589224, name: "Olomouc - Šantovka", storeNumber: "834", storeType: "HPM", address: "Polská 1201/1, 779 00 Olomouc", visited: false },
    { id: 192, lat: 49.2236525, lng: 15.8858653, name: "Třebíč - Kpt. Jaroše", storeNumber: "851", storeType: "SM", address: "Kapitána Jaroše 1136, 674 01 Třebíč", visited: false },
    { id: 193, lat: 50.6881066, lng: 14.5475969, name: "Česká Lípa - Bardějovská", storeNumber: "853", storeType: "SM", address: "Bardějovská 3268, 470 01 Česká Lípa", visited: false },
    { id: 194, lat: 49.9414015, lng: 17.9002924, name: "Opava - Breda", storeNumber: "855", storeType: "SM", address: "U Fortny 49/10, 746 01 Opava", visited: false },
    { id: 195, lat: 50.0868197, lng: 14.5637951, name: "Praha - Jahodnice", storeNumber: "856", storeType: "SM", address: "Českobrodská 733, 198 00 Praha", visited: false },
    { id: 196, lat: 49.9980655, lng: 14.6584171, name: "Říčany - OC Lihovar", storeNumber: "857", storeType: "SM", address: "Barákova 237/8, 251 01 Říčany", visited: false },
    { id: 197, lat: 49.1917611, lng: 16.6127087, name: "Brno - Nádražní", storeNumber: "858", storeType: "SM", address: "Nádražní 681/2, 602 00 Brno", visited: false },
    { id: 198, lat: 50.1385055, lng: 14.5082976, name: "Praha - Letňany", storeNumber: "860", storeType: "SM", address: "Frýdecká 440, 199 00 Praha 9", visited: false },
    { id: 199, lat: 49.4079101, lng: 15.5799638, name: "Jihlava", storeNumber: "152", storeType: "HPM", address: "Romana Havelky 4857/3, 586 01 Jihlava", visited: false },
    { id: 200, lat: 50.03134, lng: 14.4896229, name: "Praha - Chodov", storeNumber: "198", storeType: "HPM", address: "Roztylská 2321/19, 148 00 Praha 11", visited: false },
    { id: 201, lat: 49.2570013, lng: 13.9155589, name: "Strakonice", storeNumber: "335", storeType: "HPM", address: "Nádražní, 386 01 Strakonice", visited: false },
    { id: 202, lat: 49.1438867, lng: 15.0226414, name: "Jindřichův Hradec", storeNumber: "354", storeType: "HPM", address: "Jáchymova 838, 377 01 Jindřichův Hradec", visited: false },
    { id: 203, lat: 50.5627008, lng: 15.896769, name: "Trutnov", storeNumber: "359", storeType: "HPM", address: "Žižkova 515, 541 01 Trutnov", visited: false },
    { id: 204, lat: 49.8958074, lng: 18.1954384, name: "Hlučín", storeNumber: "462", storeType: "SM", address: "Cihelní 1872/48, 748 01 Hlučín", visited: false },
    { id: 205, lat: 49.556956, lng: 17.7499057, name: "Hranice na Moravě", storeNumber: "685", storeType: "HPM", address: "Zborovská 2008, 753 01 Hranice na Moravě", visited: false },
    { id: 206, lat: 50.1267205, lng: 14.4132025, name: "Praha - Trója", storeNumber: "761", storeType: "SM", address: "Krynická 488/31, 181 00 Praha 8", visited: false },
    { id: 207, lat: 50.7357271, lng: 15.1609322, name: "Jablonec nad Nisou", storeNumber: "831", storeType: "HPM", address: "Želivského 5050/2, 466 05 Jablonec nad Nisou", visited: false },
    { id: 208, lat: 49.5998679, lng: 18.012615, name: "Nový Jičín", storeNumber: "395", storeType: "HPM", address: "Přemyslovců 2252/1, 741 01 Nový Jičín", visited: false },
    { id: 209, lat: 48.845934696647824, lng: 16.059193651641895, name: "Znojmo Vídeňská", storeNumber: "818", storeType: "HPM", address: "Vídeňská 702/71, 669 02 Znojmo", visited: false },
];


// IKONY (Špendlíky)
var commonIconSettings = {
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41], shadowAnchor: [12, 41]
};
var redIcon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', ...commonIconSettings });
var blueIcon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png', ...commonIconSettings });
var greenIcon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png', ...commonIconSettings });
var greyIcon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png', ...commonIconSettings });

// Načtení dat
var storedData = localStorage.getItem('mapPlaces');
placesData = storedData ? JSON.parse(storedData) : defaultPlacesData;

function savePlacesData() { localStorage.setItem('mapPlaces', JSON.stringify(placesData)); }

// --- MAPOVÉ VRSTVY ---
var lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OSM' });
var darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© CartoDB' });
var satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles © Esri' });

var mymap = L.map('mapid', { center: [49.75, 15.5], zoom: 7, layers: [lightLayer] });

var baseMaps = { "Klasická": lightLayer, "Tmavá": darkLayer, "Satelitní": satLayer };
L.control.layers(baseMaps).addTo(mymap);
var markerGroup = L.layerGroup().addTo(mymap);


// --- PŘEPÍNÁNÍ TMAVÉHO REŽIMU ---
function toggleDarkMode() {
    var body = document.body;
    var btn = document.getElementById('themeToggle');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️';
        if (mymap.hasLayer(lightLayer)) { mymap.removeLayer(lightLayer); mymap.addLayer(darkLayer); }
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        if (mymap.hasLayer(darkLayer)) { mymap.removeLayer(darkLayer); mymap.addLayer(lightLayer); }
        localStorage.setItem('theme', 'light');
    }
}
if (localStorage.getItem('theme') === 'dark') { toggleDarkMode(); }


// --- FUNKCE APLIKACE ---
function createMarkerIcon(place) {
    if (place.visited) return greenIcon;
    if (place.storeType === 'HPM') return redIcon;
    if (place.storeType === 'zrušeno' || place.storeType === 'sklad') return greyIcon;
    return blueIcon;
}

function updateProgressCounter() {
    const count = placesData.filter(p => p.visited).length;
    const el = document.getElementById('progress-counter');
    if (el) el.textContent = `${count} / ${placesData.length}`;
}

function renderSidebarList() {
    var listContainer = document.getElementById('sidebar-content');
    if (!listContainer) return;
    listContainer.innerHTML = ''; 

    placesData.forEach(function(place) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'sidebar-item';
        itemDiv.dataset.placeId = place.id; 

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = place.visited;
        
        var label = document.createElement('label');
        label.textContent = place.storeNumber ? `(${place.storeNumber}) ${place.name}` : place.name;

        var distanceSpan = document.createElement('span');
        distanceSpan.className = 'distance-result'; 

        var measureBtn = document.createElement('button');
        measureBtn.className = 'measure-btn';
        measureBtn.textContent = '📏'; 
        measureBtn.title = 'Změřit cestu autem';

        itemDiv.append(checkbox, label, distanceSpan, measureBtn);
        listContainer.appendChild(itemDiv);

        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
            var p = placesData.find(x => x.id === place.id);
            p.visited = e.target.checked;
            savePlacesData(); updateProgressCounter(); filterList();
        });

        itemDiv.addEventListener('click', function(e) {
            if (['INPUT', 'BUTTON'].includes(e.target.tagName)) return;
            mymap.flyTo([place.lat, place.lng], 16);
        });
        
        measureBtn.addEventListener('click', function(e) {
            e.stopPropagation(); 
            var btn = this;
            if (btn.classList.contains('active')) {
                btn.classList.remove('active'); distanceSpan.textContent = ''; return;
            } 
            btn.classList.add('active'); distanceSpan.textContent = '...';
            
            let startKey = document.querySelector('input[name="startPoint"]:checked').value;
            let start = cityCoordinates[startKey];
            let url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${place.lng},${place.lat}?overview=false`;

            fetch(url).then(r => r.json()).then(d => {
                if (d.code === 'Ok') {
                    let km = (d.routes[0].distance / 1000).toFixed(1);
                    let mins = Math.round(d.routes[0].duration / 60);
                    let h = Math.floor(mins / 60);
                    let m = mins % 60;
                    distanceSpan.textContent = ` (${km} km, ${h > 0 ? h+'h '+m+'m' : m+' min'})`;
                } else { distanceSpan.textContent = ' (chyba)'; }
            }).catch(() => distanceSpan.textContent = ' (chyba)');
        });
    });
}

function renderMarkers() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    let fVisited = document.getElementById('filterVisited').checked;
    let fUnvisited = document.getElementById('filterUnvisited').checked;
    let fHPM = document.getElementById('filterHPM').checked;
    let fSM = document.getElementById('filterSM').checked;
    let fZruseno = document.getElementById('filterZruseno').checked;
    
    markerGroup.clearLayers(); 
    placesData.forEach(function(place) {
        let txt = (place.name + " " + (place.storeNumber || "")).toLowerCase();
        if (!txt.includes(query)) return;
        if (!((place.visited && fVisited) || (!place.visited && fUnvisited))) return;
        if (!((place.storeType === 'HPM' && fHPM) || (place.storeType === 'SM' && fSM) || ((place.storeType === 'zrušeno' || place.storeType === 'sklad') && fZruseno))) return;

        var marker = L.marker([place.lat, place.lng], { icon: createMarkerIcon(place), placeId: place.id });
        
        let name = place.storeNumber ? `(${place.storeNumber}) ${place.name}` : place.name;
        
        // ODKAZ PRO NAVIGACI (Oficiální formát pro mobilní aplikace i PC)
        let navLink = 'https://www.google.com/maps/dir/?api=1&destination=' + place.lat + ',' + place.lng;

        let content = `<b>${name}</b><br>Stav: ${place.visited ? 'Hotovo ✅' : 'Zbývá 📍'}<br>
        <a href="${navLink}" target="_blank" style="display:inline-block;margin-top:8px;color:#fff;background:#007bff;padding:6px 12px;border-radius:4px;text-decoration:none;font-weight:bold;">Navigovat 🚗</a>`;
        
        if (place.address) {
            content += `<br><span style="display:block; margin-top:8px; font-size:12px; color:#666;">📍 ${place.address}</span>`;
        }
        
        marker.bindPopup(content);
        marker.bindTooltip(name);
        markerGroup.addLayer(marker);

        marker.on('click', function() {
            var p = placesData.find(x => x.id === this.options.placeId);
            if (!p) return;
            p.visited = !p.visited;
            savePlacesData(); renderSidebarList(); updateProgressCounter();
            this.setIcon(createMarkerIcon(p));
            
            // Regenerace obsahu popupu
            let newContent = `<b>${name}</b><br>Stav: ${p.visited ? 'Hotovo ✅' : 'Zbývá 📍'}<br>
            <a href="${navLink}" target="_blank" style="display:inline-block;margin-top:8px;color:#fff;background:#007bff;padding:6px 12px;border-radius:4px;text-decoration:none;font-weight:bold;">Navigovat 🚗</a>`;
            
            if (p.address) {
                newContent += `<br><span style="display:block; margin-top:8px; font-size:12px; color:#666;">📍 ${p.address}</span>`;
            }

            let fV = document.getElementById('filterVisited').checked;
            let fU = document.getElementById('filterUnvisited').checked;
            if ((p.visited && !fV) || (!p.visited && !fU)) { markerGroup.removeLayer(this); } 
            else { this.bindPopup(newContent).openPopup(); }
        });
    });
}

function filterList() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    let fVisited = document.getElementById('filterVisited').checked;
    let fUnvisited = document.getElementById('filterUnvisited').checked;
    let fHPM = document.getElementById('filterHPM').checked;
    let fSM = document.getElementById('filterSM').checked;
    let fZruseno = document.getElementById('filterZruseno').checked;
    
    let list = document.getElementById('sidebar-content');
    if (list) {
        Array.from(list.getElementsByClassName('sidebar-item')).forEach(item => {
            let p = placesData.find(x => x.id == item.dataset.placeId);
            if (p) {
                let txt = (p.name + " " + (p.storeNumber || "")).toLowerCase();
                let mTxt = txt.includes(query);
                let mSt = (p.visited && fVisited) || (!p.visited && fUnvisited);
                let mTp = (p.storeType === 'HPM' && fHPM) || (p.storeType === 'SM' && fSM) || ((p.storeType === 'zrušeno' || p.storeType === 'sklad') && fZruseno);
                item.style.display = (mTxt && mSt && mTp) ? 'flex' : 'none';
            }
        });
    }
    renderMarkers();
}

function findMe() {
    if (!navigator.geolocation) { alert("GPS nedostupné"); return; }
    navigator.geolocation.getCurrentPosition(pos => {
        var lat = pos.coords.latitude; var lng = pos.coords.longitude;
        if (userLocationMarker) mymap.removeLayer(userLocationMarker);
        var icon = L.divIcon({ className: 'gps-pulse', iconSize: [20,20], popupAnchor: [0,-10] });
        userLocationMarker = L.marker([lat, lng], {icon: icon}).addTo(mymap).bindPopup("Tady jsi!").openPopup();
        mymap.flyTo([lat, lng], 15);
    }, () => alert("Chyba GPS"));
}

function findNearest() {
    if (!navigator.geolocation) { alert("GPS nedostupné"); return; }
    var btn = document.getElementById('findNearestButton'); var txt = btn.textContent; btn.textContent = "Hledám...";
    navigator.geolocation.getCurrentPosition(pos => {
        var uLat = pos.coords.latitude; var uLng = pos.coords.longitude;
        if (userLocationMarker) mymap.removeLayer(userLocationMarker);
        var icon = L.divIcon({ className: 'gps-pulse', iconSize: [20,20], popupAnchor: [0,-10] });
        userLocationMarker = L.marker([uLat, uLng], {icon: icon}).addTo(mymap).bindPopup("Tady jsi!").openPopup();
        
        var nearest = null; var minDst = Infinity;
        placesData.forEach(p => {
            if (p.visited || p.storeType === 'zrušeno' || p.storeType === 'sklad') return;
            var dst = L.latLng(uLat, uLng).distanceTo(L.latLng(p.lat, p.lng));
            if (dst < minDst) { minDst = dst; nearest = p; }
        });
        
        if (nearest) {
            mymap.flyTo([nearest.lat, nearest.lng], 16);
            markerGroup.eachLayer(l => { if (l.options.placeId === nearest.id) l.openPopup(); });
        } else { alert("Vše hotovo!"); }
        btn.textContent = txt;
    }, () => { alert("Chyba GPS"); btn.textContent = txt; });
}

function resetMap() {
    if (confirm("Resetovat?")) {
        placesData = defaultPlacesData;
        placesData.forEach(p => p.visited = false);
        savePlacesData(); renderSidebarList(); filterList(); updateProgressCounter();
    }
}
function exportData() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(placesData)], {type: "application/json"}));
    a.download = "albert_zaloha.json"; a.click();
}
function importData(e) {
    const r = new FileReader();
    r.onload = ev => {
        try {
            placesData = JSON.parse(ev.target.result);
            savePlacesData(); renderSidebarList(); filterList(); updateProgressCounter();
            alert("Data nahrána!");
        } catch(e) { alert("Chyba souboru"); }
    };
    r.readAsText(e.target.files[0]);
}

// --- SPUŠTĚNÍ ---
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('findMeButton')?.addEventListener('click', findMe);
    document.getElementById('findNearestButton')?.addEventListener('click', findNearest);
    document.getElementById('resetButton')?.addEventListener('click', resetMap);
    document.getElementById('themeToggle')?.addEventListener('click', toggleDarkMode);
    document.getElementById('exportBtn')?.addEventListener('click', exportData);
    
    var imp = document.getElementById('importInput');
    document.getElementById('importBtn')?.addEventListener('click', () => imp.click());
    imp?.addEventListener('change', importData);

    document.getElementById('searchInput')?.addEventListener('keyup', filterList);
    ['filterVisited','filterUnvisited','filterHPM','filterSM','filterZruseno'].forEach(id => document.getElementById(id)?.addEventListener('click', filterList));
    
    // OVLÁDÁNÍ PANELU
    var sidebar = document.getElementById('sidebar');
    var openBtn = document.getElementById('openSidebar'); 
    var closeBtn = document.getElementById('closeSidebar'); 

    closeBtn?.addEventListener('click', function() {
        sidebar.classList.add('collapsed');
        openBtn.style.display = 'flex'; 
        setTimeout(() => mymap.invalidateSize(), 300);
    });

    openBtn?.addEventListener('click', function() {
        sidebar.classList.remove('collapsed');
        openBtn.style.display = 'none';
        setTimeout(() => mymap.invalidateSize(), 300);
    });
    
    document.getElementById('sort-default')?.addEventListener('click', () => { placesData.sort((a,b)=>a.id-b.id); renderSidebarList(); filterList(); });
    document.getElementById('sort-name-asc')?.addEventListener('click', () => { placesData.sort((a,b)=>a.name.localeCompare(b.name)); renderSidebarList(); filterList(); });
    document.getElementById('sort-num-asc')?.addEventListener('click', () => { placesData.sort((a,b)=>{
        const nA = a.storeNumber||'999'; const nB = b.storeNumber||'999';
        return nA.localeCompare(nB, undefined, {numeric:true});
    }); renderSidebarList(); filterList(); });

    renderSidebarList(); filterList(); updateProgressCounter();
});