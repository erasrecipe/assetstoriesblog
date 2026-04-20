import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  initials: string;
  role: string;
  description: string;
  image?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  pinterest?: string;
  goodreads?: string;
  threads?: string;
  fullWidth?: boolean;
}

export default function TeamMemberCard({
  name,
  initials,
  role,
  description,
  image,
  facebook,
  instagram,
  twitter,
  linkedin,
  pinterest,
  goodreads,
  threads,
  fullWidth = false,
}: TeamMemberCardProps) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group ${fullWidth ? 'md:col-span-2' : ''}`}>
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold via-gold-light to-primary-darker p-1 mb-4 group-hover:scale-110 transition-transform duration-300">
          {image ? (
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
              <Image
                src={image}
                alt={name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-4xl font-bold text-primary-dark dark:text-gold">
              {initials}
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gold dark:text-gold-light mb-2">{name}</h3>

        {/* Role */}
        <p className="text-primary-dark dark:text-gold font-semibold mb-2">{role}</p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>

        {/* Social Links */}
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-300 dark:border-gray-600 w-full justify-center">
          {facebook && (
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" 
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          )}
          
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all hover:scale-110" 
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110" 
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
          
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-all hover:scale-110" 
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          
          {threads && (
            <a 
              href={threads} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110" 
              aria-label="Threads"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.78 9.452c5.73-8.695 14.686-10.653 21.515-10.653h.227c6.72.076 12.15 2.23 16.164 6.407 3.046 3.174 5.176 7.65 6.354 13.362a90.67 90.67 0 0 0-11.75-.792c-22.206 0-37.086 12.29-37.086 30.603 0 8.318 3.033 15.327 8.773 20.273 5.74 4.947 13.578 7.665 22.064 7.665 11.12 0 20.406-4.093 26.855-11.839 5.486-6.578 8.83-15.73 9.935-27.23 7.428 4.05 12.928 9.916 15.687 16.736 2.27 5.606 2.924 13.041 1.942 22.1-2.095 19.36-16.236 30.725-37.816 30.726-10.147 0-19.926-3.025-28.343-8.765-8.418-5.74-14.963-13.94-18.958-23.714-3.995-9.775-5.99-20.924-5.778-32.28.21-11.356 2.65-22.394 7.07-31.99 4.418-9.594 10.76-17.494 18.386-22.878 7.625-5.384 16.52-8.076 25.767-7.792 15.073.462 27.268 5.918 35.315 15.787 6.153 7.545 10.01 17.11 11.656 28.286l15.134-2.065c-2.012-13.61-6.877-25.54-14.71-35.105C123.135 10.867 108.21 4.41 90.147 3.88c-11.83-.349-23.253 2.933-33.104 9.505-9.85 6.572-17.62 16.05-22.54 27.447-4.918 11.397-7.74 24.35-8.176 37.523-.436 13.173 1.483 26.246 5.566 37.869 4.083 11.624 11.012 21.638 20.08 29.006C61.04 153.598 72.31 158 84.583 158h.09c27.694-.016 47.36-15.623 50.04-39.683 1.273-11.414.335-20.625-2.874-28.164-2.91-6.838-7.627-12.685-13.913-17.232a62.816 62.816 0 0 1 3.61 16.067Zm-45.116 41.318c-5.85 0-10.84-1.565-14.45-4.53-3.61-2.966-5.415-7.04-5.415-12.19 0-10.808 8.81-16.29 22.82-16.29 4.26 0 8.26.424 11.94 1.264-1.02 10.023-3.783 17.72-8.21 22.898-4.428 5.178-10.183 7.776-17.147 7.776l.462.072Z"/>
              </svg>
            </a>
          )}
          
          {pinterest && (
            <a 
              href={pinterest} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all hover:scale-110" 
              aria-label="Pinterest"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
              </svg>
            </a>
          )}
          
          {goodreads && (
            <a 
              href={goodreads} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-500 transition-all hover:scale-110" 
              aria-label="Goodreads"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9.4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2.5-1 1.1-1.9 1.7-2.9.2.1.4.1.6.2.3 3.8.2 30.7.1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
