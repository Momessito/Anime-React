function sliders(){
return(

  <div id="carouselExampleDark" class="carousel carousel slide carousel-fade Slides" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner Slides">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="Solo.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block texto-slide">
        <h5>Solo Leveling</h5>
        <p>Capitulo 140.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="Begging.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block texto-slide">
        <h5>The Begging after the end</h5>
        <p>Capitulo 160.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Omnisient.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block texto-slide">
        <h5>Omnisient View</h5>
        <p>Capitulo 106.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="chainsaw.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block texto-slide">
        <h5>Chainsaw Man</h5>
        <p>Capitulo 108.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Proximo</span>
    </button>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Voltar</span>
  </button>

</div>
)
}

export default sliders