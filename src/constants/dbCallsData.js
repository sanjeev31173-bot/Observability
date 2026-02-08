export const dbQueryData = [

/* LOGIN */
{
hash:"QRY_LG_01",
query:"SELECT password_hash FROM users WHERE email = ?",
start:"15:00:04.520",
end:"15:00:04.552",
total:"32ms"
},
{
hash:"QRY_LG_02",
query:"SELECT failed_attempts FROM login_security WHERE user_id = ?",
start:"15:00:04.560",
end:"15:00:04.588",
total:"28ms"
},

/* PRODUCTS */
{
hash:"QRY_PR_01",
query:"SELECT id,name,price FROM products WHERE status='ACTIVE'",
start:"14:59:54.900",
end:"14:59:54.920",
total:"20ms"
},
{
hash:"QRY_PR_02",
query:"SELECT stock_qty FROM inventory WHERE product_id IN (?)",
start:"14:59:54.930",
end:"14:59:54.948",
total:"18ms"
},
{
hash:"QRY_PR_03",
query:"SELECT avg_rating FROM product_reviews WHERE product_id = ?",
start:"14:59:54.960",
end:"14:59:54.984",
total:"24ms"
},
{
hash:"QRY_PR_04",
query:"SELECT discount_percent FROM product_offers WHERE product_id = ?",
start:"14:59:44.960",
end:"14:59:44.979",
total:"19ms"
},

/* CHECKOUT */
{
hash:"QRY_CH_01",
query:"SELECT cart_items FROM user_carts WHERE user_id = ?",
start:"14:59:39.100",
end:"14:59:39.145",
total:"45ms"
},
{
hash:"QRY_CH_02",
query:"SELECT address_line FROM user_addresses WHERE user_id = ?",
start:"14:59:39.150",
end:"14:59:39.185",
total:"35ms"
},
{
hash:"QRY_CH_03",
query:"SELECT payment_options FROM payment_methods WHERE user_id = ?",
start:"14:59:39.190",
end:"14:59:39.232",
total:"42ms"
},
{
hash:"QRY_CH_04",
query:"INSERT INTO order_transactions (...) VALUES (...)",
start:"14:59:39.240",
end:"14:59:39.295",
total:"55ms"
},
{
hash:"QRY_CH_05",
query:"UPDATE loyalty_wallet SET points = points - ? WHERE user_id = ?",
start:"14:59:39.300",
end:"14:59:39.348",
total:"48ms"
},

/* PAYMENT */
{
hash:"QRY_PM_01",
query:"SELECT gateway_url,api_key FROM payment_gateway_config WHERE active=1",
start:"14:59:24.900",
end:"14:59:24.930",
total:"30ms"
},
{
hash:"QRY_PM_02",
query:"INSERT INTO payment_sessions VALUES (...)",
start:"14:59:24.940",
end:"14:59:24.978",
total:"38ms"
},
{
hash:"QRY_PM_03",
query:"SELECT fraud_rule_set FROM fraud_engine_config WHERE region=?",
start:"14:59:24.985",
end:"14:59:25.019",
total:"34ms"
},
{
hash:"QRY_PM_04",
query:"UPDATE payment_audit_logs SET status=? WHERE txn_id=?",
start:"14:59:25.025",
end:"14:59:25.054",
total:"29ms"
},

/* CART */
{
hash:"QRY_CT_01",
query:"INSERT INTO cart_items VALUES (...)",
start:"14:59:09.920",
end:"14:59:09.942",
total:"22ms"
},
{
hash:"QRY_CT_02",
query:"UPDATE user_carts SET updated_at = NOW() WHERE cart_id=?",
start:"14:59:09.950",
end:"14:59:09.968",
total:"18ms"
},

/* USER */
{
hash:"QRY_US_01",
query:"SELECT name,email,phone FROM users WHERE id=?",
start:"14:58:59.950",
end:"14:58:59.965",
total:"15ms"
},

/* SHIPPING */
{
hash:"QRY_SH_01",
query:"SELECT base_rate FROM shipping_zone_rates WHERE zone_id=?",
start:"14:58:49.900",
end:"14:58:49.926",
total:"26ms"
},
{
hash:"QRY_SH_02",
query:"SELECT available_qty FROM warehouse_stock WHERE product_id=?",
start:"14:58:49.930",
end:"14:58:49.961",
total:"31ms"
},
{
hash:"QRY_SH_03",
query:"SELECT estimated_days FROM delivery_eta_matrix WHERE zone_id=?",
start:"14:58:44.950",
end:"14:58:44.977",
total:"27ms"
}

];
