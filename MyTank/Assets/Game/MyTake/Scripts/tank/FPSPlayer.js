//Hairov Alexander (c) 2015

var maximumHitPoints = 100.0;
var hitPoints = 1000.0;



var healthGUI : GUITexture;


var die : AudioClip;
var audioStepLength = 0.3;



private var healthGUIWidth = 0.0;
private var gotHitTimer = -1.0;



function Awake () {

	


	healthGUIWidth = healthGUI.pixelInset.width;
}

function ApplyDamage (damage : float) {
	if (hitPoints < 0.0)
		return;

	hitPoints -= damage;

	if (hitPoints < 0.0)
		Die();
}

function Die () {
	if (die)
		AudioSource.PlayClipAtPoint(die, transform.position);
	

	var coms : Component[] = GetComponentsInChildren(MonoBehaviour);
	for (var b in coms) {
		var p : MonoBehaviour = b as MonoBehaviour;
		if (p)
			p.enabled = false;
	}

	
}

function LateUpdate () {

	UpdateGUI();
}




function UpdateGUI () {

	var healthFraction = Mathf.Clamp01(hitPoints / maximumHitPoints);

	healthGUI.pixelInset.xMax = healthGUI.pixelInset.xMin + healthGUIWidth * healthFraction;
	
	}
