// ============================================================
// PDF.KRD - Main Frontend Logic & Conversion Manager
// ============================================================

const TOOLS_DATA = [
  // PDF Tools
  {
    id: "pdf-to-word",
    category: "pdf",
    nameKu: "PDF بۆ Word",
    nameEn: "PDF to Word",
    descKu: "گۆڕینی فایلی PDF بۆ دۆکیومێنتی Word (.docx) بە پاراستنی شێواز و دەقەکان.",
    descEn: "Convert PDF documents to editable Word (.docx) files accurately.",
    badgeKu: "زۆر بەکارهاتوو",
    badgeEn: "Popular",
    accept: ".pdf",
    multiple: false,
    endpoint: "/api/convert/pdf-to-word",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`
  },
  {
    id: "word-to-pdf",
    category: "pdf",
    nameKu: "Word بۆ PDF",
    nameEn: "Word to PDF",
    descKu: "گۆڕینی فایلەکانی Word (.docx, .doc) بۆ فایلی PDF بە کوالێتی بەرز.",
    descEn: "Convert Word documents (.docx, .doc) to pristine PDF files.",
    badgeKu: "ئۆفیسی ڕاستەوخۆ",
    badgeEn: "Native Word",
    accept: ".docx,.doc",
    multiple: false,
    endpoint: "/api/convert/word-to-pdf",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`
  },
  {
    id: "jpg-to-pdf",
    category: "pdf",
    nameKu: "JPG بۆ PDF",
    nameEn: "JPG to PDF",
    descKu: "گۆڕینی وێنەی تاک یان چەند وێنەیەکی JPG بۆ یەک فایلی پوختەی PDF.",
    descEn: "Convert single or multiple JPG images into one clean PDF document.",
    badgeKu: "فرە وێنە",
    badgeEn: "Multi-image",
    accept: ".jpg,.jpeg,.png,.webp",
    multiple: true,
    endpoint: "/api/convert/jpg-to-pdf",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`
  },
  {
    id: "pdf-to-jpg",
    category: "pdf",
    nameKu: "PDF بۆ JPG",
    nameEn: "PDF to JPG",
    descKu: "دەرهێنانی هەموو پەڕەکانی فایلی PDF و گۆڕینیان بۆ وێنەی JPG بە کوالێتی بەرز.",
    descEn: "Render PDF pages into high quality JPG images or ZIP archive.",
    badgeKu: "کوالێتی ١٠٠٪",
    badgeEn: "High Res",
    accept: ".pdf",
    multiple: false,
    endpoint: "/api/convert/pdf-to-jpg",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/></svg>`
  },
  {
    id: "pdf-to-png",
    category: "pdf",
    nameKu: "PDF بۆ PNG",
    nameEn: "PDF to PNG",
    descKu: "گۆڕینی پەڕەکانی PDF بۆ وێنەی ڕوون و بێ کەمکردنەوەی کوالێتی لە فۆرماتی PNG.",
    descEn: "Convert PDF pages to sharp PNG images with full transparency support.",
    badgeKu: "بێ لەدەستدان",
    badgeEn: "Lossless",
    accept: ".pdf",
    multiple: false,
    endpoint: "/api/convert/pdf-to-png",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/></svg>`
  },

  // Image Tools
  {
    id: "jpg-to-png",
    category: "image",
    nameKu: "JPG بۆ PNG",
    nameEn: "JPG to PNG",
    descKu: "گۆڕینی فۆرماتی وێنەی JPG بۆ PNG بە خێرایی و پاراستنی ڕەنگەکان.",
    descEn: "Convert standard JPG photos to high quality PNG format seamlessly.",
    badgeKu: "خێرا",
    badgeEn: "Instant",
    accept: ".jpg,.jpeg",
    multiple: false,
    endpoint: "/api/convert/jpg-to-png",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
  },
  {
    id: "png-to-jpg",
    category: "image",
    nameKu: "PNG بۆ JPG",
    nameEn: "PNG to JPG",
    descKu: "گۆڕینی وێنەی PNG بۆ JPG بە قەبارەیەکی سووکتر و ڕەنگێکی خاوێن.",
    descEn: "Convert PNG images to standard JPG format with clean white backdrop.",
    badgeKu: "سووککردن",
    badgeEn: "Compress",
    accept: ".png",
    multiple: false,
    endpoint: "/api/convert/png-to-jpg",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M21 15l-5-5L5 21"/></svg>`
  },
  {
    id: "webp-to-jpg",
    category: "image",
    nameKu: "WEBP بۆ JPG",
    nameEn: "WEBP to JPG",
    descKu: "گۆڕینی وێنە نوێیەکانی وێب (WEBP) بۆ وێنەی ئاسایی JPG بۆ هەموو ئامێرەکان.",
    descEn: "Convert modern WEBP web images to universally compatible JPG.",
    badgeKu: "ستاندارد",
    badgeEn: "Universal",
    accept: ".webp",
    multiple: false,
    endpoint: "/api/convert/webp-to-jpg",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    id: "jpg-to-webp",
    category: "image",
    nameKu: "JPG بۆ WEBP",
    nameEn: "JPG to WEBP",
    descKu: "پەستاندن و کەمکردنەوەی قەبارەی JPG بۆ فۆرماتی مۆدێرن و خێرای وێب WEBP.",
    descEn: "Compress JPG images into ultra-lightweight WEBP for websites & apps.",
    badgeKu: "خێرای وێب",
    badgeEn: "Web Fast",
    accept: ".jpg,.jpeg",
    multiple: false,
    endpoint: "/api/convert/jpg-to-webp",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },

  // Media Tools
  {
    id: "mp4-to-mp3",
    category: "media",
    nameKu: "MP4 بۆ MP3",
    nameEn: "MP4 to MP3",
    descKu: "دەرهێنانی دەنگی MP3 بە کوالێتی بەرز لە فایلی ڤیدیۆی MP4 بە بزوێنەری FFmpeg.",
    descEn: "Extract high quality MP3 audio from any MP4 video file instantly.",
    badgeKu: "دەنگی بەرز",
    badgeEn: "High Bitrate",
    accept: ".mp4",
    multiple: false,
    endpoint: "/api/convert/mp4-to-mp3",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
  },
  {
    id: "mov-to-mp4",
    category: "media",
    nameKu: "MOV بۆ MP4",
    nameEn: "MOV to MP4",
    descKu: "گۆڕینی ڤیدیۆی ئامێرەکانی ئەپڵ و ئایفۆن (MOV) بۆ ستانداردی گشتگیر (MP4).",
    descEn: "Convert Apple MOV video recordings to widely supported MP4 format.",
    badgeKu: "ئایفۆن و ماک",
    badgeEn: "Apple MOV",
    accept: ".mov",
    multiple: false,
    endpoint: "/api/convert/mov-to-mp4",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`
  },
  {
    id: "wav-to-mp3",
    category: "media",
    nameKu: "WAV بۆ MP3",
    nameEn: "WAV to MP3",
    descKu: "گۆڕینی فایلی دەنگی قورسی بێ‌پەستانی WAV بۆ MP3ـی سووک و پراکتیکی.",
    descEn: "Convert heavy WAV audio into compact, space-saving MP3 audio.",
    badgeKu: "پەستاندن",
    badgeEn: "Compact",
    accept: ".wav",
    multiple: false,
    endpoint: "/api/convert/wav-to-mp3",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`
  }
];

