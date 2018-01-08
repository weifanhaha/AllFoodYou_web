function send_login_event(pagename){
    ga('send', 'event', {
    eventCategory: '登入',
    eventAction: '點擊',
    eventLabel: page_name
  });
}

// function send_signup_event(pagename){

// }
