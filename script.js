
$(document).ready(function () {
    var users = [];
    function getUsers(){
            $.ajax({
                url: 'https://demo2183715.mockable.io/',
                type: 'GET',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                contentType: 'application/json; charset=utf-8',
                success: function (result) {
                    console.log(result.data);
                    users = result.data;
                    usersTable();    
                },
                error: function (error) {
                    console.log(error);
                    
                }
            });
    }
    getUsers();
    
    
    function usersTable(){
        var tableBody = " ";
        document.getElementById("records_table").innerHTML = " ";
        users.forEach( user => {
            tableBody += '<tr><td>' + user.name + '</td><td>' + user.email + '</td><td>' + user.phone + '</td><td>' + user.country + '</td></tr>';            
        } )
        console.log(tableBody);
        $('#records_table').append(tableBody);
    }
        

    $("#saveUser").click(function(){
        let user = {};
        user.name =  $('#fName').val();
        user.email =  $('#email').val();
        user.phone =  $('#phone').val();
        user.country =  $('#country').val();

        $.ajax({
            url: 'https://demo2183715.mockable.io/',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                users.push(user);
                usersTable();
            },
            error: function (error) {
                console.log(error);
                
            }
        });
    })
});