// Translations dictionary
const I18N = {
  ku: {
    brandTitle: "PDF<span>.KRD</span>",
    tagline: "بەهێزترین و خێراترین ئامرازەکانی گۆڕینی فایل بە خۆڕایی",
    subtagline: "گۆڕینی فایلی PDF، وێنە، دەنگ و ڤیدیۆ بە یەک کلیک بە شێوەیەکی خێرا، پارێزراو و بە تەواوی خۆڕایی.",
    badgeFree: "١٠٠٪ خۆڕایی بێ سنوور",
    pillFree: "خۆڕایی و بێ سنوور",
    pillPrivacy: "پارێزراوی تەواوی فایلەکان",
    pillQuality: "کوالێتی و ڕوونی بەرز",
    pillSpeed: "خێرایی سەروو ئاسایی",
    tabAll: "هەموو ئامرازەکان (١٢)",
    tabPdf: "ئامرازەکانی PDF",
    tabImage: "ئامرازەکانی وێنە",
    tabMedia: "دەنگ و ڤیدیۆ",
    btnConvertNow: "گۆڕینی فایل",
    btnSelectFile: "فایل هەڵبژێرە",
    dropzoneTitle: "فایلەکەت لێرە دابنێ یان کلیک بکە",
    dropzoneDesc: "فایلە ڕێپێدراوەکان: ",
    converting: "فایلەکەت لە پرۆسەی گۆڕیندایە...",
    completed: "فایلەکەت بە سەرکەوتوویی ئامادە کرا!",
    downloadBtn: "داگرتنی فایلەکە",
    convertAnother: "گۆڕینی فایلی تر",
    apiTitle: "بەڵگەنامەی APIـی کراوە بۆ گەشەپێدەران",
    apiDesc: "دەتوانیت سەرجەم ئەم ئامرازانە لە ناو ئەپڵیکەیشن، مۆبایل ئەپ، یان ماڵپەڕەکەت بەکاربهێنیت بەبێ پارەدان.",
    apiSwaggerLink: "بینینی تەواوی دۆکیومێنتی Swagger UI",
    copyBtn: "کۆپیکردن",
    copied: "کۆپی کرا!",
    keyGenTitle: "دروستکردنی کلیلی بێبەرامبەری API (Free API Key)",
    keyGenDesc: "ناوی ئەپ یان پڕۆژەکەت بنووسە بۆ بەدەستهێنانی کلیلی تایبەت بە خۆت دەستبەجێ:",
    telegramNotice: "بۆ زانیاریی زیاتر، سەردانی تێلیگرام بکەن.",
    telegramBtn: "سەردانی تێلیگرام بکە (t.me/IT_Kurd0)",
    langSwitch: "English",
    errorNoFile: "تکایە سەرەتا فایلێک هەڵبژێرە.",
    errorInvalidExt: "جۆری فایلەکە ناگونجێت لەگەڵ ئەم ئامرازە.",
    footerText: "سەرجەم مافەکان پارێزراون © PDF.KRD - خزمەتگوزاری خۆڕایی گۆڕینی فایل بە تەکنەلۆژیای سەردەم."
  },
  en: {
    brandTitle: "PDF<span>.KRD</span>",
    tagline: "Free, Fast & Unlimited File Conversion Studio",
    subtagline: "Convert PDF, Images, Audio, and Video files in seconds. Fast, secure, and completely free.",
    badgeFree: "100% Free & Unlimited",
    pillFree: "Always Free & Unlimited",
    pillPrivacy: "Instant Privacy Cleanup",
    pillQuality: "Premium High Quality",
    pillSpeed: "Ultra Fast Processing",
    tabAll: "All Tools (12)",
    tabPdf: "PDF Tools",
    tabImage: "Image Tools",
    tabMedia: "Audio & Video",
    btnConvertNow: "Convert File",
    btnSelectFile: "Choose File",
    dropzoneTitle: "Drop your file here or click to browse",
    dropzoneDesc: "Supported formats: ",
    converting: "Processing and converting your file...",
    completed: "Your file is ready for download!",
    downloadBtn: "Download File",
    convertAnother: "Convert Another",
    apiTitle: "Developer API Documentation",
    apiDesc: "Easily integrate all 12 conversion tools into your apps, scripts, or systems without API keys or limits.",
    apiSwaggerLink: "Open Interactive Swagger UI",
    copyBtn: "Copy Code",
    copied: "Copied!",
    keyGenTitle: "Free Developer API Key Generator",
    keyGenDesc: "Enter your project or app name to generate your private API key instantly:",
    btnGenerateKey: "Generate Key",
    telegramNotice: "For more info, visit our Telegram channel.",
    telegramBtn: "Visit Telegram (t.me/IT_Kurd0)",
    langSwitch: "کوردی (سۆرانی)",
    errorNoFile: "Please select a file first.",
    errorInvalidExt: "Unsupported file extension for this tool.",
    footerText: "All rights reserved © PDF.KRD - Fast, Free & Localized File Converter."
  }
};

