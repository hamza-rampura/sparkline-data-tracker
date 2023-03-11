function goToPage(data) {
    console.log(data);
    const selectBox = document.querySelector('input[name="Options"]:checked');
    const selectedValue = selectBox.value;
    window.location.href =
        window.location.origin + `/processes/${selectedValue}.html`;
}

function submitJob() {
    console.log("job submitted");
}
