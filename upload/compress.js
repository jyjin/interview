const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
 
(async () => {
    await imagemin(['*.jpg'], 'build/images', {
        use: [
            imageminMozjpeg()
        ]
    });
 
    console.log('Images optimized');
})();