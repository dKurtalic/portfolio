import { React } from "react";



export default async function downloadFile(url) {



    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'RecommendationLetter_DinaKurtalic.pdf';
            a.click();
        })
        .catch((error) => {
            console.error('Download error:', error);
        });
}

