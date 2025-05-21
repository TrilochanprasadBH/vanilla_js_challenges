const images = [
    'https://picsum.photos/id/1022/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1024/300/200'
];


document.addEventListener('DOMContentLoaded', () => {
    const liveImage  = document.getElementById('gallery-image-live');
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');

    if(!nextBtn || !backBtn || !liveImage){
       return console.log('some element is missing');
    }

    let currentIndex = 0;


    const ChangeImage = ()=>{
        console.log(currentIndex);
        liveImage.setAttribute('src', images[currentIndex]);
        liveImage.setAttribute('alt', `Image ${currentIndex + 1}`);
        backBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    backBtn.addEventListener('click', ()=>{
        if(currentIndex>0){
            currentIndex--;
            ChangeImage();
        }
    })

    nextBtn.addEventListener('click', ()=>{
    if (currentIndex < images.length - 1) {
        currentIndex++;
        console.log(currentIndex,'nextbtn');
        ChangeImage();
    }
    })

        ChangeImage();
})