//Hairov Alexander (c) 2015

var minimumRunSpeed = 1.0;

function Start () {

	GetComponent.<Animation>().wrapMode = WrapMode.Loop;

	
	GetComponent.<Animation>().Stop();
}

function SetSpeed (speed : float) {
	if (speed > minimumRunSpeed)
		GetComponent.<Animation>().CrossFade("run");
	else
		GetComponent.<Animation>().CrossFade("idle");
}