$(document).ready(function(){ 
    var userFeed = new Instafeed({
        get: 'user',
        userId: '5703446935',
        accessToken: '5703446935.1677ed0.231c80567ab144339023bd2714bebf38',
        resolution: 'standard_resolution',
        limit: 60,
    });
    userFeed.run();
    setTimeout(function(){
        $('.instafeed').addClass('shadowed');    
    },100);

});