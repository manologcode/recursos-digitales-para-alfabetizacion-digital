result = {'ok':0,'ko':0,'black':0}
time_ini = Date.now()
	
function draw_question(question, id) {

	var html_question=""
	if (question['type']=="options-text"){
		for (const key in question['options']) {
			html_question +=`<label class="label-text">
							<input type="radio" name="question-${id}" value="${key}" />
							${question['options'][key]}</label>`
		}
	}
	if (question['type']=="options-img"){
		for (const key in question['options']) {
			html_question +=`<label>
							<input type="radio" class="radio-img" name="question-${id}" value="${key}" />
							<img src="${question['options'][key]}"></label>`
		}
	}	
	if (question['type']=="input"){
		html_question +=`<label>
		<input type="text" name="question-${id}" />`

	}
	return html_question
}

function correct_answers(){
	for (let i=0 ; i<questions.length; i++) {
		var ele_input = document.querySelector(`input[name="question-${i}"]`);
		if (!ele_input) { continue; }

		if (ele_input.type=="text"){
			value_sel = ele_input.value
		}
		if (ele_input.type=="radio"){
			selection = document.querySelector(`input[name="question-${i}"]:checked`);
			value_sel= selection ? selection.value : null
		}

		value = validate_response(value_sel,i)
		result[value]++
		var exercise = document.getElementById("question-"+i)
		exercise.classList.add(value);
	}
	disabled_all_input()
	show_result()
}

function show_result(){
	result = result['ok'] +  " aciertos " + result['ko'] + " fallos y " + result['black'] + " respuestas en blanco";
	result += "<br>Has tardado " + calculate_time()
	box_result = document.getElementById("result")
	box_result.innerHTML=result
	box_result.scrollIntoView({behavior: 'smooth' });

}

function validate_response(item,position){
	response = "black"
	if (!item) {return response;}
	condition= (item == questions[position]["response"])
	if (questions[position]["response-type"] == "lowercase"){
		condition= (item.toLowerCase() == questions[position]["response"])
	}
	if (condition){
		response = "ok";
	}else{
		response = "ko"
	}
	return response
}

function disabled_all_input(){
	var els = document.getElementsByTagName('input');
	for ( var i = 0; i < els.length ; i ++ ) {
		els[i].setAttribute('disabled', 'true'); 
	}
	document.getElementById('responses').setAttribute('disabled', 'true')
}
function calculate_time(){
	time_end = Date.now()
	total = (time_end-time_ini)/ 1000
	minutes= Math.trunc(total/60)
	seconds=Math.trunc(total%60)
	response = minutes + (minutes == 1 ? " minuto " : " minutos ") + seconds + (seconds == 1 ? " segundo" : " segundos")
	return response
}

function read_data(name){
	let url = "./questions/" + name + ".json";
	fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			questions=data
			create_test()
		})
}


function create_test(){
	html_content=""
	for (const id in questions){
		item = questions[id]
		html_content+=`<div class="exercise" id="question-${id}">
						<p>${item['question']}<p>`
		if (item['img']){
			html_content+=`<img class="img-question" src="${item['img']}">`
		}
		html_content+=draw_question(item, id)
		html_content+=`</div>`
	}

	document.getElementById("responses").addEventListener('click', correct_answers)
	document.getElementById("content").innerHTML = html_content
}

var questions=[]

const urlParams = new URLSearchParams(window.location.search);
const name_file = urlParams.get('questions') || "informatica_basica"

read_data(name_file)



