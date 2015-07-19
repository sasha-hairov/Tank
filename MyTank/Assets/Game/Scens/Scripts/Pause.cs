using UnityEngine;
using System.Collections;

public class Pause : MonoBehaviour {
	
	public bool menu = false; 
	
	
	// Update is called once per frame
	void Update () {
	//отслеживание нажатия кнопки Esc на клавиатуре
	if (Input.GetKeyDown(KeyCode.Escape)) { 
		//если нажата Esc, то показать меню
		menu = true; 
	}
		
	}
		
	void OnGUI () {
		
		
	//узнаем надо ли показывать меню
	if (menu == true) { 
		
		//останавливаем игровое время (Пауза)
		Time.timeScale = 0;
		//рисуем GUI.Box, фон меню
		GUI.Box(new Rect(Screen.width/2-150,Screen.height/2-200,300,200), "Pausi"); 
		//отслеживание нажатия кнопки Продолжить
		if (GUI.Button(new Rect(Screen.width/2-140,Screen.height/2-180,280,80), "Go")) { 
			//если кнопка Продолжить нажата скрываем меню
			menu = false; 
			//возобновляем игровое время (отменить паузу)
			Time.timeScale = 1; 
		}
		//отслеживание нажатия кнопки Выход
		if (GUI.Button(new Rect(Screen.width/2-140,Screen.height/2-90,280,80), "Main menu")) { 
			///если кнопка Продолжить нажата скрываем меню
			menu = false; 
			//возобновляем игровое время (отменить паузу)
			Time.timeScale = 1; 
			//Выходим  в главное меню
			Application.LoadLevel(0); 
		}
	}
}
}
