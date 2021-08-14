document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    document.getElementById("v1").addEventListener('click', vibrate);
    document.getElementById("v2").addEventListener('click', vibrate1);
    document.getElementById("v3").addEventListener('click', vibrate);
    document.getElementById("v4").addEventListener('click', vibrate1);
    };
    function vibrate()
    {
    var time = 3000;
    navigator.vibrate(time);
    alert('Gate is opening' );
    }
    function vibrate1()
        {
        var time = 3000;
        navigator.vibrate(time);
        alert('Gate is closing');
        }
