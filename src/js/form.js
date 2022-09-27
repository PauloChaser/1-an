const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function initForm() {
    inputSelect()

    const form = document.querySelector('form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', (e) => handleFormSubmit(e,form));
}

function handleFormSubmit(e,form) {
    e.preventDefault();

    const fd = new FormData(form);
    const submit = form.querySelector('input[type="submit"]');
    const url = form.getAttribute('action')

    const inputMail = document.getElementById('mail')
    const inputCheckbox = document.getElementById('checkbox')

    const isEmailValid = EMAIL_REGEXP.test(inputMail.value)

    inputMail.classList.toggle('input--error', !isEmailValid);
    inputCheckbox.classList.toggle('checkbox__element--error', !inputCheckbox.checked)

    inputMail.addEventListener('input', function (){
        inputMail.classList.remove('input--error')
    })

    if (!url || !isEmailValid || !inputCheckbox.checked) {
        return;
    }


    fetch(url, {
        method: 'POST',
        body: fd,
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.success) {
                submit.value = 'Отправлено';
                submit.setAttribute('disabled', 'disabled');
            }
        });
}

function inputSelect() {
    const select = document.querySelector('.js-select')
    const selectOptions = select.querySelector('.js-select-options')
    const selectedValue = select.querySelector('.js-selected-value')

    select.addEventListener('click', function () {
        select.classList.toggle('select--active')
    })

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.js-select')) {
            select.classList.remove('select--active')
        }
    })

    selectOptions.addEventListener('click', function (event) {
        const target = event.target
        const option = target.closest('.select__option')
        const optionValue = option.innerText
        const selectReal = document.getElementById('select')
        const optionsReal = [...selectReal.options]

        if (!option) {
            return
        }

        optionsReal.forEach(function (option) {
            if (option.innerText === optionValue) {
                option.setAttribute('selected', true);
                selectedValue.innerText = option.innerText
            } else {
                option.removeAttribute('selected');
            }
        })
    })
}
