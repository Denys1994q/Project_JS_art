const accordion = () => {
    const accordion = document.querySelector('#accordion');
    const accordionTitles = accordion.querySelectorAll('span');
    const accordionBlocks = document.querySelectorAll('.accordion-block');
    
    accordionBlocks.forEach(item => {
        item.style.display = 'none';
    });

    accordionTitles.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('active-style')) {
                accordionTitles.forEach(item => {
                    item.classList.remove('active-style');
                })
                e.target.classList.add('active-style');
            }
            accordionBlocks.forEach(item => {
                item.style.display = 'none';
            });
            accordionBlocks[index].style.display = 'block';
            accordionBlocks[index].classList.add('animated', 'fadeInDown');
        });
    });    
}


export default accordion;