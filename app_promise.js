const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let sid = 'B6016357'
        if(sid){
            resolve({id: sid, name: 'Trirong'})
        }else {
            reject(new Error('Error 404 Bad Request'));
        }
    }, 1000)
})

p.then(result => {
    console.log(result);
})
.catch(function (err) {
    console.log(err);
})