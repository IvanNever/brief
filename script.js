window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.close')

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    const openModal = () => {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    close.addEventListener('click', closeModal)
    modal.addEventListener('click', closeModal)

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        postData('./mailer/smart.php', formData)
            .then(res => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                form.reset();
                openModal();
            })

    })

})