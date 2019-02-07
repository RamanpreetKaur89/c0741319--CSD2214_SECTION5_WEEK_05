function myFunction(a, b) {
    return a + b;  // The function returns the product of p1 and p2
}

function arrays() {
    var pens;
    pens = new Array("red", "orange", "Green", "Blue", "Purple");
    markers = pens;
    console.log(markers);
    console.log(markers[0]);

    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);
    }
    alert("Length of array is :"+pens.length);

}