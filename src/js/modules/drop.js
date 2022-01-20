import { postData } from "../services/requests";

const drop = () => {
    // знаходимо потрібний інпут і вішаємо на нього addEventListener 
    const fileInputs = document.querySelectorAll('[name="upload"]');
    
    function highlight(item) {
        item.closest('.file_upload').style.border = '2px solid red';
        item.closest('.file_upload').style.backgroundColor = 'orange';
    }
    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    fileInputs.forEach(input => {
        input.addEventListener('dragenter', (e) => {
            e.preventDefault();
            highlight(input);
        });
        input.addEventListener('dragover', (e) => {
            e.preventDefault();
            highlight(input);
        });
        input.addEventListener('dragleave', (e) => {
            e.preventDefault();
            unhighlight(input);
        });
        input.addEventListener('drop', (e) => {
            e.preventDefault();
            unhighlight(input);
            input.files = e.dataTransfer.files; // щоб в інпуті показалася картинка, яку дропнули 
            const t = e.dataTransfer.files;

            const formData = new FormData(); // 2.
            formData.append('file', input.files[0]);
            
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
            if (input.classList.contains('without_form')) {
                postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                })
            }
        });
    })
}

export default drop;