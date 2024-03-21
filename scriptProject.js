const images = document.querySelectorAll('.projectImagePage');


let windowResolutionTreshold = 900

PortraitWidth = '50%';
PortraitWidthM = '50%';

LandscapeWidth = '70%';
LandscapeWidthM = '70%';

ImageAutoHeight = 'auto';

standardImageWidth = '100px';
standardImageHeight = '100px';


images.forEach((image) => {
    let isZoomed = false;
    const aspectRatio = image.naturalHeight / image.naturalWidth;
    const fileName = image.getAttribute('src').split('/').pop(); 

    const isOpenImage = fileName.includes('_OPEN');
    
    // on startup
    if (window.innerWidth > windowResolutionTreshold) {
        if(isOpenImage) {
            if (aspectRatio > 1) {    
                image.style.width =  PortraitWidth
            } else {
                image.style.width = LandscapeWidth;
            }
            image.style.height = ImageAutoHeight;
            isZoomed = !isZoomed;
        }  
    } else {  /* mobile settings */
        if(isOpenImage) {
            if (aspectRatio > 1) {    
                image.style.width =  PortraitWidthM; 

            } else {
                image.style.width = LandscapeWidthM;

            }
            image.style.height = ImageAutoHeight;    
            isZoomed = !isZoomed;
        } 
    }

    // when clicked on image
    image.addEventListener('click', () => {
        if (window.innerWidth < windowResolutionTreshold) {
            if (isZoomed) {
                image.style.width = standardImageWidth; 
                image.style.height = standardImageHeight;
            } else {
                if (aspectRatio > 1) {
                    image.style.width = PortraitWidth;
                } else {
                    image.style.width = LandscapeWidth;
                }
                image.style.height = ImageAutoHeight; 
            }
        } else { /* mobile settings */
            if (isZoomed) {
                image.style.width = standardImageWidth; 
                image.style.height = standardImageHeight;
            } else {
                if (aspectRatio > 1) {
                    image.style.width = PortraitWidthM ;
                } else {
                    image.style.width = LandscapeWidthM;
                }
                image.style.height = ImageAutoHeight; 
            }
        }
        isZoomed = !isZoomed;
    });
});
