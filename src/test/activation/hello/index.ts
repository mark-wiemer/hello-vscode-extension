import * as path from 'path';
import { mainRun } from '../../suite/index';

export const run = () => {
    const testsRoot = path.resolve(__dirname);
    return mainRun(testsRoot);
};
