var rotationVel : float = 20; //Rotation Velocity

function Update () {
	//Rotate the turret to the right
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Rotate(Vector3(0,rotationVel * Time.deltaTime,0));
	}
	//Rotate the turret to the left
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Rotate(Vector3(0,-rotationVel * Time.deltaTime,0));
	}
}