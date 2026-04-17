export const WHATSAPP_NUMBER = "51977575107";
export const WHATSAPP_DISPLAY_NUMBER = "+51 977 575 107";

export const buildWhatsAppUrl = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
