var projectilPrefab : Transform;
var powerOfShoot : float = 3000;

function Update () {
	if(Input.GetButtonDown("Jump")){
		GetComponent.<AudioSource>().Play();
		
		var projectil = Instantiate(projectilPrefab, transform.position, transform.rotation);
		projectil.GetComponent.<Rigidbody>().AddForce(transform.forward * powerOfShoot);
	}
}