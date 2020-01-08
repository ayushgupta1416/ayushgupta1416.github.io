
console.log("my indexe.js");

//let apiKey = '60c0fb800c054e9680937f15f13437c7';

//grab he news container
let newsAccordian = document.getElementById("accordionExample");

// create a get  request
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=60c0fb800c054e9680937f15f13437c7', true)

//when respeonse is ready

xhr.onload = function () {

    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        let newsHtml = " ";

        articles.forEach(function(element,index) {

            let news = `<div class="card">
                     <div class="card-header" id="heading${index}">
                         <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                 aria-expanded="true" aria-controls="collapse${index}">
                               <b>Top heading ${index+1}: </b> ${element["title"]}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#accordionExample">
                        <div class="card-body">
                            ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a> 
                         </div>
                        </div>
                        </div>`

            newsHtml += news;


        });
        newsAccordian.innerHTML = newsHtml;
    }

    else
        console.log("some error occured");

}
xhr.send();
