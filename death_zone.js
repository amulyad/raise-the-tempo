//function OnTriggerEnter (other : Collider) {
  // destroy all game objects that enter this area
  //Destroy(other.gameObject);
  //yield WaitForSeconds(1.0);  // or however long you want it to wait
  //Application.LoadLevel(Application.loadedLevel);
//}


function OnCollisionEnter(collision:Collision){
      
            if(collision.gameObject.tag == "Rock"){
           
     	  	Destroy(gameObject);
        		         
      }
      else if(collision.gameObject.tag == "Player"){
           Destroy(gameObject);
           yield WaitForSeconds(1.0);  
           Application.LoadLevel(Application.loadedLevel);
           }
 }
