import React from 'react';

const Footer = () => {
    return (
        <div>
         <footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-9">
					<div class="copyright">
						<p>© 2023 MySignal Marketing Sdn Bhd. All rights reserved.</p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-3">
					<div class="footer--links">
						<ul class="footer--menu">
							<li>
								<a href="privacy.html">Privacy Notice</a>
							</li>
							<li>
								<a href="terms.html">Conditions of Use</a>
							</li>
						</ul>
						<div class="social--icon">
							<a href="#">
								<i class="bi bi-facebook"></i>
							</a>
							<a href="#">
								<i class='bi bi-instagram'></i>
							</a>
							<a href="#">
								<i class="bi bi-twitter-x"></i>
							</a>
							<a href="#">
								<i class="bi bi-youtube"></i>
							</a>
							<a href="#">
								<i class="bi bi-tiktok"></i>
							</a>
							<a href="#">
								<i class="bi bi-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>  
        </div>
    );
};

export default Footer;