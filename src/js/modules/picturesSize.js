const picturesSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);
    
    function showPicture(block) {
        const blockImg = block.querySelector('img');
        blockImg.src = blockImg.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        })
    };
    function hidePicture(block) {
        const blockImg = block.querySelector('img');
        blockImg.src = blockImg.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        })
    };

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showPicture(block);
        })
        block.addEventListener('mouseout', () => {
            hidePicture(block);
        })
    })
};

export default picturesSize;