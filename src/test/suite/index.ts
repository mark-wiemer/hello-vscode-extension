import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';

export const run = () => {
    const testsRoot = path.resolve(__dirname, '.');
    return mainRun(testsRoot);
};

/**
 * Runs the tests in the given folder
 * @param testsRoot Full path to tests to run
 * @returns The callback to run the tests
 */
export function mainRun(testsRoot: string): Promise<void> {
    // Create the mocha test
    const mocha = new Mocha({
        ui: 'tdd',
        color: true,
    });

    return new Promise((c, e) => {
        glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
            if (err) {
                return e(err);
            }

            // Add files to the test suite
            files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

            try {
                // Run the mocha test
                mocha.run((failures) => {
                    if (failures > 0) {
                        e(new Error(`${failures} tests failed.`));
                    } else {
                        c();
                    }
                });
            } catch (err) {
                console.error(err);
                e(err);
            }
        });
    });
}
