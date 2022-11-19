/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key: 'pk.eyJ1IjoiY29kZXlvbyIsImEiOiJjbDlsNmFwY2cwbjNvM29xcm9veXFwMmR0In0.Si_ke-8U324TSI2i6CtkPQ',
  },
  images:{
    domains: ["ifh.cc", "www.jsonkeeper.com"],
  },

};

module.exports = nextConfig