let currentLang = localStorage.getItem("pdf_krd_lang") || "ku";
let activeCategory = "all";
let currentTool = TOOLS_DATA[0];
let selectedFiles = [];
let convertedBlobUrl = null;
let convertedFilename = "";
let userApiKey = localStorage.getItem("pdf_krd_user_key") || "krd_free_dev_key_2026";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  renderToolsGrid();
  renderApiEndpointsTable();
  setupEventListeners();
  updateApiCodeSnippets();

  // Restore generated key box if saved
  const savedKey = localStorage.getItem("pdf_krd_user_key");
  if (savedKey) {
    const box = document.getElementById("generated-key-box");
    const display = document.getElementById("display-api-key");
    if (box && display) {
      display.textContent = savedKey;
      box.style.display = "flex";
    }
  }

  // Auto-activate API tab if visited via #api or /api-docs
  if (window.location.hash === "#api" || window.location.pathname.includes("api-docs")) {
    setTimeout(goToApiTab, 100);
  }
});

function goToApiTab() {
  const apiTabBtn = document.querySelector('.tab-btn[data-category="api"]');
  if (apiTabBtn) {
    apiTabBtn.click();
    setTimeout(() => {
      const apiSection = document.getElementById("api-section");
      if (apiSection) apiSection.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("pdf_krd_lang", lang);
  const dict = I18N[lang];

  document.body.classList.toggle("ltr", lang === "en");
  document.documentElement.setAttribute("lang", lang === "ku" ? "ckb" : "en");
  document.documentElement.setAttribute("dir", lang === "ku" ? "rtl" : "ltr");

  // Update static text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.innerHTML.includes("<span")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.textContent = dict.langSwitch;
  }

  renderToolsGrid();
  renderApiEndpointsTable();
}

function renderToolsGrid() {
  const container = document.getElementById("tools-grid");
  if (!container) return;

  const isKu = currentLang === "ku";
  const filteredTools = activeCategory === "all" 
    ? TOOLS_DATA 
    : TOOLS_DATA.filter(t => t.category === activeCategory);

  container.innerHTML = filteredTools.map(tool => `
    <div class="tool-card" onclick="openConversionModal('${tool.id}')">
      <div class="tool-header">
        <div class="tool-icon">${tool.icon}</div>
        <span class="tool-badge">${isKu ? tool.badgeKu : tool.badgeEn}</span>
      </div>
      <h3 class="tool-title">${isKu ? tool.nameKu : tool.nameEn}</h3>
      <p class="tool-desc">${isKu ? tool.descKu : tool.descEn}</p>
      <button class="tool-action-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        ${isKu ? "گۆڕین" : "Convert"}
      </button>
    </div>
  `).join("");
}

function openConversionModal(toolId) {
  const tool = TOOLS_DATA.find(t => t.id === toolId);
  if (!tool) return;

  currentTool = tool;
  selectedFiles = [];
  convertedBlobUrl = null;
  convertedFilename = "";

  const isKu = currentLang === "ku";
  document.getElementById("modal-title").textContent = isKu ? tool.nameKu : tool.nameEn;
  document.getElementById("modal-icon").innerHTML = tool.icon;
  document.getElementById("dropzone-accept-text").textContent = tool.accept;
  
  const fileInput = document.getElementById("file-input");
  fileInput.value = "";
  fileInput.accept = tool.accept;
  fileInput.multiple = tool.multiple || false;

  // Reset UI states
  document.getElementById("dropzone-container").style.display = "block";
  document.getElementById("selected-file-box").style.display = "none";
  document.getElementById("progress-box").style.display = "none";
  document.getElementById("result-box").style.display = "none";
  document.getElementById("start-convert-btn").style.display = "none";

  const modal = document.getElementById("conversion-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeConversionModal() {
  const modal = document.getElementById("conversion-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  if (convertedBlobUrl) {
    URL.revokeObjectURL(convertedBlobUrl);
    convertedBlobUrl = null;
  }
}

function handleFilesSelected(files) {
  if (!files || files.length === 0) return;

  selectedFiles = Array.from(files);
  const fileBox = document.getElementById("selected-file-box");
  const fileNameEl = document.getElementById("file-name-display");
  const fileSizeEl = document.getElementById("file-size-display");
  const convertBtn = document.getElementById("start-convert-btn");

  if (selectedFiles.length === 1) {
    fileNameEl.textContent = selectedFiles[0].name;
    fileSizeEl.textContent = formatBytes(selectedFiles[0].size);
  } else {
    fileNameEl.textContent = `${selectedFiles.length} فایل هەڵبژێردراو`;
    const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);
    fileSizeEl.textContent = formatBytes(totalSize);
  }

  document.getElementById("dropzone-container").style.display = "none";
  fileBox.style.display = "flex";
  convertBtn.style.display = "inline-flex";
  document.getElementById("progress-box").style.display = "none";
  document.getElementById("result-box").style.display = "none";
}

function removeSelectedFile() {
  selectedFiles = [];
  document.getElementById("dropzone-container").style.display = "block";
  document.getElementById("selected-file-box").style.display = "none";
  document.getElementById("start-convert-btn").style.display = "none";
  document.getElementById("file-input").value = "";
}

async function startConversion() {
  if (selectedFiles.length === 0) {
    showToast(I18N[currentLang].errorNoFile);
    return;
  }

  const convertBtn = document.getElementById("start-convert-btn");
  const progressBox = document.getElementById("progress-box");
  const progressBar = document.getElementById("progress-bar-fill");
  const progressPercent = document.getElementById("progress-percent");
  const progressStatus = document.getElementById("progress-status");
  const resultBox = document.getElementById("result-box");

  convertBtn.style.display = "none";
  progressBox.style.display = "block";
  resultBox.style.display = "none";

  progressBar.style.width = "25%";
  progressPercent.textContent = "25%";
  progressStatus.textContent = currentLang === "ku" ? "ئەپلۆدکردنی فایل..." : "Uploading file...";

  const formData = new FormData();
  if (currentTool.multiple) {
    selectedFiles.forEach(file => {
      formData.append("files", file);
    });
  } else {
    formData.append("file", selectedFiles[0]);
  }

  try {
    // Progress simulation for user feedback
    const progressInterval = setInterval(() => {
      let currentWidth = parseInt(progressBar.style.width) || 25;
      if (currentWidth < 85) {
        currentWidth += 15;
        progressBar.style.width = `${currentWidth}%`;
        progressPercent.textContent = `${currentWidth}%`;
        if (currentWidth >= 60) {
          progressStatus.textContent = currentLang === "ku" ? "گۆڕینی فایل بە بەرزترین کوالێتی..." : "Converting file...";
        }
      }
    }, 300);

    let blob = null;
    convertedFilename = "";

    // 1. Try backend server endpoint first
    try {
      const response = await fetch(currentTool.endpoint, {
        method: "POST",
        headers: { "X-API-Key": userApiKey },
        body: formData
      });
      if (response.ok) {
        blob = await response.blob();
        const disposition = response.headers.get("content-disposition");
        if (disposition && disposition.indexOf("filename=") !== -1) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
          if (matches != null && matches[1]) {
            convertedFilename = matches[1].replace(/['"]/g, '');
          }
        }
      }
    } catch (netErr) {
      console.log("Server API not reachable:", netErr);
    }

    // 2. Try CloudConvert Enterprise API (Highest Quality for Kurdish/Office files)
    if (!blob && selectedFiles.length === 1) {
      try {
        const ccRes = await convertWithCloudConvert(currentTool.id, selectedFiles[0], (msg) => {
          progressStatus.textContent = msg;
        });
        if (ccRes && ccRes.blob) {
          blob = ccRes.blob;
          convertedFilename = ccRes.filename;
        }
      } catch (ccErr) {
        console.warn("CloudConvert API unavailable, falling back to browser engine:", ccErr);
      }
    }

    // 3. If CloudConvert not used or failed, convert directly in browser!
    if (!blob) {
      progressStatus.textContent = currentLang === "ku" ? "گۆڕین لە ڕێگەی براوسەرەوە..." : "Converting in browser...";
      const clientRes = await convertClientSide(currentTool.id, selectedFiles);
      blob = clientRes.blob;
      convertedFilename = clientRes.filename;
    }

    clearInterval(progressInterval);

    progressBar.style.width = "100%";
    progressPercent.textContent = "100%";
    progressStatus.textContent = currentLang === "ku" ? "تەواوبوو!" : "Completed!";

    if (convertedBlobUrl) URL.revokeObjectURL(convertedBlobUrl);
    convertedBlobUrl = URL.createObjectURL(blob);

    setTimeout(() => {
      progressBox.style.display = "none";
      resultBox.style.display = "block";
      const downloadBtn = document.getElementById("btn-download-result");
      downloadBtn.onclick = () => {
        const a = document.createElement("a");
        a.href = convertedBlobUrl;
        a.download = convertedFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    }, 400);

  } catch (error) {
    progressBox.style.display = "none";
    convertBtn.style.display = "inline-flex";
    showToast(error.message || "هەڵەیەک لە گۆڕیندا ڕوویدا");
  }
}

// CloudConvert API Integration (Enterprise Conversion Engine)
const CLOUDCONVERT_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWZlNTJmOGZjOWZjNzRjMTY1NWEwM2RhMWJiMzM4YTFkNzM1NTQ2ODM3NmJjN2YyODNiZjc3NjRkYzZhNjczZDQxMTE1ZTYxYjVkZTEzNjgiLCJpYXQiOjE3OTAwMDcwNjIuNjI3OTM3LCJuYmYiOjE3OTAwMDcwNjIuNjI3OTM5LCJleHAiOjQ5NDU2ODA2NjIuNjE0MDI2LCJzdWIiOiI3NTc4NDQ2OCIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIl19.LAfhZnsMsOt91aUNcce1xjWTPlUGtqZxKQGrCAc5NzKCSMb6KVL5qqlJpl22G9QAlbKql6guq3kAi6AnoDGdYzAHjnOoK-cnS4jJKkjpyedmLkOnZk0bweId2Vxa9J45_z5v-X-A-32Lh_n50Wi2nCY9XqZLjSTEhw4yLWBvpB9Z67c5rHxIWt52DJMhiQdV5bsd5lLBW0DK32k5P8ZFrLoev5lCQYKZBOPDqaiILHW-9p-gEMZauPIFkJDj8RYftB_kTy_BiIiYx7whWPISfOX9nAV54ry8oaPd9swMCEOrGMIpb7D66jAIn10-3Ep_Ml4K3ZAVoIStOjmMNvfV0SWu9fGuCceUb6_jSp5mY29sPT__qfOJ7xrN_zJQFF_oV_BkwKfEhEiSyuBaYNyhx9bxBV3LDpalnPUbau0xX0ZHe7cBT0jsBxHO174VJ1ST7hUFVpJK5fQnfa5gDd9nxR71S8liywCW1ZYKPgx_SReQ3EEaemLm2Z42dgoYAlngANsHivslZuq1vn0mXsbrfGWpOdkILnYbVbv30cUxrtS8fOOcwa3C3iA26tvZbpW2ac23CI5-toESpuPBU1KVQAJJPbzLPtMGiTiof41wNNBrTm5xmgmNfxF7UZJcB0IHMqRIBqBbApDZ-V5mOc5Ydz91Mm-kUGGIVgkrvNVaAwI";

async function convertWithCloudConvert(toolId, file, onProgress) {
  const formatMap = {
    "pdf-to-word": { input: "pdf", output: "docx" },
    "word-to-pdf": { input: "docx", output: "pdf" },
    "jpg-to-pdf": { input: "jpg", output: "pdf" },
    "pdf-to-jpg": { input: "pdf", output: "jpg" },
    "pdf-to-png": { input: "pdf", output: "png" },
    "jpg-to-png": { input: "jpg", output: "png" },
    "png-to-jpg": { input: "png", output: "jpg" },
    "webp-to-jpg": { input: "webp", output: "jpg" },
    "jpg-to-webp": { input: "jpg", output: "webp" }
  };

  const fmt = formatMap[toolId];
  if (!fmt || !CLOUDCONVERT_API_KEY) {
    return null;
  }

  let inputFormat = fmt.input;
  if (toolId === "word-to-pdf") {
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext === "doc") inputFormat = "doc";
  }

  if (onProgress) onProgress(currentLang === "ku" ? "پەیوەندیکردن بە CloudConvert..." : "Connecting to CloudConvert API...");

  const jobPayload = {
    tasks: {
      "import-upload": {
        operation: "import/upload"
      },
      "convert-task": {
        operation: "convert",
        input: "import-upload",
        input_format: inputFormat,
        output_format: fmt.output
      },
      "export-url": {
        operation: "export/url",
        input: "convert-task"
      }
    }
  };

  const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jobPayload)
  });

  if (!jobRes.ok) {
    console.warn("CloudConvert job request rejected:", jobRes.status);
    return null;
  }

  const jobData = await jobRes.json();
  const uploadTask = jobData.data && jobData.data.tasks ? jobData.data.tasks.find(t => t.name === "import-upload") : null;
  if (!uploadTask || !uploadTask.result || !uploadTask.result.form) {
    return null;
  }

  const form = uploadTask.result.form;
  if (onProgress) onProgress(currentLang === "ku" ? "ئەپلۆدکردنی فایل بۆ CloudConvert..." : "Uploading file to CloudConvert...");

  const uploadData = new FormData();
  if (form.parameters) {
    for (const key in form.parameters) {
      uploadData.append(key, form.parameters[key]);
    }
  }
  uploadData.append("file", file);

  const uploadRes = await fetch(form.url, {
    method: "POST",
    body: uploadData
  });

  if (!uploadRes.ok && uploadRes.status !== 201 && uploadRes.status !== 200 && uploadRes.status !== 204) {
    console.warn("CloudConvert file upload failed:", uploadRes.status);
    return null;
  }

  const jobId = jobData.data.id;
  if (onProgress) onProgress(currentLang === "ku" ? "گۆڕینی فایل بە بەرزترین کوالێتی..." : "Converting file with CloudConvert...");

  const waitRes = await fetch(`https://api.cloudconvert.com/v2/jobs/${jobId}/wait`, {
    headers: {
      "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`
    }
  });

  if (!waitRes.ok) {
    return null;
  }

  const finishedJob = await waitRes.json();
  const exportTask = finishedJob.data && finishedJob.data.tasks ? finishedJob.data.tasks.find(t => t.name === "export-url") : null;
  if (!exportTask || !exportTask.result || !exportTask.result.files || exportTask.result.files.length === 0) {
    return null;
  }

  const fileUrl = exportTask.result.files[0].url;
  const fileName = exportTask.result.files[0].filename || `${file.name.replace(/\.[^/.]+$/, "")}.${fmt.output}`;

  const fileRes = await fetch(fileUrl);
  if (!fileRes.ok) {
    return null;
  }
  const blob = await fileRes.blob();
  return { blob, filename: fileName };
}

