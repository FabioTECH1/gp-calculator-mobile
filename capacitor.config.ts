import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.datatown.utilityapp',
  appName: 'DataTown',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
