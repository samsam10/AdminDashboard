const sideMenu = document.querySelector("aside") //grabbing element
const menuBtn = document.querySelector("#menu-btn") //grabbing 'id', u put # in front of the id
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")// grabbing class u put '.' in front of the class


//show side bar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "block";
})

//close side bar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "none";
   
})

//change theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables')

themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    // themeToggler.querySelector('span').classList.toggle('active')
})

//fill orders in table

Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' :
                                    order.shipping === 'pending' ? 'warning' :
                                    'primary'}"> ${order.shipping}</td>
                        <td class="primary">Details</td>
                      `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)


})
