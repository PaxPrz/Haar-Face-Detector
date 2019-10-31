function shadesDropFunction(){
    document.getElementById('shadesDropdown').classList.toggle('show');
}

function wigDropFunction(){
    document.getElementById('wigDropdown').classList.toggle('show');
}

function beardDropFunction(){
    document.getElementById('beardDropdown').classList.toggle('show');
}

function hatDropFunction(){
    document.getElementById('hatDropdown').classList.toggle('show');
}


window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        console.log('Window exit called');
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for(i=0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }

}