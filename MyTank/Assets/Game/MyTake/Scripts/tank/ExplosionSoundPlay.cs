using UnityEngine;
using System.Collections;

public class ExplosionSoundPlay : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GetComponent<AudioSource>().Play ();
		Destroy(this.gameObject, GetComponent<AudioSource>().clip.length);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
