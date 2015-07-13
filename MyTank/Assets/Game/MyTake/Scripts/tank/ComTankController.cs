using UnityEngine;
using System.Collections;

public class ComTankController : ComController {

    public bool enableUserInput = true;

    public float steerG = 0.0f;
    public float accelG = 0.0f;


    void Update()
    {
        if (enableUserInput)
        {

            if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.S))
                accelG = Input.GetAxis("Vertical");
            else
                accelG = 0;

            if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.D))
                steerG = Input.GetAxis("Horizontal");
            else
                steerG = 0;

            if (accelG < 0 &&
               transform.forward.x * transform.GetComponent<Rigidbody>().velocity.x +
               transform.forward.y * transform.GetComponent<Rigidbody>().velocity.y +
               transform.forward.z * transform.GetComponent<Rigidbody>().velocity.z > 0)
                steerG = -steerG;

            if (accelG >= 0 &&
               transform.forward.x * transform.GetComponent<Rigidbody>().velocity.x +
               transform.forward.y * transform.GetComponent<Rigidbody>().velocity.y +
               transform.forward.z * transform.GetComponent<Rigidbody>().velocity.z < -1)
                steerG = -steerG;
        }

    }

    void FixedUpdate()
    {

        //float accelerate = 0;
        //float steer = 0;


        UpdateWheels(accelG, steerG);

    }


}