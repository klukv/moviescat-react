import React from 'react'

import '../scss/personalAccount.scss';

import guardiansIMG from "../assets/img/banner/guardians.jpg";
import lostCityIMG from "../assets/img/banner/lostCity.jpg";
import jwIMG from "../assets/img/banner/JW.jpg";
import thorIMG from "../assets/img/banner/Thor.jpg";
import blackIMG from "../assets/img/banner/blackP.jpg";

function PersonalAC() {
  return (
    <div>
        <main class="main">
		<div class="person">
			<div class="container">
				<div class="person__inner">
					<div class="person__row">
						<div class="person__block-img">

						</div>
						<div class="person__info">
							<div class="person__info-name avatar__title">Name</div>
							<a href="#" class="person__info-mail">pochta@mail.ru</a>
						</div>
					</div>
					<div class="person__compilation">
						<h2 class="person__compilation-title avatar__title">Любимые</h2>
						<div class="person__compilation-slider">
							<a href="#" class="person__block"><img src={guardiansIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={blackIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={lostCityIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={jwIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={thorIMG} alt="movie"
									class="person__image"/></a>
						</div>
					</div>
					<div class="person__watched">
						<h2 class="person__watched-title avatar__title">Недавно просмотренные</h2>
						<div class="person__watched-slider"><a href="#" class="person__block"><img
									src={guardiansIMG} alt="movie" class="person__image"/></a>
							<a href="#" class="person__block"><img src={blackIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={lostCityIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={jwIMG} alt="movie"
									class="person__image"/></a>
							<a href="#" class="person__block"><img src={thorIMG} alt="movie"
									class="person__image"/></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
    </div>
  )
}

export default PersonalAC;