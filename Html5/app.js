(function() {
    var user = {
        'name' : 'Dom'
    };

    sessionStorage.setItem('user', JSON.stringify(user));

    var obj = JSON.parse(sessionStorage.getItem('user'));
    document.getElementById("sessionData").innerHTML = obj.name;
})();