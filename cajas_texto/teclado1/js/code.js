const input_box1 = document.getElementById('exe_input');
const btn_next = document.getElementById('btn-next');
const block_ok = document.getElementById('block-ok');
const box_text = document.getElementById('text_example');
const progres_bar = document.getElementById('bar-progress');
const progres_label = document.getElementById('label-progress');
const box_info = document.getElementById('box-info');
const title = document.getElementById('title');

const total_questions = questions.length

let current_question = sessionStorage.Page || 0
let current_round = sessionStorage.Round || '1'

console.log(`question:${current_question}`);
draw_question(questions[current_question])

progres_bar.max = total_questions

function draw_question(question) {
	if (current_round == '2') {
		box_info.classList.add('hide')
	}
	for (const item in question) {
		document.getElementById(item).innerHTML = question[item]
		if (item == "exe_image") {
			document.getElementById(item).src = question[item]
		}
		if (item == "exe_input") {
			document.getElementById(item).value = question[item]
		}
	}
}

if (input_box1) {
	input_box1.addEventListener("keyup", function () {
		if (input_box1.value == questions[current_question]['exe_test']) {
			block_ok.classList.remove('hide')
			btn_next.focus()
		}

	});
}

function next_question() {
	current_question++
	draw_question(questions[current_question])
	title.scrollIntoView()
	block_ok.classList.add('hide')
	progres_bar.value = current_question
	progres_label.innerHTML = `(${current_round})${current_question}/${total_questions}`
	sessionStorage.setItem('Page', current_question)

}

btn_next.addEventListener("click", function () {
	console.log((total_questions - 1), current_question);
	if (current_round == "2" && (total_questions - 2) == parseInt(current_question)) {
		window.location = "end.html"
	}
	if ((total_questions - 1) > current_question) {
		next_question()
	} else {
		if (current_round == "1") {
			current_round = "2"
			sessionStorage.setItem('Round', current_round)
			current_question = 0
			next_question()
		}
	}
});

