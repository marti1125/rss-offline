function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

$( document ).ready(function() {
  $(".body").html( strip( $(".body").html() ) )
});
