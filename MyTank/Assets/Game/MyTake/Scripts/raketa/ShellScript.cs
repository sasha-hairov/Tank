using UnityEngine;
using System.Collections;

public class ShellScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	    

	// Update is called once per frame
	void Update () {	
   
if (transform.position.y < -10)
{
    Destroy(gameObject);
}

      

	}

	//проверка столкновений
	void OnCollisionEnter(Collision collision)
	{
	Destroy(this.gameObject);
	}
}
