document.querySelector('.nav-toggler').onclick = function(e){
    e.preventDefault();

    document.querySelector('.nav-menu').classList.toggle('mobile-active');
    document.querySelector('.mobile-offset').classList.toggle('hidden');
    document.querySelector('.nav-toggler').classList.toggle('text-black');
    document.querySelector('.nav-toggler').classList.toggle('text-white');
}

document.querySelector('.mobile-offset').onclick = function(e){
    e.preventDefault();

    document.querySelector('.nav-menu').classList.toggle('mobile-active');
    document.querySelector('.mobile-offset').classList.toggle('hidden');
    document.querySelector('.nav-toggler').classList.toggle('text-black');
    document.querySelector('.nav-toggler').classList.toggle('text-white');
}

document.querySelectorAll('.nav-link').forEach(function(item){
    item.onclick = function(e){
        document.querySelector('.nav-menu').classList.remove('mobile-active');
        document.querySelector('.mobile-offset').classList.add('hidden');
        
    }
});