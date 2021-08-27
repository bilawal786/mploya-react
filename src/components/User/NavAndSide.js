import React from "react";
import NotificationDrop from "../employer/NotificationDrop/NotificationDrop";
import Aboutme from "../User/Aboutme/Aboutme";
import AboutmeEdit from "../User/Aboutme/AboutmeEdit";
import Calendar from "../User/Calendar/Calendar";
import Dashboard from "../User/Dashboard/Dashboard";
import Nearby from '../User/nearby/nearby';


const NavAndSide = () => {

	return (
		<>

			<header className="app-header fixed-top">
				<div className="app-header-inner">
					<div className="container-fluid py-2">
						<div className="app-header-content">
							<div className="row justify-content-between align-items-center">

								<div className="col-auto">
									<a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
									</a>
								</div>

								<div className="search-mobile-trigger d-sm-none col">
									<i className="search-mobile-trigger-icon fa fa-search"></i>
								</div>

								<div className="app-search-box col">
									<form className="app-search-form">
										<input type="text" placeholder="Search..." name="search" className="form-control search-input" />
										<button type="submit" className="btn search-btn btn-primary" value="Search"><i className="fa fa-search"></i></button>
									</form>
								</div>

								<div className="app-search-box col">
									<NotificationDrop />
								</div>

							</div>

						</div>

					</div>

				</div>

				<div id="app-sidepanel" className="app-sidepanel">
					<div id="sidepanel-drop" className="sidepanel-drop"></div>
					<div className="sidepanel-inner d-flex flex-column">
						<a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
						<div className="app-branding text-center">
							<a className="app-logo" href="index.html"><img className="logo-icon" src="/mployalogo.png" alt="logo" /></a>

						</div>
						{/* //app-branding-->   */}
						{/* //side bar top user section-->   */}
						<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
							<div className="p-4">
								<div className="d-flex flex-row align-items-center">
									<img class="icon-img" src="https://i.imgur.com/IRsUTtE.jpg" alt="image" />

									<div className="px-3 d-flex flex-column">
										<span className="nav-link-text text-dark">Airbnb</span>
										<small className="text-muted">Super admin</small>
									</div>

								</div>
							</div>
							<ul className="app-menu list-unstyled accordion" id="menu-accordion">
								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link active" href="index.html">
										<span className="nav-icon">
											<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
												<path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
											</svg>
										</span>
										<span className="nav-link-text">Dashboard</span>
									</a>
									{/* //nav-link--> */}
								</li>
								{/* //nav-item--> */}
								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link" href="#">
										<span className="nav-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
												<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
											</svg>
										</span>
										<span className="nav-link-text">Near by</span>
									</a>
									{/* //nav-link--> */}
								</li>
								{/* //nav-item--> */}
								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link" href="orders.html">
										<span className="nav-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-puzzle" viewBox="0 0 16 16">
												<path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
											</svg>
										</span>
										<span className="nav-link-text">Application</span>
									</a>
									{/* //nav-link--> */}
								</li>
								{/* //nav-item--> */}
								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link" href="orders.html">
										<span className="nav-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
												<path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
												<path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
											</svg>
										</span>
										<span className="nav-link-text">Message</span>
									</a>
									{/* //nav-link--> */}
								</li>

								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link" href="charts.html">
										<span className="nav-icon">
											<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
											</svg>
										</span>
										<span className="nav-link-text">Statistics</span>
									</a>
									{/* //nav-link--> */}
								</li>
								{/* //nav-item--> */}

								<li className="nav-item">

									{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
									<a className="nav-link" href="help.html">
										<span className="nav-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
												<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
												<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
											</svg>
										</span>
										<span className="nav-link-text">Calendar</span>
									</a>
									{/* //nav-link--> */}
								</li>
								{/* //nav-item-->					     */}
							</ul>
							{/* //app-menu--> */}
						</nav>
						{/* //app-nav--> */}
						<div className="app-sidepanel-footer">
							<nav className="app-nav app-nav-footer">
								<ul className="app-menu footer-menu list-unstyled">
									{/* //nav-item--> */}
									<li className="nav-item">

										{/* //Bootstrap Icons: https://icons.getbootstrap.com/ --> */}
										<a className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
											<span className="nav-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
													<path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
													<path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
												</svg>
											</span>
											<span className="nav-link-text">Signout</span>
										</a>
										{/* //nav-link--> */}
									</li>
									{/* //nav-item--> */}
								</ul>
								{/* //footer-menu--> */}
							</nav>
						</div>
						{/* //app-sidepanel-footer--> */}

					</div>
					{/* //sidepanel-inner--> */}
				</div>
				{/* //app-sidepanel--> */}
			</header>
			{/* //app-header--> */}

			<div className="app-wrapper">

				<div className="app-content pt-3 p-md-3 p-lg-1">
					<div className="container-xl">

						<h1>behind top nav</h1>

						<h1 className="text-center">Dashboard</h1>
						<Dashboard />
						<h1 className="text-center">Nearby</h1>
						<Nearby />
						<Calendar /> <br />
						<Aboutme /> <br />
						<AboutmeEdit /><br />



					</div>
					{/* //container-fluid--> */}
				</div>
				{/* //app-content--> */}

				<footer className="app-footer">
					<div className="container text-center py-3">


						<small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }}></i> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

					</div>
				</footer>
				{/* //app-footer--> */}

			</div>
			{/* //app-wrapper-->    					 */}


		</>
	);
}

export default NavAndSide;