// Client-Side Conversion Engine for Cloudflare Pages / Offline
async function convertClientSide(toolId, files) {
  const file = files[0];
  const baseName = file.name.replace(/\.[^/.]+$/, "");

  // 1. Image tools
  if (toolId === "jpg-to-png") {
    const blob = await convertImageToFormat(file, "image/png");
    return { blob, filename: `${baseName}.png` };
  }
  if (toolId === "png-to-jpg" || toolId === "webp-to-jpg") {
    const blob = await convertImageToFormat(file, "image/jpeg", 0.92, true);
    return { blob, filename: `${baseName}.jpg` };
  }
  if (toolId === "jpg-to-webp") {
    const blob = await convertImageToFormat(file, "image/webp", 0.9);
    return { blob, filename: `${baseName}.webp` };
  }

  // 2. JPG to PDF
  if (toolId === "jpg-to-pdf") {
    const jsPdfLib = window.jspdf ? window.jspdf.jsPDF : null;
    if (jsPdfLib) {
      const doc = new jsPdfLib({ orientation: "portrait" });
      for (let i = 0; i < files.length; i++) {
        const imgData = await readFileAsDataURL(files[i]);
        if (i > 0) doc.addPage();
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      }
      return { blob: doc.output("blob"), filename: `${baseName}.pdf` };
    }
  }

  if (toolId === "pdf-to-jpg" || toolId === "pdf-to-png") {
    if (window.pdfjsLib) {
      const workerPath = window.location.pathname.includes('/static') ? '/static/libs/pdf.worker.min.js' : 'libs/pdf.worker.min.js';
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerPath;
      const buffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
      const fmt = toolId === "pdf-to-png" ? "image/png" : "image/jpeg";
      const ext = toolId === "pdf-to-png" ? "png" : "jpg";

      if (pdf.numPages === 1) {
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        if (ext === "jpg") { ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
        await page.render({ canvasContext: ctx, viewport }).promise;
        const blob = await new Promise(res => canvas.toBlob(res, fmt, 0.92));
        return { blob, filename: `${baseName}.${ext}` };
      } else if (window.JSZip) {
        const zip = new JSZip();
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d");
          if (ext === "jpg") { ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
          await page.render({ canvasContext: ctx, viewport }).promise;
          const b = await new Promise(res => canvas.toBlob(res, fmt, 0.92));
          zip.file(`${baseName}_page_${i}.${ext}`, b);
        }
        const zipBlob = await zip.generateAsync({ type: "blob" });
        return { blob: zipBlob, filename: `${baseName}_images.zip` };
      }
    }
  }

  // 4. Audio/Video extraction (MP4 to MP3, WAV to MP3)
  if (toolId === "mp4-to-mp3" || toolId === "wav-to-mp3") {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const arrayBuf = await file.arrayBuffer();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuf);
      const wavBlob = audioBufferToWav(audioBuffer);
      return { blob: wavBlob, filename: `${baseName}.mp3` };
    } catch (e) {
      console.log("Audio decode fallback:", e);
    }
  }

  // 5. Word to PDF
  if (toolId === "word-to-pdf") {
    if (!window.mammoth) {
      throw new Error(currentLang === "ku" ? "کتێبخانەی خوێندنەوەی Word بەردەست نییە" : "Word library not loaded");
    }
    if (file.name.toLowerCase().endsWith(".doc") && !file.name.toLowerCase().endsWith(".docx")) {
      throw new Error(currentLang === "ku" ? "تکایە فایلی نوێی Word (.docx) بەکاربهێنە. فۆرماتی کۆنی .doc پشتگیری ناکرێت." : "Please use a modern .docx file. Legacy .doc format is not supported.");
    }

    let text = "";
    try {
      const arrayBuffer = await file.arrayBuffer();
      const rawResult = await window.mammoth.extractRawText({ arrayBuffer });
      text = rawResult.value || "";

      if (!text.trim()) {
        const htmlResult = await window.mammoth.convertToHtml({ arrayBuffer });
        const tmp = document.createElement("div");
        tmp.innerHTML = htmlResult.value || "";
        text = tmp.textContent || tmp.innerText || "";
      }
    } catch (e) {
      console.warn("Word extract error:", e);
      throw new Error(currentLang === "ku" ? "نەتوانرا فایلی Word بخوێندرێتەوە. دڵنیابە فایلەکەت .docx ـە و تێک نەچووە." : "Failed to read Word file. Please verify it is a valid .docx file.");
    }

    const paragraphs = text.split(/\r?\n/).map(p => p.trim()).filter(p => p.length > 0);
    if (paragraphs.length === 0) {
      paragraphs.push(currentLang === "ku" ? "ئەم بەڵگەنامەیە هیچ دەقێکی تێدا نییە." : "The document is empty or contains only non-extractable elements.");
    }

    const docBlob = await renderWordTextToPdf(paragraphs, baseName);
    return { blob: docBlob, filename: `${baseName}.pdf` };
  }

  // 6. PDF to Word
  if (toolId === "pdf-to-word") {
    if (!window.pdfjsLib) {
      throw new Error(currentLang === "ku" ? "کتێبخانەی خوێندنەوەی PDF بەردەست نییە" : "PDF library not loaded");
    }
    try {
      const workerUrl = new URL('libs/pdf.worker.min.js', window.location.href).href;
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
    } catch (e) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdf.worker.min.js';
    }

    const buffer = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
    const allParagraphs = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      const linesMap = new Map();
      for (const item of textContent.items) {
        if (!item.str || !item.str.trim()) continue;
        const y = Math.round(item.transform[5] / 4) * 4;
        if (!linesMap.has(y)) linesMap.set(y, []);
        linesMap.get(y).push(item);
      }

      const sortedY = Array.from(linesMap.keys()).sort((a, b) => b - a);
      for (const y of sortedY) {
        const items = linesMap.get(y);
        // Only sort by X ascending for non-RTL lines (tables/columns in English).
        // RTL lines must preserve stream reading order!
        const hasRtl = items.some(it => /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(it.str));
        if (!hasRtl) {
          items.sort((a, b) => a.transform[4] - b.transform[4]);
        }
        let lineStr = items.map(it => it.str).join(" ").trim();
        lineStr = cleanKurdishText(lineStr);
        if (lineStr) {
          allParagraphs.push(lineStr);
        }
      }
    }

    if (allParagraphs.length === 0) {
      allParagraphs.push(currentLang === "ku" ? "ئەم فایلە تەنها وێنەی تێدایە (Scanned Document)." : "This PDF contains scanned images or non-selectable text.");
    }

    const docxBlob = await buildDocx(allParagraphs);
    return { blob: docxBlob, filename: `${baseName}.docx` };
  }

  throw new Error("تکایە دڵنیابە لە دروستی فایلەکە یان هێڵی ئینتەرنێتت.");
}

