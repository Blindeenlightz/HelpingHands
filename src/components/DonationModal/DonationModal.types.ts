export interface DonationModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    charity: {
        name: string;
    };
}