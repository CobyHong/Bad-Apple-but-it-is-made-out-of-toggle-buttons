var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;


function animate(toggles, data) {
	// request another frame
    requestAnimationFrame( () =>
	{
		animate(toggles, data);
	});

	// calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        // draw stuff here
		if (frameCount == 13143)
		{
			return;
		}
		playFrames(toggles, data, frameCount++);

        // TESTING...Report #seconds since start and achieved fps.
        var sinceStart = now - startTime;
        // var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
    }

}


// ==============================================================================


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
	var states_dictionary={ 
		"O": true, 
		"-": false
	};
	for(i=0; i<2400; i++)
	{
		toggles[i].checked = states_dictionary[data[curr_frame][i]];	
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

	// var max_frame = 13143;
	// curr_frame = 0;

    fpsInterval = 1000 / 60;
    then = Date.now();
    startTime = then;

	animate(toggles, data);
	// playVideo(toggles, data, curr_frame, max_frame);
}