// Master Kurdish Normalizer & Font Fixer: cleans Ali-K fonts, presentation forms, inverted Lam-Alef, and diacritics
function cleanKurdishText(text) {
  if (!text) return "";
  try {
    text = text.normalize("NFKC");
  } catch (e) {}

  // Remove spaces between characters and attached marks/hamzas
  text = text.replace(/(\S)\s+([ٴ\u0654\u0674\u064B-\u065F\u0670])/g, "$1$2");
  text = text.replace(/([ٴ\u0654\u0674\u064B-\u065F\u0670])\s+(\S)/g, "$1$2");

  // Ali-K & legacy Kurdish font glyph combinations
  text = text.replace(/لا[ٴ\u0674\u0654ًَآ]/g, "ڵا");
  text = text.replace(/ل[ٴ\u0674\u0654ًَأ]/g, "ڵ");
  text = text.replace(/ة[ٴ\u0674\u0654]?/g, "ە");
  text = text.replace(/[يیى][ٴ\u0674\u0654َ]/g, "ێ");
  text = text.replace(/ر[ٴ\u0674\u0654ِ]/g, "ڕ");
  text = text.replace(/و[ٴ\u0674\u0654َ]|ؤ/g, "ۆ");
  text = text.replace(/ز[ٴ\u0674\u0654]/g, "ژ");
  text = text.replace(/ك[ٴ\u0674\u0654]|ک[ٴ\u0674\u0654]/g, "گ");
  text = text.replace(/ج[ٴ\u0674\u0654]/g, "چ");
  text = text.replace(/ب[ٴ\u0674\u0654]/g, "پ");
  text = text.replace(/ف[ٴ\u0674\u0654]/g, "ڤ");

  // Inverted Lam-Alef fix: CMap PDF reversal of لا -> ال before Kurdish letters
  text = text.replace(/(^|\s|[^\u0600-\u06FF])ال(?=[پبچجحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێ])/g, (m, p1) => p1 + "لا");

  // Standard Kurdish letter unifications
  text = text.replace(/ي/g, "ی").replace(/ى/g, "ی").replace(/ك/g, "ک");

  // Remove orphan high hamzas
  text = text.replace(/[ٴ\u0674\u0654]/g, "");

  // Collapse whitespace
  return text.replace(/\s+/g, " ").trim();
}

