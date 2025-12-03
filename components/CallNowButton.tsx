export function CallNowButton() {
    return (
        <a
            href="tel:0648035685"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-vista-green to-lime-500 text-vista-dark font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
        >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full"></span>
            <span className="relative flex items-center gap-2">
                <span className="text-2xl animate-bounce">📞</span>
                <span>BEL DIRECT: 06-48035685</span>
            </span>
        </a>
    );
}
