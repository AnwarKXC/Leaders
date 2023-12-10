
//timer
const targetDate = new Date( 'December 30, 2023 23:59:59' ).getTime()

// Update the countdown every second
const countdownInterval = setInterval( updateCountdown, 1000 )
function updateCountdown () {
	const currentDate = new Date().getTime()
	const timeRemaining = targetDate - currentDate
	if ( timeRemaining <= 0 ) {
		clearInterval( countdownInterval ) // Stop the countdown when the target date is reached
	} else {
		const days = Math.floor( timeRemaining / ( 1000 * 60 * 60 * 24 ) )
		const hours = Math.floor( ( timeRemaining % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) )
		const minutes = Math.floor( ( timeRemaining % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
		const seconds = Math.floor( ( timeRemaining % ( 1000 * 60 ) ) / 1000 )
		const daysId=document.getElementById( 'days' )
		const hoursId=document.getElementById( 'hours' )
		const minutesId=document.getElementById( 'minutes' )
		const secondsId=document.getElementById( 'seconds' )
		if(daysId&& hoursId&&minutesId&&secondsId){
			daysId.innerText = formatTime( days )
			hoursId.innerText = formatTime( hours )
			minutesId.innerText = formatTime( minutes )
			secondsId.innerText = formatTime( seconds )
		}

	}
}
function formatTime ( time ) {
	return time < 10 ? '0' + time : time
}
function scrollToTop () {
	window.scrollTo( {
		top: 0,
		behavior: 'smooth'
	} )
}

function toggelColor () {
	element.classList.toggle( 'text-primary' )
}

function range() {
    return {
      
        minprice: 500000,
        maxprice: 8000000,
        min: 1000,
        max: 10000000,
        minthumb: 0,
        maxthumb: 0,

        mintrigger() {
            this.minprice = Math.min(this.minprice, this.maxprice - 500);
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
        },

        maxtrigger() {
            this.maxprice = Math.max(this.maxprice, this.minprice + 500);
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);
        },
    }
}


//login-signup

function togglePassword () {
	const password = document.querySelector( "#password" )
	const eye = document.querySelector( "#eye" )
	if ( eye.classList.contains( "fa-eye" ) ) {
		eye.classList.replace( "fa-eye", "fa-eye-slash" )
	} else if ( eye.classList.contains( "fa-eye-slash" ) ) {
		eye.classList.replace( "fa-eye-slash", "fa-eye" )
	}
	const type = password.getAttribute( "type" ) === "password" ? "text" : "password"
	password.setAttribute( "type", type )

}


// prevent form submit
// const form = document.querySelector( "form" )
// form.addEventListener( 'submit', function ( e ) {
// 	e.preventDefault()
// } )