import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
          language === 'pt'
            ? 'border-primary scale-110 shadow-md'
            : 'border-transparent opacity-60 hover:opacity-100'
        }`}
        aria-label="Português"
        title="Português"
      >
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path fill="#009B3A" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/>
          <path fill="#FEDF01" d="M32.728 18L18 29.124 3.272 18 18 6.876z"/>
          <circle fill="#002776" cx="18" cy="18" r="6.5"/>
          <path fill="#CBE9D4" d="M12.277 18.46a6.46 6.46 0 0 0-.257 1.774c3.207.429 7.752.062 10.927-2.444a6.5 6.5 0 0 0-10.67.67z"/>
          <path fill="#FFF" d="M12.277 18.46c-.055.191-.099.387-.134.585 3.03.263 7.162-.058 10.134-2.089a6.5 6.5 0 0 0-1.33-1.167c-2.973 2.263-6.883 2.634-8.67 2.671z"/>
        </svg>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
          language === 'en'
            ? 'border-primary scale-110 shadow-md'
            : 'border-transparent opacity-60 hover:opacity-100'
        }`}
        aria-label="English"
        title="English"
      >
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path fill="#B22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445z"/>
          <path fill="#EEE" d="M18 5H4a4 4 0 0 0-4 4v1h18V5z"/>
          <path fill="#B22334" d="M18 7H0v2h18V7zm0 4H0v2h18v-2zm18-2H18v2h18V9z"/>
          <path fill="#EEE" d="M18 11H0v2h18v-2zm0 4H0v2h18v-2zm18-2H18v2h18v-2z"/>
          <path fill="#B22334" d="M18 15H0v2h18v-2zm18 0H18v2h18v-2zM0 19h36v2H0v-2zm0 4h36v2H0v-2z"/>
          <path fill="#EEE" d="M0 17h36v2H0v-2zm0 4h36v2H0v-2z"/>
          <path fill="#B22334" d="M0 25h36v2H0v-2zm0 4h36v2H0v-2z"/>
          <path fill="#EEE" d="M0 27v2h36v-2H0z"/>
          <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"/>
          <path fill="#FFF" d="M1.5 9l.22.69H2.5l-.64.47.24.69L1.5 10.38l-.6.47.24-.69-.64-.47h.78zM5.5 9l.22.69H6.5l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM9.5 9l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM13.5 9l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM3.5 7l.22.69H4.5l-.64.47.24.69L3.5 8.38l-.6.47.24-.69-.64-.47h.78zM7.5 7l.22.69H8.5l-.64.47.24.69L7.5 8.38l-.6.47.24-.69-.64-.47h.78zM11.5 7l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM15.5 7l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM1.5 11l.22.69H2.5l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM5.5 11l.22.69H6.5l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM9.5 11l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM13.5 11l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM3.5 13l.22.69H4.5l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM7.5 13l.22.69H8.5l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM11.5 13l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78zM15.5 13l.22.69h.78l-.64.47.24.69-.6-.47-.6.47.24-.69-.64-.47h.78z"/>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
