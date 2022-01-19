const filterPictures = () => {
   const menu = document.querySelector('.portfolio-menu'),
         items = menu.querySelectorAll('li'),
         btnGrandMother = menu.querySelector('.grandmother'),
         btnGrandFather = menu.querySelector('.granddad'),
         wrapper = document.querySelector('.portfolio-wrapper'),
         markAll = wrapper.querySelectorAll('.all'),
         no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            })
        } 
        else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };
    
    items.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let c = '.' + btn.className;
            let z = document.querySelectorAll(c.replace(' animated fadeIn', ''));
            typeFilter(z);
            if (e.target == btnGrandMother || e.target == btnGrandFather) {
                typeFilter();
            }
        })
    })

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filterPictures;