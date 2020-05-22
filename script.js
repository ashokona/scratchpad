console.log("script loaded");

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );     
        anHttpRequest.setRequestHeader("Group", 'tet');       
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();
client.get('https://qu8dkg7xh1.execute-api.us-east-1.amazonaws.com/dev/ping', function(response) {
    // do something with response
    console.log(response)
});