const editContainer = document.querySelector('#editContainer');
const tagList = document.querySelector('.tag-list');

editContainer.addEventListener('input', function(e){
	const {inputType} =e;
	if(inputType === 'insertParagraph') return editContainer.innerHTML = '';
	generateTag(e.target.innerText);

})




function generateTag(string){
	if(string){
		const allTagContent = string.trim().split(",");
		let content = '';
		allTagContent.forEach(element => {
			content += element ? `<li class="tag">${element}</li>` : ""
		});

		return tagList.innerHTML = content;
	}

	return tagList.innerHTML = '';
}
