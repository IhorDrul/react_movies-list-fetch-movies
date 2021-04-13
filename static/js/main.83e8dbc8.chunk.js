(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},function(e,t,a){e.exports=a(22)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),l=(a(16),a(2)),o=a.n(l),m=a(4),s=a(6),d=a(1),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,r=e.imgUrl,c=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:c},"IMDB"))))});u.defaultProps={imdbUrl:""};var p=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))},b=a(9),h=a.n(b),v=(a(21),function(e){var t=e.findMovie,a=e.addMovie,r=e.movies,c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],p=l[1],b=Object(n.useState)({}),v=Object(d.a)(b,2),f=v[0],g=v[1],w=Object(n.useState)(""),E=Object(d.a)(w,2),M=E[0],N=E[1],j=Object(n.useState)(void 0),O=Object(d.a)(j,2),y=O[0],k=O[1],I=Object(n.useCallback)(function(e,t){var a;return function(){clearTimeout(a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];a=setTimeout.apply(void 0,[e,t].concat(i))}}(N,700),[]),T=function(){var e=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(M);case 2:if((a=e.sent).imdbId){e.next=6;break}return k("Can't find a movie with such a title"),e.abrupt("return");case 6:k(""),g(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.some((function(e){return e.imdbId===f.imdbId}))?k("Can't add duplicated movie"):(k(""),a(f),p(""),N(""),g({}))},className:"find-movie",autoComplete:"off"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":y}),value:s,onChange:function(e){p(e.target.value),I(e.target.value)}})),y&&i.a.createElement("p",{className:"help is-danger"},y)),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{onClick:T,type:"button",className:"button is-light"},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list"),i.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){localStorage.clear(),window.location.reload()}},"Clear storage")))),i.a.createElement("div",{className:"container"},f.imdbId&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(u,f))))}),f=a(10),g=function(e){return t=e,fetch("".concat("https://www.omdbapi.com/?apikey=882a3426&t=").concat(t)).then((function(e){return e.json()}));var t},w=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{return JSON.parse(localStorage.getItem(e))||t}catch(a){return t}})),i=Object(d.a)(a,2),r=i[0],c=i[1];return[r,function(t){c(t),localStorage.setItem(e,JSON.stringify(t))}]}("value",Object(s.a)(f)),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)(function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return a=e.sent,e.abrupt("return",{title:a.Title,description:a.Plot,imgUrl:a.Poster,imdbUrl:a.ImdbUrl,imdbId:a.imdbID});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(p,{movies:a})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(v,{findMovie:c,addMovie:function(e){r([].concat(Object(s.a)(a),[e]))},movies:a})))};c.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.83e8dbc8.chunk.js.map