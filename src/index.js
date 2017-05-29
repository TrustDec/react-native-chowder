import { AppRegistry,StatusBar } from 'react-native';
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
console.log(global);
StatusBar.setBarStyle('light-content',true);
AppRegistry.registerComponent('Chowder', () => Main);