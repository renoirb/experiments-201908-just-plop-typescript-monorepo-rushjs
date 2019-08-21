const { task, tscTask, cleanTask, jestTask, tslintTask, defaultCleanPaths } = require('just-scripts');
const { parallel, series } = require('just-task');

/**
 * Setup build steps
 * The following is pretty much replaceable with only
 *
 * ```js
 * const { taskPresets } = require('just-scripts');
 * taskPresets.lib();
 * ```
 */

task('clean', cleanTask([...defaultCleanPaths(), 'lib-commonjs']));

task('ts:commonjs', tscTask({ module: 'commonjs', outDir: 'lib-commonjs' }));
task('ts:esm', tscTask({ module: 'esnext', outDir: 'lib' }));
task('ts:watch', tscTask({ module: 'esnext', outDir: 'lib', watch: true }));
task('ts', parallel('ts:commonjs', 'ts:esm'));

task('jest', jestTask());
task('jest:watch', jestTask({ watch: true }));

task('tslint', tslintTask());

task('build', series('ts'));
task('test', series('jest'));
task('lint', series('tslint'));
task('start', series('clean', 'ts:watch'));
task('start-test', series('jest:watch'));
task('rebuild', series('clean', 'build'));
