import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  @Input() favorites;
  user_id=this.authService.getId()
  msbapTitle = 'Audio Title';  
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  translationText;
  constructor( private authService: AuthService,  private httpClient:HttpClient) { }
  ngOnInit(){
  }

  deleteFavorite(id){
   console.log(id)
   fetch(`http://localhost:8200/favourites/${id}` ,{
     method : 'DELETE',
   headers : {
     'content-type':'application/json',
   },
  })
    .then(res => {return res.json()})
    .then((data) =>{
      fetch(`http://localhost:8200/favourites/${this.user_id}` ,{
      method : 'GET',
      headers : {
        'content-type':'application/json',
      },
    })
    .then(res => {return res.json()})
    .then(data => {this.favorites = data})
    .catch(err =>{console.log(err)})
    })
  }
  handleClick(surah_number, verse_number){ 
    
    this.httpClient.get(`http://api.mp3quran.net/api/aya?surah=${surah_number}&aya=${verse_number}&language=en`).subscribe(data => {
    console.log(data);  
    this.translationText = data["ayah_text_lang"];
    })
  }

}

