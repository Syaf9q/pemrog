const taskIDDOM = document.querySelector(".task-edit-id")
const taskNameDOM = document.querySelector(".task-edit-name")
const productStockVal = document.querySelector(".product-edit-stock")
const productQuantityDOM = document.querySelector(".task-edit-quantity")
const productTotalPrice = document.querySelector(".product-edit-totalprice")

const editFormDOM = document.querySelector(".single-task-form")
const editBtnDOM = document.querySelector(".task-edit-btn")
const formAlertDOM = document.querySelector(".form-alert")
const params = window.location.search
const id = new URLSearchParams(params).get("id")
let tempName
let tempPrice
let tempQuantity

const sum = () => {
 //  console.log("yes")
 productQuantityDOM.setAttribute("value", `${productQuantityDOM.value}`)
 productTotalPrice.textContent = `Rp. ${productQuantityDOM.value * tempPrice}`

 //  console.log(tempPrice)
}
const showTask = async () => {
 try {
  const {
   data: { product },
  } = await axios.get(`/api/v1/product/${id}`)
  const { _id: productID, name, quantity, price } = product

  tempPrice = price
  tempQuantity = quantity

  taskIDDOM.textContent = productID
  taskNameDOM.textContent = name
  productStockVal.textContent = quantity
  //   console.log(typeof productQuantityDOM.value)
  productQuantityDOM.setAttribute("max", `${quantity}`)
  //   productQuantityDOM.setAttribute("oninput", "sum()") //bajingan
  productTotalPrice.textContent = `Rp. ${price}`
  tempName = name
  // if (completed) {
  //     taskCompletedDOM.checked = true
  // }
 } catch (error) {
  console.log(error)
 }
}

showTask()

editFormDOM.addEventListener("submit", async (e) => {
 editBtnDOM.textContent = "Loading..."
 e.preventDefault()
 try {
  const taskName = taskNameDOM.value
  const prodQuantity = productQuantityDOM.value
  console.log(prodQuantity)
  console.log(tempQuantity)
  const {
   data: { product },
  } = await axios.patch(`/api/v1/product/${id}`, {
   quantity: tempQuantity - prodQuantity,
   //    name: taskName,
   //    completed: taskCompleted,
  })
  const { _id: productID, completed, name, quantity } = product

  console.log(quantity)

  taskIDDOM.textContent = productID
  productStockVal.textContent = quantity
  tempQuantity = quantity
  productQuantityDOM.value = 1

  if (quantity <= 0) {
   axios.delete(`/api/v1/product/${productID}`)
   location.replace("products.html")
  }
  //   taskNameDOM.value = name
  //   tempName = name
  //   if (completed) {
  //    taskCompletedDOM.checked = true
  //   }
  formAlertDOM.style.display = "block"
  formAlertDOM.textContent = `product bought successfully, awaiting for invoice...`
  formAlertDOM.classList.add("text-success")
 } catch (error) {
  console.error(error)
  taskNameDOM.value = tempName
  formAlertDOM.style.display = "block"
  formAlertDOM.innerHTML = `error, please try again`
 }
 editBtnDOM.textContent = "BUY NOW"
 setTimeout(() => {
  formAlertDOM.style.display = "none"
  formAlertDOM.classList.remove("text-success")
 }, 3000)
})

// const tes = () => {
//  console.log(productQuantityDOM.value)
// }
