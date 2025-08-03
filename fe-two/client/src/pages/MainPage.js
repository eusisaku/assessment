import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function MainPage() {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((e) => {
                console.warn('Autoplay blocked:', e);
            });
        }
    }, []);

    const handleLogout = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
            <audio ref={audioRef} loop src="/audio/happy-birthday.mp3" />

            <div className="text-center space-y-4">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-40 h-40 bg-yellow-200 rounded-full shadow-lg flex items-center justify-center text-6xl">
                            🎂
                        </div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2">
                            <div className="w-2 h-8 bg-red-600 rounded-sm mx-auto relative animate-bounce">
                                <div className="w-3 h-3 bg-orange-300 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 animate-ping" />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-purple-800">
                    🎉 Selamat Ulang Tahun PT Tech Mayantara Asia! 🎉
                </h1>
                <p className="text-gray-700">
                    Semoga semakin sukses, inovatif, dan membawa dampak besar bagi dunia digital! 🚀
                </p>

                <button
                    onClick={handleLogout}
                    className="mt-3 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
