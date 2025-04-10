/** @type {import('next').NextConfig} */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  turbopack: {
    rules: {
      '*.ftl': { loaders: ['raw-loader'], as: '*.ts' },
    },
  },
};
