document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'https://onlinejpgtools.com/images/examples-onlinejpgtools/leaves-with-droplets.jpg', 
        'https://cdn.smartslider3.com/wp-content/uploads/slider/cache/32d175264b8d9b20addfea4f6f27b649/static2.jpg',
        'https://readyshoppingcart.com/wp-content/uploads/2014/11/Nature-Full-HD-Wallpaper-national-geographic-7822288-1920-10801-700x400.jpg'
    ];
    let currentIndex = 0;
    const sliderImage = document.getElementById('sliderImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function updateImage() {
        sliderImage.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    updateImage();
});