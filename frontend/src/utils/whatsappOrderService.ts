/**
 * WhatsApp Order Service
 * Formats order details into WhatsApp message and generates WhatsApp Web API URL
 */

interface OrderItem {
    id?: string;
    name: string;
    price: number;
    quantity: number;
}

interface OrderData {
    orderNumber: string;
    orderHash?: string;
    customerInfo?: {
        name: string;
        email: string;
        phone: string;
    };
    guestCustomer?: {
        name: string;
        email: string;
        phone: string;
    };
    shippingAddress?: {
        address: string;
        city: string;
        state?: string;
        postalCode?: string;
        country: string;
    };
    items?: OrderItem[];
    paymentMethod?: string;
    subtotal?: number;
    tax?: number;
    shipping?: number;
    total?: number;
    totalAmount?: number; // Added to support backend response structure
    notes?: string;
}

const WHATSAPP_BUSINESS_NUMBER = '+923097613611'; // Updated Automation Number

/**
 * Format payment method name
 */
function formatPaymentMethod(method?: string): string {
    if (!method) return 'Pending';
    const methods: Record<string, string> = {
        cod: 'Cash on Delivery',
        meezan: 'Meezan Bank Transfer',
        jazzcash: 'JazzCash',
        easypaisa: 'EasyPaisa',
        payoneer: 'Payoneer'
    };
    return methods[method] || method;
}

/**
 * Helper to safely get total amount
 */
function getOrderTotal(orderData: OrderData): string {
    const amount = orderData.totalAmount !== undefined ? orderData.totalAmount : orderData.total;
    return amount !== undefined ? amount.toLocaleString() : '0';
}

/**
 * Helper to format full order details
 */
function formatOrderDetailsBody(orderData: OrderData): string {
    const { orderNumber, customerInfo, guestCustomer, shippingAddress, items, paymentMethod, notes } = orderData;
    const totalDisplay = getOrderTotal(orderData);

    const customerName = customerInfo?.name || guestCustomer?.name || 'N/A';
    const phone = customerInfo?.phone || guestCustomer?.phone || 'N/A';
    const email = customerInfo?.email || guestCustomer?.email || 'N/A';

    const address = shippingAddress?.address || 'N/A';
    const city = shippingAddress?.city || 'N/A';
    const country = shippingAddress?.country || 'Pakistan';
    const postal = shippingAddress?.postalCode ? `(${shippingAddress.postalCode})` : '';

    const itemsList = items?.map(i => `- ${i.name} x${i.quantity}`).join('\n') || 'No items';

    return `*Order ID:* ${orderNumber}
*Total Amount:* PKR ${totalDisplay}

*Customer Details:*
Name: ${customerName}
Phone: ${phone}
Email: ${email}

*Shipping Address:*
${address}
${city}, ${country} ${postal}

*Order Items:*
${itemsList}

*Payment Method:* ${formatPaymentMethod(paymentMethod)}
${notes ? `\n*Notes:* ${notes}` : ''}`;
}

/**
 * Option 1: "I've Paid" Message
 * "I have completed payment... [Full Details] ... Attaching payment receipt."
 */
export function generatePaymentReceiptMessage(orderData: OrderData): string {
    return `I have completed payment.

${formatOrderDetailsBody(orderData)}

Attaching payment receipt.`;
}

/**
 * Option 2: "Continue on WhatsApp" Message (Full Automation)
 * Includes ALL user input fields
 */
export function generateNewOrderMessage(orderData: OrderData): string {
    return `Hello, I have placed an order.

${formatOrderDetailsBody(orderData)}

I want to complete payment via WhatsApp.`;
}

/**
 * @deprecated Use generateNewOrderMessage or generatePaymentReceiptMessage
 */
export function generateWhatsAppMessage(orderData: OrderData): string {
    return generateNewOrderMessage(orderData);
}

/**
 * Generate WhatsApp URL for a specific message
 */
export function generateWhatsAppURL(message: string, number: string = WHATSAPP_BUSINESS_NUMBER): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp with specific message type
 */
export function openWhatsApp(orderData: OrderData, type: 'payment' | 'automation' = 'automation'): boolean {
    try {
        let message = '';
        if (type === 'payment') {
            message = generatePaymentReceiptMessage(orderData);
        } else {
            message = generateNewOrderMessage(orderData);
        }

        const url = generateWhatsAppURL(message);
        window.open(url, '_blank');
        return true;
    } catch (error) {
        console.error('Failed to open WhatsApp:', error);
        return false;
    }
}
