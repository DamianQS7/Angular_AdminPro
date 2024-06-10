import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {
  
  ngOnInit(): void {
    // const promise = new Promise((resolve, reject) => {
      
    //   if(true){
    //     resolve('Promise resolved!')
    //   } else {
    //     reject('Promise rejected')
    //   }
    // });

    // promise
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));
      
    // console.log('Fin del Init');

    this.getUsuarios().then( users => console.log(users));
  }

  public getUsuarios(): Promise<any> {
    return new Promise(() => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(body => console.log(body.data));
    });
  }
}
