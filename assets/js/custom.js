

// scroll events
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 200) {
        document.getElementById("go-to-top").style.display = "none";
    } else {
        document.getElementById("go-to-top").style.display = "block";
    }
}

// fade
function fade_ul() { 
    let ulfade = document.getElementById('ulfade');
    
    if (ulfade.style.display == 'flex')
        ulfade.style.display = 'none';
    else
        ulfade.style.display = 'flex';
}

// fade and show the faq tasks
function fade_show1(id) { 
    let parg = document.getElementById(id);
    for (let i=1; i<=4; i++) {
        document.getElementById('parg'+i).style.display = 'none';
    }
    if (parg.style.display == 'none' ){  
        // parg.style.animation = 'fadein 1s ease-in forwards';
        parg.style.display = 'block';
    }
    else if (parg.style.display == 'block' ) 
        parg.style.display = 'none';
}function fade_show2(id) { 
    let parg = document.getElementById(id);
    for (let i=5; i<=8; i++) {
        document.getElementById('parg'+i).style.display = 'none';
    }
    if (parg.style.display == 'none' ) 
        parg.style.display = 'block';
    else if (parg.style.display == 'block' ) 
        parg.style.display = 'none';
}
