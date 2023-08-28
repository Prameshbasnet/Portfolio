import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personel journey</span>
			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">BCA</h3>
								<span className="qualification__subtitle">
									Tribhuvan University
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2021-Present
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Computer Science</h3>
								<span className="qualification__subtitle">NEB</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2019-2021
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">10</h3>
								<span className="qualification__subtitle">
									Tribhuvan University
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2018
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Ux Designer</h3>
								<span className="qualification__subtitle">Somewhere</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2000-2000
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">React developer</h3>
								<span className="qualification__subtitle">Somewhere </span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2000-2000
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web developer</h3>
								<span className="qualification__subtitle">Own Company</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2023
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
