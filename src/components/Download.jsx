import html2canvas from "html2canvas";
import { toast } from "react-toastify";


export default function ComicDownload() {
    async function downloadComicStrip() {
        let imageElement = document.getElementById("strip-panel");
        console.log(imageElement);
        const canvas = await html2canvas(imageElement);
        const dataURL = canvas.toDataURL("image/png", 1.0);
        console.log(dataURL);
        const link = document.createElement('a');
        link.href = dataURL;
        link.setAttribute('download', 'strip-comic.png');
        link.click();
        URL.revokeObjectURL(dataURL);
    }
    return <>
        <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
         <div onClick={downloadComicStrip} class="relative inline-flex  group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Download
            </a>
        </div>
        </div>
    </>;
}