import css from './css/main.css';
import scss from './css/index.scss';
// import $ from 'jquery';
let json = require('../author.json');
let a=10;
var oBox = document.querySelector("#box");
oBox.innerHTML = "作者"+json.name;
 $(".div1").html("hello jquery")