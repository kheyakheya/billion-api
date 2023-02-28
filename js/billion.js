const loadRich=async()=>{
    const url=`https://forbes400.onrender.com/api/forbes400/#`;
    const res= await fetch(url);
    const data= await res.json();
    displayRich(data);
}


const displayRich=(people)=>{
    const parent=document.getElementById("card-container");
    console.log(parent);
    people.forEach(element => {
        console.log(element.person.name);
        const div=document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div class="card">
                <img style="height: 200px; width: 250px;" src="${element.person.squareImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        parent.appendChild(div);


    });
}

loadRich();