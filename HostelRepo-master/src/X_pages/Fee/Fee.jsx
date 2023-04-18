
import React from "react";
import "./Fee.css";
import Footer from "../../Components_hub/Footer/Footer";
import Navbar from "../../Components_hub/Navbar/Navbar";

const Fee = () => {
	return (
		<div>
			<Navbar />
			<header>
				<h1>Hostel Fee Structure</h1>
			</header>
			<main>
				<section className="table-container">
					<h2>Hostel Charges</h2>
					<table>
						<tr>
							<th>Heads of Fee</th>
							<th>New Allotment</th>
							<th>Renewal</th>
						</tr>
						<tr>
							<td>Admission Fee</td>
							<td>300</td>
							<td>NIL</td>
						</tr>
						<tr>
							<td>Hostel Maintenance Fee</td>
							<td>3000</td>
							<td>3000</td>
						</tr>
						<tr>
							<td>Hostel Services</td>
							<td>4000</td>
							<td>4000</td>
						</tr>
						<tr>
							<td>Common Room</td>
							<td>500</td>
							<td>500</td>
						</tr>
						<tr>
							<td>Development</td>
							<td>500</td>
							<td>500</td>
						</tr>
						<tr>
							<td>Kitchen Maintenance/Crockery Utensils</td>
							<td>1000</td>
							<td>1000</td>
						</tr>
						<tr>
							<td>Hostel Function/Sports/Magazine/Student Welfare Fund</td>
							<td>500</td>
							<td>500</td>
						</tr>
						<tr>
							<td>Hostel Identity Card</td>
							<td>50</td>
							<td>50</td>
						</tr>
						<tr>
							<td>Room Rent</td>
							<td>1000</td>
							<td>1000</td>
						</tr>
						<tr>
							<td>Electricity /Water</td>
							<td>2000</td>
							<td>2000</td>
						</tr>
						<tr>
							<td>Caution Money (Refundable)</td>
							<td>500</td>
							<td>NIL</td>
						</tr>
						<tr>
							<td>Mess Caution Money (Refundable)</td>
							<td>2000</td>
							<td>NIL</td>
						</tr>
						<tr>
							<td>
								<b>TOTAL</b>
							</td>
							<td>
								<b>15350</b>
							</td>
							<td>
								<b>12550</b>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<em>
									<br />
									*Physically challenged students, whose parents’ annual incomes
									is not above Rs. 1.50 lakhs per annum are exempted from the
									payment of room rent (Supporting document required as per
									Jamia norms) <br />
									*NRI students will pay 1000 $(USD) as Annual Hostel Charges
								</em>
							</td>
						</tr>
					</table>
				</section>
				<section className="table-container">
					<h2>Mess Charges</h2>
					<table>
						<tr>
							<th>Category</th>
							<th>Charges/Month</th>
							<th>Charges for 10 Months</th>
							<th>Items Served</th>
						</tr>
						<tr>
							<td>General</td>
							<td>2600</td>
							<td>26000</td>
							<td>As per Mess Menu</td>
						</tr>
						<tr>
							<td colspan="4">
								<em>
									* Some add-on items will be available on the counter by cash
									payment
								</em>
							</td>
						</tr>
					</table>
				</section>
				<section>
					<h2>Fee Payment Schedule</h2>
					<h5>a) Mess Fee</h5>
					<br />
					<ul>
						<li className="move-up-animation">
							All students must pay the prescribed Mess Fee, which may be
							revised from time to time.
						</li>
						<li className="move-up-animation">
							Mess will generally function from 1st of July to 20th December and
							1st of January to 15th May every year.
						</li>
						<li className="move-up-animation">
							Mess fee will be charged in TWO INSTALLMENTS. The first instalment
							will be deposited at the time of renewal/new admission and the
							second instalment will be due on 1st January/prior to the
							functioning of Mess.
						</li>
						<li className="move-up-animation">
							Every resident has to deposit a sum of Rs.2000/- towards Mess
							Caution Money (refundable) at the time of admission.
						</li>
						<li className="move-up-animation">
							On prior information, the Warden (Mess) may allow the adjustment
							of mess remission at the end of the session. However, no mess
							refund shall be allowed for less than 5 consecutive days and for
							not more than 30 days in one academic year. No claim for remission
							of food charges shall be entertained if the resident has not
							submitted prior application to the concerned Warden/Caretaker.
						</li>
						<li className="move-up-animation">
							If the resident fails to deposit the Mess Fee on due date, a late
							payment fine of Rs.200/- shall be charged up to 15 days.
							Thereafter, the mess facility shall be withdrawn and an
							appropriate action shall be taken against such defaulter including
							expulsion from the hostel.
						</li>
						<li className="move-up-animation">
							Any resident, who is exempted from the hostel mess by Sr. Warden
							(Mess) under special circumstances/Medical ground, shall have to
							pay a token fee of Rs.500/- per month for 06 months as Mess
							Exemption Fee on Medical .
						</li>
					</ul>
					<h5>a) Hostel Fee</h5>
					<br />
					<ul>
						<li className="move-up-animation">
							Hostel Fee shall be submitted in ONE INSTALLMENT at the time of
							Hostel Allotment/Renewal.
						</li>
					</ul>
				</section>
				<section>
					<h2>Mode of Payment and Cancellation</h2>
					<ul>
						<li className="move-up-animation">No part payment is allowed.</li>
						<li className="move-up-animation">
							Residents are required to make payments during the prescribed
							period, failing which a fine of Rs.200/- will be charged up to 15
							days after the expiry of the last date.
						</li>
						<li className="move-up-animation">
							If a resident fails to pay before the end of the prescribed date
							mentioned for the instalments, his admission to the hostel stands
							cancelled. He may, however, be re-admitted with the permission of
							the Provost on payment of re-admission charges of Rs.1000/-
							provided vacant seat in the hostel is available.
						</li>
						<li className="move-up-animation">
							Hostel and Mess Caution Money will be refunded to the resident at
							the time of leaving the hostel and within the same financial year
							before 31st March.
						</li>
						<li className="move-up-animation">
							The claim of the student for reimbursement of caution money shall
							stand forfeited or deemed to have been relinquished, if it is not
							claimed within one year from the date of leaving the hostel within
							the same financial year before 31st March.
						</li>
						<li className="move-up-animation">
							In case of withdrawal of admission from the hostel within a week,
							all the fees except the admission fees shall be refunded.
						</li>
						<li className="move-up-animation">
							On withdrawal beyond one week, no fees will be refunded except the
							Caution Money on the production of the clearance certificate.
						</li>
					</ul>
					<p>
						<b>
							NOTE : The final authority in all hostel matters rests with the
							Provost
						</b>
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Fee;