const productDOM = document.querySelector(".product-dom")

const showProduct = async () => {
    //loading
    try {
        const {
            data: { product },
        } = await axios.get("/api/v1/product")
        // const {
        //     data: { product },
        // } = await axios.get("api/v1/product");
        // if(){
        //if theres no product, then do something
        // }
        const allProduct = product
            .map((prod) => {
                const { name, price, rating, createdAt, _id: taskID } = prod
                return `<div class="single-prod">
                <div class="single-prod-header">
            <h5>${name}</h5>
            <div class="task-links">
            <!-- edit link -->
            <a href="task.html?id=${taskID}"  class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fas fa-trash"></i>
            </button>
            </div>
            </div>
            <h1>Rp. ${price}</h1>
            </div>`
            })
            .join("")
        // console.log(product);
        productDOM.innerHTML = allProduct
    } catch (error) {
        productDOM.innerHTML = `<h1>error occurred</h1>`
    }
}

showProduct()

//for delete

productDOM.addEventListener("click", async (e) => {
    const el = e.target
    if (el.parentElement.classList.contains("delete-btn")) {
        //   loadingDOM.style.visibility = 'visible'//we dont have a loading dom
        const id = el.parentElement.dataset.id
        try {
            await axios.delete(`/api/v1/product/${id}`)
            showTasks()
        } catch (error) {
            console.log(error)
        }
    }
    // loadingDOM.style.visibility = "hidden"
})

// axios.get("/api/v1/product").then((res) => {
//     console.log(res);
// });

// const showTask = async () => {
//     const {
//         data: { product },
//     } = await axios.get("/api/v1/product");
//     console.log(product);
// };

// showTask();
