import ReactNative from 'react-native';
const {Dimensions,PixelRatio,Platform} = ReactNative;
const {height, width} = Dimensions.get('window');
// 屏幕宽度
global.WIDTH = width;
// 屏幕高度
global.HEIGHT = height;
// 屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');