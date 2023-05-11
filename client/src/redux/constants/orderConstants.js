/* ========== Creacion de ordenes ================= */
    const POST_ORDER = "POST_ORDER"; //ENVIA LA ORDEN A LA BD
    const TOTAL_ORDER = "TOTAL_ORDER"; //Actualiza el total de la orden de compra
    const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST"
    const ORDER_CREATE_SUCCESS =  "ORDER_CREATE_SUCCESS"
    const CART_EMPTY = "CART_EMPTY"
    const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL"

module.exports = {
 POST_ORDER,
 TOTAL_ORDER,
 ORDER_CREATE_REQUEST,
 ORDER_CREATE_SUCCESS,
 CART_EMPTY,
 ORDER_CREATE_FAIL
};