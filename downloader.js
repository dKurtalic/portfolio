import { React } from "react";


export default async function downloadFile(url) {
    const filePath = './src/assets/PismoPreporuke_DženanaĐonko.pdf';

    try {
        const response = await fetch(filePath);
        const blob = await response.blob();
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'RecommendationLetter_DinaKurtalic.pdf';
        a.click();
    } catch (error) {
        console.error('Download error:', error);
    }
}
