// loads jquery first than runs the code
// $(document).ready(function(){
//     $('h1').css('color', 'red');
// });

// one propert is getting the value and 2 propites is setting the value
// console.log($('h1').css('color'));
// $('h1').css('color', 'green');
$('button');

// manipualing the styles
// $('h1').addClass('big-title');
// $('h1').removeClass('big-title');

// manipulating the text
// $('h1').text('Bye');

// manipulating the attributes in jquery

// $('img'.attr('src'))
// $('a').attr('href', 'https://www.yahoo.com' );

// event listeners in jquery
$('h1').click(function(){
    $('h1').css('color', 'purple' , 'cursor', 'pointer');
});

$('button').click(function(){
    $('h1').css('color', 'purple');
});

$('input').keypress(function(event){    
    $('h1').text(event.key);
});

$('h1').on('mouseover', function(){
    $('h1').css('color', 'purple');
});