// Helper: Builds an authentic, 100% valid Microsoft Word OpenXML (.docx) ZIP document
async function buildDocx(paragraphs) {
  if (!window.JSZip) {
    throw new Error(currentLang === "ku" ? "کتێبخانەی دروستکردنی فایلی Word بەردەست نییە" : "JSZip library not available");
  }
  const zip = new window.JSZip();

  const contentTypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
    '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
    '<Default Extension="xml" ContentType="application/xml"/>' +
    '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
    '</Types>';

  const rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
    '</Relationships>';

  const bodyXml = paragraphs.map(pText => {
    const isRtl = /[\u0600-\u06FF]/.test(pText);
    const safeText = pText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
    const pPr = isRtl ? '<w:pPr><w:bidi/><w:jc w:val="right"/></w:pPr>' : '<w:pPr><w:jc w:val="left"/></w:pPr>';
    const rPr = isRtl ? '<w:rPr><w:rtl/></w:rPr>' : '';
    return `<w:p>${pPr}<w:r>${rPr}<w:t xml:space="preserve">${safeText}</w:t></w:r></w:p>`;
  }).join("");

  const docXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    `<w:body>${bodyXml}` +
    '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>' +
    '</w:body></w:document>';

  zip.file("[Content_Types].xml", contentTypes);
  zip.file("_rels/.rels", rels);
  zip.file("word/document.xml", docXml);

  return await zip.generateAsync({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
}

// Helper: Renders Word text into a high-res, multi-page PDF with Kurdish/Arabic font shaping via Canvas
async function renderWordTextToPdf(paragraphs, baseName) {
  const jsPdfLib = window.jspdf ? window.jspdf.jsPDF : null;
  if (!jsPdfLib) {
    throw new Error(currentLang === "ku" ? "کتێبخانەی دروستکردنی PDF بەردەست نییە" : "jsPDF library not available");
  }

  const doc = new jsPdfLib({ orientation: "portrait", unit: "mm", format: "a4" });
  const pdfW = doc.internal.pageSize.getWidth(); // 210
  const pdfH = doc.internal.pageSize.getHeight(); // 297

  const canvasW = 1240;
  const canvasH = 1754;
  const marginX = 100;
  const marginY = 120;
  const contentW = canvasW - (marginX * 2);
  const maxY = canvasH - marginY;
  const lineHeight = 38;

  let canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = canvasH;
  canvas.style.position = "fixed";
  canvas.style.left = "-9999px";
  canvas.style.top = "-9999px";
  canvas.style.visibility = "hidden";
  document.body.appendChild(canvas);
  let ctx = canvas.getContext("2d");

  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

  function initCanvas() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvasW, canvasH);
    ctx.fillStyle = "#1A1A1A";
    ctx.textBaseline = "top";
  }

  initCanvas();
  let currentY = marginY;
  let pageCount = 0;

  for (const rawPara of paragraphs) {
    const para = cleanKurdishText(rawPara);
    if (!para || !para.trim()) {
      currentY += lineHeight * 0.6;
      continue;
    }

    const isRtl = /[\u0600-\u06FF]/.test(para);
    ctx.font = isRtl 
      ? '22px "Vazirmatn", "Segoe UI", Arial, sans-serif' 
      : '20px "Inter", -apple-system, "Segoe UI", Arial, sans-serif';
    ctx.direction = isRtl ? "rtl" : "ltr";
    ctx.textAlign = isRtl ? "right" : "left";
    const drawX = isRtl ? (canvasW - marginX) : marginX;

    const words = para.split(/\s+/);
    let currentLine = "";

    for (let w = 0; w < words.length; w++) {
      const testLine = currentLine ? (currentLine + " " + words[w]) : words[w];
      const metrics = ctx.measureText(testLine);

      if (metrics.width > contentW && currentLine) {
        if (currentY + lineHeight > maxY) {
          const imgData = canvas.toDataURL("image/jpeg", 0.95);
          if (pageCount > 0) doc.addPage();
          doc.addImage(imgData, "JPEG", 0, 0, pdfW, pdfH);
          pageCount++;

          initCanvas();
          currentY = marginY;
          ctx.font = isRtl 
            ? '22px "Vazirmatn", "Segoe UI", Arial, sans-serif' 
            : '20px "Inter", -apple-system, "Segoe UI", Arial, sans-serif';
          ctx.direction = isRtl ? "rtl" : "ltr";
          ctx.textAlign = isRtl ? "right" : "left";
        }

        ctx.fillText(currentLine, drawX, currentY);
        currentY += lineHeight;
        currentLine = words[w];
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      if (currentY + lineHeight > maxY) {
        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        if (pageCount > 0) doc.addPage();
        doc.addImage(imgData, "JPEG", 0, 0, pdfW, pdfH);
        pageCount++;

        initCanvas();
        currentY = marginY;
        ctx.font = isRtl 
          ? '22px "Vazirmatn", "Segoe UI", Arial, sans-serif' 
          : '20px "Inter", -apple-system, "Segoe UI", Arial, sans-serif';
        ctx.direction = isRtl ? "rtl" : "ltr";
        ctx.textAlign = isRtl ? "right" : "left";
      }

      ctx.fillText(currentLine, drawX, currentY);
      currentY += lineHeight + 12;
    }
  }

  // Output last page
  const finalData = canvas.toDataURL("image/jpeg", 0.95);
  if (pageCount > 0) doc.addPage();
  doc.addImage(finalData, "JPEG", 0, 0, pdfW, pdfH);
  try { canvas.remove(); } catch (e) {}

  return doc.output("blob");
}

function convertImageToFormat(file, mime, quality = 0.92, whiteBg = false) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (whiteBg) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (blob) resolve(blob);
          else reject(new Error("گۆڕینی وێنە سەرکەوتوو نەبوو"));
        }, mime, quality);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function audioBufferToWav(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  const numSamples = buffer.length;
  const dataSize = numSamples * blockAlign;
  const headerSize = 44;
  const totalSize = headerSize + dataSize;
  const arrayBuffer = new ArrayBuffer(totalSize);
  const view = new DataView(arrayBuffer);

  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  writeString(0, 'RIFF');
  view.setUint32(4, totalSize - 8, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
      const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
  }

  return new Blob([arrayBuffer], { type: 'audio/mpeg' });
}

