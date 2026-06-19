// FIFA World Cup 2026 — data file
// All times in BST (UTC+1). Updated daily via /update-worldcup
const WC_DATA = {
  updated: "2026-06-19T20:30:07Z",
  stage: "group", // "group" | "knockout"
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
         reds:[],yt:"https://www.youtube.com/watch?v=U6eZG-Nuz-Q", new:true},
        {id:"A4", date_bst:"2026-06-19", time_bst:"02:00", home:"Mexico", away:"South Korea",
         score:{h:1,a:0},
         goals:[{t:"Mexico",p:"Romo",m:50}],
         reds:[],yt:"https://www.youtube.com/watch?v=igQo36nrUeM", new:true},
        {id:"A5", date_bst:"2026-06-25", time_bst:"02:00", home:"Czech Republic", away:"Mexico", score:null,goals:[],reds:[],yt:null},
        {id:"A6", date_bst:"2026-06-25", time_bst:"02:00", home:"South Africa", away:"South Korea", score:null,goals:[],reds:[],yt:null},
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
         reds:[{t:"Bosnia and Herzegovina",p:"Muharemovic",m:80}],yt:"https://www.youtube.com/watch?v=eIOPOv7Jp88", new:true},
        {id:"B4", date_bst:"2026-06-18", time_bst:"23:00", home:"Canada", away:"Qatar",
         score:{h:6,a:0},
         goals:[{t:"Canada",p:"Larin",m:16},{t:"Canada",p:"David",m:29},{t:"Canada",p:"David",m:"45+3"},{t:"Canada",p:"Saliba",m:64},{t:"Qatar",p:"Manai",m:75,og:true},{t:"Canada",p:"David",m:"90+2"}],
         reds:[{t:"Qatar",p:"Homam Ahmed",m:33},{t:"Qatar",p:"Madibo",m:53}],yt:"https://www.youtube.com/watch?v=n44ndE6mwV0", new:true},
        {id:"B5", date_bst:"2026-06-25", time_bst:"23:00", home:"Switzerland", away:"Canada", score:null,goals:[],reds:[],yt:null},
        {id:"B6", date_bst:"2026-06-25", time_bst:"23:00", home:"Bosnia and Herzegovina", away:"Qatar", score:null,goals:[],reds:[],yt:null},
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
        {id:"C3", date_bst:"2026-06-19", time_bst:"23:00", home:"Scotland", away:"Morocco", score:null,goals:[],reds:[],yt:null},
        {id:"C4", date_bst:"2026-06-20", time_bst:"01:30", home:"Brazil", away:"Haiti", score:null,goals:[],reds:[],yt:null},
        {id:"C5", date_bst:"2026-06-24", time_bst:"23:00", home:"Scotland", away:"Brazil", score:null,goals:[],reds:[],yt:null},
        {id:"C6", date_bst:"2026-06-24", time_bst:"23:00", home:"Morocco", away:"Haiti", score:null,goals:[],reds:[],yt:null},
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
        {id:"D3", date_bst:"2026-06-19", time_bst:"20:00", home:"United States", away:"Australia", score:null,goals:[],reds:[],yt:null},
        {id:"D4", date_bst:"2026-06-20", time_bst:"04:00", home:"Turkey", away:"Paraguay", score:null,goals:[],reds:[],yt:null},
        {id:"D5", date_bst:"2026-06-26", time_bst:"03:00", home:"Turkey", away:"United States", score:null,goals:[],reds:[],yt:null},
        {id:"D6", date_bst:"2026-06-26", time_bst:"03:00", home:"Paraguay", away:"Australia", score:null,goals:[],reds:[],yt:null},
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
        {id:"E3", date_bst:"2026-06-20", time_bst:"21:00", home:"Germany", away:"Ivory Coast", score:null,goals:[],reds:[],yt:null},
        {id:"E4", date_bst:"2026-06-21", time_bst:"01:00", home:"Ecuador", away:"Curaçao", score:null,goals:[],reds:[],yt:null},
        {id:"E5", date_bst:"2026-06-25", time_bst:"21:00", home:"Curaçao", away:"Ivory Coast", score:null,goals:[],reds:[],yt:null},
        {id:"E6", date_bst:"2026-06-25", time_bst:"21:00", home:"Ecuador", away:"Germany", score:null,goals:[],reds:[],yt:null},
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
        {id:"F3", date_bst:"2026-06-20", time_bst:"18:00", home:"Netherlands", away:"Sweden", score:null,goals:[],reds:[],yt:null},
        {id:"F4", date_bst:"2026-06-21", time_bst:"05:00", home:"Tunisia", away:"Japan", score:null,goals:[],reds:[],yt:null},
        {id:"F5", date_bst:"2026-06-26", time_bst:"00:00", home:"Japan", away:"Sweden", score:null,goals:[],reds:[],yt:null},
        {id:"F6", date_bst:"2026-06-26", time_bst:"00:00", home:"Tunisia", away:"Netherlands", score:null,goals:[],reds:[],yt:null},
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
        {id:"G3", date_bst:"2026-06-21", time_bst:"20:00", home:"Belgium", away:"Iran", score:null,goals:[],reds:[],yt:null},
        {id:"G4", date_bst:"2026-06-22", time_bst:"02:00", home:"New Zealand", away:"Egypt", score:null,goals:[],reds:[],yt:null},
        {id:"G5", date_bst:"2026-06-27", time_bst:"04:00", home:"Egypt", away:"Iran", score:null,goals:[],reds:[],yt:null},
        {id:"G6", date_bst:"2026-06-27", time_bst:"04:00", home:"New Zealand", away:"Belgium", score:null,goals:[],reds:[],yt:null},
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
        {id:"H3", date_bst:"2026-06-21", time_bst:"17:00", home:"Spain", away:"Saudi Arabia", score:null,goals:[],reds:[],yt:null},
        {id:"H4", date_bst:"2026-06-21", time_bst:"23:00", home:"Uruguay", away:"Cape Verde", score:null,goals:[],reds:[],yt:null},
        {id:"H5", date_bst:"2026-06-27", time_bst:"01:00", home:"Cape Verde", away:"Saudi Arabia", score:null,goals:[],reds:[],yt:null},
        {id:"H6", date_bst:"2026-06-27", time_bst:"01:00", home:"Uruguay", away:"Spain", score:null,goals:[],reds:[],yt:null},
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
        {id:"I3", date_bst:"2026-06-22", time_bst:"22:00", home:"France", away:"Iraq", score:null,goals:[],reds:[],yt:null},
        {id:"I4", date_bst:"2026-06-23", time_bst:"01:00", home:"Norway", away:"Senegal", score:null,goals:[],reds:[],yt:null},
        {id:"I5", date_bst:"2026-06-26", time_bst:"20:00", home:"Norway", away:"France", score:null,goals:[],reds:[],yt:null},
        {id:"I6", date_bst:"2026-06-26", time_bst:"20:00", home:"Senegal", away:"Iraq", score:null,goals:[],reds:[],yt:null},
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
        {id:"J3", date_bst:"2026-06-22", time_bst:"18:00", home:"Argentina", away:"Austria", score:null,goals:[],reds:[],yt:null},
        {id:"J4", date_bst:"2026-06-23", time_bst:"04:00", home:"Jordan", away:"Algeria", score:null,goals:[],reds:[],yt:null},
        {id:"J5", date_bst:"2026-06-28", time_bst:"03:00", home:"Algeria", away:"Austria", score:null,goals:[],reds:[],yt:null},
        {id:"J6", date_bst:"2026-06-28", time_bst:"03:00", home:"Jordan", away:"Argentina", score:null,goals:[],reds:[],yt:null},
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
        {id:"K3", date_bst:"2026-06-23", time_bst:"17:00", home:"Portugal", away:"Uzbekistan", score:null,goals:[],reds:[],yt:null},
        {id:"K4", date_bst:"2026-06-24", time_bst:"02:00", home:"Colombia", away:"DR Congo", score:null,goals:[],reds:[],yt:null},
        {id:"K5", date_bst:"2026-06-28", time_bst:"00:30", home:"Colombia", away:"Portugal", score:null,goals:[],reds:[],yt:null},
        {id:"K6", date_bst:"2026-06-28", time_bst:"00:30", home:"DR Congo", away:"Uzbekistan", score:null,goals:[],reds:[],yt:null},
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
        {id:"L3", date_bst:"2026-06-23", time_bst:"21:00", home:"England", away:"Ghana", score:null,goals:[],reds:[],yt:null},
        {id:"L4", date_bst:"2026-06-24", time_bst:"00:00", home:"Panama", away:"Croatia", score:null,goals:[],reds:[],yt:null},
        {id:"L5", date_bst:"2026-06-27", time_bst:"22:00", home:"Panama", away:"England", score:null,goals:[],reds:[],yt:null},
        {id:"L6", date_bst:"2026-06-27", time_bst:"22:00", home:"Croatia", away:"Ghana", score:null,goals:[],reds:[],yt:null},
      ]
    }
  },

  // Knockout bracket
  // slot fields: home_label/away_label = human-readable source when team is not yet known
  // home_team/away_team = null until resolved
  knockout: {
    r32: [
      {id:"R32-73", date_bst:"2026-06-28", time_bst:"20:00", home_label:"2nd Group A", away_label:"2nd Group B", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-74", date_bst:"2026-06-29", time_bst:"21:30", home_label:"1st Group E", away_label:"Best 3rd (A/B/C/D/F)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-75", date_bst:"2026-06-30", time_bst:"02:00", home_label:"1st Group F", away_label:"2nd Group C", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-76", date_bst:"2026-06-29", time_bst:"18:00", home_label:"1st Group C", away_label:"2nd Group F", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-77", date_bst:"2026-06-30", time_bst:"22:00", home_label:"1st Group I", away_label:"Best 3rd (C/D/F/G/H)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-78", date_bst:"2026-06-30", time_bst:"18:00", home_label:"2nd Group E", away_label:"2nd Group I", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-79", date_bst:"2026-07-01", time_bst:"02:00", home_label:"1st Group A", away_label:"Best 3rd (C/E/F/H/I)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-80", date_bst:"2026-07-01", time_bst:"17:00", home_label:"1st Group L", away_label:"Best 3rd (E/H/I/J/K)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-81", date_bst:"2026-07-02", time_bst:"01:00", home_label:"1st Group D", away_label:"Best 3rd (B/E/F/I/J)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-82", date_bst:"2026-07-01", time_bst:"21:00", home_label:"1st Group G", away_label:"Best 3rd (A/E/H/I/J)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-83", date_bst:"2026-07-03", time_bst:"00:00", home_label:"2nd Group K", away_label:"2nd Group L", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-84", date_bst:"2026-07-02", time_bst:"20:00", home_label:"1st Group H", away_label:"2nd Group J", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-85", date_bst:"2026-07-03", time_bst:"04:00", home_label:"1st Group B", away_label:"Best 3rd (E/F/G/I/J)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-86", date_bst:"2026-07-03", time_bst:"23:00", home_label:"1st Group J", away_label:"2nd Group H", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-87", date_bst:"2026-07-04", time_bst:"02:30", home_label:"1st Group K", away_label:"Best 3rd (D/E/I/J/L)", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
      {id:"R32-88", date_bst:"2026-07-03", time_bst:"19:00", home_label:"2nd Group D", away_label:"2nd Group G", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null},
    ],
    r16: [
      {id:"R16-89", date_bst:"2026-07-04", time_bst:"TBC", home_label:"W R32-73", away_label:"W R32-74", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-73","R32-74"]},
      {id:"R16-90", date_bst:"2026-07-04", time_bst:"TBC", home_label:"W R32-75", away_label:"W R32-76", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-75","R32-76"]},
      {id:"R16-91", date_bst:"2026-07-05", time_bst:"TBC", home_label:"W R32-77", away_label:"W R32-78", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-77","R32-78"]},
      {id:"R16-92", date_bst:"2026-07-05", time_bst:"TBC", home_label:"W R32-79", away_label:"W R32-80", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-79","R32-80"]},
      {id:"R16-93", date_bst:"2026-07-06", time_bst:"TBC", home_label:"W R32-81", away_label:"W R32-82", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-81","R32-82"]},
      {id:"R16-94", date_bst:"2026-07-06", time_bst:"TBC", home_label:"W R32-83", away_label:"W R32-84", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-83","R32-84"]},
      {id:"R16-95", date_bst:"2026-07-07", time_bst:"TBC", home_label:"W R32-85", away_label:"W R32-86", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-85","R32-86"]},
      {id:"R16-96", date_bst:"2026-07-07", time_bst:"TBC", home_label:"W R32-87", away_label:"W R32-88", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R32-87","R32-88"]},
    ],
    qf: [
      {id:"QF-97", date_bst:"2026-07-09", time_bst:"TBC", home_label:"W R16-89", away_label:"W R16-90", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-89","R16-90"]},
      {id:"QF-98", date_bst:"2026-07-10", time_bst:"TBC", home_label:"W R16-91", away_label:"W R16-92", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-91","R16-92"]},
      {id:"QF-99", date_bst:"2026-07-10", time_bst:"TBC", home_label:"W R16-93", away_label:"W R16-94", home_team:null,away_team:null, score:null,goals:[],reds:[],yt:null, feeds_from:["R16-93","R16-94"]},
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
      A: ["Mexico","South Korea","Czech Republic","South Africa"],
      B: ["Canada","Switzerland","Bosnia and Herzegovina","Qatar"],
      C: ["Scotland","Brazil","Morocco","Haiti"],
      D: ["United States","Australia","Turkey","Paraguay"],
      E: ["Germany","Ivory Coast","Ecuador","Curaçao"],
      F: ["Sweden","Netherlands","Japan","Tunisia"],
      G: ["Belgium","Egypt","Iran","New Zealand"],
      H: ["Saudi Arabia","Uruguay","Cape Verde","Spain"],
      I: ["Norway","France","Senegal","Iraq"],
      J: ["Argentina","Austria","Jordan","Algeria"],
      K: ["Colombia","Portugal","DR Congo","Uzbekistan"],
      L: ["England","Ghana","Croatia","Panama"],
    },
    // Predicted best-3rd slot assignments (greedy proxy for FIFA Annex C)
    best_thirds_slots: {
      "Best 3rd (A/B/C/D/F)": {team:"Bosnia and Herzegovina", group:"B"},
      "Best 3rd (C/D/F/G/H)": {team:"Turkey",            group:"D"},
      "Best 3rd (C/E/F/H/I)": {team:"Morocco",           group:"C"},
      "Best 3rd (E/H/I/J/K)": {team:"Ecuador",            group:"E"},
      "Best 3rd (B/E/F/I/J)": {team:"Senegal",           group:"I"},
      "Best 3rd (A/E/H/I/J)": {team:"Czech Republic",    group:"A"},
      "Best 3rd (E/F/G/I/J)": {team:"Japan",             group:"F"},
      "Best 3rd (D/E/I/J/L)": {team:"Croatia",           group:"L"},
    },
    // Predicted knockout winners: team name that advances from each match.
    // Winner chosen by better tournament-winner odds (lower American odds = more likely).
    // Recalculate downstream matches whenever a predicted team changes.
    knockout: {
      // R32
      "R32-73": "Switzerland",   // South Korea +40000 vs Switzerland +6500
      "R32-74": "Germany",       // Germany +1400 vs Bosnia +50000
      "R32-75": "Brazil",        // Sweden +12000 vs Brazil +900
      "R32-76": "Netherlands",   // Scotland +20000 vs Netherlands +2000
      "R32-77": "Norway",        // Norway +3000 vs Turkey +9000
      "R32-78": "France",        // Ivory Coast +25000 vs France +475
      "R32-79": "Morocco",       // Mexico +6500 vs Morocco +5000
      "R32-80": "England",       // England +700 vs Ecuador +8000
      "R32-81": "United States", // USA +6000 vs Senegal +9000
      "R32-82": "Belgium",       // Belgium +4000 vs Czech Republic +25000
      "R32-83": "Portugal",      // Portugal +850 vs Ghana +30000
      "R32-84": "Austria",       // Saudi Arabia +100000 vs Austria +15000
      "R32-85": "Japan",         // Canada +20000 vs Japan +5500
      "R32-86": "Argentina",     // Argentina +900 vs Uruguay +6500
      "R32-87": "Colombia",      // Colombia +4000 vs Croatia +9000
      "R32-88": "Egypt",         // Australia +60000 vs Egypt +30000
      // R16
      "R16-89": "Germany",       // Switzerland +6500 vs Germany +1400
      "R16-90": "Brazil",        // Brazil +900 vs Netherlands +2000
      "R16-91": "France",        // Norway +3000 vs France +475
      "R16-92": "England",       // Morocco +5000 vs England +700
      "R16-93": "Belgium",       // USA +6000 vs Belgium +4000
      "R16-94": "Portugal",      // Portugal +850 vs Austria +15000
      "R16-95": "Argentina",     // Japan +5500 vs Argentina +900
      "R16-96": "Colombia",      // Colombia +4000 vs Egypt +30000
      // QF
      "QF-97":  "Brazil",        // Germany +1400 vs Brazil +900
      "QF-98":  "France",        // France +475 vs England +700
      "QF-99":  "Portugal",      // Belgium +4000 vs Portugal +850
      "QF-100": "Argentina",     // Argentina +900 vs Colombia +4000
      // SF
      "SF-101": "France",        // Brazil +900 vs France +475
      "SF-102": "Portugal",      // Portugal +850 vs Argentina +900
      // 3rd place & Final
      "3PL-103": "Argentina",    // Brazil +900 vs Argentina +750 (FoxSports)
      "FIN-104": "France",       // France +475 vs Portugal +850
    }
  }
};
