import { AppRegistry } from 'react-native';
import Main from './App';
if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        error: () => {
        },
    };
}
AppRegistry.registerComponent('Chowder', () => Main);