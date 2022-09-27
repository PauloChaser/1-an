export function initInfo() {
    const buttonOpenMore = document.querySelector('.js-open-more')
    const textInfo = document.querySelector('.js-info-text')

    if (!textInfo || !buttonOpenMore) {
        return
    }

    buttonOpenMore.addEventListener('click', function () {
        textInfo.classList.toggle('info__text--active')
    })


    const addPercentButton = document.querySelector('.js-add-percent')
    const currentPercentValue = document.querySelector('.js-current-percent')

    if (!addPercentButton || !currentPercentValue) {
        return;
    }

    addPercentButton.addEventListener('click', function () {
        const currentWidth = parseInt((currentPercentValue.style.width))
        const step = parseInt(addPercentButton.innerText.match(/\d+/))
        console.log(step);
        console.log(currentWidth);
        const newWidth = currentWidth + step > 100 ? 100 : currentWidth + step

        currentPercentValue.style.width = `${newWidth}%`
        currentPercentValue.textContent = `${newWidth}%`

        if (newWidth === 100) {
            addPercentButton.setAttribute('disabled', 'disabled')
        }
    })
}