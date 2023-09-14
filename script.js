const riot = document.getElementById('riot');

riot.addEventListener('mouseenter', ()=> {
    setTimeout(() => {
        riot.innerHTML = 'ZORO제로#ZERO';
    }, 300);
    
});

riot.addEventListener('mouseleave', () => {
    riot.innerHTML = 'Valorant';
});


const discord = document.getElementById('discord');
const instagram = document.getElementById('instagram');
const youtube = document.getElementById('youtube');
const github = document.getElementById('github');
const steam = document.getElementById('steam');


discord.addEventListener('click', function(){
    event.preventDefault(); 
    
    window.open('https://discord.gg/e2dNsT9quX', '_blank');
})

youtube.addEventListener('click', function(){
    event.preventDefault(); 
    
    window.open('https://www.youtube.com/@Z3rOGaming', '_blank');
})


instagram.addEventListener('click', function(){
    event.preventDefault(); 
    
    window.open('https://www.instagram.com/ig_z3ro/', '_blank');
})


steam.addEventListener('click', function(){
    event.preventDefault(); 
    
    window.open('https://open.spotify.com/user/yy104mdveudxgow5qwx9wsyt0', '_blank');
})


github.addEventListener('click', function(){
    event.preventDefault(); 
    
    window.open('https://github.com/Z3rOGoku', '_blank');
})




const cursor = new MouseFollower({
    container: '.container',
    speed: 0.3
});


// const cursor = document.querySelector('.cursor');
// let timeout;

// // Get the position of @Z3rO
// const zero = document.querySelector('h1');
// const zeroRect = zero.getBoundingClientRect();

// // Specify the offset values if needed
// const offsetX = 5; // Offset from the left of @Z3rO
// const offsetY = 22; // Offset from the top of @Z3rO

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");

//     // Clear the timeout on mousemove
//     clearTimeout(timeout);

//     // Set a new timeout to reset the cursor position after 2 seconds of inactivity
//     timeout = setTimeout(() => {
//         const newX = zeroRect.left + zeroRect.width + offsetX;
//         const newY = zeroRect.top + offsetY;
//         cursor.setAttribute("style", "top: " + newY + "px; left: " + newX + "px;");
//     }, 2000); // 2 seconds (2000 milliseconds)
// });

// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });









