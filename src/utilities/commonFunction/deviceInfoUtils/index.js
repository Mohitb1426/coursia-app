import DeviceInfo from 'react-native-device-info';
import publicIP from 'react-native-public-ip';
import NetInfo from '@react-native-community/netinfo';

export const deviceInfo = async () => {
  const deviceId = DeviceInfo.getDeviceId();
  const deviceType = DeviceInfo.getDeviceType();
  let deviceIP = '';
  const ipStatus = publicIP().then((ip) => {
    deviceIP = ip;
  });

  const systemName = DeviceInfo.getSystemName();
  const systemVersion = DeviceInfo.getSystemVersion();
  const brand = DeviceInfo.getBrand();
  const version = DeviceInfo.getVersion();

  let networkType = '';
  const networkStatus = NetInfo.fetch().then((state) => {
    networkType = state.type;
  });

  try {
    await Promise.all([
      systemName,
      systemVersion,
      brand,
      version,
      deviceId,
      ipStatus,
      networkStatus,
      deviceType,
    ]);
    const data = {
      device_id: deviceId,
      device_type: deviceType,
      device_ip: deviceIP,
      device_os: systemName,
      device_os_version: systemVersion,
      device_brand: brand,
      app_version: version,
      device_network_type: networkType,
    };
    return await Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
