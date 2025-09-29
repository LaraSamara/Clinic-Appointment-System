import { useState } from "react";
const useFileUpload = () => {
    const [uploaded, setUploaded] = useState(false);
    const [base64Data, setBase64Data] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploaded(false);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64 = reader.result.split(",")[1];
                setBase64Data(base64);
                setUploaded(true);
            };
        }
    };
    return { uploaded, base64Data, handleFileChange };
};
export default useFileUpload;
