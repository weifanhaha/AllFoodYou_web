function send_login_event(pagename){
    ga('send', 'event', {
    eventCategory: '登入',
    eventAction: '點擊',
    eventLabel: page_name
  });
}

    // search
    $('.search').click(function(){
      search_keyword = document.getElementById("myInput").value
      url = "/search/" + search_keyword
      document.getElementById("myInput").value = ""
      ga('send', 'pageview', url);
    })
// function send_signup_event(pagename){

// }
