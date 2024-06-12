const taskIDDOM = document.querySelector(".task-edit-id")
const taskCompletedDOM = document.querySelector(".task-edit-completed")
const editFormDOM = document.querySelector(".single-task-form")
const editBtnDOM = document.querySelector(".task-edit-btn")
const formAlertDOM = document.querySelector(".form-alert")

// const nameFormDOM = document.querySelector('')
const taskNameDOM = document.querySelector(".product-edit-name")
const priceFormDOM = document.querySelector(".product-edit-price")
const quantityFormDOM = document.querySelector(".product-edit-quantity")
const imginputDOM = document.getElementById("input-file")

const params = window.location.search
const id = new URLSearchParams(params).get("id")
let tempName

// const showTask = async () => {
//     try {
//         const {
//             data: { product },
//         } = await axios.get(`/api/v1/product/${id}`)
//         const { _id: productID, name } = product

//         taskIDDOM.textContent = productID
//         taskNameDOM.value = name
//         tempName = name
//         // if (completed) {
//         //     taskCompletedDOM.checked = true
//         // }
//     } catch (error) {
//         console.log(error)
//     }
// }

// showTask()

editFormDOM.addEventListener("submit", async (e) => {
 e.preventDefault()
 const name = taskNameDOM.value
 const price = priceFormDOM.value
 const quantity = quantityFormDOM.value

 const imgPath = imginputDOM.value
 const simplifiedPath = imgPath.replace(/^.*\\/, "")
 const imgSrc = simplifiedPath

 console.log(simplifiedPath)

 try {
  await axios.post("/api/v1/product", { name, price, quantity, imgSrc })
  // showTasks()
  // taskInputDOM.value = ""
  formAlertDOM.style.display = "block"
  formAlertDOM.textContent = `success, Product added to store`
  formAlertDOM.classList.add("text-success")
 } catch (error) {
  formAlertDOM.style.display = "block"
  formAlertDOM.innerHTML = `error, please try again`
 }
 setTimeout(() => {
  formAlertDOM.style.display = "none"
  formAlertDOM.classList.remove("text-success")
 }, 3000)
})

// editFormDOM.addEventListener("submit", async (e) => {
//     editBtnDOM.textContent = "Loading..."
//     e.preventDefault()
//     try {
//         const taskName = taskNameDOM.value
//         const taskCompleted = taskCompletedDOM.checked

//         const {
//             data: { product },
//         } = await axios.patch(`/api/v1/product/${id}`, {
//             name: taskName,
//             completed: taskCompleted,
//         })

//         const { _id: productID, completed, name } = product

//         taskIDDOM.textContent = productID
//         taskNameDOM.value = name
//         tempName = name
//         if (completed) {
//             taskCompletedDOM.checked = true
//         }
//         formAlertDOM.style.display = "block"
//         formAlertDOM.textContent = `success, edited task`
//         formAlertDOM.classList.add("text-success")
//     } catch (error) {
//         console.error(error)
//         taskNameDOM.value = tempName
//         formAlertDOM.style.display = "block"
//         formAlertDOM.innerHTML = `error, please try again`
//     }
//     editBtnDOM.textContent = "Edit"
//     setTimeout(() => {
//         formAlertDOM.style.display = "none"
//         formAlertDOM.classList.remove("text-success")
//     }, 3000)
// })
