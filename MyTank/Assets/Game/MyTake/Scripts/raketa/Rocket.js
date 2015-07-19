//Hairov Alexander (c) 2015
var explosion : GameObject;
var timeOut = 3.0;


function Start () {
	Invoke("Kill", timeOut);
}


function OnCollisionEnter (collision : Collision) {
	
	var contact : ContactPoint = collision.contacts[0];
	var rotation = Quaternion.FromToRotation(Vector3.up, contact.normal);
    Instantiate (explosion, contact.point, rotation);

	
	Kill ();    
}

function Kill () {
	
	var emitter : ParticleEmitter= GetComponentInChildren(ParticleEmitter);
	if (emitter)
		emitter.emit = false;

	
	transform.DetachChildren();
		
	
	Destroy(gameObject);
}


