// FIFA World Cup 2026 — data file
// All times in BST (UTC+1). Updated daily via /update-worldcup
const WC_DATA = {
  updated: "2026-06-30T13:26:19Z",
  stage: "knockout", // "group" | "knockout"
  groups: {
    A: {
      teams: ["Mexico","South Africa","South Korea","Czech Republic"],
      matches: [
        {id:"A1", date_bst:"2026-06-11", time_bst:"20:00", home:"Mexico", away:"South Africa",
         score:{h:2,a:0},
         goals:[{t:"Mexico",p:"J. Quiñones",m:9},{t:"Mexico",p:"R. Jiménez",m:67}],
         reds:[{t:"South Africa",p:"Sithole",m:49},{t:"South Africa",p:"Zwane",m:84},{t:"Mexico",p:"Montes",m:"90+2"}],
         yt:"https://www.youtube.com/watch?v=PmevGCkUtM8"},
        {id:"A2", date_bst:"2026-06-12", time_bst:"03:00", home:"South Korea", away:"Czech Republic",
         score:{h:2,a:1},
         goals:[{t:"Czech Republic",p:"Krejčí",m:59},{t:"South Korea",p:"Hwang In-beom",m:67},{t:"South Korea",p:"Oh Hyeon-gyu",m:80}],
         reds:[],yt:"https://www.youtube.com/watch?v=RvOa5j-_DcI"},
        {id:"A3", date_bst:"2026-06-18", time_bst:"17:00", home:"Czech Republic", away:"South Africa",
         score:{h:1,a:1},
         goals:[{t:"Czech Republic",p:"Sadílek",m:6},{t:"South Africa",p:"Mokoena",m:83,pen:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=U6eZG-Nuz-Q"},
        {id:"A4", date_bst:"2026-06-19", time_bst:"02:00", home:"Mexico", away:"South Korea",
         score:{h:1,a:0},
         goals:[{t:"Mexico",p:"Romo",m:50}],
         reds:[],yt:"https://www.youtube.com/watch?v=igQo36nrUeM"},
        {id:"A5", date_bst:"2026-06-25", time_bst:"02:00", home:"Czech Republic", away:"Mexico",
         score:{h:0,a:3},
         goals:[{t:"Mexico",p:"Chávez",m:55},{t:"Mexico",p:"Quiñones",m:61},{t:"Mexico",p:"Fidalgo",m:"90+4"}],
         reds:[],yt:"https://www.youtube.com/watch?v=hfG1HyjN-do"},
        {id:"A6", date_bst:"2026-06-25", time_bst:"02:00", home:"South Africa", away:"South Korea",
         score:{h:1,a:0},
         goals:[{t:"South Africa",p:"Maseko",m:63}],
         reds:[],yt:"https://www.youtube.com/watch?v=eQHEClHublI"},
      ]
    },
    B: {
      teams: ["Canada","Bosnia and Herzegovina","Qatar","Switzerland"],
      matches: [
        {id:"B1", date_bst:"2026-06-12", time_bst:"20:00", home:"Canada", away:"Bosnia and Herzegovina",
         score:{h:1,a:1},
         goals:[{t:"Bosnia and Herzegovina",p:"Lukić",m:21},{t:"Canada",p:"Larin",m:78}],
         reds:[],yt:"https://www.youtube.com/watch?v=w-_rY5morQY"},
        {id:"B2", date_bst:"2026-06-13", time_bst:"20:00", home:"Qatar", away:"Switzerland",
         score:{h:1,a:1},
         goals:[{t:"Switzerland",p:"Embolo",m:17,pen:true},{t:"Qatar",p:"Muheim",m:"90+4",og:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=mnxkUVBT4Ng"},
        {id:"B3", date_bst:"2026-06-18", time_bst:"20:00", home:"Switzerland", away:"Bosnia and Herzegovina",
         score:{h:4,a:1},
         goals:[{t:"Switzerland",p:"Manzambi",m:74},{t:"Switzerland",p:"Vargas",m:84},{t:"Bosnia and Herzegovina",p:"Mahmic",m:"90+3"},{t:"Switzerland",p:"Manzambi",m:90},{t:"Switzerland",p:"Xhaka",m:"90+7",pen:true}],
         reds:[{t:"Bosnia and Herzegovina",p:"Muharemovic",m:80}],yt:"https://www.youtube.com/watch?v=eIOPOv7Jp88"},
        {id:"B4", date_bst:"2026-06-18", time_bst:"23:00", home:"Canada", away:"Qatar",
         score:{h:6,a:0},
         goals:[{t:"Canada",p:"Larin",m:16},{t:"Canada",p:"David",m:29},{t:"Canada",p:"David",m:"45+3"},{t:"Canada",p:"Saliba",m:64},{t:"Qatar",p:"Manai",m:75,og:true},{t:"Canada",p:"David",m:"90+2"}],
         reds:[{t:"Qatar",p:"Homam Ahmed",m:33},{t:"Qatar",p:"Madibo",m:53}],yt:"https://www.youtube.com/watch?v=n44ndE6mwV0"},
        {id:"B5", date_bst:"2026-06-24", time_bst:"20:00", home:"Switzerland", away:"Canada",
         score:{h:2,a:1},
         goals:[{t:"Switzerland",p:"Vargas",m:46},{t:"Switzerland",p:"Manzambi",m:57},{t:"Canada",p:"David",m:76}],
         reds:[],yt:"https://www.youtube.com/watch?v=yt3iKlOAVYM"},
        {id:"B6", date_bst:"2026-06-24", time_bst:"20:00", home:"Bosnia and Herzegovina", away:"Qatar",
         score:{h:3,a:1},
         goals:[{t:"Bosnia and Herzegovina",p:"Alajbegović",m:29},{t:"Bosnia and Herzegovina",p:"Abunada",m:34,og:true},{t:"Qatar",p:"Al-Haydos",m:42},{t:"Bosnia and Herzegovina",p:"Mahmic",m:80}],
         reds:[],yt:"https://www.youtube.com/watch?v=mk6m1LJdkrI"},
      ]
    },
    C: {
      teams: ["Brazil","Morocco","Haiti","Scotland"],
      matches: [
        {id:"C1", date_bst:"2026-06-13", time_bst:"23:00", home:"Brazil", away:"Morocco",
         score:{h:1,a:1},
         goals:[{t:"Morocco",p:"Saibari",m:21},{t:"Brazil",p:"Vinícius Júnior",m:32}],
         reds:[],yt:"https://www.youtube.com/watch?v=kJ278WtIULw"},
        {id:"C2", date_bst:"2026-06-14", time_bst:"02:00", home:"Haiti", away:"Scotland",
         score:{h:0,a:1},
         goals:[{t:"Scotland",p:"McGinn",m:28}],
         reds:[],yt:"https://www.youtube.com/watch?v=lOjugRksJ4s"},
        {id:"C3", date_bst:"2026-06-19", time_bst:"23:00", home:"Scotland", away:"Morocco",
         score:{h:0,a:1},
         goals:[{t:"Morocco",p:"Saibari",m:2}],
         reds:[],yt:"https://www.youtube.com/watch?v=WZOBi6Sapwo"},
        {id:"C4", date_bst:"2026-06-20", time_bst:"01:30", home:"Brazil", away:"Haiti",
         score:{h:3,a:0},
         goals:[{t:"Brazil",p:"Cunha",m:23},{t:"Brazil",p:"Cunha",m:36},{t:"Brazil",p:"Vinícius Júnior",m:"45+3"}],
         reds:[],yt:"https://www.youtube.com/watch?v=rtS2J1JzolQ"},
        {id:"C5", date_bst:"2026-06-24", time_bst:"23:00", home:"Scotland", away:"Brazil",
         score:{h:0,a:3},
         goals:[{t:"Brazil",p:"Vinícius Júnior",m:7},{t:"Brazil",p:"Vinícius Júnior",m:"45+3"},{t:"Brazil",p:"Cunha",m:60}],
         reds:[],yt:"https://www.youtube.com/watch?v=fWN13Oe4kA0"},
        {id:"C6", date_bst:"2026-06-24", time_bst:"23:00", home:"Morocco", away:"Haiti",
         score:{h:4,a:2},
         goals:[{t:"Haiti",p:"Bounou",m:10,og:true},{t:"Morocco",p:"Hakimi",m:39},{t:"Haiti",p:"Isidor",m:43},{t:"Morocco",p:"Saibari",m:"45+1"},{t:"Morocco",p:"Rahimi",m:78},{t:"Morocco",p:"Yassine",m:89}],
         reds:[],yt:"https://www.youtube.com/watch?v=D5YbmFGtco4"},
      ]
    },
    D: {
      teams: ["United States","Paraguay","Australia","Turkey"],
      matches: [
        {id:"D1", date_bst:"2026-06-13", time_bst:"02:00", home:"United States", away:"Paraguay",
         score:{h:4,a:1},
         goals:[{t:"United States",p:"Bobadilla",m:7,og:true},{t:"United States",p:"Balogun",m:31},{t:"United States",p:"Balogun",m:"45+5"},{t:"Paraguay",p:"Maurício",m:73},{t:"United States",p:"Reyna",m:"90+8"}],
         reds:[],yt:"https://www.youtube.com/watch?v=0PVo3bk-TMk"},
        {id:"D2", date_bst:"2026-06-14", time_bst:"05:00", home:"Australia", away:"Turkey",
         score:{h:2,a:0},
         goals:[{t:"Australia",p:"Irankunda",m:27},{t:"Australia",p:"Metcalfe",m:75}],
         reds:[],yt:"https://www.youtube.com/watch?v=JA5q07Fple8"},
        {id:"D3", date_bst:"2026-06-19", time_bst:"20:00", home:"United States", away:"Australia",
         score:{h:2,a:0},
         goals:[{t:"Australia",p:"Burgess",m:11,og:true},{t:"United States",p:"Freeman",m:43}],
         reds:[],yt:null},
        {id:"D4", date_bst:"2026-06-20", time_bst:"04:00", home:"Turkey", away:"Paraguay",
         score:{h:0,a:1},
         goals:[{t:"Paraguay",p:"Galarza",m:2}],
         reds:[{t:"Paraguay",p:"Almirón",m:"45+3"}],yt:"https://www.youtube.com/watch?v=j55KFfjV0VY"},
        {id:"D5", date_bst:"2026-06-26", time_bst:"03:00", home:"Turkey", away:"United States",
         score:{h:3,a:2},
         goals:[{t:"United States",p:"Trusty",m:3},{t:"Turkey",p:"Güler",m:10},{t:"Turkey",p:"Yılmaz",m:31},{t:"United States",p:"Berhalter",m:49},{t:"Turkey",p:"Ayhan",m:"90+8"}],
         reds:[],yt:"https://www.youtube.com/watch?v=P1KGhu6UC80"},
        {id:"D6", date_bst:"2026-06-26", time_bst:"03:00", home:"Paraguay", away:"Australia",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=_zbSbW0Y0AA"},
      ]
    },
    E: {
      teams: ["Germany","Curaçao","Ivory Coast","Ecuador"],
      matches: [
        {id:"E1", date_bst:"2026-06-14", time_bst:"18:00", home:"Germany", away:"Curaçao",
         score:{h:7,a:1},
         goals:[{t:"Germany",p:"Nmecha",m:6},{t:"Curaçao",p:"Comenencia",m:21},{t:"Germany",p:"Schlotterbeck",m:38},{t:"Germany",p:"Havertz",m:"45+5",pen:true},{t:"Germany",p:"Musiala",m:47},{t:"Germany",p:"Brown",m:68},{t:"Germany",p:"Undav",m:78},{t:"Germany",p:"Havertz",m:88}],
         reds:[],yt:"https://www.youtube.com/watch?v=B6-Z5ul2ccQ"},
        {id:"E2", date_bst:"2026-06-15", time_bst:"00:00", home:"Ivory Coast", away:"Ecuador",
         score:{h:1,a:0},
         goals:[{t:"Ivory Coast",p:"A. Diallo",m:90}],
         reds:[],yt:"https://www.youtube.com/watch?v=KbmxSnT4dQU"},
        {id:"E3", date_bst:"2026-06-20", time_bst:"21:00", home:"Germany", away:"Ivory Coast",
         score:{h:2,a:1},
         goals:[{t:"Ivory Coast",p:"Kessié",m:30},{t:"Germany",p:"Undav",m:68},{t:"Germany",p:"Undav",m:"90+4"}],
         reds:[],yt:"https://www.youtube.com/watch?v=4JBIzfJGGnc"},
        {id:"E4", date_bst:"2026-06-21", time_bst:"01:00", home:"Ecuador", away:"Curaçao",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=Rl0XhyJDPMY"},
        {id:"E5", date_bst:"2026-06-25", time_bst:"21:00", home:"Curaçao", away:"Ivory Coast",
         score:{h:0,a:2},
         goals:[{t:"Ivory Coast",p:"Pépé",m:7},{t:"Ivory Coast",p:"Pépé",m:64}],
         reds:[],yt:"https://www.youtube.com/watch?v=m80mh1_2L3M"},
        {id:"E6", date_bst:"2026-06-25", time_bst:"21:00", home:"Ecuador", away:"Germany",
         score:{h:2,a:1},
         goals:[{t:"Germany",p:"Sané",m:2},{t:"Ecuador",p:"Angulo",m:9},{t:"Ecuador",p:"Plata",m:77}],
         reds:[],yt:"https://www.youtube.com/watch?v=aKEzPck7ehk"},
      ]
    },
    F: {
      teams: ["Netherlands","Japan","Sweden","Tunisia"],
      matches: [
        {id:"F1", date_bst:"2026-06-14", time_bst:"21:00", home:"Netherlands", away:"Japan",
         score:{h:2,a:2},
         goals:[{t:"Netherlands",p:"Van Dijk",m:50},{t:"Japan",p:"Nakamura",m:57},{t:"Netherlands",p:"Summerville",m:64},{t:"Japan",p:"Kamada",m:88}],
         reds:[],yt:"https://www.youtube.com/watch?v=r8SvHZxALQs"},
        {id:"F2", date_bst:"2026-06-15", time_bst:"03:00", home:"Sweden", away:"Tunisia",
         score:{h:5,a:1},
         goals:[{t:"Sweden",p:"Ayari",m:7},{t:"Sweden",p:"Isak",m:30},{t:"Tunisia",p:"Rekik",m:43},{t:"Sweden",p:"Gyökeres",m:59},{t:"Sweden",p:"Svanberg",m:84},{t:"Sweden",p:"Ayari",m:"90+6"}],
         reds:[],yt:"https://www.youtube.com/watch?v=TC9tqtH0CkA"},
        {id:"F3", date_bst:"2026-06-20", time_bst:"18:00", home:"Netherlands", away:"Sweden",
         score:{h:5,a:1},
         goals:[{t:"Netherlands",p:"Brobbey",m:5},{t:"Netherlands",p:"Brobbey",m:17},{t:"Netherlands",p:"Gakpo",m:47},{t:"Netherlands",p:"Gakpo",m:54},{t:"Sweden",p:"Elanga",m:59},{t:"Netherlands",p:"Summerville",m:89}],
         reds:[],yt:"https://www.youtube.com/watch?v=I8eNLHccA6o"},
        {id:"F4", date_bst:"2026-06-21", time_bst:"05:00", home:"Tunisia", away:"Japan",
         score:{h:0,a:4},
         goals:[{t:"Japan",p:"Kamada",m:4},{t:"Japan",p:"Ueda",m:31},{t:"Japan",p:"Ito",m:69},{t:"Japan",p:"Ueda",m:83}],
         reds:[],yt:"https://www.youtube.com/watch?v=scF9i_-lr4I"},
        {id:"F5", date_bst:"2026-06-26", time_bst:"00:00", home:"Japan", away:"Sweden",
         score:{h:1,a:1},
         goals:[{t:"Japan",p:"Maeda",m:56},{t:"Sweden",p:"Elanga",m:62}],
         reds:[],yt:"https://www.youtube.com/watch?v=o-3F-YCjp8U"},
        {id:"F6", date_bst:"2026-06-26", time_bst:"00:00", home:"Tunisia", away:"Netherlands",
         score:{h:1,a:3},
         goals:[{t:"Netherlands",p:"Skhiri",m:3,og:true},{t:"Netherlands",p:"Brobbey",m:7},{t:"Tunisia",p:"Mastouri",m:54},{t:"Netherlands",p:"van Hecke",m:62}],
         reds:[],yt:"https://www.youtube.com/watch?v=IEsZMXBHd4w"},
      ]
    },
    G: {
      teams: ["Belgium","Egypt","Iran","New Zealand"],
      matches: [
        {id:"G1", date_bst:"2026-06-15", time_bst:"20:00", home:"Belgium", away:"Egypt",
         score:{h:1,a:1},
         goals:[{t:"Egypt",p:"Emam Ashour",m:19},{t:"Belgium",p:"Hany",m:66,og:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=nR2SQc4ZHNQ"},
        {id:"G2", date_bst:"2026-06-16", time_bst:"02:00", home:"Iran", away:"New Zealand",
         score:{h:2,a:2},
         goals:[{t:"New Zealand",p:"Just",m:7},{t:"Iran",p:"Rezaeian",m:32},{t:"New Zealand",p:"Just",m:54},{t:"Iran",p:"Mohebi",m:64}],
         reds:[],yt:"https://www.youtube.com/watch?v=hCpD7O-Iy7Y"},
        {id:"G3", date_bst:"2026-06-21", time_bst:"20:00", home:"Belgium", away:"Iran",
         score:{h:0,a:0},
         goals:[],reds:[{t:"Belgium",p:"Ngoy",m:66}],yt:"https://www.youtube.com/watch?v=MNUH8OqQGgE"},
        {id:"G4", date_bst:"2026-06-22", time_bst:"02:00", home:"New Zealand", away:"Egypt",
         score:{h:1,a:3},
         goals:[{t:"New Zealand",p:"Surman",m:15},{t:"Egypt",p:"Zico",m:58},{t:"Egypt",p:"Salah",m:67},{t:"Egypt",p:"Trézéguet",m:82}],
         reds:[],yt:"https://www.youtube.com/watch?v=0XtNAQiyaX4"},
        {id:"G5", date_bst:"2026-06-27", time_bst:"04:00", home:"Egypt", away:"Iran",
         score:{h:1,a:1},
         goals:[{t:"Egypt",p:"Saber",m:5},{t:"Iran",p:"Rezaeian",m:14}],
         reds:[],yt:"https://www.youtube.com/watch?v=RRglAYuA0Lc"},
        {id:"G6", date_bst:"2026-06-27", time_bst:"04:00", home:"New Zealand", away:"Belgium",
         score:{h:1,a:5},
         goals:[{t:"Belgium",p:"Trossard",m:28},{t:"Belgium",p:"Trossard",m:50},{t:"Belgium",p:"De Bruyne",m:66},{t:"New Zealand",p:"Just",m:84},{t:"Belgium",p:"Lukaku",m:86},{t:"Belgium",p:"Saelemaekers",m:"90+4"}],
         reds:[],yt:"https://www.youtube.com/watch?v=QzIbZkwnDdg"},
      ]
    },
    H: {
      teams: ["Spain","Cape Verde","Saudi Arabia","Uruguay"],
      matches: [
        {id:"H1", date_bst:"2026-06-15", time_bst:"17:00", home:"Spain", away:"Cape Verde",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=-Vv4UnfvnEQ"},
        {id:"H2", date_bst:"2026-06-15", time_bst:"23:00", home:"Saudi Arabia", away:"Uruguay",
         score:{h:1,a:1},
         goals:[{t:"Saudi Arabia",p:"Al-Amri",m:41},{t:"Uruguay",p:"Araújo",m:80}],
         reds:[],yt:"https://www.youtube.com/watch?v=fRuj2TLu4W0"},
        {id:"H3", date_bst:"2026-06-21", time_bst:"17:00", home:"Spain", away:"Saudi Arabia",
         score:{h:4,a:0},
         goals:[{t:"Spain",p:"Yamal",m:10},{t:"Spain",p:"Oyarzabal",m:21},{t:"Spain",p:"Oyarzabal",m:24},{t:"Saudi Arabia",p:"Al-Tambakti",m:49,og:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=Jba3WR2FdTQ"},
        {id:"H4", date_bst:"2026-06-21", time_bst:"23:00", home:"Uruguay", away:"Cape Verde",
         score:{h:2,a:2},
         goals:[{t:"Cape Verde",p:"Pina",m:21},{t:"Uruguay",p:"Araújo",m:44},{t:"Uruguay",p:"Canobbio",m:"45+6"},{t:"Cape Verde",p:"Varela",m:61}],
         reds:[],yt:"https://www.youtube.com/watch?v=RR1QMWchMXs"},
        {id:"H5", date_bst:"2026-06-27", time_bst:"01:00", home:"Cape Verde", away:"Saudi Arabia",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=6W6Ys1aIXj0"},
        {id:"H6", date_bst:"2026-06-27", time_bst:"01:00", home:"Uruguay", away:"Spain",
         score:{h:0,a:1},
         goals:[{t:"Spain",p:"Baena",m:42}],
         reds:[{t:"Uruguay",p:"Canobbio",m:"90+5"}],yt:"https://www.youtube.com/watch?v=55dW1Glv_bU"},
      ]
    },
    I: {
      teams: ["France","Senegal","Iraq","Norway"],
      matches: [
        {id:"I1", date_bst:"2026-06-16", time_bst:"20:00", home:"France", away:"Senegal",
         score:{h:3,a:1},
         goals:[{t:"France",p:"Mbappé",m:66},{t:"France",p:"Barcola",m:82},{t:"Senegal",p:"Mbaye",m:"90+5"},{t:"France",p:"Mbappé",m:"90+6"}],
         reds:[],yt:"https://www.youtube.com/watch?v=KMNza_iE7ZI"},
        {id:"I2", date_bst:"2026-06-16", time_bst:"23:00", home:"Iraq", away:"Norway",
         score:{h:1,a:4},
         goals:[{t:"Norway",p:"Haaland",m:29},{t:"Iraq",p:"Hussein",m:39},{t:"Norway",p:"Haaland",m:43},{t:"Norway",p:"Østigård",m:76},{t:"Norway",p:"Hussein",m:"90+6",og:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=J9-7-3bpoQg"},
        {id:"I3", date_bst:"2026-06-22", time_bst:"22:00", home:"France", away:"Iraq",
         score:{h:3,a:0},
         goals:[{t:"France",p:"Mbappé",m:14},{t:"France",p:"Mbappé",m:54},{t:"France",p:"Dembélé",m:66}],
         reds:[],yt:"https://www.youtube.com/watch?v=MV3-lGTuUg8"},
        {id:"I4", date_bst:"2026-06-23", time_bst:"01:00", home:"Norway", away:"Senegal",
         score:{h:3,a:2},
         goals:[{t:"Norway",p:"Pedersen",m:43},{t:"Norway",p:"Haaland",m:48},{t:"Senegal",p:"Sarr",m:53},{t:"Norway",p:"Haaland",m:58},{t:"Senegal",p:"Sarr",m:"90+3"}],
         reds:[],yt:"https://www.youtube.com/watch?v=q9thzeC8_tE"},
        {id:"I5", date_bst:"2026-06-26", time_bst:"20:00", home:"Norway", away:"France",
         score:{h:1,a:4},
         goals:[{t:"France",p:"Dembélé",m:7},{t:"France",p:"Dembélé",m:20},{t:"France",p:"Dembélé",m:32},{t:"Norway",p:"Aasgaard",m:21},{t:"France",p:"Doué",m:"90+4"}],
         reds:[],yt:"https://www.youtube.com/watch?v=zmBVzE5x9p8"},
        {id:"I6", date_bst:"2026-06-26", time_bst:"20:00", home:"Senegal", away:"Iraq",
         score:{h:5,a:0},
         goals:[{t:"Senegal",p:"H. Diarra",m:4},{t:"Senegal",p:"I. Sarr",m:56},{t:"Senegal",p:"Gueye",m:59},{t:"Senegal",p:"Gueye",m:71},{t:"Senegal",p:"Ndiaye",m:82}],
         reds:[{t:"Iraq",p:"Sulaka",m:13}],yt:"https://www.youtube.com/watch?v=o1F3dconFDg"},
      ]
    },
    J: {
      teams: ["Argentina","Algeria","Austria","Jordan"],
      matches: [
        {id:"J1", date_bst:"2026-06-17", time_bst:"02:00", home:"Argentina", away:"Algeria",
         score:{h:3,a:0},
         goals:[{t:"Argentina",p:"Messi",m:17},{t:"Argentina",p:"Messi",m:60},{t:"Argentina",p:"Messi",m:76}],
         reds:[],yt:"https://www.youtube.com/watch?v=P9fqnZaYMqY"},
        {id:"J2", date_bst:"2026-06-17", time_bst:"05:00", home:"Austria", away:"Jordan",
         score:{h:3,a:1},
         goals:[{t:"Austria",p:"Schmid",m:20},{t:"Jordan",p:"Olwan",m:50},{t:"Austria",p:"Al-Arab",m:76,og:true},{t:"Austria",p:"Arnautović",m:"90+12",pen:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=rNMCbKYUnHQ"},
        {id:"J3", date_bst:"2026-06-22", time_bst:"18:00", home:"Argentina", away:"Austria",
         score:{h:2,a:0},
         goals:[{t:"Argentina",p:"Messi",m:38},{t:"Argentina",p:"Messi",m:"90+5"}],
         reds:[],yt:"https://www.youtube.com/watch?v=BVuXxylCcRo"},
        {id:"J4", date_bst:"2026-06-23", time_bst:"04:00", home:"Jordan", away:"Algeria",
         score:{h:1,a:2},
         goals:[{t:"Jordan",p:"Al-Rashdan",m:36},{t:"Algeria",p:"Benbouali",m:69},{t:"Algeria",p:"Gouiri",m:82}],
         reds:[],yt:"https://www.youtube.com/watch?v=0HQ_tVjZiJc"},
        {id:"J5", date_bst:"2026-06-28", time_bst:"03:00", home:"Algeria", away:"Austria",
         score:{h:3,a:3},
         goals:[{t:"Austria",p:"Arnautovic",m:28},{t:"Algeria",p:"Belghali",m:45},{t:"Austria",p:"Sabitzer",m:55},{t:"Algeria",p:"Mahrez",m:60},{t:"Algeria",p:"Mahrez",m:"90+3"},{t:"Austria",p:"Kalajdzic",m:"90+6"}],
         reds:[],yt:"https://www.youtube.com/watch?v=NIMe2mIfTdI"},
        {id:"J6", date_bst:"2026-06-28", time_bst:"03:00", home:"Jordan", away:"Argentina",
         score:{h:1,a:3},
         goals:[{t:"Argentina",p:"Lo Celso",m:19},{t:"Argentina",p:"L. Martínez",m:31,pen:true},{t:"Jordan",p:"Al-Tamari",m:55},{t:"Argentina",p:"Messi",m:80}],
         reds:[],yt:"https://www.youtube.com/watch?v=VLV_opHBk3U"},
      ]
    },
    K: {
      teams: ["Portugal","DR Congo","Uzbekistan","Colombia"],
      matches: [
        {id:"K1", date_bst:"2026-06-17", time_bst:"17:00", home:"Portugal", away:"DR Congo",
         score:{h:1,a:1},
         goals:[{t:"Portugal",p:"J. Neves",m:6},{t:"DR Congo",p:"Wissa",m:"45+1"}],
         reds:[],yt:"https://www.youtube.com/watch?v=NAX0g2sv5cQ"},
        {id:"K2", date_bst:"2026-06-18", time_bst:"02:00", home:"Uzbekistan", away:"Colombia",
         score:{h:1,a:3},
         goals:[{t:"Colombia",p:"Muñoz",m:40},{t:"Uzbekistan",p:"Fayzullaev",m:60},{t:"Colombia",p:"L. Díaz",m:65},{t:"Colombia",p:"Campaz",m:"90+9"}],
         reds:[],yt:"https://www.youtube.com/watch?v=O-3QWKFN7xw"},
        {id:"K3", date_bst:"2026-06-23", time_bst:"17:00", home:"Portugal", away:"Uzbekistan",
         score:{h:5,a:0},
         goals:[{t:"Portugal",p:"Ronaldo",m:6},{t:"Portugal",p:"Nuno Mendes",m:17},{t:"Portugal",p:"Ronaldo",m:39},{t:"Uzbekistan",p:"Nematov",m:60,og:true},{t:"Portugal",p:"R. Leão",m:87}],
         reds:[],yt:"https://www.youtube.com/watch?v=UB_JpyqtCVs"},
        {id:"K4", date_bst:"2026-06-24", time_bst:"02:00", home:"Colombia", away:"DR Congo",
         score:{h:1,a:0},
         goals:[{t:"Colombia",p:"Muñoz",m:76}],
         reds:[],yt:"https://www.youtube.com/watch?v=GHNdcbfBcl0"},
        {id:"K5", date_bst:"2026-06-28", time_bst:"00:30", home:"Colombia", away:"Portugal",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=WRw6B3YxBZQ"},
        {id:"K6", date_bst:"2026-06-28", time_bst:"00:30", home:"DR Congo", away:"Uzbekistan",
         score:{h:3,a:1},
         goals:[{t:"Uzbekistan",p:"Shomurodov",m:10},{t:"DR Congo",p:"Wissa",m:68,pen:true},{t:"DR Congo",p:"Mayele",m:78},{t:"DR Congo",p:"Wissa",m:"90+1"}],
         reds:[],yt:"https://www.youtube.com/watch?v=GysGCE8iKXE"},
      ]
    },
    L: {
      teams: ["England","Croatia","Ghana","Panama"],
      matches: [
        {id:"L1", date_bst:"2026-06-17", time_bst:"21:00", home:"England", away:"Croatia",
         score:{h:4,a:2},
         goals:[{t:"England",p:"Kane",m:12,pen:true},{t:"Croatia",p:"Baturina",m:36},{t:"England",p:"Kane",m:42},{t:"Croatia",p:"Musa",m:"45+5"},{t:"England",p:"Bellingham",m:47},{t:"England",p:"Rashford",m:85}],
         reds:[],yt:"https://www.youtube.com/watch?v=kFabAPJP5ys"},
        {id:"L2", date_bst:"2026-06-18", time_bst:"00:00", home:"Ghana", away:"Panama",
         score:{h:1,a:0},
         goals:[{t:"Ghana",p:"Yirenkyi",m:"90+5"}],
         reds:[],yt:"https://www.youtube.com/watch?v=6urCp8XydUE"},
        {id:"L3", date_bst:"2026-06-23", time_bst:"21:00", home:"England", away:"Ghana",
         score:{h:0,a:0},
         goals:[],reds:[],yt:"https://www.youtube.com/watch?v=fvBPDSIZ3sg"},
        {id:"L4", date_bst:"2026-06-24", time_bst:"00:00", home:"Panama", away:"Croatia",
         score:{h:0,a:1},
         goals:[{t:"Croatia",p:"Budimir",m:54}],
         reds:[],yt:"https://www.youtube.com/watch?v=IV1BFpYR-Eo"},
        {id:"L5", date_bst:"2026-06-27", time_bst:"22:00", home:"Panama", away:"England",
         score:{h:0,a:2},
         goals:[{t:"England",p:"Bellingham",m:62},{t:"England",p:"Kane",m:67}],
         reds:[],yt:"https://www.youtube.com/watch?v=5QgvEKvqVbQ"},
        {id:"L6", date_bst:"2026-06-27", time_bst:"22:00", home:"Croatia", away:"Ghana",
         score:{h:2,a:1},
         goals:[{t:"Croatia",p:"Sucic",m:31},{t:"Ghana",p:"Luckassen",m:73},{t:"Croatia",p:"Vlasic",m:83}],
         reds:[],yt:"https://www.youtube.com/watch?v=7dkbhbqzLOE"},
      ]
    }
  },

  // Knockout bracket
  // slot fields: home_label/away_label = human-readable source when team is not yet known
  // home_team/away_team = null until resolved
  knockout: {
    // NOTE: r32/r16/qf arrays are ordered by BRACKET POSITION (top→bottom of each half),
    // not by match number. The renderer lays matches out positionally and draws connector
    // lines between physically adjacent pairs, so array order must mirror FIFA's published
    // progression. Left half (→ SF-101): R32 74,77,73,75,83,84,81,82. Right half (→ SF-102):
    // R32 76,78,79,80,86,88,85,87. This is the fixed, pre-published 2026 bracket — do not
    // re-pair sequentially. See missionlog/in-flight-changes/0018.
    r32: [
      // Left half (feeds SF-101)
      {id:"R32-74", date_bst:"2026-06-29", time_bst:"21:30", home_label:"1st Group E", away_label:"Best 3rd (A/B/C/D/F)", home_team:"Germany",away_team:"Paraguay", score:{h:1,a:1},pens:{h:3,a:4},goals:[{t:"Paraguay",p:"Enciso",m:42},{t:"Germany",p:"Havertz",m:54}],reds:[],yt:"https://www.youtube.com/watch?v=gVYimAh7meQ", new:true},
      {id:"R32-77", date_bst:"2026-06-30", time_bst:"22:00", home_label:"1st Group I", away_label:"Best 3rd (C/D/F/G/H)", home_team:"France",away_team:"Sweden", score:null,goals:[],reds:[],yt:null},
      {id:"R32-73", date_bst:"2026-06-28", time_bst:"20:00", home_label:"2nd Group A", away_label:"2nd Group B", home_team:"South Africa",away_team:"Canada", score:{h:0,a:1},goals:[{t:"Canada",p:"Eustáquio",m:"90+2"}],reds:[],yt:"https://www.youtube.com/watch?v=tDBwRbOKND8"},
      {id:"R32-75", date_bst:"2026-06-30", time_bst:"02:00", home_label:"1st Group F", away_label:"2nd Group C", home_team:"Netherlands",away_team:"Morocco", score:{h:1,a:1},pens:{h:2,a:3},goals:[{t:"Netherlands",p:"Gakpo",m:72},{t:"Morocco",p:"Issa Diop",m:"90+1"}],reds:[],yt:"https://www.youtube.com/watch?v=Kn3HmZNQsUY", new:true},
      {id:"R32-83", date_bst:"2026-07-03", time_bst:"00:00", home_label:"2nd Group K", away_label:"2nd Group L", home_team:"Portugal",away_team:"Croatia", score:null,goals:[],reds:[],yt:null},
      {id:"R32-84", date_bst:"2026-07-02", time_bst:"20:00", home_label:"1st Group H", away_label:"2nd Group J", home_team:"Spain",away_team:"Austria", score:null,goals:[],reds:[],yt:null},
      {id:"R32-81", date_bst:"2026-07-02", time_bst:"01:00", home_label:"1st Group D", away_label:"Best 3rd (B/E/F/I/J)", home_team:"United States",away_team:"Bosnia and Herzegovina", score:null,goals:[],reds:[],yt:null},
      {id:"R32-82", date_bst:"2026-07-01", time_bst:"21:00", home_label:"1st Group G", away_label:"Best 3rd (A/E/H/I/J)", home_team:"Belgium",away_team:"Senegal", score:null,goals:[],reds:[],yt:null},
      // Right half (feeds SF-102)
      {id:"R32-76", date_bst:"2026-06-29", time_bst:"18:00", home_label:"1st Group C", away_label:"2nd Group F", home_team:"Brazil",away_team:"Japan", score:{h:2,a:1},goals:[{t:"Japan",p:"Sano",m:29},{t:"Brazil",p:"Casemiro",m:56},{t:"Brazil",p:"Martinelli",m:"90+5"}],reds:[],yt:"https://www.youtube.com/watch?v=QgUSOlN0Tt0", new:true},
      {id:"R32-78", date_bst:"2026-06-30", time_bst:"18:00", home_label:"2nd Group E", away_label:"2nd Group I", home_team:"Ivory Coast",away_team:"Norway", score:null,goals:[],reds:[],yt:null},
      {id:"R32-79", date_bst:"2026-07-01", time_bst:"02:00", home_label:"1st Group A", away_label:"Best 3rd (C/E/F/H/I)", home_team:"Mexico",away_team:"Ecuador", score:null,goals:[],reds:[],yt:null},
      {id:"R32-80", date_bst:"2026-07-01", time_bst:"17:00", home_label:"1st Group L", away_label:"Best 3rd (E/H/I/J/K)", home_team:"England",away_team:"DR Congo", score:null,goals:[],reds:[],yt:null},
      {id:"R32-86", date_bst:"2026-07-03", time_bst:"23:00", home_label:"1st Group J", away_label:"2nd Group H", home_team:"Argentina",away_team:"Cape Verde", score:null,goals:[],reds:[],yt:null},
      {id:"R32-88", date_bst:"2026-07-03", time_bst:"19:00", home_label:"2nd Group D", away_label:"2nd Group G", home_team:"Australia",away_team:"Egypt", score:null,goals:[],reds:[],yt:null},
      {id:"R32-85", date_bst:"2026-07-03", time_bst:"04:00", home_label:"1st Group B", away_label:"Best 3rd (E/F/G/I/J)", home_team:"Switzerland",away_team:"Algeria", score:null,goals:[],reds:[],yt:null},
      {id:"R32-87", date_bst:"2026-07-04", time_bst:"02:30", home_label:"1st Group K", away_label:"Best 3rd (D/E/I/J/L)", home_team:"Colombia",away_team:"Ghana", score:null,goals:[],reds:[],yt:null},
    ],
    r16: [
      // Left half (feeds SF-101)
      {id:"R16-89", date_bst:"2026-07-04", time_bst:"TBC", home_label:"W R32-74", away_label:"W R32-77", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-74","R32-77"]},
      {id:"R16-90", date_bst:"2026-07-04", time_bst:"TBC", home_label:"W R32-73", away_label:"W R32-75", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-73","R32-75"]},
      {id:"R16-93", date_bst:"2026-07-06", time_bst:"TBC", home_label:"W R32-83", away_label:"W R32-84", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-83","R32-84"]},
      {id:"R16-94", date_bst:"2026-07-06", time_bst:"TBC", home_label:"W R32-81", away_label:"W R32-82", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-81","R32-82"]},
      // Right half (feeds SF-102)
      {id:"R16-91", date_bst:"2026-07-05", time_bst:"TBC", home_label:"W R32-76", away_label:"W R32-78", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-76","R32-78"]},
      {id:"R16-92", date_bst:"2026-07-05", time_bst:"TBC", home_label:"W R32-79", away_label:"W R32-80", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-79","R32-80"]},
      {id:"R16-95", date_bst:"2026-07-07", time_bst:"TBC", home_label:"W R32-86", away_label:"W R32-88", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-86","R32-88"]},
      {id:"R16-96", date_bst:"2026-07-07", time_bst:"TBC", home_label:"W R32-85", away_label:"W R32-87", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-85","R32-87"]},
    ],
    qf: [
      // Left half (feeds SF-101)
      {id:"QF-97", date_bst:"2026-07-09", time_bst:"TBC", home_label:"W R16-89", away_label:"W R16-90", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-89","R16-90"]},
      {id:"QF-98", date_bst:"2026-07-10", time_bst:"TBC", home_label:"W R16-93", away_label:"W R16-94", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-93","R16-94"]},
      // Right half (feeds SF-102)
      {id:"QF-99", date_bst:"2026-07-10", time_bst:"TBC", home_label:"W R16-91", away_label:"W R16-92", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-91","R16-92"]},
      {id:"QF-100",date_bst:"2026-07-11", time_bst:"TBC", home_label:"W R16-95", away_label:"W R16-96", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-95","R16-96"]},
    ],
    sf: [
      {id:"SF-101", date_bst:"2026-07-14", time_bst:"TBC", home_label:"W QF-97", away_label:"W QF-98", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["QF-97","QF-98"]},
      {id:"SF-102", date_bst:"2026-07-15", time_bst:"TBC", home_label:"W QF-99", away_label:"W QF-100", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["QF-99","QF-100"]},
    ],
    third_place: [
      {id:"3PL-103", date_bst:"2026-07-18", time_bst:"TBC", home_label:"L SF-101", away_label:"L SF-102", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
    ],
    final: [
      {id:"FIN-104", date_bst:"2026-07-19", time_bst:"TBC", home_label:"W SF-101", away_label:"W SF-102", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["SF-101","SF-102"]},
    ]
  },

  // Predictions — updated daily by /update-worldcup
  // Group standings: actual results where played; bookmaker group-winner odds (FanDuel) for unplayed groups
  // Knockout winners: team with better tournament-winner odds (FoxSports/RotoWire) advances
  predictions: {
    groups: {
      A: ["Mexico","South Africa","South Korea","Czech Republic"],
      B: ["Switzerland","Canada","Bosnia and Herzegovina","Qatar"],
      C: ["Brazil","Morocco","Scotland","Haiti"],
      D: ["United States","Australia","Paraguay","Turkey"],
      E: ["Germany","Ivory Coast","Ecuador","Curaçao"],
      F: ["Netherlands","Japan","Sweden","Tunisia"],
      G: ["Belgium","Egypt","Iran","New Zealand"],
      H: ["Spain","Cape Verde","Uruguay","Saudi Arabia"],
      I: ["France","Norway","Senegal","Iraq"],
      J: ["Argentina","Austria","Algeria","Jordan"],
      K: ["Colombia","Portugal","DR Congo","Uzbekistan"],
      L: ["England","Croatia","Ghana","Panama"],
    },
    // Best-3rd slot assignments. The 8 qualifying thirds come from groups B,D,E,F,I,J,K,L.
    // Slot allocation is NOT computed greedily — it follows FIFA Annex C (the fixed 495-combination
    // table), taken here from the published Round of 32 bracket (Fox/ESPN/CBS, all groups complete).
    // Teams: Paraguay(D), Sweden(F), Ecuador(E), DR Congo(K), Bosnia(B), Senegal(I), Algeria(J), Ghana(L).
    // See missionlog/in-flight-changes/0019.
    best_thirds_slots: {
      "Best 3rd (A/B/C/D/F)": {team:"Paraguay",               group:"D"},
      "Best 3rd (C/D/F/G/H)": {team:"Sweden",                 group:"F"},
      "Best 3rd (C/E/F/H/I)": {team:"Ecuador",                group:"E"},
      "Best 3rd (E/H/I/J/K)": {team:"DR Congo",               group:"K"},
      "Best 3rd (B/E/F/I/J)": {team:"Bosnia and Herzegovina", group:"B"},
      "Best 3rd (A/E/H/I/J)": {team:"Senegal",                group:"I"},
      "Best 3rd (E/F/G/I/J)": {team:"Algeria",                group:"J"},
      "Best 3rd (D/E/I/J/L)": {team:"Ghana",                  group:"L"},
    },
    // Predicted knockout winners: team name that advances from each match.
    // Winner chosen by better tournament-winner odds (lower American odds = more likely).
    // Recalculate downstream matches whenever a predicted team changes.
    // Odds source: FoxSports (FanDuel), June 30 2026. Netherlands eliminated on pens → R16-90 now Morocco.
    knockout: {
      // R32
      "R32-73": "Canada",        // South Africa +100000 vs Canada +20000
      "R32-74": "Germany",       // Germany +1500 vs Paraguay +30000
      "R32-75": "Netherlands",   // Netherlands +1500 vs Morocco +4000
      "R32-76": "Brazil",        // Brazil +1200 vs Japan +5000
      "R32-77": "France",        // France +360 vs Sweden +12000
      "R32-78": "Norway",        // Ivory Coast +25000 vs Norway +3300
      "R32-79": "Mexico",        // Mexico +4500 vs Ecuador +8000
      "R32-80": "England",       // England +600 vs DR Congo +100000
      "R32-81": "United States", // USA +3500 vs Bosnia +50000
      "R32-82": "Belgium",       // Belgium +4500 vs Senegal +9000
      "R32-83": "Portugal",      // Portugal +1300 vs Croatia +9000
      "R32-84": "Spain",         // Spain +600 vs Austria +15000
      "R32-85": "Switzerland",   // Switzerland +5500 vs Algeria ~+100000
      "R32-86": "Argentina",     // Argentina +390 vs Cape Verde +100000
      "R32-87": "Colombia",      // Colombia +3500 vs Ghana +30000
      "R32-88": "Egypt",         // Egypt +30000 vs Australia +60000
      // R16 (pairings per corrected FIFA bracket)
      "R16-89": "France",        // Germany +1500 vs France +360
      "R16-90": "Morocco",       // Canada +12500 vs Morocco +1900 (actual: Canada beat RSA, Morocco beat NED on pens)
      "R16-91": "Brazil",        // Brazil +1200 vs Norway +3300
      "R16-92": "England",       // Mexico +4500 vs England +600
      "R16-93": "Spain",         // Portugal +1300 vs Spain +600
      "R16-94": "United States", // USA +3500 vs Belgium +4500
      "R16-95": "Argentina",     // Argentina +390 vs Egypt +30000
      "R16-96": "Colombia",      // Switzerland +5500 vs Colombia +3500
      // QF
      "QF-97":  "France",        // France +360 vs Netherlands +1500
      "QF-98":  "Spain",         // Spain +600 vs USA +3500
      "QF-99":  "England",       // Brazil +1200 vs England +600
      "QF-100": "Argentina",     // Argentina +390 vs Colombia +3500
      // SF
      "SF-101": "France",        // France +250 vs Spain +650
      "SF-102": "Argentina",     // England +700 vs Argentina +400
      // 3rd place & Final
      "3PL-103": "Spain",        // L SF-101 Spain +650 vs L SF-102 England +700 → Spain
      "FIN-104": "France",       // France +250 vs Argentina +400
    }
  }
};