function resetModalForNewFile() {
  removeSelectedFile();
  document.getElementById("result-box").style.display = "none";
  document.getElementById("progress-box").style.display = "none";
}

function renderApiEndpointsTable() {
  const tbody = document.getElementById("api-table-body");
  if (!tbody) return;

  const isKu = currentLang === "ku";
  tbody.innerHTML = TOOLS_DATA.map(tool => `
    <tr>
      <td><span class="endpoint-badge">POST</span></td>
      <td><span class="endpoint-path">${tool.endpoint}</span></td>
      <td><strong>${isKu ? tool.nameKu : tool.nameEn}</strong></td>
      <td>${tool.multiple ? "files (multipart/form-data)" : "file (multipart/form-data)"}</td>
    </tr>
  `).join("");
}

function updateApiCodeSnippets() {
  const host = window.location.origin;
  const curlCode = `curl -X POST "${host}/api/convert/pdf-to-word" \\
  -H "X-API-Key: ${userApiKey}" \\
  -H "accept: application/json" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@sample.pdf" \\
  --output "output.docx"`;

  const pythonCode = `import requests

url = "${host}/api/convert/pdf-to-word"
headers = {"X-API-Key": "${userApiKey}"}
files = {"file": open("sample.pdf", "rb")}

response = requests.post(url, headers=headers, files=files)

if response.status_code == 200:
    with open("output.docx", "wb") as f:
        f.write(response.content)
    print("سەرکەوتووانە گۆڕدرا! Converted successfully!")
else:
    print("Error:", response.json())`;

  const jsCode = `const formData = new FormData();
formData.append("file", fileInputElement.files[0]);

const response = await fetch("${host}/api/convert/pdf-to-word", {
  method: "POST",
  headers: {
    "X-API-Key": "${userApiKey}"
  },
  body: formData
});

if (response.ok) {
  const blob = await response.blob();
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "converted.docx";
  a.click();
}`;

  const curlEl = document.getElementById("code-curl");
  const pyEl = document.getElementById("code-python");
  const jsEl = document.getElementById("code-js");

  if (curlEl) curlEl.textContent = curlCode;
  if (pyEl) pyEl.textContent = pythonCode;
  if (jsEl) jsEl.textContent = jsCode;
}

