/* data: {
    operator: data.operatorName|| null;
}
 */
let form_data;
console.log("hello");
const index_submit = document.querySelector("#index_submit");
const last_submit = document?.querySelector("#last_submit");
index_submit.addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    let formEl = document.forms.my_form;
    let formData = new FormData(formEl);
    for (const value of formData.values()) {
        console.log(value);
    }
    const selectedValue = document.querySelector(
        'input[name="Options"]:checked'
    ).value;
    window.location.href =
        window.location.origin + `/processes/${selectedValue}.html`;
});

last_submit.addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    let formEl = document.forms.last_form;
    let formData = new FormData(formEl);
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }
    /* const selectedValue = document.querySelector(
        'input[name="Options"]:checked'
    ).value;
    window.location.href =
        window.location.origin + `/processes/${selectedValue}.html`; */
});

function submitJob() {
    console.log("job submitted");
}
