//Hairov Alexander (c) 2015
var rotationVel : float = 20; //Rotation Velocity

function Update () {
	
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Rotate(Vector3(0,rotationVel * Time.deltaTime,0));
	}

	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Rotate(Vector3(0,-rotationVel * Time.deltaTime,0));
	}
}