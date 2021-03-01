
function validate() {
  // Check for valid name
  if( document.contactForm.name.value == "" ) {
    document.getElementById('nMessage').innerHTML = 'It would be nice to know your name';
  document.contactForm.name.focus() ;
  return false;
  } else {
    document.getElementById('nMessage').innerHTML = '';
  }
  // Check for valid email
  if( document.contactForm.email.value == "" ) {
    document.getElementById('eMessage').innerHTML = 'Oops, it would appear you forgot to enter your email';
    document.contactForm.email.focus() ;
    return false;
  } else {
    document.getElementById('eMessage').innerHTML = '';
  }
  // Check for valid message
  if( document.contactForm.message.value == "" ) {
    document.getElementById('mMessage').innerHTML = 'It would be nice if you sent me a little message!';
    return false;
  } else {
    document.getElementById('mMessage').innerHTML = '';
  }

  return( true );
};