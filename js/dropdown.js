function shadesDropFunction(){
    document.getElementById('shadesDropdown').classList.toggle('show');
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