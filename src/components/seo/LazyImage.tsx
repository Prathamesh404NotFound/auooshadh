import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    placeholder?: string;
}

export const LazyImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    loading = 'lazy',
    placeholder = '/src/assets/logo.jpeg'
}: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`relative ${className}`}>
            <img
                ref={imgRef}
                src={isInView ? src : placeholder}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                onLoad={handleLoad}
                className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'
                    } ${className}`}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
        </div>
    );
};
