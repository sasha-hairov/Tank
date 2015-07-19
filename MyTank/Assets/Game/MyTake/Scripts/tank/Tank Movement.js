//Hairov Alexander (c) 2015

var acceleration : float = 3; 
var deceleration : float = -3; 
var currentVel : float = 0; 
var maxVel : float = 5; 
var maxVelReverse : float = -3; 
var rotationVel : float = 40; 
var currentRotation : float = 0; 

var wheelFrontLeft : Transform;
var wheelFrontRight : Transform;
var wheelBackLeft : Transform;
var wheelBackRight : Transform;

var tankGo : float = 0;
var tankRotate : float = 0;

function SetTankGo(_tankGo : float)
{
	tankGo = _tankGo;
}

function SetTankRotate(_tankRotate : float)
{
	tankRotate = _tankRotate;
}

function rotateLeftOruga(speed : float){
	wheelFrontLeft.transform.Rotate(speed,0,0);
	wheelBackLeft.transform.Rotate(speed,0,0);
}

function rotateRightOruga(speed : float){
	wheelFrontRight.transform.Rotate(speed,0,0);
	wheelBackRight.transform.Rotate(speed,0,0);
}

function Update () {

	
	GetComponent.<AudioSource>().pitch = Mathf.Abs(currentVel / maxVel) + 1 ;

	
	transform.Translate(Vector3(0,0,currentVel * Time.deltaTime));
	
	
	rotateLeftOruga(currentVel);
	rotateRightOruga(currentVel);
	
	
	if(Input.GetAxis("Vertical") > 0 || tankGo > 0){
		if(currentVel < 0){
			Stop();
		}
		else if(currentVel < maxVel){
			currentVel = Accelerate("forward");
		}
		else{
			currentVel = maxVel;
		}
	}
		

	if(Input.GetAxis("Vertical") < 0 || tankGo < 0){
		if(currentVel > 0){
			Stop();
		}
		else if(currentVel > maxVelReverse){
			currentVel = Accelerate("backward");
		}
		else{
			currentVel = maxVelReverse;
		}
	}
		
	
	if(Input.GetAxisRaw("Horizontal") < 0 || tankRotate < 0){
		rotateLeftOruga(-currentVel - 1);
		rotateRightOruga(currentVel + 1);
		currentRotation = Spin("left");
		transform.Rotate(Vector3(0,currentRotation * Time.deltaTime,0));
	}
		
	
	if(Input.GetAxisRaw("Horizontal") > 0 || tankRotate > 0){
		rotateLeftOruga(currentVel + 1);
		rotateRightOruga(-currentVel - 1);
		currentRotation = Spin("right");
		transform.Rotate(Vector3(0,currentRotation * Time.deltaTime,0));
	}
}


function Accelerate(Direccion : String){
	if(Direccion == "forward"){
		currentVel += acceleration * Time.deltaTime;
	}
	if(Direccion == "backward"){
		currentVel += deceleration * Time.deltaTime;
	}
	return currentVel;
}

function Stop(){
	if(currentVel > 0){
		currentVel += deceleration * 2 * Time.deltaTime;
	}
	else{
		currentVel += acceleration * 2 * Time.deltaTime;
	}
	return currentVel;
}

function Spin(Direccion : String){
	if(Direccion == "left"){
		currentRotation = -rotationVel -currentVel;
	}
	if(Direccion == "right"){
		currentRotation = rotationVel + currentVel;
	}
	return currentRotation;
}