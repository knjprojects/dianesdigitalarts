/** @type {import('next').NextConfig} */
const nextConfig = {
//experimental:{appDir:true,},
    
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com', // Empty string allows all domains
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com', // Empty string allows all domains
          },
          {
            protocol: 'https',
            hostname: 'images.google.com', // Empty string allows all domains
          },
        
        ],
         // domains: ['lh3.googleusercontent.com','images.google.com','google.com','i.ytimg.com'], // Add your domain here
        },
        async headers() {
            return [
              {
                source: '/(.*)',
                headers: [
                  {
                    key: 'Access-Control-Allow-Origin',
                    value: 'http://localhost:3000',
                  },
                ],
              },
            ];
          },
}
;

export default nextConfig;
