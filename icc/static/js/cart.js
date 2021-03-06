// Zumeri Faton

var updateBtns = document.getElementsByClassName('update-cart')

for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var produitId = this.dataset.produit
        var action = this.dataset.action
        console.log('produitId:', produitId, 'action:', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser') {
            console.log('Not logged in')
        }
        else {
            updateUserOrder(produitId, action)
        }
    })
}

function updateUserOrder(produitId, action) {
    console.log('User is logged in, sending data..')

    var url = 'update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'produitId': produitId, 'action': action})
    })

        .then((response) => {
            return response.json()
        })

        .then((data) => {
            console.log('data:', data)
            //location.reload()
        })

}

function updateQte(produitId, action) {
    var url = 'update_item/'

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        JSON.stringify({'produitId': produitId, 'action': action})
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

