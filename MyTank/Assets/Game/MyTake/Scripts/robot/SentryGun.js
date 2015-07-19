//Hairov Alexander (c) 2015

var attackRange = 100.0;
var shootAngleDistance = 100.0;
var target : Transform;

function Start () {
	if (target == null && GameObject.FindWithTag("Player"))
		target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	if (target == null)
		return;
	
	if (!CanSeeTarget ())
		return;
	
		
	var targetPoint = target.position;
	var targetRotation = Quaternion.LookRotation (targetPoint - transform.position, Vector3.up);
	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime * 2.0);

	
	var forward = transform.TransformDirection(Vector3.forward);
	var targetDir = target.position - transform.position;
	if (Vector3.Angle(forward, targetDir) < shootAngleDistance)
		SendMessage("Fire");
}

function CanSeeTarget () : boolean
{
	if (Vector3.Distance(transform.position, target.position) > attackRange)
		return false;
		
	var hit : RaycastHit;
	if (Physics.Linecast (transform.position, target.position, hit))
		return hit.transform == target;

	return false;
}