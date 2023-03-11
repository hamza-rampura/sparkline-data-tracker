/* data: {
    operator: data.operatorName|| null;
}
 */
let form_data;
const main_submit = document.querySelector("#index_submit");
main_submit.addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    let formEl = document.forms.my_form;
    let formData = new FormData(formEl);
    console.log("hello");
    for (const value of formData.values()) {
        console.log(value);
    }
    const selectBox = document.querySelector('input[name="Options"]:checked');
    const selectedValue = selectBox.value;
    console.log(window.location.href, window.location.origin);
    window.location.href =
        window.location.origin + `/processes/${selectedValue}.html`;
});

function submitJob() {
    console.log("job submitted");
}
