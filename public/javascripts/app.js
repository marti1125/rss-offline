function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

$( document ).ready(function() {

  $.get("/post", function(data){
    $.each(data, function(k,v){
      $("#post").append(
        '<div class="panel panel-primary">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title">' + v.title +'</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            v.description +
          '</div>' +
        '</div>'
      );
    })
  })

});
