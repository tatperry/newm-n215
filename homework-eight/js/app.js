// Tatiana Perry 
// NEWM-N215 - JQUERY HOMEWORK
// MARCH 30, 2021
// HOMEWORK-EIGHT
var userVarName = "Variable";
var homeContent = `<div class="home">
<h1>Good Morning</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa necessitatibus obcaecati maxime id qui doloribus in placeat. Quaerat sunt neque vitae ipsum quod odit illum necessitatibus? Laboriosam ad laborum beatae nihil velit voluptates animi blanditiis ut, dolor autem deserunt doloremque molestias tempora praesentium alias, delectus dignissimos at temporibus maxime error quis eos nesciunt eum? Obcaecati, omnis quos id maxime iure dolores similique unde voluptas, laborum distinctio commodi iusto enim consectetur harum autem eveniet excepturi, quae nemo sit impedit repellendus. Porro soluta officiis aliquam repudiandae blanditiis! Repudiandae ut rerum aspernatur voluptatem quo eum at exercitationem minima expedita aliquid, sapiente sit beatae.</p>
<div class="good"><img src="images/home.jpeg" alt=""></div>   
</div>`;
var aboutContent = `<div class="about">
<h1>Time for Work</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa necessitatibus obcaecati maxime id qui doloribus in placeat. Quaerat sunt neque vitae ipsum quod odit illum necessitatibus? Laboriosam ad laborum beatae nihil velit voluptates animi blanditiis ut, dolor autem deserunt doloremque molestias tempora praesentium alias, delectus dignissimos at temporibus maxime error quis eos nesciunt eum? Obcaecati, omnis quos id maxime iure dolores similique unde voluptas, laborum distinctio commodi iusto enim consectetur harum autem eveniet excepturi, quae nemo sit impedit repellendus. Porro soluta officiis aliquam repudiandae blanditiis! Repudiandae ut rerum aspernatur voluptatem quo eum at exercitationem minima expedita aliquid, sapiente sit beatae.</p>
<div class="works"><img src="images/work.jpeg" alt=""></div>   
</div>`;
var productsContent = `<div class="products">
<h1>More Work</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa necessitatibus obcaecati maxime id qui doloribus in placeat. Quaerat sunt neque vitae ipsum quod odit illum necessitatibus? Laboriosam ad laborum beatae nihil velit voluptates animi blanditiis ut, dolor autem deserunt doloremque molestias tempora praesentium alias, delectus dignissimos at temporibus maxime error quis eos nesciunt eum? Obcaecati, omnis quos id maxime iure dolores similique unde voluptas, laborum distinctio commodi iusto enim consectetur harum autem eveniet excepturi, quae nemo sit impedit repellendus. Porro soluta officiis aliquam repudiandae blanditiis! Repudiandae ut rerum aspernatur voluptatem quo eum at exercitationem minima expedita aliquid, sapiente sit beatae.</p>
<div class="more"><img src="images/moreWork.jpeg" alt=""></div>   
</div>`;
var contactContent = `   <div class="contact">
<h1>Sleep</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa necessitatibus obcaecati maxime id qui doloribus in placeat. Quaerat sunt neque vitae ipsum quod odit illum necessitatibus? Laboriosam ad laborum beatae nihil velit voluptates animi blanditiis ut, dolor autem deserunt doloremque molestias tempora praesentium alias, delectus dignissimos at temporibus maxime error quis eos nesciunt eum? Obcaecati, omnis quos id maxime iure dolores similique unde voluptas, laborum distinctio commodi iusto enim consectetur harum autem eveniet excepturi, quae nemo sit impedit repellendus. Porro soluta officiis aliquam repudiandae blanditiis! Repudiandae ut rerum aspernatur voluptatem quo eum at exercitationem minima expedita aliquid, sapiente sit beatae.</p>
<div class="sleep"><img src="images/sleep.jpeg" alt=""></div>   
</div>`;

function init(){

    $("nav a").click(function (e) {

        let btnId = this.id;
        let contentID = btnId + "Content";


        $("#app").html(eval(contentID));

    });
}
// 
// checking all elemnts to be ready for browser
$(document).ready(function (){
    init();
});
