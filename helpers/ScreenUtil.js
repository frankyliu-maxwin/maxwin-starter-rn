import { Dimensions, PixelRatio } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();

const basic_width = 1080;
const basic_height = 1920;
const scale = Math.min(deviceHeight / basic_height, deviceWidth / basic_width);

export function dp2px(size) {
    return (size * scale) / fontScale;
}
