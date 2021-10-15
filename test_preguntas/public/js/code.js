function draw_question(question, id) {

	var html_question=""
	if (question['type']=="options-text"){
		for (const key in question['options']) {
			html_question +=`<label>
							<input type="radio" name="question-${id}" value="${key}" />
							${question['options'][key]}</label><br><br>`
		}
	}
	if (question['type']=="options-img"){
		for (const key in question['options']) {
			html_question +=`<label>
							<input type="radio" name="question-${id}" value="${key}" />
							<img src="./img-question/${question['options'][key]}"></label>`
		}
	}	
	if (question['type']=="input"){
	}
	return html_question
}

html_content=""
for (const id in questions){
	item = questions[id]
	html_content+=`<div class="exercise" id="question-${id}">
					<p>${item['question']}<p>`
	html_content+=draw_question(item, id)
	html_content+=`</div>`
}

document.getElementById("responses").addEventListener('click', correct_answers)
document.getElementById("content").innerHTML = html_content


function correct_answers(){
	ok=0; ko=0, black=0
	for (let i=0 ; i<questions.length; i++) {
		var ele = document.querySelector(`input[name="question-${i}"]:checked`);
		var exercise = document.getElementById("question-"+i)
		if (ele){
			console.log(ele.value + "==" + questions[i]["response"]) 
			if (ele.value == questions[i]["response"]){
				ok++
				exercise.classList.add("ok");
			}else{
				ko++
				exercise.classList.add("ko");
			}
		}else{
			black++
		}
	}
	disabled_all_input()
	result ="resultado:<br>" + ok + " aciertos," + ko + " fallos y " + black + " respuesta en blanco"
	document.getElementById("result").innerHTML=result
}

function disabled_all_input(){
	var els = document.getElementsByTagName('input');
	for ( var i = 0; i < els.length ; i ++ ) {
		els[i].setAttribute('disabled', 'true'); 
	}
}

