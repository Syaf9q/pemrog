let imageDOM = document.getElementById("image");
let inputFile = document.getElementById("input-file");
let submitButton = document.getElementById("submit-button");
let formWrap = document.getElementById("form-wrap");
let redAlert = document.getElementById("alert");
//form
let namaDepan = document.getElementById("nama-depan");
let namaBelakang = document.getElementById("nama-belakang");
const tglLahir = document.getElementById("tanggal-lahir");
let eMail = document.getElementById("email");
let noHP = document.getElementById("noHP");

// const reloadPage = () => {
//     location.reload();
// };

inputFile.onchange = () => {
    imageDOM.src = URL.createObjectURL(inputFile.files[0]);
};

submitButton.addEventListener("click", (e) => {
    const userTanggalLahir = tglLahir.value;
    // if (
    //     !namaDepan.value ||
    //     !namaBelakang.value ||
    //     !noHP.value ||
    //     !eMail.value
    // ) {
    //     window.scrollTo(0, 0);
    //     redAlert.innerHTML = `<p>Provide required credentials</p>`;
    //     console.log({ namaDepan, namaBelakang, noHP, eMail });
    // } else {
    redAlert.style.display = "none";
    // e.preventDefault;
    const userFrontName = namaDepan.value;
    const userLastName = namaBelakang.value;
    const userEmail = eMail.value;
    const userPhoneNumber = noHP.value;

    formWrap.innerHTML = `<h2>SELAMAT BERGABUNG !</h2>
    <h2>${userFrontName.toUpperCase()} ${userLastName.toUpperCase()}</h2>
    <div id="end-showcase">
        <table style="width:100%">
            <tr>
                <td>Nama: </td>
                <td>${userFrontName} ${userLastName} </td>
            </tr>
                <tr>
                <td>Tanggal Lahir: </td>
                <td>${userTanggalLahir} </td>
                </tr>
                <tr>
                <td>Email </td>
                <td>${userEmail} </td>
                </tr>
                <tr>
                <td>NomorHandphone </td>
                <td>${userPhoneNumber} </td>
            </tr>
        </table>
        
        </div>; 
        <img src="${imageDOM.src} ">
        
        <button type="button "onClick="location.reload()">Back</button>`;
});
