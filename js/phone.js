const countries = [
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "France", code: "FR", phone: 33 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
],

select_box = document.querySelector('.options'),
search_box = document.querySelector('.search-box'),
input_box = document.querySelector('input[type="tel"]'),
selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="flag flag-${country.code.toLowerCase()}"></span>
            <span class="country-name font-size">${country.name}</span>
        </div>
        <p class="font-size">+${country.phone}</p>
    </li> `;
    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    console.log(this);
    const icon = this.querySelector('.flag').cloneNode(true),
        phone_code = this.querySelector('p').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon);

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);

document.addEventListener("click", (event) => {
    if (!select_box.contains(event.target) && !selected_option.contains(event.target)) {
        select_box.classList.remove('active');
        selected_option.classList.remove('active');
    }
});