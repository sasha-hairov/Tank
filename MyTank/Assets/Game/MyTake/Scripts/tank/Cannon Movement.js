//Hairov Alexander (c) 2015
var rotationVel : float = 20; 
var currentRotation : float = 0; 
var upRotacionLimit : float = 6; 
var lowRotacionLimit : float = -3; 

function Update () {
	
	if(Input.GetKey(KeyCode.UpArrow)) {
		if(currentRotation < upRotacionLimit) {
			transform.Rotate(Vector3(rotationVel * Time.deltaTime, 0, 0)); //Rotate the gun on the x axis in the up direction.
			currentRotation += rotationVel * Time.deltaTime; //currentRotation goes down in value that same amount that the rotation does.
		}
	}
	
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(currentRotation > lowRotacionLimit) {
			transform.Rotate(Vector3(-rotationVel * Time.deltaTime, 0, 0)); //Rotate the gun on the x axis in the down direction.
			currentRotation -= rotationVel * Time.deltaTime; //currentRotation goes up in value the same amount that the rotation does.
		}
	}
}