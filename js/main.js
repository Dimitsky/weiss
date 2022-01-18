// JS работает

document.documentElement.classList.add('js');

// DROPDOWN
// 

// закрыть все dropdown

function closeAllDropdowns() {
  let linkDropdownArr = document.querySelectorAll( '.link--dropdown' );

  linkDropdownArr.forEach( a => {
    a.setAttribute( 'aria-expanded', 'false' );
    a.parentElement.querySelector( '.header__dropdown' ).classList.remove( 'is-active' );
  } );
}

// закрыть dropdown при клике на другие элементы

function windowCloseDropdown(e) {
  if ( !e.target.closest( '.header__dropdown' ) ) {
    closeAllDropdowns();
    window.removeEventListener( 'click', windowCloseDropdown );
  }
}

// управляет открытием и закрытием dropdown

document.querySelectorAll('.link--dropdown').forEach( function(a) {
  a.addEventListener( 'click', function(a) {
    let dropdown = this.parentElement.querySelector( '.header__dropdown' );

    if ( this.getAttribute('aria-expanded') == 'true' ) {
      dropdown.classList.remove('is-active');
      this.setAttribute('aria-expanded', false);
    } else {
      closeAllDropdowns();
      dropdown.classList.add('is-active');
      this.setAttribute('aria-expanded', true);
      window.addEventListener( 'click', windowCloseDropdown );
      a.stopPropagation();
    }
  } );
} );

// MODAL
// 

let modal = document.querySelector( '.modal' );
let modalContent = document.querySelector( '.modal__content' );
let openBtn = document.querySelector( '.hero__img-btn-close' );
let closeBtn = document.querySelector( '.modal__close' );
let body = document.querySelector( 'body' );

function windowCloseModal(e) {
  if ( e.target === modal ) {
    closeModal();
  }
}

function closeModal(e) {
  modal.style.display = 'none';
  body.style.overflow = '';
  modalContent.querySelector( '.modal__img' ).remove();
}

function openModal(e) {
  modalContent.append( createImg() );
  window.addEventListener( 'click', windowCloseModal );
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
  e.stopPropagation();
}

function createImg() {
  let img = document.createElement( 'img' );

  img.className = 'modal__img';
  img.src = 'img/hero/hero-1@2x.webp';

  return img;
}

openBtn.addEventListener( 'click', openModal);
closeBtn.addEventListener( 'click', closeModal );

// BURGER

let burger = document.querySelector( '.burger' );
let menubar = document.querySelector( '.header__menu-wrap' );

burger.addEventListener( 'click', e => {
  if ( burger.getAttribute( 'aria-expanded' ) == 'false' ) {
    burger.setAttribute( 'aria-expanded', 'true' );
    menubar.classList.add( 'is-active' );
  } else {
    burger.setAttribute( 'aria-expanded', 'false' );
    menubar.classList.remove( 'is-active' );
  }
} );