// function using for memory charge part

function getMemoryCharge(isAdd){
    let extraMemory = document.getElementById('memory');
    if(isAdd == "eight"){
        let memoryCharge = extraMemory.innerText;
        extraMemory.innerText = 0; 
    }else if(isAdd == "sixteen"){
        let memoryCharge = extraMemory.innerText;
        extraMemory.innerText = 180; 
    }
    return extraMemory.innerText;
};
//// function using for extra storage part

function getStorageCharge(storage){
     let extraStorage = document.getElementById('storage');
     if(storage == 'lowest'){
        let storageCharge = extraStorage.innerText;
        extraStorage.innerText = 0; 
    }else if(storage == 'medium'){
        let storageCharge = extraStorage.innerText;
        extraStorage.innerText = 100; 
    }else if(storage== "highest"){
        let storageCharge = extraStorage.innerText;
        extraStorage.innerText = 180; 
    }
    return extraStorage.innerText;
};
// function using for delivery charge part

function getDeliveryCharge(delivery){
    let extraDelivery = document.getElementById('delivery');
    if(delivery == "free"){
        let deliveryCharge = extraDelivery.innerText;
        extraDelivery.innerText = 0; 
    }else if(delivery == "charge"){
        let deliveryCharge = extraDelivery.innerText;
        extraDelivery.innerText = 20; 
    }
    return extraDelivery.innerText;
};
// get total cost for Mac book PRO

function getTotalPrice(){
    let bestPrice = document.getElementById('best-price')
    const defaultPrice = parseInt(bestPrice.innerText);
   
    const memoryCharge = getMemoryCharge();
    const storageCharge = getStorageCharge();
    const deliveryCharge = getDeliveryCharge();
    const totalPrice =  document.getElementById('total');
    const promoTotal = document.getElementById('promo-total')
    const total = defaultPrice + parseInt(memoryCharge)+ parseInt( storageCharge) + parseInt(deliveryCharge);
    totalPrice.innerText = total;
    promoTotal.innerText = total;
    return promoTotal.innerText;
   
}

// click handler for memory part
document.getElementById('eight-gb').addEventListener('click',function(){
     getMemoryCharge("eight");
     getTotalPrice();
   
});
document.getElementById('sixteen-gb').addEventListener('click',function(){
     getMemoryCharge("sixteen");
     getTotalPrice();
   
});

// click handler for Storage part
document.getElementById('lowest-storage').addEventListener('click',function(){
    getStorageCharge("lowest");
    getTotalPrice();
})
document.getElementById('medium-storage').addEventListener('click',function(){
    getStorageCharge("medium");
    getTotalPrice()
})
document.getElementById('highest-storage').addEventListener('click',function(){
    getStorageCharge("highest");
    getTotalPrice()
})

// click handler for delivery part
document.getElementById('free-delivery').addEventListener('click',function(){
    getDeliveryCharge("free");
    getTotalPrice()
})
document.getElementById('delivery-charge').addEventListener('click',function(){
    getDeliveryCharge("charge");
    getTotalPrice()
});

// apply promo code get discount
document.getElementById('apply-promo').addEventListener('click',function(){
    const promoText = document.getElementById('promo-text');
    const promoCode = promoText.value;
  
    if(promoCode == "stevekaku"){
       const discount =  getTotalPrice() * 0.2;
       const totalPrice = document.getElementById('promo-total');
       const price = totalPrice.innerText;
       const updatePrice = price - discount;
       totalPrice.innerText = updatePrice;
    }
    promoText.value = " ";
});



