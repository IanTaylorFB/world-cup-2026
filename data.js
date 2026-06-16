// FIFA World Cup 2026 — data file
// All times in BST (UTC+1). Updated daily via /update-worldcup
const WC_DATA = {
  updated: "2026-06-14T16:30:00Z",
  stage: "group", // "group" | "knockout"
  groups: {
    A: {
      teams: ["Mexico","South Africa","South Korea","Czech Republic"],
      matches: [
        {id:"A1", date_bst:"2026-06-11", time_bst:"20:00", home:"Mexico", away:"South Africa",
         score:{h:2,a:0},
         goals:[{t:"Mexico",p:"J. Quiñones",m:9},{t:"Mexico",p:"R. Jiménez",m:67}],
         reds:[{t:"South Africa",p:"Sithole",m:49},{t:"South Africa",p:"Zwane",m:84},{t:"Mexico",p:"Montes",m:"90+2"}],
         yt:"https://www.youtube.com/watch?v=PmevGCkUtM8", new:true},
        {id:"A2", date_bst:"2026-06-12", time_bst:"03:00", home:"South Korea", away:"Czech Republic",
         score:{h:2,a:1},
         goals:[{t:"Czech Republic",p:"Krejčí",m:59},{t:"South Korea",p:"Hwang In-beom",m:67},{t:"South Korea",p:"Oh Hyeon-gyu",m:80}],
         reds:[],yt:"https://www.youtube.com/watch?v=RvOa5j-_DcI", new:true},
        {id:"A3", date_bst:"2026-06-18", time_bst:"17:00", home:"Czech Republic", away:"South Africa", score:null,goals:[],reds:[],yt:null},
        {id:"A4", date_bst:"2026-06-19", time_bst:"02:00", home:"Mexico", away:"South Korea", score:null,goals:[],reds:[],yt:null},
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
         reds:[],yt:"https://www.youtube.com/watch?v=w-_rY5morQY", new:true},
        {id:"B2", date_bst:"2026-06-13", time_bst:"20:00", home:"Qatar", away:"Switzerland",
         score:{h:1,a:1},
         goals:[{t:"Switzerland",p:"Embolo",m:17,pen:true},{t:"Qatar",p:"Muheim",m:"90+4",og:true}],
         reds:[],yt:"https://www.youtube.com/watch?v=mnxkUVBT4Ng", new:true},
        {id:"B3", date_bst:"2026-06-19", time_bst:"20:00", home:"Switzerland", away:"Bosnia and Herzegovina", score:null,goals:[],reds:[],yt:null},
        {id:"B4", date_bst:"2026-06-19", time_bst:"23:00", home:"Canada", away:"Qatar", score:null,goals:[],reds:[],yt:null},
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
         reds:[],yt:"https://www.youtube.com/watch?v=kJ278WtIULw", new:true},
        {id:"C2", date_bst:"2026-06-14", time_bst:"02:00", home:"Haiti", away:"Scotland",
         score:{h:0,a:1},
         goals:[{t:"Scotland",p:"McGinn",m:28}],
         reds:[],yt:"https://www.youtube.com/watch?v=lOjugRksJ4s", new:true},
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
         reds:[],yt:"https://www.youtube.com/watch?v=0PVo3bk-TMk", new:true},
        {id:"D2", date_bst:"2026-06-14", time_bst:"05:00", home:"Australia", away:"Turkey",
         score:{h:2,a:0},
         goals:[{t:"Australia",p:"Irankunda",m:27},{t:"Australia",p:"Metcalfe",m:75}],
         reds:[],yt:"https://www.youtube.com/watch?v=JA5q07Fple8", new:true},
        {id:"D3", date_bst:"2026-06-19", time_bst:"20:00", home:"United States", away:"Australia", score:null,goals:[],reds:[],yt:null},
        {id:"D4", date_bst:"2026-06-20", time_bst:"04:00", home:"Turkey", away:"Paraguay", score:null,goals:[],reds:[],yt:null},
        {id:"D5", date_bst:"2026-06-26", time_bst:"03:00", home:"Turkey", away:"United States", score:null,goals:[],reds:[],yt:null},
        {id:"D6", date_bst:"2026-06-26", time_bst:"03:00", home:"Paraguay", away:"Australia", score:null,goals:[],reds:[],yt:null},
      ]
    },
    E: {
      teams: ["Germany","Curaçao","Ivory Coast","Ecuador"],
      matches: [
        {id:"E1", date_bst:"2026-06-14", time_bst:"18:00", home:"Germany", away:"Curaçao", score:null,goals:[],reds:[],yt:null},
        {id:"E2", date_bst:"2026-06-15", time_bst:"00:00", home:"Ivory Coast", away:"Ecuador", score:null,goals:[],reds:[],yt:null},
        {id:"E3", date_bst:"2026-06-20", time_bst:"21:00", home:"Germany", away:"Ivory Coast", score:null,goals:[],reds:[],yt:null},
        {id:"E4", date_bst:"2026-06-21", time_bst:"01:00", home:"Ecuador", away:"Curaçao", score:null,goals:[],reds:[],yt:null},
        {id:"E5", date_bst:"2026-06-25", time_bst:"21:00", home:"Curaçao", away:"Ivory Coast", score:null,goals:[],reds:[],yt:null},
        {id:"E6", date_bst:"2026-06-25", time_bst:"21:00", home:"Ecuador", away:"Germany", score:null,goals:[],reds:[],yt:null},
      ]
    },
    F: {
      teams: ["Netherlands","Japan","Sweden","Tunisia"],
      matches: [
        {id:"F1", date_bst:"2026-06-14", time_bst:"21:00", home:"Netherlands", away:"Japan", score:null,goals:[],reds:[],yt:null},
        {id:"F2", date_bst:"2026-06-15", time_bst:"03:00", home:"Sweden", away:"Tunisia", score:null,goals:[],reds:[],yt:null},
        {id:"F3", date_bst:"2026-06-20", time_bst:"18:00", home:"Netherlands", away:"Sweden", score:null,goals:[],reds:[],yt:null},
        {id:"F4", date_bst:"2026-06-21", time_bst:"05:00", home:"Tunisia", away:"Japan", score:null,goals:[],reds:[],yt:null},
        {id:"F5", date_bst:"2026-06-26", time_bst:"00:00", home:"Japan", away:"Sweden", score:null,goals:[],reds:[],yt:null},
        {id:"F6", date_bst:"2026-06-26", time_bst:"00:00", home:"Tunisia", away:"Netherlands", score:null,goals:[],reds:[],yt:null},
      ]
    },
    G: {
      teams: ["Belgium","Egypt","Iran","New Zealand"],
      matches: [
        {id:"G1", date_bst:"2026-06-15", time_bst:"20:00", home:"Belgium", away:"Egypt", score:null,goals:[],reds:[],yt:null},
        {id:"G2", date_bst:"2026-06-16", time_bst:"02:00", home:"Iran", away:"New Zealand", score:null,goals:[],reds:[],yt:null},
        {id:"G3", date_bst:"2026-06-21", time_bst:"20:00", home:"Belgium", away:"Iran", score:null,goals:[],reds:[],yt:null},
        {id:"G4", date_bst:"2026-06-22", time_bst:"02:00", home:"New Zealand", away:"Egypt", score:null,goals:[],reds:[],yt:null},
        {id:"G5", date_bst:"2026-06-27", time_bst:"04:00", home:"Egypt", away:"Iran", score:null,goals:[],reds:[],yt:null},
        {id:"G6", date_bst:"2026-06-27", time_bst:"04:00", home:"New Zealand", away:"Belgium", score:null,goals:[],reds:[],yt:null},
      ]
    },
    H: {
      teams: ["Spain","Cape Verde","Saudi Arabia","Uruguay"],
      matches: [
        {id:"H1", date_bst:"2026-06-15", time_bst:"17:00", home:"Spain", away:"Cape Verde", score:null,goals:[],reds:[],yt:null},
        {id:"H2", date_bst:"2026-06-15", time_bst:"23:00", home:"Saudi Arabia", away:"Uruguay", score:null,goals:[],reds:[],yt:null},
        {id:"H3", date_bst:"2026-06-21", time_bst:"17:00", home:"Spain", away:"Saudi Arabia", score:null,goals:[],reds:[],yt:null},
        {id:"H4", date_bst:"2026-06-21", time_bst:"23:00", home:"Uruguay", away:"Cape Verde", score:null,goals:[],reds:[],yt:null},
        {id:"H5", date_bst:"2026-06-27", time_bst:"01:00", home:"Cape Verde", away:"Saudi Arabia", score:null,goals:[],reds:[],yt:null},
        {id:"H6", date_bst:"2026-06-27", time_bst:"01:00", home:"Uruguay", away:"Spain", score:null,goals:[],reds:[],yt:null},
      ]
    },
    I: {
      teams: ["France","Senegal","Iraq","Norway"],
      matches: [
        {id:"I1", date_bst:"2026-06-16", time_bst:"20:00", home:"France", away:"Senegal", score:null,goals:[],reds:[],yt:null},
        {id:"I2", date_bst:"2026-06-16", time_bst:"23:00", home:"Iraq", away:"Norway", score:null,goals:[],reds:[],yt:null},
        {id:"I3", date_bst:"2026-06-22", time_bst:"22:00", home:"France", away:"Iraq", score:null,goals:[],reds:[],yt:null},
        {id:"I4", date_bst:"2026-06-23", time_bst:"01:00", home:"Norway", away:"Senegal", score:null,goals:[],reds:[],yt:null},
        {id:"I5", date_bst:"2026-06-26", time_bst:"20:00", home:"Norway", away:"France", score:null,goals:[],reds:[],yt:null},
        {id:"I6", date_bst:"2026-06-26", time_bst:"20:00", home:"Senegal", away:"Iraq", score:null,goals:[],reds:[],yt:null},
      ]
    },
    J: {
      teams: ["Argentina","Algeria","Austria","Jordan"],
      matches: [
        {id:"J1", date_bst:"2026-06-17", time_bst:"02:00", home:"Argentina", away:"Algeria", score:null,goals:[],reds:[],yt:null},
        {id:"J2", date_bst:"2026-06-17", time_bst:"05:00", home:"Austria", away:"Jordan", score:null,goals:[],reds:[],yt:null},
        {id:"J3", date_bst:"2026-06-22", time_bst:"18:00", home:"Argentina", away:"Austria", score:null,goals:[],reds:[],yt:null},
        {id:"J4", date_bst:"2026-06-23", time_bst:"04:00", home:"Jordan", away:"Algeria", score:null,goals:[],reds:[],yt:null},
        {id:"J5", date_bst:"2026-06-28", time_bst:"03:00", home:"Algeria", away:"Austria", score:null,goals:[],reds:[],yt:null},
        {id:"J6", date_bst:"2026-06-28", time_bst:"03:00", home:"Jordan", away:"Argentina", score:null,goals:[],reds:[],yt:null},
      ]
    },
    K: {
      teams: ["Portugal","DR Congo","Uzbekistan","Colombia"],
      matches: [
        {id:"K1", date_bst:"2026-06-17", time_bst:"17:00", home:"Portugal", away:"DR Congo", score:null,goals:[],reds:[],yt:null},
        {id:"K2", date_bst:"2026-06-18", time_bst:"02:00", home:"Uzbekistan", away:"Colombia", score:null,goals:[],reds:[],yt:null},
        {id:"K3", date_bst:"2026-06-23", time_bst:"17:00", home:"Portugal", away:"Uzbekistan", score:null,goals:[],reds:[],yt:null},
        {id:"K4", date_bst:"2026-06-24", time_bst:"02:00", home:"Colombia", away:"DR Congo", score:null,goals:[],reds:[],yt:null},
        {id:"K5", date_bst:"2026-06-28", time_bst:"00:30", home:"Colombia", away:"Portugal", score:null,goals:[],reds:[],yt:null},
        {id:"K6", date_bst:"2026-06-28", time_bst:"00:30", home:"DR Congo", away:"Uzbekistan", score:null,goals:[],reds:[],yt:null},
      ]
    },
    L: {
      teams: ["England","Croatia","Ghana","Panama"],
      matches: [
        {id:"L1", date_bst:"2026-06-17", time_bst:"21:00", home:"England", away:"Croatia", score:null,goals:[],reds:[],yt:null},
        {id:"L2", date_bst:"2026-06-18", time_bst:"00:00", home:"Ghana", away:"Panama", score:null,goals:[],reds:[],yt:null},
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
  // Source: current standings where matches played, bookmaker odds (FanDuel) otherwise
  predictions: {
    groups: {
      A: ["Mexico","South Korea","Czech Republic","South Africa"],
      B: ["Switzerland","Canada","Bosnia and Herzegovina","Qatar"],
      C: ["Scotland","Brazil","Morocco","Haiti"],
      D: ["United States","Australia","Turkey","Paraguay"],
      E: ["Germany","Ivory Coast","Ecuador","Curaçao"],
      F: ["Sweden","Netherlands","Japan","Tunisia"],
      G: ["Belgium","Egypt","Iran","New Zealand"],
      H: ["Spain","Uruguay","Saudi Arabia","Cape Verde"],
      I: ["France","Norway","Senegal","Iraq"],
      J: ["Argentina","Austria","Algeria","Jordan"],
      K: ["Portugal","Colombia","DR Congo","Uzbekistan"],
      L: ["England","Croatia","Ghana","Panama"],
    },
    // Predicted best-3rd slot assignments (greedy proxy for FIFA Annex C)
    best_thirds_slots: {
      "Best 3rd (A/B/C/D/F)": {team:"Morocco",           group:"C"},
      "Best 3rd (C/D/F/G/H)": {team:"Turkey",            group:"D"},
      "Best 3rd (C/E/F/H/I)": {team:"Japan",             group:"F"},
      "Best 3rd (E/H/I/J/K)": {team:"Saudi Arabia",      group:"H"},
      "Best 3rd (B/E/F/I/J)": {team:"Bosnia and Herzegovina", group:"B"},
      "Best 3rd (A/E/H/I/J)": {team:"Czech Republic",    group:"A"},
      "Best 3rd (E/F/G/I/J)": {team:"Senegal",           group:"I"},
      "Best 3rd (D/E/I/J/L)": {team:"Algeria",           group:"J"},
    },
    // Predicted knockout winners: "home" or "away" side wins each match.
    // Stored as sides so predictions cascade correctly when group standings change.
    knockout: {
      // R32: home=1st/2nd label, away=opponent label
      "R32-73":"home",   // 2nd A (S.Korea) beats 2nd B (Canada)
      "R32-74":"home",   // 1st E (Germany) beats Best 3rd
      "R32-75":"away",   // 1st F (Sweden) loses to 2nd C (Brazil)
      "R32-76":"away",   // 1st C (Scotland) loses to 2nd F (Netherlands)
      "R32-77":"home",   // 1st I (France) beats Best 3rd
      "R32-78":"home",   // 2nd E (Ivory Coast) beats 2nd I (Norway)
      "R32-79":"home",   // 1st A (Mexico) beats Best 3rd
      "R32-80":"home",   // 1st L (England) beats Best 3rd
      "R32-81":"home",   // 1st D (USA) beats Best 3rd
      "R32-82":"home",   // 1st G (Belgium) beats Best 3rd
      "R32-83":"home",   // 2nd K (Colombia) beats 2nd L (Croatia)
      "R32-84":"home",   // 1st H (Spain) beats 2nd J (Austria)
      "R32-85":"home",   // 1st B (Bosnia) beats Best 3rd (Senegal)
      "R32-86":"home",   // 1st J (Argentina) beats 2nd H (Uruguay)
      "R32-87":"home",   // 1st K (Portugal) beats Best 3rd
      "R32-88":"home",   // 2nd D (Australia) beats 2nd G (Egypt)
      // R16
      "R16-89":"away",   // W73 (S.Korea) loses to W74 (Germany)
      "R16-90":"home",   // W75 (Brazil) beats W76 (Netherlands)
      "R16-91":"home",   // W77 (France) beats W78 (Ivory Coast)
      "R16-92":"away",   // W79 (Mexico) loses to W80 (England)
      "R16-93":"away",   // W81 (USA) loses to W82 (Belgium)
      "R16-94":"away",   // W83 (Colombia) loses to W84 (Spain)
      "R16-95":"away",   // W85 (Bosnia) loses to W86 (Argentina)
      "R16-96":"home",   // W87 (Portugal) beats W88 (Australia)
      // QF
      "QF-97":"away",    // W89 (Germany) loses to W90 (Brazil)
      "QF-98":"home",    // W91 (France) beats W92 (England)
      "QF-99":"away",    // W93 (Belgium) loses to W94 (Spain)
      "QF-100":"home",   // W95 (Argentina) beats W96 (Portugal)
      // SF
      "SF-101":"away",   // W97 (Brazil) loses to W98 (France)
      "SF-102":"home",   // W99 (Spain) beats W100 (Argentina)
      // 3rd place & Final
      "3PL-103":"home",  // L101 (Brazil) beats L102 (Argentina)
      "FIN-104":"away",  // W101 (France) loses to W102 (Spain)
    }
  }
};
