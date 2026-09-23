/* Cosmetic enhancements only: no save data, progression or event handlers replaced. */
(function(){'use strict';
function navigation(){const active=document.querySelector('.screen.active');document.querySelectorAll('nav button[data-screen]').forEach(button=>{if(active&&button.dataset.screen===active.id)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});}
const screens=document.querySelectorAll('.screen');const navObserver=new MutationObserver(navigation);screens.forEach(screen=>navObserver.observe(screen,{attributes:true,attributeFilter:['class']}));navigation();
const grid=document.getElementById('mapGrid');
function thumbnails(){if(!grid||!window.RealmforgeMaps)return;const maps=window.RealmforgeMaps.maps||[];Array.from(grid.children).forEach((card,index)=>{if(!maps[index]||card.querySelector('.mapThumbnail'))return;const img=document.createElement('img');img.className='mapThumbnail';img.src=maps[index].src;img.alt='';img.loading='lazy';img.width=240;img.height=140;card.prepend(img);});}
if(grid){new MutationObserver(thumbnails).observe(grid,{childList:true});thumbnails();}
})();
