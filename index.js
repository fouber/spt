var fis = module.exports = require('fis');
fis.cli.name = 'spt';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.config.set('modules.lint.js', 'jshint');
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
fis.config.set('roadmap.path', [
    {
        reg : 'map.json',
        release : false
    },
    {
        reg : '**',
        useStandard : false
    }
]);
Object.defineProperty(global, 'spt', {
    enumerable : true,
    writable : false,
    value : fis
});
