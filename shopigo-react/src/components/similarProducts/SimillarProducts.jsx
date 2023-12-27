import React from 'react'

const SimillarProducts = () => {
  return (
    <section class="main">
		<div class="container">
			<h2 class="main__title">
				Другие товары <span>66</span>
			</h2>
			<div class="main-wrap">

				<div class="main-item">
					<div class="main-item__img">


						<div class="main-item__discount">
							-15%
						</div>

						<img src="img/main1.png" alt="product"/>
					</div>
					<div class="main-item__wrap">
						<div class="main-item__name">
							Многофункциональная терка овощерезка с контейнером
						</div>
						<div class="main-item__order">
							<img src="img/electro.svg" alt="ico"/>
							Быстрая доставка
						</div>
					</div>
					<a href="product.hmtl" class="main-item__link"></a>
				</div>
			
			</div>
      
			<div class="main-all">
				<a href="index.html">
					Все товары
				</a>
			</div>
		</div>
	</section>  
  )
}

export default SimillarProducts