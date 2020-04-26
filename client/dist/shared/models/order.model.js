"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderModel {
    constructor(order) {
        Object.assign(this, order);
    }
}
exports.OrderModel = OrderModel;
exports.nasterblueOrder = new OrderModel({
    "@context": "http://schema.org/",
    "@type": "Invoice",
    "broker": {
        "@type": "LocalBusiness",
        "name": "ACME Home Heating"
    },
    "accountId": "xxxx-xxxx-xxxx-1234",
    "customer": {
        "@type": "Person",
        "name": "Jane Doe"
    },
    "paymentDueDate": "2015-01-30",
    "minimumPaymentDue": {
        "@type": "PriceSpecification",
        "price": 0.00,
        "priceCurrency": "USD"
    },
    "totalPaymentDue": {
        "@type": "PriceSpecification",
        "price": 0.00,
        "priceCurrency": "USD"
    },
    "paymentStatus": "http://schema.org/PaymentComplete",
    "referencesOrder": [
        {
            "@type": "Order",
            "description": "furnace",
            "orderDate": "2014-12-01",
            "orderNumber": "123ABC",
            "paymentMethod": "http://purl.org/goodrelations/v1#ByInvoice",
            "orderedItem": {
                "@type": "Product",
                "name": "ACME Furnace 3000",
                "productID": "ABC123"
            }
        },
        {
            "@type": "Order",
            "description": "furnace installation",
            "orderDate": "2014-12-02",
            "paymentMethod": "http://purl.org/goodrelations/v1#ByInvoice",
            "orderedItem": {
                "@type": "Service",
                "description": "furnace installation"
            }
        }
    ]
});
//# sourceMappingURL=order.model.js.map