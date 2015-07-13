var projectilPrefab : Transform;
var powerOfShoot : float = 3000;
var reloadTime = 0.5; 
var ammoCount = 20; 
private var lastShot = -10.0;





function Update () {



if(Input.GetButtonDown("Jump")){
		GetComponent.<AudioSource>().Play();
		
		var projectil = Instantiate(projectilPrefab, transform.position, transform.rotation);
		projectil.GetComponent.<Rigidbody>().AddForce(transform.forward * powerOfShoot);
	}
	
if (Time.time > reloadTime + lastShot && ammoCount > 0)
	{
	 
	lastShot = Time.time; 
	ammoCount-- ;
	}

}
