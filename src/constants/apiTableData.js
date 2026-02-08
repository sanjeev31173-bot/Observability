export const apiTableData = [

{
id:"01",
endpoint:"/api/v1/products/list",
method:"GET",
status:"200 OK",
statusType:"success",
wait:"3ms",
compute:"45ms",
network:"18ms open_in_new",
total:"66ms",
dbCalls:2,
queryHash:["QRY_PR_01","QRY_PR_02"],
time:"15:00:12"
},

{
id:"02",
endpoint:"/api/v1/auth/login",
method:"POST",
status:"401 UNAUTH",
statusType:"error",
wait:"5ms",
compute:"310ms",
network:"55ms open_in_new",
total:"370ms",
dbCalls:1,
queryHash:["QRY_LG_01"],
time:"15:00:10"
},

{
id:"03",
endpoint:"/api/v1/checkout",
method:"POST",
status:"200 OK",
statusType:"success",
wait:"10ms",
compute:"820ms",
network:"210ms open_in_new",
total:"1040ms",
dbCalls:5,
queryHash:["QRY_CH_01","QRY_CH_02","QRY_CH_03","QRY_CH_04","QRY_CH_05"],
time:"15:00:08"
},

{
id:"04",
endpoint:"/api/v1/payment/init",
method:"POST",
status:"200 OK",
statusType:"success",
wait:"6ms",
compute:"320ms",
network:"60ms open_in_new",
total:"386ms",
dbCalls:4,
queryHash:["QRY_PM_01","QRY_PM_02","QRY_PM_03","QRY_PM_04"],
time:"15:00:06"
},

{
id:"05",
endpoint:"/api/v1/auth/login",
method:"POST",
status:"200 OK",
statusType:"success",
wait:"6ms",
compute:"420ms",
network:"60ms open_in_new",
total:"486ms",
dbCalls:2,
queryHash:["QRY_LG_01","QRY_LG_02"],
time:"15:00:05"
},

{
id:"06",
endpoint:"/api/v1/cart/add",
method:"POST",
status:"201 OK",
statusType:"success",
wait:"4ms",
compute:"55ms",
network:"15ms open_in_new",
total:"74ms",
dbCalls:2,
queryHash:["QRY_CT_01","QRY_CT_02"],
time:"15:00:03"
},

{
id:"07",
endpoint:"/api/v1/products/list",
method:"GET",
status:"304 CACHE",
statusType:"success",
wait:"2ms",
compute:"10ms",
network:"5ms open_in_new",
total:"17ms",
dbCalls:0,
queryHash:[],
time:"15:00:02"
},

{
id:"08",
endpoint:"/api/v1/checkout",
method:"POST",
status:"400 BADREQ",
statusType:"error",
wait:"8ms",
compute:"350ms",
network:"100ms open_in_new",
total:"458ms",
dbCalls:2,
queryHash:["QRY_CH_01","QRY_CH_02"],
time:"15:00:00"
},

{
id:"09",
endpoint:"/api/v1/shipping/calc",
method:"GET",
status:"200 OK",
statusType:"success",
wait:"4ms",
compute:"70ms",
network:"20ms open_in_new",
total:"94ms",
dbCalls:2,
queryHash:["QRY_SH_01","QRY_SH_02"],
time:"14:59:58"
},

{
id:"10",
endpoint:"/api/v1/users/profile",
method:"GET",
status:"404 NOTFOUND",
statusType:"error",
wait:"2ms",
compute:"20ms",
network:"8ms open_in_new",
total:"30ms",
dbCalls:0,
queryHash:[],
time:"14:59:57"
},

{
id:"11",
endpoint:"/api/v1/payment/init",
method:"POST",
status:"402 DECLINED",
statusType:"error",
wait:"5ms",
compute:"220ms",
network:"55ms open_in_new",
total:"280ms",
dbCalls:2,
queryHash:["QRY_PM_01","QRY_PM_02"],
time:"14:59:55"
},

{
id:"12",
endpoint:"/api/v1/products/list",
method:"GET",
status:"503 DOWN",
statusType:"error",
wait:"4ms",
compute:"95ms",
network:"30ms open_in_new",
total:"129ms",
dbCalls:1,
queryHash:["QRY_PR_01"],
time:"14:59:53"
},

{
id:"13",
endpoint:"/api/v1/auth/login",
method:"POST",
status:"500 ERR",
statusType:"error",
wait:"6ms",
compute:"520ms",
network:"80ms open_in_new",
total:"606ms",
dbCalls:2,
queryHash:["QRY_LG_01","QRY_LG_02"],
time:"14:59:52"
},

{
id:"14",
endpoint:"/api/v1/cart/add",
method:"POST",
status:"409 CONFLICT",
statusType:"error",
wait:"4ms",
compute:"50ms",
network:"20ms open_in_new",
total:"74ms",
dbCalls:1,
queryHash:["QRY_CT_01"],
time:"14:59:50"
},

{
id:"15",
endpoint:"/api/v1/shipping/calc",
method:"GET",
status:"503 DOWN",
statusType:"error",
wait:"6ms",
compute:"100ms",
network:"40ms open_in_new",
total:"146ms",
dbCalls:3,
queryHash:["QRY_SH_01","QRY_SH_02","QRY_SH_03"],
time:"14:59:48"
},

{
id:"16",
endpoint:"/api/v1/users/profile",
method:"GET",
status:"200 OK",
statusType:"success",
wait:"2ms",
compute:"25ms",
network:"10ms open_in_new",
total:"37ms",
dbCalls:1,
queryHash:["QRY_US_01"],
time:"14:59:47"
},

{
id:"17",
endpoint:"/api/v1/checkout",
method:"POST",
status:"500 ERR",
statusType:"error",
wait:"9ms",
compute:"900ms",
network:"250ms open_in_new",
total:"1159ms",
dbCalls:4,
queryHash:["QRY_CH_01","QRY_CH_02","QRY_CH_04","QRY_CH_05"],
time:"14:59:45"
},

{
id:"18",
endpoint:"/api/v1/payment/init",
method:"POST",
status:"504 TIMEOUT",
statusType:"error",
wait:"10ms",
compute:"900ms",
network:"400ms open_in_new",
total:"1310ms",
dbCalls:1,
queryHash:["QRY_PM_01"],
time:"14:59:43"
}

];