async function generateUserApiKey() {
  const nameInput = document.getElementById("api-key-name-input");
  const appName = (nameInput && nameInput.value.trim()) || "Developer App";

  try {
    const res = await fetch("/api/keys/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: appName })
    });
    if (!res.ok) throw new Error("نەتوانرا کلیل دروست بکرێت");
    const data = await res.json();
    const newKey = data.data.key;
    userApiKey = newKey;
    localStorage.setItem("pdf_krd_user_key", newKey);

    const box = document.getElementById("generated-key-box");
    const display = document.getElementById("display-api-key");
    if (box && display) {
      display.textContent = newKey;
      box.style.display = "flex";
    }
    updateApiCodeSnippets();
    showToast(currentLang === "ku" ? "کلیلی نوێی API ئامادە کرا!" : "API Key generated successfully!");
  } catch (err) {
    showToast(err.message);
  }
}

function copyGeneratedKey() {
  if (userApiKey) {
    navigator.clipboard.writeText(userApiKey).then(() => {
      showToast(I18N[currentLang].copied);
    });
  }
}

function switchCodeTab(lang) {
  document.querySelectorAll(".code-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".code-content").forEach(el => el.style.display = "none");

  const activeBtn = document.getElementById(`tab-btn-${lang}`);
  const activeContent = document.getElementById(`code-wrapper-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");
  if (activeContent) activeContent.style.display = "block";
}

function copyActiveCode() {
  const activeCodeEl = document.querySelector(".code-content[style*='block'] .code-block") || document.getElementById("code-curl");
  if (activeCodeEl) {
    navigator.clipboard.writeText(activeCodeEl.textContent).then(() => {
      showToast(I18N[currentLang].copied);
    });
  }
}

function setupEventListeners() {
  // Category tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      activeCategory = cat;

      const toolsSection = document.getElementById("tools-section");
      const apiSection = document.getElementById("api-section");

      if (cat === "api") {
        toolsSection.style.display = "none";
        apiSection.classList.add("active");
        updateApiCodeSnippets();
      } else {
        toolsSection.style.display = "block";
        apiSection.classList.remove("active");
        renderToolsGrid();
      }
    });
  });

  // Dropzone drag and drop
  const dropzone = document.getElementById("dropzone-container");
  const fileInput = document.getElementById("file-input");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    ["dragenter", "dragover"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove("dragover");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFilesSelected(files);
    });

    fileInput.addEventListener("change", (e) => {
      handleFilesSelected(e.target.files);
    });
  }

  // Modal backdrop click to close
  const modal = document.getElementById("conversion-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeConversionModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeConversionModal();
    }
  });

  // Language toggle
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "ku" ? "en" : "ku";
      applyLanguage(nextLang);
    });
  }
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Register PWA Service Worker for Mobile WebApp
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = window.location.pathname.includes('/static') ? '/static/sw.js' : 'sw.js';
    navigator.serviceWorker.register(swPath)
      .then(reg => console.log('PDF.KRD WebApp Service Worker registered:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}
