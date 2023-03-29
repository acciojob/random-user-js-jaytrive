//your code here
let buttons=document.querySelectorAll('button');
let info=document.createElement('div');
let section=document.getElementById('section');
async function findUser(){
	info.innerText="";
	let res=await fetch("https://randomuser.me/api/");
	const data=await res.json();
	document.getElementsByTagName('img')[0].src=data.results[0].picture.large;
	document.getElementsByTagName('h2')[0].innerText=data.results[0].name.first +" "+ data.results[0].name.last;
	console.log(data);
	localStorage.setItem('user',JSON.stringify(data));
}

buttons.forEach((button) => {
	button.addEventListener('click', (event) => {
		let attr=event.target.getAttribute('data-attr');
		if(attr=='phone') info.innerText= JSON.parse(localStorage.getItem('user')).results[0].phone;
		if(attr=='email') info.innerText= JSON.parse(localStorage.getItem('user')).results[0].email;
		if(attr=='age') info.innerText= JSON.parse(localStorage.getItem('user')).results[0].dob.age;
	})
})
section.appendChild(info);