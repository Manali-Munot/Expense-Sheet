export class ListTemplate {
    constructor(private container: HTMLUListElement){}
  
    render( heading: string,amount:string){
      const li = document.createElement('li');
    
      const h4 = document.createElement('h4');
      h4.innerText = heading + amount;
      li.append(h4);
    
      const p = document.createElement('p');
      p.innerText =h4.innerText;
      li.append(p);
  
      
        this.container.append(li);
      
  }
}