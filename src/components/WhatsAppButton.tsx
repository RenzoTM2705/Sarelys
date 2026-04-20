import type { ReactNode } from "react";
import { buildWhatsAppUrl } from "../utils/whatsapp";

type WhatsAppButtonProps = {
    message: string;
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
};

export const WhatsAppButton = ({
    message,
    children,
    className,
    ariaLabel,
}: WhatsAppButtonProps) => {
    return (
        <a
            href={buildWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={className}
        >
            {children}
        </a>
    );
};
