function GetJson()
{
	return fetch("bad_apple.json")
		.then(response => response.json())
		.then(data => {
			return data;
	})
}

function playFrames(toggles, data, curr_frame)
{
	var i;
	for(i=0; i<2400; i++)
	{
		if(data[curr_frame][i] == 'O')
		{
			toggles[i].checked = true;		
		}
		else
		{
			toggles[i].checked = false;	
		}
	}
}

// function playVideo(toggles, data, curr_frame, max_frame)
// {
// 	if (curr_frame == max_frame)
// 	{
// 		return;
// 	}
// 	playFrames(toggles, data, curr_frame);
// 	curr_frame += 1;

// 	setTimeout(() => {
// 		playVideo(toggles,data, curr_frame, max_frame);
// 	}, 0);
// 	// requestAnimationFrame(
// 	// 	() => playVideo(toggles,data, curr_frame, max_frame)
// 	// );
// }

function playVideo(toggles, data, curr_frame, max_frame) {
    setTimeout(function() {
		// // get function start time.
		// var videoStartTime  = performance.now();

		// drawing code goes Here
		if (curr_frame == max_frame)
		{
			return;
		}
		playFrames(toggles, data, curr_frame);
		curr_frame += 1;

		requestAnimationFrame(
			timestamp =>
			{
				playVideo(toggles, data, curr_frame, max_frame);

				// const timeInVideo = videoStartTime - timestamp;
				// curr_frame = Math.floor(timeInVideo / (60*1000));
				// console.log(curr_frame);
			}
		);


    }, 0);
}

async function playAudio()
{
	var audio =  document.getElementById("myAudio");
	var button = document.getElementsByTagName("button")[0];
	button.style.display = "none";
	audio.play();
}

async function createToggles()
{
	var htmlElements = "";
	for (var i = 0; i < 40*60; i++) {
		htmlElements += 
			'<label class="switch">' +
				'<input type="checkbox">' +
					'<span class="slider round"></span>' +
			'</label>';
	}
	var container = document.getElementById('toggles');
	container.innerHTML = htmlElements;


	var data = await GetJson();
	var toggles = document.getElementsByTagName("input");

	var max_frame = 13143;
	curr_frame = 0;

	playVideo(toggles, data, curr_frame, max_frame);
}