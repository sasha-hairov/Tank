var rotationVel : float = 20; //Rotation Velocity
var currentRotation : float = 0; //Current Rotation
var upRotacionLimit : float = 6; //Up Limit Rotation
var lowRotacionLimit : float = -3; //Low Limit Rotation

function Update () {
	//Move the cannon up
	if(Input.GetKey(KeyCode.UpArrow)) {
		if(currentRotation < upRotacionLimit) {
			transform.Rotate(Vector3(rotationVel * Time.deltaTime, 0, 0)); //Rotate the gun on the x axis in the up direction.
			currentRotation += rotationVel * Time.deltaTime; //currentRotation goes down in value that same amount that the rotation does.
		}
	}
	//Move the cannon down
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(currentRotation > lowRotacionLimit) {
			transform.Rotate(Vector3(-rotationVel * Time.deltaTime, 0, 0)); //Rotate the gun on the x axis in the down direction.
			currentRotation -= rotationVel * Time.deltaTime; //currentRotation goes up in value the same amount that the rotation does.
		}
	}
}