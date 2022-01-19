const drop = () => {
    // знаходимо потрібний інпут і вішаємо на нього addEventListener 
    const fileInputs = document.querySelectorAll('[name="upload"]');
    
    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid red';
    }
    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
    }

    fileInputs.forEach(input => {
        input.addEventListener('dragenter', (e) => {
            e.preventDefault();
            highlight(input);
        });
    })
}

export default drop;