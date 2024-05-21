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
let umur = document.getElementById("umur");
let NIK = document.getElementById("NIK");

// const reloadPage = () => {
//     location.reload();
// };

inputFile.onchange = () => {
    imageDOM.src = URL.createObjectURL(inputFile.files[0]);
};

submitButton.addEventListener("click", (e) => {
    const userTanggalLahir = tglLahir.value;
    if (umur.value < 18) {
    }

    if (
        !namaDepan.value ||
        !namaBelakang.value ||
        !noHP.value ||
        !eMail.value ||
        !umur.value ||
        !NIK.value
    ) {
        window.scrollTo(0, 0);
        redAlert.innerHTML = `<p>Provide required credentials</p>`;
        console.log({ namaDepan, namaBelakang, noHP, eMail });
    } else if (umur.value < 18) {
        window.scrollTo(0, 0);
        redAlert.innerHTML = `<p>Umur harus diatas 18</p>`;
        console.log({ namaDepan, namaBelakang, noHP, eMail });
    } else if (NIK.value.length > 16) {
        window.scrollTo(0, 0);
        redAlert.innerHTML = `<p>NIK tidak boleh lebih dari 16 angka</p>`;
        console.log({ namaDepan, namaBelakang, noHP, eMail });
    } else {
        redAlert.style.display = "none";
        // e.preventDefault;
        const userFrontName = namaDepan.value;
        const userLastName = namaBelakang.value;
        const userEmail = eMail.value;
        const userPhoneNumber = noHP.value;
        const userUmur = umur.value;
        const userNIK = NIK.value;

        formWrap.innerHTML = `<h2>SELAMAT BERGABUNG !</h2>
    <h2>${userFrontName.toUpperCase()} ${userLastName.toUpperCase()}</h2>
    <div id="end-showcase">
        <table style="width:100%">
            <tr>
                <td class="table-form">Nama: </td>
                <td class="table-cred">${userFrontName} ${userLastName} </td>
            </tr>
                <tr>
                <td class="table-form">Tanggal Lahir: </td>
                <td class="table-cred">${userTanggalLahir} </td>
                </tr>
                <tr>
                <td class="table-form">Email: </td>
                <td class="table-cred">${userEmail} </td>
                </tr>
                <tr>
                <td class="table-form">NomorHandphone: </td>
                <td class="table-cred">${userPhoneNumber} </td>
            </tr>
                <tr>
                <td class="table-form">Umur: </td>
                <td class="table-cred">${userUmur} </td>
            </tr>
                <tr>
                <td class="table-form">NIK: </td>
                <td class="table-cred">${userNIK} </td> 
            </tr>
        </table>
        
        </div> 
        <img src="${imageDOM.src} "><br/>
        
        <button type="button "onClick="location.reload()">Back</button>`;
    }
});
